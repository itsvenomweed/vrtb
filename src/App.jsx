import { useState } from "react";
// import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="bg-slate-800 h-screen flex justify-center items-center">
			<div className="bg-white flex flex-col items-center justify-center p-16 rounded-xl shadow-xl shadow-slate-900 text-slate-600">
				<h1 className="text-3xl font-bold">VRTB Counter</h1>
				<div className="bg-slate-50 mt-4 p-6 flex items-center justify-center font-bold text-5xl rounded-2xl border text-slate-600">
					{count}
				</div>
				<button
					type="button"
					onClick={() => setCount((count) => count + 1)}
					className="mt-4 uppercase font-bold px-4 py-2 rounded shadow-xl hover:shadow-md shadow-green-300 hover:shadow-green-300 bg-green-400 text-white flex items-center justify-center transition duration-300 ease-in-out"
				>
					<span>Count up</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 ml-2"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default App;
