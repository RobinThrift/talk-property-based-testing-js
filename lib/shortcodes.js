
module.exports = {
    'var': function(str, params, data) {
        return data.config[params[0]];
    },
    'fragment': function(str, params) {
        let cls = params.classes ? params.classes.repalce(',', ' ') : [];
        let classAttr = `class="fragment ${cls.join('')}"`;
        let indexAttr = params.index ? `data-fragment-index="${params.index}"` : '';
        return `<div ${classAttr} ${indexAttr}>${str}</div>`;
    },
    'fragmented-list': function(str, params) {
        let cls = params.classes ? params.classes.split(',') : [];
        str = str.replace(/<ul>/, '<ul class="' + cls.join(' ') + '">');
        return str.replace(/\<li\s*(?:class="(.*?)")?/g, '<li class="fragment $1"');
    },
    'imgfrag': function(str, params) {
        var base = '<img class="fragment image-fragment"';
        if (params.height) {
            base += ' style="height: ' + params.height + '"';
        }

        if (params.index) {
            base += ` data-fragment-index="${params.index}"`;
        }

        base += ' src="' +  params.src + '"';

        return base + ' />';
    },
    'video': function(str, params) {
        var base = '<video';

        if (params.autoplay) {
            base += ' data-autoplay';
        }
        if (params.stetch) {
            base += ' class="stretch"';
        }
        base += ' >';

        base += '<source data-src="' + params.src + '.mp4" type="video/mp4" />'

        return base + '</video>';
    },
    'accented': function(str) {
        return '<span class="text--accented">' + str + '</span>';
    },
    'emphasize': function(str) {
        return '<span class="text--emphasize">' + str + '</span>';
    },
    'small': function(str) {
        return '<small class="text--small">' + str + '</small>';
    },
    'half': function(str, params) {
        if (params.includes('centred')) {
            return '<div class="half centred">' + str + '</div>';
        }
        return '<div class="half">' + str + '</div>';
    },
    'stack': function(str, params) {
        if (params.includes('with-vertical')) {
            return '<div class="horizontal-stack with-vertical">' + str + '</div>';
        }
        return '<div class="horizontal-stack">' + str + '</div>';
    }
}
