import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { Footer, Navbar, Score } from "../../components";

export default function Breed({ currentData, images }) {
	console.log(currentData);
	console.log(images);
	return (
		<div className="lg:px-24 ">
			<Head>
				<title>Breed - {currentData.name}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<section className="flex space-x-24">
				<div className="relative w-[371px] h-[371px] ml-10">
					<Image
						className="rounded-3xl"
						layout="fill"
						src={images[0]}
						alt={currentData.name}
					/>
					<div className="absolute top-10 -z-10 -left-10  bg-[#DEC68B] h-[305px] w-[83px] rounded-3xl"></div>
				</div>
				<div className="w-3/4 flex flex-col space-y-6">
					<h1 className="text-4xl font-semibold">{currentData.name}</h1>
					<p className="text-lg font-medium">{currentData.description}</p>
					<div className="flex space-x-1">
						<span className="font-bold">Temperament : </span>
						<span>{currentData.temperament}</span>
					</div>
					<div className="flex space-x-1">
						<span className="font-bold">Origin : </span>
						<span>{currentData.origin}</span>
					</div>
					<div className="flex space-x-1">
						<span className="font-bold">Life Span : </span>
						<span>{currentData.life_span} years</span>
					</div>
					<div className="flex items-center">
						<span className="font-bold w-52">Adaptability : </span>
						<Score count={currentData.adaptability} />
					</div>
					<div className="flex items-center">
						<span className="font-bold w-52">Affection Level : </span>
						<Score count={currentData.affection_level} />
					</div>
					<div className="flex items-center">
						<span className="font-bold w-52">Child Friendly : </span>
						<Score count={currentData.child_friendly} />
					</div>
					<div className="flex items-center">
						<span className="font-bold w-52">Grooming : </span>
						<Score count={currentData.grooming} />
					</div>
					<div className="flex items-center">
						<span className="font-bold w-52">Intelligence : </span>
						<Score count={currentData.intelligence} />
					</div>
					<div className="flex items-center">
						<span className="font-bold w-52">Health issues : </span>
						<Score count={currentData.health_issues} />
					</div>
					<div className="flex items-center">
						<span className="font-bold w-52">Social Needs : </span>
						<Score count={currentData.social_needs} />
					</div>
					<div className="flex items-center">
						<span className="font-bold w-52">Stranger friendly : </span>
						<Score count={currentData.stranger_friendly} />
					</div>
				</div>
			</section>
			<section className="my-8">
				<h2 className="text-4xl font-semibold mb-8">Other photos</h2>
				<div className="flex flex-wrap space-x-8 space-y-9 ">
					{images.map((image, index) => (
						<div className="relative self-end" key={index}>
							<Image
								width={275}
								height={275}
								className="rounded-3xl"
								src={image}
								alt={currentData.name}
							/>
						</div>
					))}
				</div>
			</section>
			<Footer />
		</div>
	);
}

// This gets called on every request
export async function getServerSideProps(context) {
	// get id
	if (context.req) {
		const id = context.params.id;
		// Fetch data from external API
		const res = await axios.get(
			`https://alvindev-catwiki.netlify.app/api/breed/${id}`
		);

		const data = await res.data;
		const currentData = data[0].breeds[0];
		const images = data.map((image) => image.url);

		// Pass data to the page via props
		return { props: { currentData, images } };
	}
}
