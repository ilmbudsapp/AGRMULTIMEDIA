const fs = require('fs');
const path = require('path');

const source = path.join('C:', 'Users', 'User', 'Desktop', 'SITI WEB E APLICAZZIONI', 'CURSOR Ai', 'AGRMULTIMEDIA', 'client', 'src', 'lib', 'i18n.ts');
const dest = path.join('C:', 'Users', 'User', 'Desktop', 'SITI WEB E APLICAZZIONI', 'CURSOR Ai', 'AGRMULTIMEDIA', 'agrmultimedia-standalone', 'src', 'lib', 'i18n.ts');

console.log('Source:', source);
console.log('Dest:', dest);

try {
  if (!fs.existsSync(source)) {
    throw new Error('Source file does not exist');
  }
  
  const content = fs.readFileSync(source, 'utf8');
  console.log(`Read ${content.length} characters from source`);
  
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    console.log('Creating destination directory...');
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  fs.writeFileSync(dest, content, 'utf8');
  console.log('SUCCESS: File copied successfully');
  console.log(`Wrote ${content.length} characters to destination`);
} catch (err) {
  console.error('ERROR:', err.message);
  console.error(err.stack);
  process.exit(1);
}
