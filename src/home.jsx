import './App.css'

function Home() {

  return (
    <div className='flex flex-col h-screen items-center pt-5'>
        
        <div className='flex justify-center items-center w-screen h-screen'>
          <div className='w-2/3 flex justify-center items-center text-8xl pl-24'>
            <h1 className='flex flex-col'><span className=' text-spclpurple'>Code.</span> Create.<br/>Collaborate.</h1>
          </div>
          <div className='w-1/3 flex justify-center items-center'>
            <img className='w-134 animate-wiggle' src='astro.png'/>
          </div>
        </div>
    </div>
  )
}

export default Home
