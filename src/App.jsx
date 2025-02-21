import './App.css'

function App() {
  return (
    <div className='min-h-screen flex justify-center border bg-gradient-to-bl from-neutral-900 via-neutral-800 to-neutral-700'>
      <header className='w-full md:w-3/4 fixed m-3 px-2 py-2 rounded-full border border-sky-400 flex items-center justify-between'>
        <a href='' className='font-bold text-sky-500'>
          فیلم کده
        </a>
        <nav>
          <ul className='hidden md:flex items-center gap-5'>
            <li className='text-neutral-200 cursor-pointer hover:text-sky-300 duration-200'>خانه</li>
            <li className='text-neutral-200 cursor-pointer hover:text-sky-300 duration-200'>فروشگاه</li>
            <li className='text-neutral-200 cursor-pointer hover:text-sky-300 duration-200'>دربارهٔ ما</li>
            <li className='text-neutral-200 cursor-pointer hover:text-sky-300 duration-200'>ارتباط با ما</li>
            <li className='text-neutral-200 cursor-pointer hover:text-sky-300 duration-200'>پشتیبانی</li>
          </ul>
        </nav>
        <a href='' className='px-4 py-1 text-white text-sm rounded-full bg-gradient-to-r from-sky-500 to-pink-500 hover:brightness-125 duration-200'>
          ورود | ثبت نام
        </a>
      </header>
    </div>
  )
}

export default App
