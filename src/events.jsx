import WebDev from "./webdevboot";

function Events() {
    return (
        <div className='h-screen flex items-between justify-around flex-col'>
            <h1 className="flex justify-center text-8xl">Upcoming Events</h1>
            <div className="flex justify-around">
                <div className="h-96 w-96 rounded-2xl bg-white"> <h1 className="text-3xl flex justify-center pb-8">Web Development</h1></div>
                <div className="h-96 w-96 rounded-2xl bg-yellow-300"><h1 className="text-3xl flex justify-center pb-8">JavaScript Workshop</h1></div>
                <div className="h-96 w-96 rounded-2xl bg-white"><h1 className="text-3xl flex justify-center pb-8">Profile Building</h1></div>
            </div>
            <WebDev/>
        </div>

    );
}
export default Events