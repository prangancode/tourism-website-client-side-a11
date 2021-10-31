import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeBooking from './HomeBooking';
import './Home.css'

const Home = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://vast-oasis-93668.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])
    return (
        <div>
            <div className='bg-banner lg:flex lg:flex-row justify-evenly lg:m-0 p-10 sm:flex-col-reverse sm:flex sm:m-2 sm:rounded-xl'>

                <div className='flex-col self-center sm:pt-1.5 sm:w-11/12 w-1/3'>
                    <h1 className='font-bold text-green-900 text-5xl'>Feel Free to <span className='hover:text-green-600 text-yellow-500'>Discover</span> most engaging places.</h1>
                    <p className='mt-10 text-xl font-mono'>Best places for your next travel are here check them out. You can rest assured we’ll have the capacity to make you feel comfortable as we leave the techy stuff and we focus on helping people.
                    </p>
                    <Link to='/about'> <button className=" transition delay-150 duration-300 ease-in-out bg-white  border border-gray-400 font-semibold hover:bg-green-700 hover:text-white mt-16  px-4 py-2 sm:rounded-xl lg:rounded-2xl shadow text-gray-800 w-2/3  ">
                        Explore More
                    </button>
                    </Link>
                </div>


                <div>
                    <img src='https://chisnghiax.com/chisfis/static/media/our-features.d6902772.png' alt="study" />
                </div>

            </div>
            {/* Bookings */}

            <div>
                <h1 className=' mx-auto sm:text-3xl font-serif font-semibold text-3xl text-center pt-12 w-2/3'>POPULAR TOURS<span className='text-green-600'></span></h1>
            </div>
            <div>
                <h1 className="font-bold p-5 text-4xl text-green-900 text-center italic font-mono">We promise, it won’t get boring.</h1>
            </div>

            <div className="bg-booking-item rounded-xl">
                {
                    bookings.length === 0 ?
                        <div className="flex items-center justify-center space-x-2 animate-bounce mt-28">
                            <div className="w-8 h-8 bg-indigo-600 rounded-full"></div>
                            <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-black rounded-full"></div>
                        </div> :
                        <div className="gap-10 grid lg:grid-cols-3 lg:p-28  sm:p-10">
                            {
                                bookings.map(booking => <HomeBooking booking={booking} key={booking._id}></HomeBooking>)
                            }
                        </div>
                }
            </div>


            {/* Traveling Highlights*/}
            <div>
                <h1 className='font-bold p-10 text-5xl text-center font-serif'>Traveling Highlights<span className='text-green-600'></span></h1>
            </div>
            <div>
                <h1 className="mx-auto sm:text-2xl lg:text-3xl text-red-500 italic font-mono underline text-center w-2/3">Keep calm and travel on</h1>
            </div>

            <div className='lg:flex lg:flex-row lg:items-baseline lg:items-center lg:px-24 lg:py-10 sm:flex sm:flex-col sm:p-12 sm:space-x-0.5 sm:space-y-10 lg:space-x-20'>
                <div className='text-center'>
                    <div>
                        <img className='mx-auto w-2/3' src="https://chisnghiax.com/chisfis/static/media/HIW1.bbef046f.png" alt="" />
                    </div>
                    <div className='mt-10'>
                        <h1 className='font-bold font-mono text-2xl pb-2'>Book & Relax</h1>
                        <p className='font-thin text-xl'>Let each trip be an inspirational journey, each room a peaceful space</p>
                    </div>
                </div>
                <div className='text-center'>
                    <div>
                        <img className='mx-auto w-2/3' src="https://chisnghiax.com/chisfis/static/media/HIW2.f6857768.png" alt="" />
                    </div>
                    <div className='mt-10'>
                        <h1 className='font-bold font-mono text-2xl pb-2'>Smart Checklist</h1>
                        <p className='font-thin text-xl'>Let each trip be an inspirational journey, each room a peaceful space</p>
                    </div>
                </div>
                <div className='text-center'>
                    <div>
                        <img className='mx-auto w-2/3' src="https://chisnghiax.com/chisfis/static/media/HIW3.b650d652.png" alt="" />
                    </div>
                    <div className='mt-10'>
                        <h1 className='font-bold font-mono text-2xl pb-2'>Save More</h1>
                        <p className='font-thin text-xl' >Let each trip be an inspirational journey, each room a peaceful space</p>
                    </div>
                </div>
            </div>

            {/* Suggestions For Discovery */}

            <div>
                <h1 className='font-bold pt-12 text-5xl text-center font-serif'>Suggestions for <span className='text-green-600'>Discovery</span></h1>
            </div>
            <div>
                <h1 className="mx-auto sm:text-2xl font-mono text-3xl p-5 text-center w-2/3">Popular places to stay that Traveleta recommends for you</h1>
            </div>
            <div className='bg-discovery rounded-2xl gap-11 lg:grid lg:grid-cols-3 p-16 sm:grid sm:grid-cols-1'>
                <div className='text-center col-span-1'>
                    <div>
                        <img className='rounded-2xl' src="https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
                    </div>
                    <div className='mt-10'>
                        <h1 className='font-bold font-mono pb-2 text-2xl text-indigo-600'>Enjoy the great cold</h1>
                        <p className=' font-semibold text-lg'>188,288 properties</p>
                    </div>
                </div>
                <div className='text-center col-span-1'>
                    <div>
                        <img className='rounded-2xl' src="https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                    <div className='mt-10'>
                        <h1 className='font-bold font-mono pb-2 text-2xl text-indigo-600'>Sleep in a floating way</h1>
                        <p className='font-semibold text-lg'>188,288 properties</p>
                    </div>
                </div>
                <div className='text-center col-span-1'>
                    <div>
                        <img className='rounded-2xl' src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmVydGljYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                    </div>
                    <div className='mt-10'>
                        <h1 className='font-bold font-mono pb-2 text-2xl text-indigo-600'>Cool in the deep forest</h1>
                        <p className='font-semibold text-lg'>188,288 properties</p>
                    </div>
                </div>
            </div>

            {/* Join Our Newsletter */}
            <div className=' lg:flex lg:flex-row justify-evenly sm:m-2 lg:m-12 p-10 sm:flex-col-reverse sm:flex'>

                <div className='flex flex-col self-center sm:pt-5 sm:text-center lg:text-left sm:w-11/12 w-1/3'>
                    <h1 className='font-bold text-5xl'>Join <span className='hover:text-green-600 text-red-500'>Our </span>Newsletter</h1>
                    <p className='mt-10 text-2xl'>Read and share new perspectives on just about any topic. Everyone’s welcome.</p>
                    <p className='mt-10 text-2xl font-light'> <span className='border-2 border-blue-400 p-0.5 rounded-2xl'>01</span> Get more discount</p>
                    <p className='mt-5 text-2xl font-light'><span className='border-2 border-red-400 p-0.5 rounded-2xl'>02</span> Get premium magazines</p>

                    <input type='text' className="bg-white border border-red-600 font-semibold  mt-8  px-4 py-2 rounded-2xl shadow text-black sm:w-auto lg:w-2/3 outline-none hover:bg-red-100 ring-2 ring-red-200 " placeholder='Enter Your Email ---->' />



                </div>


                <div>
                    <img src='https://chisnghiax.com/chisfis/static/media/SVG-subcribe2.efb832b2.png' alt="study" />
                </div>

            </div>
        </div>
    );
};

export default Home;