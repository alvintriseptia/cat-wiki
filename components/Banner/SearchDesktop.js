import React, { useState } from "react";

const SearchDesktop = ({ breeds }) => {
	const breedsName = breeds.map((breed) => breed.name);
	const [filteredBreeds, setFilteredBreeds] = useState([]);
	const [search, setSearch] = useState("");
	const [open, setOpen] = useState(false);

	const handleChange = (e) => {
		const value = e.target.value;
		setSearch(value);
		const filtered = breedsName.filter((breed) =>
			breed.toLowerCase().includes(value.toLowerCase())
		);
		if (filtered !== null) {
			setOpen(true);
		}
		setFilteredBreeds(filtered);
	};

	const handleClick = (e) => {
		setSearch(e.target.innerText);
		setOpen(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const getId = breeds.find(
			(breed) => breed.name.toLowerCase() === search.toLowerCase()
		);
		const id = getId.id;
		window.location.href = `/breed/${id}`;
		setSearch("");
	};
	return (
		<div className="relative hidden lg:flex flex-col w-80 text-black ml-4">
			<form
				onSubmit={handleSubmit}
				className="w-full flex justify-between bg-white rounded-full items-center"
			>
				<input
					icon="search"
					className="focus:outline-none w-full py-4 px-8 rounded-full"
					type="text"
					placeholder="Enter your breed"
					onChange={handleChange}
					value={search}
				/>
				<button type="submit" className="material-icons pr-4">
					search
				</button>
			</form>
			{search !== "" && open && (
				<div className="w-full h-40 absolute top-16 overflow-y-auto bg-white">
					{filteredBreeds.map((breed, index) => (
						<p
							key={index}
							className="block border-b border-b-neutral-500 p-2 cursor-pointer"
							onClick={handleClick}
						>
							{breed}
						</p>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchDesktop;
