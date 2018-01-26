var fs = require('fs');
var template = require('./template');

var withDirectory = function (dir, _template) {
    let splited = dir.split('/'); //Separa o path para criar os diretorios
    let file = splited[splited.length - 1]; //Adiciona o nome do arquivo
    splited.pop(splited.length); //Remove o nome do arquivo do path

    let path = '';
    for (i = 0; i < splited.length; i++) {
        if (i == 0) { //Se for o primeiro path
            path += splited[i];
        }
        else { //Se não for o primeiro adiciona '/' antes
            path += '/' + splited[i];
        }

        //Cria o path se não existir
        if (!fs.existsSync(path)) {
            if (i != splited.length) {
                fs.mkdirSync(path);
            }
        }

        //Cria o arquivo no final
        if (i + 1 == splited.length) {
            createFile(path, file, _template);
        }
    }
}

function createFile(_path, _file, _template) {
    var nf = _path + '/' + _file; //Junta o path e o nome do arquivo
    if (_template == '')
        fs.writeFileSync(nf, template.template_html_basic());
}


module.exports = withDirectory;