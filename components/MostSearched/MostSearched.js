import Image from "next/image";
import Link from "next/link";
import React from "react";
import { data } from "./data";
const MostSearched = ({ breeds }) => {
	const TopBreeds = breeds.filter((breed) => data.includes(breed.name));

	console.log(TopBreeds);
	return (
		<section className="bg-[#E3E1DC] w-full px-4 lg:px-28 py-10 text-[#291507]">
			<div className="relative lg:w-1/4">
				<h3 className="text-xl font-semibold ">Most Searched</h3>
				<div className="absolute w-1/4 h-[4px] rounded-lg bg-[#4D270C]"></div>
			</div>
			<div className="flex flex-wrap space-y-10 justify-between items-end mt-12">
				<h2 className="text-5xl font-bold lg:w-1/2">
					66+ TopBreedss For you to discover
				</h2>
				<Link href="/topbreeds">
					<a className="font-bold text-lg text-[#29150799] hover:underline">
						SEE MORE <span className="font-bold">&#8594;</span>
					</a>
				</Link>
			</div>
			<div className="lg:flex columns-2 lg:flex-row lg:space-x-10 space-y-10 lg:space-y-0 mt-10 overflow-hidden">
				<Link
					key={TopBreeds[0].id}
					href="/breed/[id]"
					as={`/breed/${TopBreeds[0].id}`}
				>
					<a className="flex flex-col space-y-3 items-center justify-center w-full h-full rounded-full bg-[#E3E1DC] hover:underline">
						<div className="relative w-[220px] h-[220px]">
							<Image
								className="rounded-2xl"
								layout="fill"
								src={TopBreeds[0].image.url}
								alt={TopBreeds[0].name}
							/>
						</div>
						<p className="text-lg text-center">{TopBreeds[0].name}</p>
					</a>
				</Link>
				<Link
					key={TopBreeds[1].id}
					href="/breed/[id]"
					as={`/breed/${TopBreeds[1].id}`}
				>
					<a className="flex flex-col space-y-3 items-center justify-center w-full h-full rounded-full bg-[#E3E1DC] hover:underline">
						<div className="relative w-[220px] h-[220px]">
							<Image
								className="rounded-2xl"
								layout="fill"
								src={TopBreeds[1].image.url}
								alt={TopBreeds[1].name}
							/>
						</div>
						<p className="text-lg text-center">{TopBreeds[1].name}</p>
					</a>
				</Link>
				<Link
					key={TopBreeds[2].id}
					href="/breed/[id]"
					as={`/breed/${TopBreeds[2].id}`}
				>
					<a className="flex flex-col space-y-3 items-center justify-center w-full h-full rounded-full bg-[#E3E1DC] hover:underline">
						<div className="relative w-[220px] h-[220px]">
							<Image
								className="rounded-2xl"
								layout="fill"
								src={TopBreeds[2].image.url}
								alt={TopBreeds[2].name}
							/>
						</div>
						<p className="text-lg text-center">{TopBreeds[2].name}</p>
					</a>
				</Link>
				<Link
					key={TopBreeds[3].id}
					href="/breed/[id]"
					as={`/breed/${TopBreeds[3].id}`}
				>
					<a className="flex flex-col space-y-3 items-center justify-center w-full h-full rounded-full bg-[#E3E1DC] hover:underline">
						<div className="relative w-[220px] h-[220px]">
							<Image
								className="rounded-2xl"
								layout="fill"
								src={TopBreeds[3].image.url}
								alt={TopBreeds[3].name}
							/>
						</div>
						<p className="text-lg text-center">{TopBreeds[3].name}</p>
					</a>
				</Link>
			</div>
		</section>
	);
};

export default MostSearched;
