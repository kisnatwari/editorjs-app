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
  return (
    <main className='container mx-auto'>
      <img src="https://www.notion.so/images/page-cover/webb1.jpg" className='w-full h-28 object-cover relative' alt="" />
      <div className='container text-primary/95 relative mx-auto z-10 -mt-7'>
        <div className="bg-white rounded mb-32 shadow w-full min-h-[500px] p-5">
          <Editor data={data} onChange={setData} />
        </div>
        <div className="bg-white rounded shadow w-full min-h-[500px] p-5">
          {
            data && <PreviewRenderer data={data} />
          }
        </div>
      </div>
    </main>
  )
}
