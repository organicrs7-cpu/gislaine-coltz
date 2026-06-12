const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  { input: 'public/gislaine-66.png', output: 'public/gislaine-66.webp', maxWidth: 1000 },
  { input: 'public/gislaine-67.png', output: 'public/gislaine-67.webp', maxWidth: 1000 },
  { input: 'public/hero-bg.png', output: 'public/hero-bg.webp', maxWidth: 1920 }
];

async function run() {
  for (const img of images) {
    const inputPath = path.resolve(img.input);
    const outputPath = path.resolve(img.output);
    if (fs.existsSync(inputPath)) {
      console.log(`Processing ${img.input}...`);
      const meta = await sharp(inputPath).metadata();
      console.log(`Original: ${meta.width}x${meta.height}, size: ${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(2)} MB`);
      
      let pipeline = sharp(inputPath);
      if (meta.width > img.maxWidth) {
        pipeline = pipeline.resize(img.maxWidth);
      }
      
      await pipeline
        .webp({ quality: 82, effort: 6 })
        .toFile(outputPath);
        
      console.log(`Compressed to ${img.output}, size: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB`);
    } else {
      console.log(`File not found: ${img.input}`);
    }
  }
}

run().catch(console.error);
