import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyBookingStyle = (props) => {
    const { user } = useAuth();
    const { name, bookingDetails, image, status, address, city, phone, email, _id } = props.myBooking;
    const { myBookings, setMyBookings } = props;
    const handleCancelBooking = (id) => {
        const proceed = window.confirm("Are you want to cancel this booking?")

        console.log(id);
        if (proceed) {
            fetch(`https://vast-oasis-93668.herokuapp.com/submitbookings/${id}`, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Your Booking is Removed.');
                        const remainingUsers = myBookings.filter(booking => booking._id !== id)
                        setMyBookings(remainingUsers);
                    }
                })
        }

    }

    return (
        <div>

            {user.email === email &&
                <figure className="bg-yellow-100 lg:flex lg:flex-row lg:p-0 lg:rounded-3xl lg:space-x-10 lg:w-auto sm:flex sm:flex-col sm:rounded-xl">
                    <img className="sm:w-auto sm:h-auto lg:h-auto lg:rounded-xl lg:w-72 sm:rounded" src={image} alt="" width="384" height="512" />
                    <div className="pt-6 lg:p-8 lg:text-left sm:text-center  lg:space-y-4">
                        <blockquote>
                            <p className="font-semibold text-xl font-mono text-indigo-700">
                                {bookingDetails}
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-cyan-600 text-lg">
                                Name : {name}
                            </div>
                            <div className="text-blue-700">
                                Address : {address}
                            </div>
                            <div className="text-blue-700">
                                Contact : {phone}
                            </div>
                            <div className="text-blue-700">
                                City : {city}
                            </div>

                        </figcaption>

                    </div>
                    <div className='lg:space-y-4 pt-6 sm:space-y-2 text-center'>

                        <div className="text-black">

                            <p className="bg-yellow-300 border-2 font-medium hover:line-clamp-none line-clamp-2 mt-1 p-1.5 rounded-3xl text-base text-black sm:w-5/6 sm:mx-auto lg:w-auto ">Booking Status : {status} </p>

                        </div>
                        <div className='sm:pb-3'>
                            <button onClick={() => handleCancelBooking(_id)} className="bg-white border-2 border-red-500 focus:ring-2 focus:ring-red-300 font-semibold hover:bg-red-400 hover:border-transparent hover:text-white px-2 py-1 rounded-3xl">
                                Cancel Booking
                            </button>
                        </div>
                    </div>
                </figure>}

        </div>
    );
};

export default MyBookingStyle;