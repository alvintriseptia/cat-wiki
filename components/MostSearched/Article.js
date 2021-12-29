import Image from "next/image";
import Link from "next/link";
import React from "react";
import { data } from "./data";

const Article = ({ breeds }) => {
	const TopBreeds = breeds.filter((breed) => data.includes(breed.name));
	return (
		<div className="text-[#291507]">
			<h1 className="text-4xl  font-bold mb-10">Top 10 most searched breeds</h1>
			{TopBreeds.map((breed, index) => (
				<div key={breed.id} className="flex space-x-11 mb-12">
					<div className="relative w-[170px] h-[170px]">
						<Image
							className="rounded-2xl"
							layout="fill"
							src={breed.image.url}
							alt={breed.name}
						/>
					</div>
					<div className="w-2/3">
						<Link href="/breed/[id]" as={`/breed/${breed.id}`}>
							<a className="text-4xl  font-semibold hover:underline">
								{index + 1}. {breed.name}
							</a>
						</Link>
						<p className="text-lg font-medium mt-6">{breed.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Article;
