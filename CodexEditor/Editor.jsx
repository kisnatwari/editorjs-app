"use client"

import React, { useEffect, useRef } from 'react'
import EditorJS from '@editorjs/editorjs';
import { EDITOR_TOOLS } from './EditorTools';
import Image from 'next/image';

const Editor = ({ data, onChange }) => {
    const ref = useRef(false);
    useEffect(() => {
        if (!ref.current) {
            ref.current = new EditorJS({
                holder: "editorjs",
                tools: EDITOR_TOOLS,
                data,
                autofocus: true,
                minHeight: false,
                placeholder: "Start writing here with the title...",
                async onChange(api, event) {
                    const data = await api.saver.save();
                    onChange(data);
                },
            });
        }
    }, [])
    return (
        <div id='editorjs' className='prose mx-auto'></div>
    )
}

export default Editor