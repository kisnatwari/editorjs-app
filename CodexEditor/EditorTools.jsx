const CheckList = require('@editorjs/checklist');
const Code = require('@editorjs/code');
const Delimiter = require('@editorjs/delimiter');
const Embed = require('@editorjs/embed');
const Image = require('@editorjs/image');
const InlineCode = require('@editorjs/inline-code');
const Link = require('@editorjs/link');
const List = require('@editorjs/list');
const Quote = require('@editorjs/quote');
const SimpleImage = require('@editorjs/simple-image');
const Paragraph = require('@editorjs/paragraph');
const Header = require('@editorjs/header');
//const Marker = require('@editorjs/marker');

export const EDITOR_TOOLS = {
    header: {
        class: Header,
        inlineToolbar: ["link"],
        config: {
            placeholder: 'Enter a header',
            levels: [2, 3, 4],
            defaultLevel: 3
        }
    },
    list: {
        class: List,
        inlineToolbar: true,
    },
};