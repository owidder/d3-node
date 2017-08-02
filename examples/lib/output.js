const fs = require('fs');
const svg2png = require('svg2png');

module.exports = function (outputName, d3n) {

  if (d3n.options.canvas) {
    const canvas = d3n.options.canvas;
    console.log('canvas output...', canvas);
    canvas.pngStream().pipe(fs.createWriteStream('examples/dist/'+outputName+'.png'));
    return;
  }

  fs.writeFile('/Users/owidder/dev/github/d3-node/examples/dist/'+outputName+'.html', d3n.html(), function () {
    console.log(d3n.html());
    console.log('>> Done. Open "examples/dist/'+outputName+'.html" in a web browser');
    process.exit(0);
  });
};
