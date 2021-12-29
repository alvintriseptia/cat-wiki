import Head from "next/head";
import React from "react";
import { Article, Footer, Navbar } from "../components";

export default function topbreeds({ data }) {
	return (
		<div className=" lg:px-24">
			<Head>
				<title>Top Breeds</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
			</Head>
			<Navbar />
			<Article breeds={data} />
			<Footer />
		</div>
	);
}

// This gets called on every request
export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch(`http://localhost:3000/api/breeds`);
	const data = await res.json();

	// Pass data to the page via props
	return { props: { data } };
}