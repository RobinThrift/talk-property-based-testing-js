//index.js
'use strict';

var Metalsmith   = require('metalsmith'),
    markdown     = require('metalsmith-markdown'),
    templates    = require('metalsmith-templates'),
    Handlebars   = require('handlebars'),
    sass         = require('metalsmith-sass'),
    collections  = require('metalsmith-collections'),
    ignore       = require('metalsmith-ignore'),
    slides       = require('./lib/slides'),
    autoTemplate = require('./lib/autoTemplate'),
    math         = require('./lib/math'),
    shortcodes   = require('metalsmith-flexible-shortcodes');

Handlebars.registerHelper('json', JSON.stringify);

Metalsmith(__dirname)
    .use(ignore([
        '_*', '.*',
        '**/_*', '**/.*'
    ]))    
    .use(slides.split())
    .use(slides.getProjectMeta())
    .use(slides.extractMeta())
    .use(markdown({
        gfm: true,
        tables: true,
        smartLists: true,
        smartypants: true,
        highlight: function (code, lang) {
            if (lang) {
                return require('highlight.js').highlight(lang, code).value;
            } else {
                return require('highlight.js').highlightAuto(code).value;
            }
        }
    }))
    .use(shortcodes({
        clean: true,
        shortcodes: require('./lib/shortcodes')
    }))
    .use(collections({
        slides: {
            pattern: 'slide-*',
            sortBy: 'num'
        }
    }))
    .use(autoTemplate({
        pattern: 'slide-*',
        templateName: 'slide.hbt'
    }))
    .use(templates({
        engine: 'handlebars'
    }))
    .use(slides.rmSlides())
    .use(slides.makePage('wrap.hbt'))
    .use(templates({
        engine: 'handlebars'
    }))
    .use(math({
        pattern: 'index.html'
    }))
    .use(sass({
        sourceMap: true,
        sourceMapContents: true,
        outputStyle: 'compact'
    }))
    .destination('./build')
    .build(function(err) {
        if (err) { throw err; }
        console.log('Built!', new Date()); 
    });
