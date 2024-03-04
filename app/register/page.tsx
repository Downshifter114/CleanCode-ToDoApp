import React from "react";

const Home = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center">
			{/* Register Form */}
			<form className="border-t-4 border-green-300 w-full max-w-[400px] shadow-md p-5 flex flex-col gap-4 rounded-md">
				<div className="flex flex-col items-start">
					<label
						htmlFor="email"
						className="text-sm py-2 text-gray-500">
						Email
					</label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="example@mail.com"
						className="border w-full p-1"></input>
				</div>
				<div className="flex flex-col items-start">
					<label
						htmlFor="password"
						className="text-sm py-2 text-gray-500">
						Password
					</label>
					<input
						id="password"
						name="password"
						type="password"
						placeholder="*********"
						className="border w-full p-1"></input>
				</div>
				<div className="flex flex-col items-start">
					<label
						htmlFor="passwordAgain"
						className="text-sm py-2 text-gray-500">
						Password Again
					</label>
					<input
						id="passwordAgain"
						name="passwordAgain"
						type="password"
						placeholder="*********"
						className="border w-full p-1"></input>
				</div>
				<button
					type="submit"
					className="bg-green-400 text-white  w-full p-2 font-bold border-2 border-green-400 hover:bg-white hover:text-green-400 transition-all">
					Register
				</button>
			</form>
		</div>
	);
};

export default Home;
