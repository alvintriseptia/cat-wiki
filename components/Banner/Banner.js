import Image from "next/image";
import SearchDesktop from "./SearchDesktop";
import SearchMobile from "./SearchMobile";

const Banner = ({ breeds }) => {
	return (
		<div className="h-[538px] w-full rounded-t-3xl bg-[url('/HeroImagesm.png')] md:bg-[url('/HeroImagemd.png')] lg:bg-[url('/HeroImagelg.png')] bg-no-repeat bg-right bg-cover">
			<div className="flex flex-col px-10 justify-center h-full text-white font-medium">
				<div className="relative max-w-[287px] h-[87px]">
					<Image layout="fill" src={`/LogoWhite.svg`} alt="logo" />
				</div>
				<h2 className="text-2xl mb-8 pl-4">
					Get to know more about your cat breed
				</h2>
				<SearchDesktop breeds={breeds} />
				<SearchMobile breeds={breeds} />
			</div>
		</div>
	);
};

export default Banner;
