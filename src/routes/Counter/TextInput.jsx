import { useState } from "react";

// Child is TextInput's child
import Child from "./Child";

const TextInput = () => {
	const [textInput, setTextInput] = useState("");

	// We need to pass an event for something to happen
	const handleChange = (event) => {
		const newString = event.target.value;

		setTextInput(() => {
			return newString;
		});
	};

	return (
		<div>
			{/* Using the state textInput to set the value */}
			<input type="text" onChange={(event) => handleChange(event)} value={textInput} />

			<h3>{textInput}</h3>

			{/* Why data=data */}
			<Child />
		</div>
	);
};

export default TextInput;
