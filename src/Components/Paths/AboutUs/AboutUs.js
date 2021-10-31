import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className='lg:flex lg:flex-row items-center sm:flex sm:flex-col'>
                <div className='lg:p-28 sm:p-8'>
                    <img className='rounded-2xl' src='https://images.unsplash.com/photo-1516685304081-de7947d419d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' alt="" />
                </div>
                <div className='sm:p-10 sm:w-11/12 lg:space-y-10 lg:w-1/3'>

                    <h2 className='font-bold text-green-900 text-5xl'>Explore Travelling With Us</h2>

                    <p className='font-mono text-xl text-yellow-500 sm:py-5 lg:py-0'>We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world.Regardless of your situation, we can help you exit your comfort zone, like we’ve done for other people. Hear what some of them have to say:</p>
                    <ul className='font-semibold text-green-800 space-y-2.5 text-2xl'>


                        <li>Browse Our Website</li>
                        <li>Choose Service</li>
                        <li>Send Message</li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;