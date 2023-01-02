const CheckList = require('@editorjs/checklist');
const Code = require('@editorjs/code');
const Delimiter = require('@editorjs/delimiter');
const Embed = require('@editorjs/embed');
const ImageTool = require('@editorjs/image');
const InlineCode = require('@editorjs/inline-code');
const Link = require('@editorjs/link');
const List = require('@editorjs/list');
const Quote = require('@editorjs/quote');
const SimpleImage = require('@editorjs/simple-image');
const Paragraph = require('@editorjs/paragraph');
const Header = require('@editorjs/header');
const Marker = require('@editorjs/marker');
const Underline = require('@editorjs/underline');
const ColorPlugin = require('editorjs-text-color-plugin');
const Warning = require('@editorjs/warning');
const Alert = require('editorjs-alert');
import InlineImage from 'editorjs-inline-image';

export const EDITOR_TOOLS = {
    code: Code,
    header: {
        class: Header,
        inlineToolbar: true,
    },
    list: {
        class: List,
        inlineToolbar: true,
    },
    paragraph: {
        class: Paragraph,
        inlineToolbar: true,
    },
    warning: {
        class: Warning,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+W',
        config: {
            titlePlaceholder: 'Title',
            messagePlaceholder: 'Message',
        },
    },
    image: {
        class: ImageTool,
        config: {
            endpoints: {
                byFile: '/api/upload-image', // Your backend file uploader endpoint
                //byFile: 'http://192.168.10.76:8080/api/image',
                byUrl: 'http://localhost:3000/api/upload-image', // Your endpoint that provides uploading by Url
            }
        }
    },
    /*     inlineImage: {
            class: InlineImage,
            inlineToolbar: true,
            config: {
                embed: {
                    display: true,
                },
                unsplash: {
                    appName: 'your_app_name',
                    clientId: 'your_client_id'
                }
            }
        }, */
    quote: {
        class: Quote,
        inlineToolbar: true
    },
    alert: Alert,
    underline: Underline,
    checklist: CheckList,
    embed: Embed,
    inlineCode: InlineCode,
    link:{
        class: Link,
        config: {
            //endpoint: '/api/fetch-url'
            endpoint: 'http://192.168.10.76:8080/api/links', // Your backend endpoint for url data fetching,
        }
    },
    list: List,
    simpleImage: SimpleImage,
    delimiter: Delimiter,
    Color: {
        class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
        config: {
            colorCollections: ['#EC7878', '#9C27B0', '#673AB7', '#3F51B5', '#0070FF', '#03A9F4', '#00BCD4', '#4CAF50', '#8BC34A', '#CDDC39', '#FFF'],
            defaultColor: '#FF1300',
            type: 'text',
            customPicker: true // add a button to allow selecting any colour  
        }
    },
    Marker: {
        class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
        config: {
            defaultColor: '#FFBF00',
            type: 'marker',
            icon: `<svg fill="#000000" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6 c0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z"></path> <path d="M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z"></path> </g> <g> <path d="M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z"></path> </g> </g></svg>`
        }
    },
    /*paragraph: Paragraph,
     checklist: CheckList,
    embed: Embed,
    image: Image,
    inlineCode: InlineCode,
    link: Link,
    list: List,
    quote: Quote,
    simpleImage: SimpleImage,
    delimiter: Delimiter */
};