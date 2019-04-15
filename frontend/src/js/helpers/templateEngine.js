const templateEngine = (html, options) => {
    const re = /<%([^%>]+)?%>/g;
    const reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g;

    let code = 'var r=[];\n';
    let cursor = 0;
    let match;

    const add = (line, js) => {
        js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
            (code += line !== '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
        return add;
    };
    while(match = re.exec(html)) {
        add(html.slice(cursor, match.index))(match[1], true);
        cursor = match.index + match[0].length;
    }
    add(html.substr(cursor, html.length - cursor));
    code += 'return r.join("");';

    return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
};
export {templateEngine}