function Events() {
    return (
        <div className='h-screen'>
            <h1 className="flex justify-center">Upcoming Events</h1>
            <div className="flex justify-around">
                <div className="h-96 w-96 bg-white"> <h1>Web Development</h1></div>
                <div className="h-96 w-96 bg-yellow-300"><h1>JavaScript Workshop</h1></div>
                <div className="h-96 w-96 bg-white"><h1>Profile Building</h1></div>
            </div>
        </div>

    );
}
export default Events