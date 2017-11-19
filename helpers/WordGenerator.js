const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'words.txt');
const words = fs.readFileSync(filePath).toString().split('\n').map(word => word.trim());

module.exports = {
  generateWord,
}

function generateWord() {
  return words[Math.floor(Math.random() * (words.length))];
}
