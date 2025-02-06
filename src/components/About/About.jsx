import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/005/310/113/non_2x/man-standing-with-a-laptop-vector.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        React development is carried out by passionate developers who strive to build efficient, scalable, and user-friendly web applications. React, a powerful JavaScript library developed by Facebook, enables developers to create dynamic user interfaces with reusable components.

                        I have built a website using React Router and GitHub APIs to showcase seamless navigation and real-time data fetching. React Router allows for a smooth, single-page application experience
                        </p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}
