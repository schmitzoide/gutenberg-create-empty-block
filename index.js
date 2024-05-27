#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function validateBlockName(blockName) {
  // Replace spaces and invalid characters with dashes, convert to lowercase
  return blockName
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-") // Replace non-alphanumeric characters with dashes
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing dashes
}

function copyTemplate(templatePath, targetPath, blockName) {
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true });
  }

  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = path.join(templatePath, file);
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      let contents = fs.readFileSync(origFilePath, "utf8");
      contents = contents.replace(/__BLOCK_NAME__/g, blockName);
      const writePath = path.join(targetPath, file);
      fs.writeFileSync(writePath, contents, "utf8");
    } else if (stats.isDirectory()) {
      copyTemplate(
        path.join(templatePath, file),
        path.join(targetPath, file),
        blockName
      );
    }
  });
}

const rawBlockName = process.argv[2];
if (!rawBlockName) {
  console.error("Please provide a block name.");
  process.exit(1);
}

const blockName = validateBlockName(rawBlockName);
const targetPath = path.resolve(process.cwd(), blockName);
const templatePath = path.resolve(__dirname, "block-template");

copyTemplate(templatePath, targetPath, blockName);

console.log(`Block ${blockName} created successfully.`);
