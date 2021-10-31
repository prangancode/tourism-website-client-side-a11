import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewBooking.css'

const AddNewBooking = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch("https://vast-oasis-93668.herokuapp.com/bookings", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Package Successfully Added");
                }
                console.log(result)
            });
        console.log(data);
    }
    return (
        <div className="w-full h-full bg-cover bg-no-repeat bg-left bg-fixed" style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80")`,
            // backgroundPosition: 'center',

            // backgroundSize: 'cover',

            // backgroundRepeat: 'no-repeat'
        }}>
            <div>
                <h1 className='pt-10 text-4xl font-mono font-bold text-center italic text-white underline'>Add A New Tour Package</h1>
            </div>
            <div className='lg:m-10 lg:mx-auto sm:w-auto lg:w-3/5'>
                <form className="flex flex-col lg:mx-20 sm:mx-5 py-10 space-y-5 opacity-70" onSubmit={handleSubmit(onSubmit)}>


                    <input className='outline-none border-2 rounded-2xl p-3 text-xl' placeholder="Booking Place Name" defaultValue="" {...register("booking_name")} />
                    <input className='outline-none border-2 rounded-2xl p-3 text-xl' placeholder="Description" defaultValue="" {...register("description")} />
                    <textarea className='border-2 p-3 outline-none border-2 rounded-2xl p-3 text-xl' rows='5' cols='45' placeholder="Details Description" defaultValue="" {...register("details_description")} />
                    <input className='outline-none border-2 rounded-2xl p-3 text-xl' placeholder="Image URL" defaultValue="" {...register("img_url")} />
                    <input className='outline-none border-2 rounded-2xl p-3 text-xl' placeholder="Per Person Cost" defaultValue="" {...register("per_person_cost")} />
                    <input className='outline-none border-2 rounded-2xl p-3 text-xl' placeholder="Package Duration" defaultValue="" {...register("duration")} />
                    <input className='outline-none border-2 rounded-2xl p-3 text-xl' placeholder="Package Rating" defaultValue="" {...register("rating")} />

                    <input className='w-1/3  mx-auto border-1 bg-indigo-600 hover:bg-green-800 hover:text-white p-3 ring-2 ring-indigo-800 rounded-full text-white text-2xl font-semibold' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewBooking;