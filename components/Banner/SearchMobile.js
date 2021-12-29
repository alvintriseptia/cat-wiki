import React, { useState } from "react";

const SearchMobile = ({ breeds }) => {
	const breedsName = breeds.map((breed) => breed.name);
	const [filteredBreeds, setFilteredBreeds] = useState([]);
	const [search, setSearch] = useState("");
	const [open, setOpen] = useState(false);
	const [modal, setModal] = useState(false);

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

	const handleModal = () => {
		setModal(!modal);
	};

	return (
		<div className="relative lg:hidden flex flex-col w-2/3 text-black">
			<div
				onClick={handleModal}
				className="w-full p-4 flex justify-between bg-white rounded-full items-center"
			>
				<span>Enter your breed</span>
				<span className="material-icons">search</span>
			</div>
			{modal && (
				<div className="fixed top-0 left-0 w-full h-3/4 p-6 bg-white rounded-3xl overflow-hidden">
					<span
						onClick={handleModal}
						className="material-icons absolute top-4 right-8"
					>
						close
					</span>
					<form
						onSubmit={handleSubmit}
						className="w-full border-2 border-black flex justify-between bg-white rounded-full px-4 mt-12 items-center"
					>
						<input
							icon="search"
							className="focus:outline-none w-full py-4 rounded-full"
							type="text"
							placeholder="Enter your breed"
							onChange={handleChange}
							value={search}
						/>
						<button type="submit" className="material-icons">
							search
						</button>
					</form>
					{search !== "" && open && (
						<div className="w-full h-full mt-8 overflow-y-auto bg-white">
							{filteredBreeds.map((breed, index) => (
								<p
									key={index}
									className="block border-b border-b-neutral-500/20 p-2 cursor-pointer"
									onClick={handleClick}
								>
									{breed}
								</p>
							))}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default SearchMobile;
