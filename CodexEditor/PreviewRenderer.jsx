const editorJsHtml = require("editorjs-html");
import Highlight from 'react-highlight'
import "highlight.js/styles/atom-one-dark.css";

const inlineImageParser = ({ data }) => {
    const url = data.url;
    const caption = data.caption;
    const withBorder = data.withBorder;
    const withBackground = data.withBackground;
    const stretched = data.stretched;

    return `<img src="${url}" alt="${caption}" ${withBorder ? 'border="1"' : ''} ${withBackground ? 'style="background-color: #ccc"' : ''} ${stretched ? 'style="width: 100%"' : ''} />`;
};

const alertParser = ({ data }) => {
    const type = data.type;
    const align = data.align;
    const message = data.message;

    const alertClassMap = {
        info: "border-blue-700 text-blue-700 bg-blue-100", // Adjusted border and background
        success: "border-green-500 text-green-700 bg-green-100",
        warning: "border-yellow-500 text-yellow-700 bg-yellow-100",
        danger: "border-red-500 text-red-700 bg-red-100",
        light: "border-gray-300 text-gray-700 bg-gray-100", // Adjusted border
        dark: "border-gray-800 text-gray-300 bg-gray-800", // Adjusted text and background
        primary: "border-indigo-500 text-indigo-700 bg-indigo-100",
        secondary: "border-gray-500 text-gray-500 bg-gray-200", // Adjusted background
    };

    const alertTypeClass = alertClassMap[type] || "border-gray-500 text-gray-700";
    const alertAlignClass = align === "left" ? "text-left" : align === "center" ? "text-center" : "text-right";

    return (
        <div className={`p-4 border rounded ${alertTypeClass} ${alertAlignClass}`}>
            {message}
        </div>
    );
};

const codeParser = ({ data }) => {
    return (
        <div className='relative'>
            <button className='absolute bg-white right-1 top-1 px-3 rounded'>Copy</button>
            <Highlight>
                {data.code}
            </Highlight>
        </div>
    )
}

const warningParser = ({ data }) => {
    const title = data.title.trim();
    const message = data.message.trim();

    return (
        <div className="bg-yellow-50 border-yellow-700 text-yellow-700 p-4 rounded">
            <h3 className="text-lg font-bold">☝ {title}</h3>
            <p>{message}</p>
        </div>
    );
};

const quoteParser = ({ data }) => {
    const text = data.text;
    const caption = data.caption;
    const alignment = data.alignment;

    const alignmentClass = alignment === "left" ? "text-left" : (alignment === "center" ? "text-center" : "text-right");

    return (
        <div className={`prose ${alignmentClass}`}>
            <blockquote className='opacity-95'>
                <span dangerouslySetInnerHTML={{ __html: text }}></span>
                <cite className='block opacity-80'>
                    <span dangerouslySetInnerHTML={{ __html: caption }}></span>
                </cite>
            </blockquote>
        </div >
    );
};

const checklistParser = ({ data }) => {
    const items = data.items.map((item, index) => {
        return (
            <div className="mb-2 flex items-center gap-2" key={index}>
                <input type="checkbox" checked={item.checked} className='accent-blue-500 w-6 h-6 rounded-3xl' />
                <span>{item.text}</span>
            </div>
        );
    });

    return <div className="border-gray-300 border rounded p-4">{items}</div>;
};


const delimiterParser = () => (
    <p className='text-3xl m-0 flex items-center justify-center'>* * *</p>
)




const EditorJsToHtml = editorJsHtml({
    'inlineImage': inlineImageParser,
    'alert': alertParser,
    'warning': warningParser,
    'code': codeParser,
    'quote': quoteParser,
    'checklist': checklistParser,
    'delimiter': delimiterParser
});


export default function PreviewRenderer({ data }) {
    const html = EditorJsToHtml.parse(data)
    return (
        <div className="prose prose-lg max-w-full" key={data.time}>
            {html.map((item, index) => {
                if (typeof item === "string") {
                    return (
                        <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
                    );
                }
                return item;
            })}
        </div>
    );
};