import './App.css'

function App() {

  return (
    <div className='flex flex-col h-screen items-center pt-5'>
        <h1 className=' text-6xl text-cyan-300 fixed bottom-5 right-5'>HOME</h1>
        <ul className='flex justify-between w-3/5 items-center'>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>HOME</li>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>ACTIVITIES</li>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>GALLERY</li>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>HIREUS</li>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>LOGIN</li>
        </ul>
        <div className='flex justify-around w-screen h-2/3'>
          <div className='w-2/3 flex justify-center items-center'>
            <h1>We help you shape your Future.</h1>
          </div>
          <div className='w-2/3 flex justify-center items-center'>
            <h1>We help you shape your Future.</h1>
          </div>
        </div>
    </div>
  )
}

export default App
