// src/components/Problems/CreateProblemForm.tsx

import { useState, useEffect } from "react";
import ReactQuill from "react-quill"; // Import react-quill
import "react-quill/dist/quill.snow.css"; // Import react-quill styles
import { Testcase } from "../../types/problems";
import TagsInput from "./TagsInput";
import DifficultySelector from "./DifficultySelector";
import TestcaseInput from "./TestcaseInput";
import CodeEditorInput from "./CodeEditorInput"; // Updated to use CodeEditorWindow
import ErrorModal from "../../components/Utils/ErrorModal";
import SuccessModal from "../../components/Utils/SuccessModal";
import { problemService } from "../../api/problemService";
import {
	DEFAULT_CPP_TEMPLATE,
	DEFAULT_CPP_DRIVER,
	DEFAULT_JAVA_TEMPLATE,
	DEFAULT_JAVA_DRIVER,
	DEFAULT_PYTHON_TEMPLATE,
	DEFAULT_PYTHON_DRIVER,
} from "../../constants/defaultCodes";

const CreateProblemForm = () => {
	const [problemId, setProblemId] = useState("");
	const [problemTitle, setProblemTitle] = useState("");
	const [problemDescription, setProblemDescription] = useState("");
	const [problemTags, setProblemTags] = useState<string[]>([]);
	const [problemDifficulty, setProblemDifficulty] = useState("");
	const [problemInputFormat, setProblemInputFormat] = useState("");
	const [problemOutputFormat, setProblemOutputFormat] = useState("");
	const [problemSampleInput, setProblemSampleInput] = useState("");
	const [problemSampleOutput, setProblemSampleOutput] = useState("");
	const [problemNote, setProblemNote] = useState("");
	const [problemConstraints, setProblemConstraints] = useState("");
	const [problemTestcases, setProblemTestcases] = useState<Testcase[]>([]);
	const [problemCppTemplate, setProblemCppTemplate] = useState(DEFAULT_CPP_TEMPLATE);
	const [problemCppDriverCode, setProblemCppDriverCode] = useState(DEFAULT_CPP_DRIVER);
	const [problemJavaTemplate, setProblemJavaTemplate] = useState(DEFAULT_JAVA_TEMPLATE);
	const [problemJavaDriverCode, setProblemJavaDriverCode] = useState(DEFAULT_JAVA_DRIVER);
	const [problemPythonTemplate, setProblemPythonTemplate] = useState(DEFAULT_PYTHON_TEMPLATE);
	const [problemPythonDriverCode, setProblemPythonDriverCode] = useState(DEFAULT_PYTHON_DRIVER);
	const [problemEditorial, setProblemEditorial] = useState("");
	const [message, setMessage] = useState("");
	const [errorModalOpen, setErrorModalOpen] = useState(false);
	const [successModalOpen, setSuccessModalOpen] = useState(false);

	useEffect(() => {
		// Generate a unique problem ID in DATEMONTHYEARHOURMINUTESECOND format with milliseconds for uniqueness
		const now = new Date();
		const year = now.getFullYear();
		const month = String(now.getMonth() + 1).padStart(2, '0');
		const day = String(now.getDate()).padStart(2, '0');
		const hour = String(now.getHours()).padStart(2, '0');
		const minute = String(now.getMinutes()).padStart(2, '0');
		const second = String(now.getSeconds()).padStart(2, '0');
		const millisecond = String(now.getMilliseconds()).padStart(3, '0');
		
		const generatedId = `${day}${month}${year}${hour}${minute}${second}${millisecond}`;
		setProblemId(generatedId);
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Validation
		if (
			!problemId ||
			!problemTitle ||
			!problemDescription ||
			!problemDifficulty
		) {
			setMessage("Please fill in all the required fields.");
			setErrorModalOpen(true);
			return;
		}

		// Create the problem data
		const newProblem = {
			problemId, // Temporary ID generation for the example
			problemTitle,
			problemDescription,
			problemTags,
			problemDifficulty,
			problemInputFormat,
			problemOutputFormat,
			problemSampleInput,
			problemSampleOutput,
			problemNote,
			problemConstraints,
			problemTestcases,
			problemEditorialIsHidden: false,
			problemIsHidden: false,
			problemCppTemplate,
			problemCppDriverCode,
			problemJavaTemplate,
			problemJavaDriverCode,
			problemPythonTemplate,
			problemPythonDriverCode,
			problemEditorial,
		};

		// Call the API to create the problem
		const response = await problemService.createProblem(newProblem);
		if (response.data.ok) {
			setMessage("Problem created successfully!");
			setSuccessModalOpen(true);
		} else {
			setMessage(
				response.data.message ||
					"An error occurred while creating the problem.",
			);
			setErrorModalOpen(true);
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="bg-white dark:bg-editorbg text-basecolor p-6 rounded-lg shadow-md space-y-4 mx-auto w-full mt-10">
				{/* Problem ID */}
				<div className="flex flex-col">
					<label className="font-semibold text-lg mb-2" htmlFor="problemId">
						Problem ID <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						value={problemId}
						readOnly
						className="border bg-gray-100 rounded-md p-2 text-lg cursor-not-allowed"
						placeholder="Auto-generated ID"
					/>
				</div>
				{/* Problem Title */}
				<div className="flex flex-col">
					<label className="font-semibold text-lg mb-2" htmlFor="problemTitle">
						Problem Title <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						value={problemTitle}
						onChange={(e) => setProblemTitle(e.target.value)}
						className="border bg-white rounded-md p-2 text-lg"
						placeholder="Enter the problem title here..."
					/>
				</div>

				{/* Problem Description */}
				<div className="flex flex-col">
					<label
						className="font-semibold text-lg mb-2"
						htmlFor="problemDescription">
						Problem Description <span className="text-red-500">*</span>
					</label>
					<ReactQuill
						value={problemDescription}
						onChange={(value) => setProblemDescription(value)}
						className="border rounded-md p-2 min-h-[100px] bg-gray-50 dark:bg-editorbg text-lg"
						placeholder="Enter the problem description here..."
					/>
				</div>

				{/* Problem Tags */}
				<TagsInput tags={problemTags} setTags={setProblemTags} />

				{/* Problem Difficulty */}
				<DifficultySelector
					selectedDifficulty={problemDifficulty}
					setSelectedDifficulty={setProblemDifficulty}
				/>

				{/* Problem Input Format */}
				<div className="flex flex-col">
					<label
						className="font-semibold text-lg mb-2"
						htmlFor="problemInputFormat">
						Input Format <span className="text-red-500">*</span>
					</label>
					<ReactQuill
						value={problemInputFormat}
						onChange={(value) => setProblemInputFormat(value)}
						className="border rounded-md p-2 min-h-[100px] bg-gray-50 dark:bg-editorbg text-lg"
						placeholder="Enter the input format here..."
					/>
				</div>

				{/* Problem Output Format */}
				<div className="flex flex-col">
					<label
						className="font-semibold text-lg mb-2"
						htmlFor="problemOutputFormat">
						Output Format <span className="text-red-500">*</span>
					</label>
					<ReactQuill
						value={problemOutputFormat}
						onChange={(value) => setProblemOutputFormat(value)}
						className="border rounded-md p-2 min-h-[100px] bg-gray-50 dark:bg-editorbg text-lg"
						placeholder="Enter the output format here..."
					/>
				</div>

				<div className="flex flex-row justify-center items-center">
					{/* Problem Sample Input */}
					<div className="flex flex-col w-full p-4">
						<label
							className="font-semibold text-lg mb-2"
							htmlFor="problemSampleInput">
							Sample Input
						</label>
						<textarea
							value={problemSampleInput}
							onChange={(e) => setProblemSampleInput(e.target.value)}
							className="border rounded-md p-2 min-h-[100px] bg-gray-50 dark:bg-editorbg text-lg"
							placeholder="Enter the sample input here..."
						/>
					</div>
					<div className="divider divider-horizontal p-4"></div>
					{/* Problem Sample Output */}
					<div className="flex flex-col w-full p-4">
						<label
							className="font-semibold text-lg mb-2"
							htmlFor="problemSampleOutput">
							Sample Output
						</label>
						<textarea
							value={problemSampleOutput}
							onChange={(e) => setProblemSampleOutput(e.target.value)}
							className="border rounded-md p-2 min-h-[100px] bg-gray-50 dark:bg-editorbg text-lg"
							placeholder="Enter the sample input here..."
						/>
					</div>
				</div>

				{/* Problem Constraints */}
				<div className="flex flex-col">
					<label
						className="font-semibold text-lg mb-2"
						htmlFor="problemConstraints">
						Constraints
					</label>
					<ReactQuill
						value={problemConstraints}
						onChange={(value) => setProblemConstraints(value)}
						className="border rounded-md p-2 min-h-[100px] bg-gray-50 dark:bg-editorbg text-lg"
						placeholder="Enter the constraints here..."
					/>
				</div>

				{/* Problem Note */}
				<div className="flex flex-col">
					<label className="font-semibold text-lg mb-2" htmlFor="problemNote">
						Note
					</label>
					<ReactQuill
						value={problemNote}
						onChange={(value) => setProblemNote(value)}
						className="border rounded-md p-2 min-h-[100px] bg-gray-50 dark:bg-editorbg text-lg"
						placeholder="Enter any additional notes here..."
					/>
				</div>

				{/* Testcases */}
				<TestcaseInput
					testcases={problemTestcases}
					setTestcases={setProblemTestcases}
				/>

				{/* Code Editor for Templates */}
				<div className="flex flex-row justify-center items-center">
					<div className="flex flex-col w-full p-4">
						<CodeEditorInput
							language="cpp"
							code={problemCppTemplate}
							label={"C++ Template"}
							onChange={(action: string, data: string) => {
								if (action === "code") {
									setProblemCppTemplate(data);
								} else {
									console.warn("case not handled!", action, data);
								}
							}}
							isTemplate={false}
						/>
					</div>
					<div className="flex flex-col w-full p-4">
						<CodeEditorInput
							language="cpp"
							code={problemCppDriverCode}
							label={"C++ Driver Code"}
							onChange={(action: string, data: string) => {
								if (action === "code") {
									setProblemCppDriverCode(data);
								} else {
									console.warn("case not handled!", action, data);
								}
							}}
							isTemplate={false}
						/>
					</div>
				</div>

				<div className="flex flex-row justify-center items-center">
					<div className="flex flex-col w-full p-4">
						<CodeEditorInput
							language="java"
							code={problemJavaTemplate}
							onChange={(action: string, data: string) => {
								if (action === "code") {
									setProblemJavaTemplate(data);
								} else {
									console.warn("case not handled!", action, data);
								}
							}}
							isTemplate={false}
							label="Java Template"
						/>
					</div>

					<div className="flex flex-col w-full p-4">
						<CodeEditorInput
							language="java"
							code={problemJavaDriverCode}
							onChange={(action: string, data: string) => {
								if (action === "code") {
									setProblemJavaDriverCode(data);
								} else {
									console.warn("case not handled!", action, data);
								}
							}}
							isTemplate={false}
							label={"Java Driver Code"}
						/>
					</div>
				</div>

				<div className="flex flex-row justify-center items-center">
					<div className="flex flex-col w-full p-4">
						<CodeEditorInput
							language="python"
							code={problemPythonTemplate}
							onChange={(action: string, data: string) => {
								if (action === "code") {
									setProblemPythonTemplate(data);
								} else {
									console.warn("case not handled!", action, data);
								}
							}}
							isTemplate={false}
							label={"Python Template"}
						/>
					</div>

					<div className="flex flex-col w-full p-4">
						<CodeEditorInput
							language="python"
							code={problemPythonDriverCode}
							onChange={(action: string, data: string) => {
								if (action === "code") {
									setProblemPythonDriverCode(data);
								} else {
									console.warn("case not handled!", action, data);
								}
							}}
							isTemplate={false}
							label={"Python Driver Code"}
						/>
					</div>
				</div>

				{/* Editorial */}
				<div className="flex flex-col">
					<label
						className="font-semibold text-lg mb-2"
						htmlFor="problemEditorial">
						Editorial
					</label>
					<ReactQuill
						value={problemEditorial}
						onChange={(value) => setProblemEditorial(value)}
						className="border rounded-md p-2 min-h-[100px] bg-gray-50 dark:bg-editorbg text-lg"
						placeholder="Enter the editorial here..."
					/>
				</div>

				<button
					type="submit"
					className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
					Submit Problem
				</button>
			</form>

			{/* Error Modal */}
			{errorModalOpen && (
				<ErrorModal
					message={message}
					onClose={() => setErrorModalOpen(false)}
					isOpen={errorModalOpen}
				/>
			)}

			{/* Success Modal */}
			{successModalOpen && (
				<SuccessModal
					message={message}
					onClose={() => setSuccessModalOpen(false)}
					isOpen={successModalOpen}
				/>
			)}
		</>
	);
};

export default CreateProblemForm;
