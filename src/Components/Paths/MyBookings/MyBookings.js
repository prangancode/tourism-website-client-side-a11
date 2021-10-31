import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import MyBookingStyle from './MyBookingStyle';

const MyBookings = () => {
    const { user } = useAuth();
    const [myBookings, setMyBookings] = useState([]);
    useEffect(() => {
        fetch('https://vast-oasis-93668.herokuapp.com/submitbookings')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyBookings(data);
            });
    }, [])
    return (
        <div>
            <div className='font-serif mt-24 text-5xl text-center'>
                {
                    user.email ?
                        <div className='sm:p-1.5'>
                            <h1>Welcome <span className='text-purple-500'>{user.displayName}</span> </h1>
                        </div> :
                        <div>
                            <h1>Please Order from our packages</h1>
                        </div>
                }
            </div>
            <div>
                {
                    myBookings.length === 0 ?
                        <div className="flex items-center justify-center space-x-2 animate-bounce mt-28">
                            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-black rounded-full"></div>
                        </div> :
                        <div className="gap-8 grid lg:grid-cols-1 lg:mx-80 p-36 sm:p-20">
                            {
                                myBookings.map(myBooking => <MyBookingStyle setMyBookings={setMyBookings} myBookings={myBookings} myBooking={myBooking} key={myBooking._id}></MyBookingStyle>)
                            }
                        </div>
                }
            </div>

        </div>
    );
};

export default MyBookings;