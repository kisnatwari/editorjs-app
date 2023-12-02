"use client"

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState } from 'react'
const Editor = dynamic(() => import("@/CodexEditor/Editor"), {
  ssr: false
})

export default function Home() {
  const [data, setData] = useState();
  return (
    <main className='container mx-auto bg-primary'>
      <Editor />
    </main>
  )
}
