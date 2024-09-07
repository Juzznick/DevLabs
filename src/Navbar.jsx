

function Navbar() {
    return (
        <div className="flex justify-center mt-4">
            <ul className='flex justify-between w-3/5 items-center'>
                <li className='font-bold text-2xl hover:text-spclpurple cursor-pointer'>HOME</li>
                <li className='font-bold text-2xl hover:text-spclpurple cursor-pointer'>ACTIVITIES</li>
                <li className='font-bold text-2xl hover:text-spclpurple cursor-pointer'>GALLERY</li>
                <li className='font-bold text-2xl hover:text-spclpurple cursor-pointer'>HIREUS</li>
                <button className='font-bold text-2xl cursor-pointer bg-spclpurple pl-4 pr-4 rounded-2xl'>LOGIN</button>
            </ul>
        </div>
    );
}

export default Navbar;