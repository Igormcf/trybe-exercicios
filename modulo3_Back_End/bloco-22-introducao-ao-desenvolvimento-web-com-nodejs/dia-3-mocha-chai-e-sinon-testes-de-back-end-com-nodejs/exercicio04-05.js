const fs = require('fs');

function createDocument(document, text) {
  fs.writeFileSync(document, text);

  return 'ok';
};

module.exports = createDocument;