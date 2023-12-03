"use client"

import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState } from 'react'
import PreviewRenderer from "@/CodexEditor/PreviewRenderer";
const Editor = dynamic(() => import("@/CodexEditor/Editor"), {
  ssr: false
})

export default function Home() {
  const [data, setData] = useState();
  const [editState, setEditState] = useState<Boolean>(true);
  return (
    <main className='container mx-auto'>
      <div className="w-full bg-white flex justify-end gap-2 py-4">
        {
          data &&
          <Button variant={'secondary'} className='px-16 bg-slate-200 text-black' onClick={() => setEditState(!editState)}>{
            editState ? "Preview" : "Edit"
          }</Button>
        }
        <Button className='px-16 bg-slate-800 text-white'>Publish</Button>
      </div>
      <img src="https://www.notion.so/images/page-cover/webb1.jpg" className='w-full h-28 object-cover relative' alt="" />
      <div className='container text-primary/95 relative mx-auto z-10 -mt-7'>
        <div className="bg-white rounded mb-32 shadow w-full min-h-[500px] p-5">
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
