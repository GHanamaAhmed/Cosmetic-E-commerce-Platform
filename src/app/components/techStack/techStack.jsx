import React from 'react'
import TitleSection from '../home/titleSection'
import Skills from '../home/tech/skills'

export default function TechStack() {
  return (
    <div className='flex h-screen items-center justify-center w-full gap-3 py-24 md:py-28'>
      <div className='w-10/12 flex justify-start items-center gap-4'>
        <div className='w-full flex flex-col gap-2'>
          <TitleSection title='خطوات الشراء' subTitle={"Technologies I’ve been working with recently"} />
          <Skills/>
        </div>
      </div>
    </div>
  )
}
