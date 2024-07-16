import './App.css'

function App() {

  return (
    <div className='flex h-screen justify-evenly mt-5'>
        <ul className='flex flex-col justify-center w-2/5'>
          <li className='font-bold text-2xl hover:text-cyan-600 cursor-pointer'>HOME</li>
          <li className='font-bold text-2xl hover:text-cyan-600 cursor-pointer'>ACTIVITIES</li>
          <li className='font-bold text-2xl hover:text-cyan-600 cursor-pointer'>GALLERY</li>
          <li className='font-bold text-2xl hover:text-cyan-600 cursor-pointer'>HIREUS</li>
          <li className='font-bold text-2xl hover:text-cyan-600 cursor-pointer'>LOGIN</li>
        </ul>
    </div>
  )
}

export default App
