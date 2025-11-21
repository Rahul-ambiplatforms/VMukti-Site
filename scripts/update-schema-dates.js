/**
 * Schema Date Update Script
 * 
 * This script automatically updates dateModified fields in schema files
 * based on the last modification time of the corresponding page/component files.
 * 
 * Run this script before building: npm run update-schema-dates
 * Or it will run automatically before build if integrated into build process.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

/**
 * Get Git commit date for a file in ISO format (YYYY-MM-DD)
 * Falls back to file modification date if Git is not available
 */
function getGitCommitDate(filePath) {
  try {
    // Get relative path from project root
    const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');
    
    // Try to get the last commit date for this file
    const gitDate = execSync(
      `git log -1 --format="%ai" -- "${relativePath}"`,
      { cwd: process.cwd(), encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }
    ).trim();
    
    if (gitDate) {
      return new Date(gitDate).toISOString().split('T')[0];
    }
  } catch (error) {
    // Git command failed (not a git repo, file not tracked, etc.)
    // Fall through to file modification date
  }
  return null;
}

/**
 * Get file modification date in ISO format (YYYY-MM-DD)
 */
function getFileModificationDate(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const stats = fs.statSync(filePath);
    return new Date(stats.mtime).toISOString().split('T')[0];
  } catch (error) {
    console.error(`${colors.red}Error getting modification date for ${filePath}:${colors.reset}`, error.message);
    return null;
  }
}

/**
 * Get the best available date for a file (Git commit date preferred, fallback to file mtime)
 */
function getFileDate(filePath) {
  // Try Git commit date first (more reliable in CI/CD)
  const gitDate = getGitCommitDate(filePath);
  if (gitDate) {
    return gitDate;
  }
  
  // Fallback to file modification date
  return getFileModificationDate(filePath);
}

/**
 * Get the most recent modification date from multiple files
 * Uses Git commit dates when available, falls back to file modification dates
 */
function getMostRecentDate(filePaths) {
  const dates = filePaths
    .map(filePath => getFileDate(filePath))
    .filter(date => date !== null);
  
  if (dates.length === 0) return null;
  
  // Sort dates and return the most recent
  dates.sort((a, b) => new Date(b) - new Date(a));
  return dates[0];
}

/**
 * Update dateModified fields in a file
 */
function updateDateModifiedInFile(filePath, newDate, description) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Count existing dateModified fields
    const existingMatches = fileContent.match(/dateModified:\s*"[^"]*"/g) || [];
    const count = existingMatches.length;
    
    if (count === 0) {
      console.log(`${colors.yellow}⚠${colors.reset} No dateModified fields found in ${description}`);
      return 0;
    }
    
    // Replace all dateModified values
    const updatedContent = fileContent.replace(
      /(dateModified:\s*")[^"]*(")/g,
      `$1${newDate}$2`
    );
    
    if (updatedContent !== fileContent) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`${colors.green}✓${colors.reset} Updated ${count} ${description} dateModified to ${newDate}`);
      return count;
    } else {
      console.log(`${colors.cyan}→${colors.reset} ${description} dates already up to date (${newDate})`);
      return 0;
    }
  } catch (error) {
    console.error(`${colors.red}Error updating ${filePath}:${colors.reset}`, error.message);
    return 0;
  }
}

/**
 * Update dateModified for a specific schema section in schemaData.js
 */
