import React from 'react';
import Page from './index/+Page'; // Your GitHub repo cards
import profilePic from '../assets/profile.jpg'; // Replace with your actual picture

export default function Portfolio() {
	return (
		<div className='min-h-screen bg-gray-100 flex'>
			{/* Left Side */}
			<div className='w-1/3 bg-gray-200 p-6 flex flex-col items-center gap-6'>
				{/* Profile Picture */}
				<img
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmt7mgLLJbU_An415Sur0-Iq8kRKQzzAwCw&s' //replace soon
					alt='Nathan'
					className='rounded-full w-48 h-48 object-cover'
				/>

				{/* Description */}
				<div className='text-center w-full'>
					<h2 className='text-2xl font-bold mb-2'>Hi, I'm Nathan</h2>
					<p className='text-gray-700 wrap-break-words'>
						Passionate about coding, web development, and building interactive portfolios. I love creating
						projects that combine design with functionality.
					</p>
				</div>
			</div>

			{/* Right Side */}
			<div className='w-2/3 p-6'>
				{/* Projects */}
				<h3 className='text-xl font-bold mb-3'>My Projects</h3>
				<div>
					<Page /> {/* Renders your GitHub repo cards */}
				</div>
			</div>
		</div>
	);
}
