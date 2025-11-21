# Schema Date Update System

## Overview

This system automatically updates `dateModified` fields in schema files based on the last modification time of corresponding page/component files. This ensures that schema dates reflect when pages were actually last updated, improving SEO accuracy.

## How It Works

1. **File Tracking**: The script tracks modification dates of:
   - Schema data files (`schemaData.js`, `solutionsConstData.js`, `industriesConstData.js`)
   - Corresponding page/component files that use these schemas

2. **Date Calculation**: For each schema file, it finds the most recent modification date among:
   - The schema data file itself
   - Related page/component files that use the schema

3. **Date Source Priority**:
   - **Primary**: Git commit date (most reliable, especially in CI/CD)
   - **Fallback**: File system modification time (when Git is not available)

4. **Automatic Update**: All `dateModified` fields in the schema file are updated to the most recent date found.

## Usage

### Manual Execution

Run the script manually before building:

```bash
npm run update-schema-dates
```

### Automatic Execution

The script runs automatically before every build:

```bash
npm run build
```

This is configured via the `prebuild` script in `package.json`, which runs `update-schema-dates` before the build process.

## File Mappings

### schemaData.js
- `homepage` → `src/pages/Home/VMuktiHomepage.js`
- `solutionpage` → `src/pages/Solutions/SolutionsHome.js`
- `industrypage` → `src/pages/IndustriesDashboard/industriesDashboard.js`

### solutionsConstData.js
- All solution schemas → `src/components/SolutionDetails.js` + `src/components/SolutionContent.js`

### industriesConstData.js
- All industry schemas → `src/components/industryDetails.js` + `src/components/IndustryContent.js`

## GitHub Integration

When you push code to GitHub:

1. **Local Development**: 
   - The script uses Git commit dates when available (most accurate)
   - Falls back to file modification times if Git is not available
   - File modification times are preserved when you commit and push

2. **CI/CD Environments**:
   - The script automatically uses Git commit dates (more reliable than file mtimes)
   - Works correctly even in fresh clones where file modification times might be inaccurate
   - No additional configuration needed

3. **Fresh Clones**: 
   - Git commit dates are used automatically, ensuring accurate dates even in fresh clones
   - More reliable than file modification times which may reflect clone time

### Best Practice

For the most accurate dates:
- Run `npm run update-schema-dates` locally before committing
- Commit the updated schema files along with your changes
- The script will use Git commit dates automatically, ensuring accuracy in all environments

## Output

The script provides colored console output:
- ✓ Green: Successfully updated schemas
- → Cyan: Dates already up to date
- ⚠ Yellow: Warnings (file not found, etc.)
- Red: Errors

## Example Output

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Updating Schema dateModified Fields
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Updated 3 schemaData dateModified to 2025-11-21
✓ Updated 8 solution dateModified to 2025-11-21
✓ Updated 17 industry dateModified to 2025-11-21

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Successfully updated 28 schema dateModified field(s)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Troubleshooting

### Dates not updating

- Ensure the related page/component files exist
- Check file permissions
- Verify the script has write access to schema files

### Dates showing clone time instead of commit time

- This is normal for fresh Git clones
- Run the script after making changes to update dates
- Consider using Git commit dates (future enhancement)

## Future Enhancements

Potential improvements:
- Use Git commit dates as fallback when file modification times are unreliable
- Support for per-schema granular date tracking
- Integration with Git hooks for automatic updates on commit

