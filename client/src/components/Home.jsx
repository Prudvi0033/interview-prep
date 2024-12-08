import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='w-full h-[50rem] flex flex-col items-center justify-center'>
            <h1 className='text-6xl text-gray-600 font-semibold'>interview <span className='gradient-text'>analyzer</span></h1>
            <p className='mt-10 text-lg text-gray-500 font-semibold'>A quick way to prepare for your next interview in</p>
            <h2>Tech Support</h2>
            <p className='mt-20 mb-5 text-gray-500 font-medium text-center text-xl w-[50rem]'>Get comfortable with common interview questions, build confidence, and get feedback in real-time.</p>
            <Link className="button" to={"/topics"}>Start Practicing</Link>
        </div>
    )
}

export default Home