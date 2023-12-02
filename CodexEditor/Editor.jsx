"use client"

import React, { useEffect, useRef } from 'react'
import EditorJS from '@editorjs/editorjs';
import { EDITOR_TOOLS } from './EditorTools';

const Editor = () => {
    const ref = useRef(false);
    useEffect(() => {
        if (!ref.current) {
            ref.current = new EditorJS({
                holder: "editorjs",
                tools: EDITOR_TOOLS
            });
        }
    }, [])
    return (
        <div id='editorjs' className='prose mx-auto bg-red-600 border-2'></div>
    )
}

export default Editor