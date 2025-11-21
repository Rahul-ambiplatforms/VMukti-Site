/**
 * Schema Date Helper Utility
 * 
 * This utility provides functions for managing dateModified fields in schemas.
 * Use these functions to dynamically update dates or get current dates in ISO format.
 */

/**
 * Get current date in ISO format (YYYY-MM-DD)
 * @returns {string} Current date in ISO format
 */
export const getCurrentDateISO = () => {
  return new Date().toISOString().split('T')[0];
};

/**
 * Get a specific date in ISO format
 * @param {Date|string|number} date - Date object, date string, or timestamp
 * @returns {string} Date in ISO format (YYYY-MM-DD)
 */
export const formatDateISO = (date) => {
  const dateObj = date instanceof Date ? date : new Date(date);
  return dateObj.toISOString().split('T')[0];
};

/**
 * Get file modification date (for build-time scripts)
 * Note: This requires Node.js fs module and should be used in build scripts, not in React components
 * 
 * Example usage in a build script:
 * ```javascript
 * const fs = require('fs');
 * const path = require('path');
 * 
 * function getFileModificationDate(filePath) {
 *   try {
 *     const stats = fs.statSync(filePath);
 *     return new Date(stats.mtime).toISOString().split('T')[0];
 *   } catch (error) {
 *     console.error(`Error getting modification date for ${filePath}:`, error);
 *     return getCurrentDateISO();
 *   }
 * }
 * ```
 */

/**
 * Update dateModified in a schema object
 * @param {Object} schema - Schema object that may contain dateModified
 * @param {string} newDate - New date in ISO format (YYYY-MM-DD)
 * @returns {Object} Updated schema object
 */
export const updateSchemaDateModified = (schema, newDate = getCurrentDateISO()) => {
  if (schema && typeof schema === 'object') {
    if (Array.isArray(schema)) {
      return schema.map(item => updateSchemaDateModified(item, newDate));
    } else {
      const updated = { ...schema };
      if (updated.dateModified) {
        updated.dateModified = newDate;
      }
      // Recursively update nested objects
      Object.keys(updated).forEach(key => {
        if (typeof updated[key] === 'object' && updated[key] !== null) {
          updated[key] = updateSchemaDateModified(updated[key], newDate);
        }
      });
      return updated;
    }
  }
  return schema;
};

/**
 * Default date to use for all schemas
 * Update this constant when you want to set a global date for all schemas
 */
export const DEFAULT_SCHEMA_DATE = "2025-11-21";

