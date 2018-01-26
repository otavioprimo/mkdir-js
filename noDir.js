var fs = require('fs');
var template = require('./template');

var noDir = function (file, _template) {
    if (_template == '')
        fs.writeFileSync(file, template.template_html_basic());
}

module.exports = noDir;