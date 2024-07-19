import './App.css'

function App() {

  return (
    <div className='flex h-screen justify-evenly mt-5'>
        <h1 className=' text-6xl text-cyan-300 fixed top-5 right-5'>HOME</h1>
        <ul className='flex flex-col justify-center w-2/5'>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>HOME</li>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>ACTIVITIES</li>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>GALLERY</li>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>HIREUS</li>
          <li className='font-bold text-2xl hover:text-cyan-300 cursor-pointer'>LOGIN</li>
        </ul>
        <img src='img1.png' className='w-1/4 h-1/4 fixed top-1/3 right-1/4'/>
    </div>
  )
}

export default App