function updateSchemaSection(fileContent, schemaKey, pageFiles, schemaDataPath) {
  // Get the most recent date for this specific schema
  const relatedFiles = [schemaDataPath, ...pageFiles];
  const mostRecentDate = getMostRecentDate(relatedFiles);
  
  if (!mostRecentDate) {
    return { updated: false, count: 0, date: null };
  }
  
  // Find the schema section (e.g., "homepage: [")
  const schemaStartPattern = new RegExp(`(${schemaKey}:\\s*\\[)`, 'g');
  const schemaStartMatch = fileContent.match(schemaStartPattern);
  
  if (!schemaStartMatch) {
    return { updated: false, count: 0, date: null };
  }
  
  // Find the start and end of this schema section
  const schemaStartIndex = fileContent.indexOf(`${schemaKey}:`);
  if (schemaStartIndex === -1) {
    return { updated: false, count: 0, date: null };
  }
  
  // Find the end of this schema section (next schema key or end of object)
  const nextSchemaKeys = ['homepage:', 'solutionpage:', 'industrypage:', '};'];
  let schemaEndIndex = fileContent.length;
  
  for (const nextKey of nextSchemaKeys) {
    if (nextKey !== `${schemaKey}:`) {
      const nextIndex = fileContent.indexOf(nextKey, schemaStartIndex + 1);
      if (nextIndex !== -1 && nextIndex < schemaEndIndex) {
        schemaEndIndex = nextIndex;
      }
    }
  }
  
  // Extract the schema section
  const schemaSection = fileContent.substring(schemaStartIndex, schemaEndIndex);
  
  // Count dateModified fields in this section
  const dateModifiedMatches = schemaSection.match(/dateModified:\s*"[^"]*"/g) || [];
  const count = dateModifiedMatches.length;
  
  if (count === 0) {
    return { updated: false, count: 0, date: mostRecentDate };
  }
  
  // Update dateModified in this section
  const updatedSection = schemaSection.replace(
    /(dateModified:\s*")[^"]*(")/g,
    `$1${mostRecentDate}$2`
  );
  
  if (updatedSection !== schemaSection) {
    // Reconstruct the file content
    const updatedContent = 
      fileContent.substring(0, schemaStartIndex) + 
      updatedSection + 
      fileContent.substring(schemaEndIndex);
    
    return { 
      updated: true, 
      count, 
      date: mostRecentDate, 
      content: updatedContent 
    };
  }
  
  return { updated: false, count, date: mostRecentDate };
}

/**
 * Update schemaData.js
 */
function updateSchemaData() {
  const schemaDataPath = path.join(process.cwd(), 'src', 'data', 'schemaData.js');
  let fileContent = fs.readFileSync(schemaDataPath, 'utf8');
  
  // Map each schema key to its corresponding page files
  const schemaMap = {
    homepage: [
      path.join(process.cwd(), 'src', 'pages', 'Home', 'VMuktiHomepage.js'),
    ],
    solutionpage: [
      path.join(process.cwd(), 'src', 'pages', 'Solutions', 'SolutionsHome.js'),
    ],
    industrypage: [
      path.join(process.cwd(), 'src', 'pages', 'IndustriesDashboard', 'industriesDashboard.js'),
    ],
  };
  
  let totalUpdates = 0;
  let hasChanges = false;
  
  // Update each schema section individually
  Object.keys(schemaMap).forEach(schemaKey => {
    const result = updateSchemaSection(
      fileContent, 
      schemaKey, 
      schemaMap[schemaKey], 
      schemaDataPath
    );
    
    if (result.updated && result.content) {
      fileContent = result.content;
      hasChanges = true;
      totalUpdates += result.count;
      console.log(`${colors.green}✓${colors.reset} Updated ${schemaKey} (${result.count} schema(s)) dateModified to ${result.date}`);
    } else if (result.count > 0) {
      console.log(`${colors.cyan}→${colors.reset} ${schemaKey} dates already up to date (${result.date})`);
    }
  });
  
  // Write the updated content if there were changes
  if (hasChanges) {
    fs.writeFileSync(schemaDataPath, fileContent, 'utf8');
    console.log(`${colors.cyan}Updated schemaData.js with ${totalUpdates} total schema dateModified field(s)${colors.reset}\n`);
  } else if (totalUpdates === 0) {
    console.log(`${colors.cyan}→${colors.reset} schemaData dates already up to date\n`);
  }
  
  return totalUpdates;
}

/**
 * Update solutionsConstData.js
 */
function updateSolutionsData() {
  const solutionsDataPath = path.join(process.cwd(), 'src', 'data', 'solutionsConstData.js');
  
  // Get the most recent date from the solutions data file and related components
  const relatedFiles = [
    solutionsDataPath,
    path.join(process.cwd(), 'src', 'components', 'SolutionDetails.js'),
    path.join(process.cwd(), 'src', 'components', 'SolutionContent.js'),
  ];
  
  const mostRecentDate = getMostRecentDate(relatedFiles);
  
  if (!mostRecentDate) {
    console.warn(`${colors.yellow}Warning: Could not determine date for solutions data${colors.reset}`);
    return 0;
  }
  
  return updateDateModifiedInFile(solutionsDataPath, mostRecentDate, 'solution');
}

/**
 * Update industriesConstData.js
 */
function updateIndustriesData() {
  const industriesDataPath = path.join(process.cwd(), 'src', 'data', 'industriesConstData.js');
  
  // Get the most recent date from the industries data file and related components
  const relatedFiles = [
    industriesDataPath,
    path.join(process.cwd(), 'src', 'components', 'industryDetails.js'),
    path.join(process.cwd(), 'src', 'components', 'IndustryContent.js'),
  ];
  
  const mostRecentDate = getMostRecentDate(relatedFiles);
  
  if (!mostRecentDate) {
    console.warn(`${colors.yellow}Warning: Could not determine date for industries data${colors.reset}`);
    return 0;
  }
  
  return updateDateModifiedInFile(industriesDataPath, mostRecentDate, 'industry');
}

/**
 * Main function
 */
function main() {
  console.log(`${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  console.log(`${colors.blue}  Updating Schema dateModified Fields${colors.reset}`);
  console.log(`${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);
  
  try {
    let totalUpdates = 0;
    
    // Update schemaData.js
    const schemaUpdates = updateSchemaData();
    totalUpdates += schemaUpdates;
    if (schemaUpdates > 0) console.log(''); // Add spacing
    
    // Update solutionsConstData.js
    const solutionsUpdates = updateSolutionsData();
    totalUpdates += solutionsUpdates;
    if (solutionsUpdates > 0) console.log(''); // Add spacing
    
    // Update industriesConstData.js
    const industriesUpdates = updateIndustriesData();
    totalUpdates += industriesUpdates;
    if (industriesUpdates > 0) console.log(''); // Add spacing
    
    console.log(`${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
    if (totalUpdates > 0) {
      console.log(`${colors.green}✓ Successfully updated ${totalUpdates} schema dateModified field(s)${colors.reset}`);
    } else {
      console.log(`${colors.cyan}✓ All schema dates are already up to date${colors.reset}`);
    }
    console.log(`${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);
    
    process.exit(0);
  } catch (error) {
    console.error(`${colors.red}Error updating schema dates:${colors.reset}`, error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { main, updateSchemaData, updateSolutionsData, updateIndustriesData };
