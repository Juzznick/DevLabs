import './App.css'

function App() {

  return (
    <div className='flex flex-col h-screen items-center pt-5'>
        <ul className='flex justify-between w-3/5 items-center'>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>HOME</li>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>ACTIVITIES</li>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>GALLERY</li>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>HIREUS</li>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>LOGIN</li>
        </ul>
        <div className='flex justify-center items-center w-screen h-screen'>
          <div className='w-2/3 flex justify-center items-center text-8xl pl-24'>
            <h1 className='flex'>Code. Create.<br/>Collaborate.</h1>
          </div>
          <div className='w-1/3 flex justify-center items-center'>
            <img className='w-134 animate-wiggle' src='astro.png'/>
          </div>
        </div>
    </div>
  )
}

export default App
