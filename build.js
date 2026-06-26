const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function copyStaticDir(sourceDir, destDir) {
  const source = path.join(__dirname, sourceDir);
  const destination = path.join(__dirname, 'dist', destDir);

  if (!fs.existsSync(source)) return;

  fs.mkdirSync(destination, { recursive: true });
  fs.cpSync(source, destination, { recursive: true });
}

function buildAndCopy(projectDir, destDir) {
  console.log(`\n=== Building ${projectDir} ===\n`);
  execSync('npm install', { cwd: path.join(__dirname, projectDir), stdio: 'inherit' });
  execSync('npm run build', { cwd: path.join(__dirname, projectDir), stdio: 'inherit' });
  
  const srcDist = path.join(__dirname, projectDir, 'dist');
  const finalDest = path.join(__dirname, 'dist', destDir);
  
  if (!fs.existsSync(finalDest)){
      fs.mkdirSync(finalDest, { recursive: true });
  }
  
  // Copy directory contents
  fs.cpSync(srcDist, finalDest, { recursive: true });
}

// Clean dist folder
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true, force: true });
}
fs.mkdirSync(distPath, { recursive: true });

try {
  // Build main site first (will be at root of dist)
  buildAndCopy('gislaine-coltz-main', '');
  
  // Build bio site
  buildAndCopy('bio', 'bio');
  
  // Build detox site
  buildAndCopy('detox', 'detox');

  // Build relaxante site
  buildAndCopy('relaxante', 'relaxante');

  // Build clinica site
  buildAndCopy('clinica', 'clinica');

  // Build testes site
  buildAndCopy('testes', 'testes');

  // Copy static capture page to /captura
  copyStaticDir('captura', 'captura');

  console.log('\n=== All sites built successfully into the /dist directory! ===\n');
} catch (error) {
  console.error('\n=== Error during build ===\n', error);
  process.exit(1);
}
