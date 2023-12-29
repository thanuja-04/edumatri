const fs = require("fs");
const path = require("path");
const { Route } = require("./src/constants/roots");

function copyFolderRecursive(source, destination) {
  const sourcePath = path.resolve(source);
  const destinationPath = path.resolve(destination);

  // Create destination folder if it doesn't exist
  if (!fs.existsSync(destinationPath)) {
    fs.mkdirSync(destinationPath);
  }

  // Get all files and subfolders in the source folder
  const items = fs.readdirSync(sourcePath);

  items.forEach((item) => {
    const sourceItemPath = path.join(sourcePath, item);
    const destinationItemPath = path.join(destinationPath, item);

    // Check if the item is a file or a folder
    const isFile = fs.statSync(sourceItemPath).isFile();

    if (isFile) {
      // Copy the file
      fs.copyFileSync(sourceItemPath, destinationItemPath);
    } else {
      // Recursively copy subfolder
      copyFolderRecursive(sourceItemPath, destinationItemPath);
    }
  });

  console.log(`Folder copied successfully from ${source} to ${destination}`);
}
function moveFolderRecursive(source, destination) {
  const sourcePath = path.resolve(source);
  const destinationPath = path.resolve(destination);

  // Create destination folder if it doesn't exist
  if (!fs.existsSync(destinationPath)) {
    fs.mkdirSync(destinationPath);
  }

  // Get all files and subfolders in the source folder
  const items = fs.readdirSync(sourcePath);

  items.forEach((item) => {
    const sourceItemPath = path.join(sourcePath, item);
    const destinationItemPath = path.join(destinationPath, item);

    // Check if the item is a file or a folder
    const isFile = fs.statSync(sourceItemPath).isFile();

    if (isFile) {
      // Copy the file
      fs.copyFileSync(sourceItemPath, destinationItemPath);

      // Delete the original file after copying
      fs.unlinkSync(sourceItemPath);
    } else {
      // Recursively move subfolder
      moveFolderRecursive(sourceItemPath, destinationItemPath);
    }
  });

  // Delete the original folder after copying its contents
  fs.rmdirSync(sourcePath);

  console.log(`Folder moved successfully from ${source} to ${destination}`);
}
for (const pagekey in Route) {
  const page = Route[pagekey];
  copyFolderRecursive("./build", `./${page}`);
}
for (const pagekey in Route) {
  const page = Route[pagekey];
  moveFolderRecursive(`./${page}`, `./build/${page}`);
}
console.log(Object.values(Route));
