import Head from "next/head";
import Link from "next/link";
import { Banner, Navbar, MostSearched, Footer, Content } from "../components/";

export default function Home({ data }) {
	return (
		<div className=" lg:px-24">
			<Head>
				<title>CatWiki</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Mystery+Quest&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
					rel="stylesheet"
				/>
			</Head>
			<Navbar />
			<Banner breeds={data} />
			<MostSearched breeds={data} />
			<Content />
			<Footer />
		</div>
	);
}

// This gets called on every request
export async function getServerSideProps() {
	if (process.env.VERCEL_URL) {
		process.env.VERCEL_URL = "alvindev-catwiki.vercel.app";
		// Fetch data from external API
		const res = await fetch(`${process.env.VERCEL_URL}/api/breeds`);
		const data = await res.json();

		// Pass data to the page via props
		return { props: { data } };
	} else {
		// Fetch data from external API
		const res = await fetch(`http://localhost:3000/api/breeds`);
		const data = await res.json();

		// Pass data to the page via props
		return { props: { data } };
	}
}
