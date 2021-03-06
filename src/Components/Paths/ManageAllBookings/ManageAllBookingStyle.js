// import React from 'react';

// const ManageAllBookingStyle = (props) => {
//     const { name, email, bookingDetails, image, status, address, city, phone, _id } = props.allBooking;
//     const { allBookings, setAllBookings } = props;
//     const handleCancelBooking = (id) => {
//         const proceed = window.confirm("You sure you want to cancel booking?")

//         console.log(id);
//         if (proceed) {
//             fetch(`https://vast-oasis-93668.herokuapp.com/submitbookings/${id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     "content-type": "application/json"
//                 }
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                     if (data.deletedCount > 0) {
//                         alert('deleted successfully');
//                         const remainingUsers = allBookings.filter(booking => booking._id !== id)
//                         setAllBookings(remainingUsers);
//                     }
//                 })
//         }

//     }

//     const handleBookingUpdate = (id) => {
//         fetch(`https://vast-oasis-93668.herokuapp.com/submitbookings/${id}`, {
//             method: 'PUT',
//             headers: {
//                 "content-type": "application/json"
//             }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.modifiedCount) {
//                     alert('Booking Status Changed');
//                     window.location.reload(false);
//                 }
//             });
//     }

//     return (
//         <div>
//             <div className=" ring-4 ring-gray-300 rounded-xl shadow-xl">

//                 <img className="rounded-t-xl  w-full  object-cover " src={image} alt="" ></img>

//                 <div className="flex flex-col p-7">
//                     <div className="flex flex-row">
//                         <div className=" text-xs uppercase bg-yellow-100 p-1 px-2 text-yellow-700 rounded-2xl line-clamp-1 hover:line-clamp-none">
//                             {bookingDetails}
//                         </div>
//                     </div>
//                     <div className='space-y-5'>

//                         <p className="text-base text-gray-600 mt-1 line-clamp-2 hover:line-clamp-none font-medium">
//                             Name : {name} </p>
//                         <p className="text-base text-gray-600 mt-1 line-clamp-2 hover:line-clamp-none font-medium">
//                             Name : {email} </p>
//                         <p className="text-base text-gray-600 mt-1 line-clamp-2 hover:line-clamp-none font-medium">
//                             Address : {address} </p>
//                         <p className="text-base text-gray-600 mt-1 line-clamp-2 hover:line-clamp-none font-medium">
//                             Phone No : {phone} </p>
//                         <p className="text-base text-gray-600 mt-1 line-clamp-2 hover:line-clamp-none font-medium">
//                             City : {city} </p>
//                         <button onClick={() => handleBookingUpdate(_id)} className="bg-yellow-200 border-2 font-medium hover:line-clamp-none line-clamp-2 mt-1 p-1.5 rounded-3xl text-base text-gray-600 w-2/4">
//                             Booking Status : {status} </button>

//                         <button onClick={() => handleCancelBooking(_id)} className="bg-transparent border-2 border-red-700 focus:ring-2 focus:ring-red-300 font-semibold bg-red-400 hover:border-transparent hover:text-white px-4 py-2 rounded-3xl">
//                             Cancel Booking
//                         </button>

//                     </div>

//                 </div>
//             </div>

//         </div>
//     );
// };

// export default ManageAllBookingStyle;