import React, { useEffect, useState } from 'react';
import './ManageAllBookings.css'

const ManageAllBookings = () => {
    const [allBookings, setAllBookings] = useState([]);
    useEffect(() => {
        fetch('https://vast-oasis-93668.herokuapp.com/submitbookings')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllBookings(data);
            });
    }, [])

    const handleCancelBooking = (id) => {
        const proceed = window.confirm("You sure you want to cancel booking?")

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
                        alert('deleted successfully');
                        const remainingUsers = allBookings.filter(booking => booking._id !== id)
                        setAllBookings(remainingUsers);
                    }
                })
        }

    }

    const handleBookingUpdate = (id) => {
        fetch(`https://vast-oasis-93668.herokuapp.com/submitbookings/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Booking Status Changed');
                    window.location.reload(false);
                }
            });
    }

    return (
        <div>
            {/* <div className="gap-8 grid lg:grid-cols-3 p-36 sm:p-20">
                {
                    allBookings.map(allBooking => <ManageAllBookingStyle allBooking={allBooking} key={allBooking._id} allBookings={allBookings} setAllBookings={setAllBookings}></ManageAllBookingStyle>)
                }
            </div> */}
            <div>
                {/* <!-- component --> */}
                <h2 className="text-3xl text-center text-bold p-3 italic text-green-800">All Bookings</h2>
                <div className="text-gray-900 bg-gray-200 sm:p-5 lg:p-20">

                    <div className="wrapper px-3 py-4 flex justify-center">
                        <table className="w-full text-md bg-white shadow-md rounded mb-4">
                            <tbody>
                                <tr className="border-b">
                                    <th className="text-left p-3 px-5">Name</th>
                                    <th className="text-left p-3 px-5">Email</th>
                                    <th className="text-left p-3 px-5">Booking Place</th>
                                    <th className="text-left p-3 px-5">Phone No</th>
                                    <th className="text-left p-3 px-5">Status</th>
                                    <th className="text-left p-3 px-5">Delete</th>

                                </tr>
                                {allBookings.map(allBooking =>
                                (<tr className="border-b hover:bg-orange-100 bg-gray-100">
                                    <td className="p-3 px-5"><input type="text" value={allBooking?.name} className="bg-transparent" /></td>
                                    <td className="p-3 px-5"><input type="text" value={allBooking?.email} className="bg-transparent" /></td>
                                    <td className="p-3 px-5"><input type="text" value={allBooking?.bookingDetails} className="bg-transparent" /></td>
                                    <td className="p-3 px-5"><input type="text" value={allBooking?.phone} className="bg-transparent" /></td>

                                    <td className="p-3 px-5 flex justify-end"><button onClick={() => handleBookingUpdate(allBooking?._id)} type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">{allBooking?.status}</button></td>
                                    <td className="p-3 px-5"><button onClick={() => handleCancelBooking(allBooking?._id)} type="button" className="p-3 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                                </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAllBookings;