import './App.css'

function App() {

  return (
    <div className='flex h-screen justify-evenly mt-5'>
        <h1 className=' text-6xl text-cyan-300 fixed bottom-5 right-5'>HOME</h1>
        <ul className='flex justify-between w-3/5'>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>HOME</li>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>ACTIVITIES</li>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>GALLERY</li>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>HIREUS</li>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>LOGIN</li>
        </ul>
    </div>
  )
}

export default App
