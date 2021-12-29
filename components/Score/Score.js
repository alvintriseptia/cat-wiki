import React from "react";

const Score = ({ count }) => {
	return (
		<div className="flex space-x-2">
			{count === 1 ? (
				<>
					<div className="w-8 lg:w-14 h-3 bg-[#544439] rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-gray-200 rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-gray-200 rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-gray-200 rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-gray-200 rounded-lg"></div>
				</>
			) : count === 2 ? (
				<>
					<div className="w-8 lg:w-14 h-3 bg-[#544439] rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-[#544439] rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-gray-200 rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-gray-200 rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-gray-200 rounded-lg"></div>
				</>
			) : count === 3 ? (
				<>
					<div className="w-8 lg:w-14 h-3 bg-[#544439] rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-[#544439] rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-[#544439] rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-gray-200 rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-gray-200 rounded-lg"></div>
				</>
			) : count === 4 ? (
				<>
					<div className="w-8 lg:w-14 h-3 bg-[#544439] rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-[#544439] rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-[#544439] rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-[#544439] rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-gray-200 rounded-lg"></div>
				</>
			) : (
				<>
					<div className="w-8 lg:w-14 h-3 bg-[#544439] rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-[#544439] rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-[#544439] rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-[#544439] rounded-lg"></div>
					<div className="w-8 lg:w-14 h-3 bg-[#544439] rounded-lg"></div>
				</>
			)}
		</div>
	);
};

export default Score;
