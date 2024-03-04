import React from "react";

const ToDoList = () => {
	const mockUserName = "kubrick";
	return (
		<div className="w-screen h-screen flex items-center justify-center">
			<div className="w-full h-fit max-w-[400px] border-t-4 border-green-400 shadow-md flex p-5 items-center flex-col rounded-md">
				<h1 className="text-xl p-4">{mockUserName} is logged in.</h1>

				<ul className="items-start flex flex-col justify-start w-full">
					<span className="text-sm font-bold">To Do List:</span>
					<li className="text-sm">-ToDo1</li>
					<li className="text-sm">-ToDo2</li>
				</ul>
			</div>
		</div>
	);
};

export default ToDoList;
