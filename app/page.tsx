"use client"
import "./editor-page.css";
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState } from 'react'
import PreviewRenderer from "@/CodexEditor/PreviewRenderer";
const Editor = dynamic(() => import("@/CodexEditor/Editor"), {
  ssr: false
});

export default function Home() {
  const [data, setData] = useState();
  const [editState, setEditState] = useState<Boolean>(true);
  return (
    <main className='mx-auto bg-white'>
      <div className="w-full container mx-auto flex justify-end gap-2 py-4">
        {
          data &&
          <Button variant={'secondary'} className='px-16 bg-slate-200 text-black' onClick={() => setEditState(!editState)}>{
            editState ? "Preview" : "Edit"
          }</Button>
        }
        <Button className='px-16 bg-slate-800 text-white'>Publish</Button>
      </div>
      <div className="w-full h-28 object-cover cover-image-parent" style={{backgroundImage: "url(https://www.notion.so/images/page-cover/webb1.jpg)"}}>
        <div className="container py-3 text-right">
          <label htmlFor="upload-cover-image" className='bg-muted cursor-pointer text-slate-700 rounded shadow px-2 py-1 text-xs'>Change Cover Image</label>
          <input type="file" name="" id="upload-cover-image" accept='image/*' style={{"display": "none"}} />
        </div>
      </div>
      <div className='container text-primary/95 relative mx-auto z-10'>
        <div className="bg-white rounded mb-32 shadow w-full min-h-[500px] p-5">
          <div className="max-w-"></div>
          
          {
            !data || editState ?
              <Editor data={data} onChange={setData} />
              : <PreviewRenderer data={data} />
          }
        </div>
      </div>
    </main>
  )
}
