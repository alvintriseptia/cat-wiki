import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="w-full h-24 rounded-t-3xl bg-black flex justify-between items-center px-8 text-white mt-20">
			<Image src="/LogoWhite.svg" height={40} width={127} alt="logo" />
			<strong className=" font-normal">
				&copy; created by{" "}
				<Link href="https://github.com/alvintriseptia">
					<a className="underline font-bold">alvintriseptia</a>
				</Link>{" "}
				- devChallenge.io 2021{" "}
			</strong>
		</footer>
	);
};

export default Footer;
