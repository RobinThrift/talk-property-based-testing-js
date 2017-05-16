const {mjpage: mathjax} = require('mathjax-node-page');

let renderMaths = text => new Promise(resolve => {
    mathjax(
        text,
        {
            format: ['TeX'],
            singleDollars: true,
            extensions: 'tex2jax.js',
            fontURL: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/fonts/HTML-CSS',
            tex: {
                extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js']
            },
            MathJax: {
                SVG: {
                    scale: 80
                },
                'HTML-CSS': {
                    scale: 75
                }
            }
        },
        {
            svg: false,
            html: true,
            css: true,
            linebreaks: true
        },
        output => resolve(output)
    )
});

module.exports = (opts) => {
    var pattern = new RegExp(opts.pattern);
    return function(files, metalsmith, done) {
        let proms = [];
        for (let path in files) {
            if (pattern.test(path)) {
                let file = files[path];
                proms.push(
                    renderMaths(file.contents.toString())
                        .then((output) => {
                            file.contents = new Buffer(output);
                        })
                )
            }
        }
        Promise.all(proms)
            .then(() => done())
            .catch(err => {
                console.error(err);
            });
    };
};
