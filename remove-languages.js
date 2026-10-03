const fs = require('fs');
const path = require('path');

function removeLanguagesFromI18n(filePath) {
  console.log(`Processing: ${filePath}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  const newLines = [];
  let skip = false;
  let braceCount = 0;
  let inSr = false;
  let inSq = false;
  let foundTranslationsStart = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Skip import for i18n-it
    if (trimmed.includes('import') && trimmed.includes('i18n-it')) {
      console.log(`Skipping import at line ${i + 1}`);
      continue;
    }
    
    // Check if we found the translations object start
    if (trimmed.includes('export const translations')) {
      foundTranslationsStart = true;
    }
    
    // Detect start of sr: { or sq: {
    if (foundTranslationsStart && !skip) {
      if (trimmed === 'sr: {') {
        console.log(`Found sr: at line ${i + 1}`);
        skip = true;
        inSr = true;
        braceCount = 1;
        continue;
      } else if (trimmed === 'sq: {') {
        console.log(`Found sq: at line ${i + 1}`);
        skip = true;
        inSq = true;
        braceCount = 1;
        continue;
      }
    }
    
    // If skipping, count braces to find the end
    if (skip) {
      for (let char of line) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
      }
      
      // When braceCount reaches 0, we've closed the object
      if (braceCount === 0) {
        console.log(`Closed object at line ${i + 1}`);
        skip = false;
        inSr = false;
        inSq = false;
        
        // Skip the comma on the next line if it exists
        if (i + 1 < lines.length && lines[i + 1].trim() === ',') {
          i++;
        }
      }
      continue;
    }
    
    // Skip it: itTranslations line
    if (trimmed.startsWith('it:') && trimmed.includes('itTranslations')) {
      console.log(`Skipping it: itTranslations at line ${i + 1}`);
      // Also remove the comma from previous line if it's the last entry
      if (newLines.length > 0 && newLines[newLines.length - 1].trim().endsWith(',')) {
        const lastLine = newLines[newLines.length - 1];
        newLines[newLines.length - 1] = lastLine.substring(0, lastLine.lastIndexOf(','));
      }
      continue;
    }
    
    newLines.push(line);
  }
  
  const newContent = newLines.join('\n');
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`✓ Cleaned: ${filePath}\n`);
}

// Process both files
const files = [
  'C:\\Users\\User\\Desktop\\SITI WEB E APLICAZZIONI\\CURSOR Ai\\AGRMULTIMEDIA\\client\\src\\lib\\i18n.ts',
  'C:\\Users\\User\\Desktop\\SITI WEB E APLICAZZIONI\\CURSOR Ai\\AGRMULTIMEDIA\\agrmultimedia-standalone\\src\\lib\\i18n.ts'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    removeLanguagesFromI18n(file);
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log('Done!');
