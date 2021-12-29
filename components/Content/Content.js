import Image from "next/image";
import Link from "next/link";
import React from "react";

const Content = () => {
	return (
		<section className="flex flex-col items-center justify-center space-y-10 lg:flex-row mt-10 px-4 lg:px-0">
			<div className="flex flex-col space-y-10 lg:px-20 text-[#291507]">
				<div className="relative">
					<h2 className="text-5xl font-bold">Why should you have a cat?</h2>
					<div className="absolute -top-4 left-0 h-[4px] w-1/4 bg-[#4D270C] rounded-lg"></div>
				</div>
				<p className="text-lg font-medium">
					Having a cat around you can actually trigger the release of calming
					chemicals in your body which lower your stress and anxiety leves
				</p>
				<Link href="https://animalkind.org/blog/top-5-reasons-cat/">
					<a className="font-bold text-lg text-[#29150799] hover:underline">
						READ MORE <span className="font-bold">&#8594;</span>
					</a>
				</Link>
			</div>
			<div className="flex space-x-8">
				<div className="flex flex-col items-end space-y-8">
					<div className="relative w-[172px] lg:w-[273px] h-[167px]">
						<Image layout="fill" src="/image2.png" alt="cat" />
					</div>
					<div className="relative w-[122px] lg:w-[195px] h-[293px]">
						<Image layout="fill" src="/image1.png" alt="cat" />
					</div>
				</div>
				<div className="relative w-[149px] lg:w-[238px] h-[385px]">
					<Image layout="fill" src="/image3.png" alt="cat" />
				</div>
			</div>
		</section>
	);
};

export default Content;
