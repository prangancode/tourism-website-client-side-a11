import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide'

const HomeBooking = (props) => {
    const { booking_name, img_url, duration, description, _id } = props.booking;
    return (
        <Slide bottom>
            <div className=" ring-4 ring-gray-300 rounded-xl shadow-xl">

                <img className="rounded-t-xl  w-full  object-cover " src={img_url} alt="" ></img>
                <div className="flex flex-col p-7">
                    <div className="flex flex-row">
                        <div className=" text-lg uppercase bg-white p-1 px-3 text-yellow-800 font-semibold font-mono rounded-2xl line-clamp-1 hover:line-clamp-none">
                            {booking_name}
                        </div>
                    </div>
                    <div>

                        <p className="text-lg text-white mt-1 line-clamp-2 hover:line-clamp-none font-medium">
                            {description} </p>

                    </div>
                    <div>

                        <p className="text-lg text-yellow-500 mt-1 line-clamp-2 hover:line-clamp-none font-medium">
                            Duration: {duration} </p>

                    </div>
                    <div>
                        <Link to={`/bookingDetail/${_id}`}>
                            <button className="bg-white border border-gray-400 font-semibold hover:bg-yellow-100 mt-4 px-4 py-2 rounded-xl shadow text-gray-800 w-2/3 ">
                                Book Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Slide>

    );
};

export default HomeBooking;