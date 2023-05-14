export default function Home() {
  return (
    <section className="w-full h-auto flex items-center justify-around py-[200px]">
      <div>
        <div className="mb-2 text-4xl font-bold">Interview Fox</div>
        <div className="text-gray-500">Your Interview Helper Based On AI</div>
      </div>
      <div className="flex items-center justify-center gap-4 dark:bg-neutral-900 px-4">
        <div>Powered By</div>
        <img src="/next.svg " alt="next" className="w-20 h-20" />
        <img src="/tailwind.svg" alt="tailwind" className="w-10 h-10" />
        <img src="/vercel.svg" alt="vercel" className="w-20 h-20" />
        <img src="/openai.svg" alt="openai" className="w-10 h-10" />
        <img src="/supabase.svg" alt="vercel" className="w-18 h-18" />
      </div>
    </section>
  )
}
