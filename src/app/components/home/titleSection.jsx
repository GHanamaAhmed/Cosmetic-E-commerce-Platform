export default function TitleSection({ title, subTitle,textAlign }) {
  return (
    <div className={`flex flex-col ${textAlign} gap-4`}>
      {title&&<p className='text-3xl text-solidHeading font-bold'>{title}</p>}
      {subTitle&&<p className='text-darkContent'> {subTitle}</p>}
    </div>
  )
}
