# Talk: Property Based Testing (in JS)

## Setup & Run
- `npm i`
- edit `src/slides.md`
- build with `npm run build`
- launch watcher and server with `npm run serve`
- open `http://localhost:3000`

## Development/Writing

### Basics
The slides can be found in `src/slides.md`.

Slides are written in Markdown (GitHub flavoured Markdown and generic HTML are enabled), and are divided by `--` at the begining of a line. You can add metadata for this slide,  by appending a YAML block, wrapped in curly braces `{}`.

```
-- {
    background: 
        img: '#f44f56'
}

# [var title /]

<div class="author-info">
    <h5>[var author /]</h5>
    <h5>[var homepage /]</h5>
</div>
```

### Header
The section before the first `--` in `src/slides.md` is called the "header" and should be valid YAML. It contains presentaion wide metadata, e. g. the reveal.js config, css paths and the author. You may add any field you like, and it will be available in the templates and for inserting into the presenation using the `[var VARNAME /]` shortcode (see below).

### Shortcodes
Shortcodes are little snipets that can be used to insert structured content into the slides, such as fragments or predefined variables. Shortcodes can either be self contained `[var VARNAME /]` or wrap content `[fragment]THIS WILL APPEAR LATER[/fragment]`. Shortcodes are
defnied in `lib/shortcodes.js`. 

> NOTE: Shortcodes can be nested!

- `[var VARNAME /]`: inserts the metadata with the key `VARNAME` defined in the the slide header
- `[fragment]CONTENT[/fragment]`: the content will not appear immediately on the slide, instead it will be a sub-step of the slide
- `[imgfrag src=URL /]`: special image fragment that will ensure the images will overlay, giving the illusion of a changing image
- `[video stretch=true|false src=URL autoplay=true|false /]`: embed a video on the slide, `stretch=true` will ensure the video takes up the entire slide
- `[accented]CONTENT[/accented]`: accents the content with a fancy font and colour
- `[emphasize]CONTENT[/emphasize]`: emphasizes the content (using colour and font weight)
- `[small]CONTENT[/small]`: makes the content small, for use in footnotes or other aside information
- `[half]CONTENT[/half]`: the content will take up half of the slides width (basically: `float: left; width: 50%`)


### Slide Metadata
- `background`: object to set this slides background
    - `background.img`: the background image or colour of this slide (think of css' `background` property)
    - `background.video`: set the background to be a video. Should fill as much of the screen as possible
    - `background.loop`: loop the background video
- `transition`: `slide`, `none`, `fade`, in and out, separated by space
- `classes`: array of css classes that will be appended. Use this for special, slide specific styles
- `notes`: string or YAML paragrapgh (start with a pipe `|`) that will be processed by markdown


