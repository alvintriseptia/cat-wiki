import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav className="px-4 lg:px-0">
			<Link href="/">
				<a>
					<Image height={80} width={100} src="/CatwikiLogo.svg" alt="logo" />
				</a>
			</Link>
		</nav>
	);
};

export default Navbar;
