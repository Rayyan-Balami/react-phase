import React, { useRef } from "react";
import { useForm } from "../contexts/Form";

function Form() {
  const radioOptions = ["male", "female"];
  const checkboxOptions = ["apple", "banana", "peach"];
  const selectInputs = ["lambo", "ferrari", "tata"];

  const {
    state: { textareaInput },
    dispatch,
  } = useForm();

  const tags = useRef();
  const formRef = useRef(); // Step 1: Create a ref for the form


  const addTags = () => {
    let newTags = tags.current.value.split(",");
    newTags = newTags.filter((tag) => tag.trim() !== "");
    newTags = newTags.map((tag) => tag.trim());
    dispatch({ type: "ADD_TAGS", payload: newTags });
    tags.current.value = "";
  };

  const removeTags = (index) => {
    dispatch({ type: "REMOVE_TAGS", payload: index });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current; // Access the form using the ref
    console.log(formRef.current.textInput)
    const formValues = {
      textInput: form.textInput.value,
      passwordInput: form.passwordInput.value,
      emailInput: form.emailInput.value,
      numberInput: form.numberInput.value,
      dateInput: form.dateInput.value,
      radioOption: form.radioOption.value,
      checkboxOption: Array.from(form.checkboxOption).filter(input => input.checked).map(input => input.value),
      selectInput: form.selectInput.value,
      textareaInput: tags.current.value.split(",").map(tag => tag.trim()).filter(tag => tag),
      fileInput: form.fileInput.files[0] // Assuming single file upload
    };
    dispatch({ type: "SUBMIT_FORM", payload: formValues });
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Comprehensive Form</h2>
      <form id="comprehensiveForm" ref={formRef} onSubmit={handleSubmit}>
        {/* Text Input */}
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="textInput">
            Text Input
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-600"
            id="textInput"
            name="textInput"
            type="text"
            placeholder="Enter text"
          />
        </div>
        {/* Password Input */}
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="passwordInput">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-600"
            id="passwordInput"
            name="passwordInput"
            type="password"
            placeholder="Enter password"
          />
        </div>
        {/* Email Input */}
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="emailInput">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-600"
            id="emailInput"
            name="emailInput"
            type="email"
            placeholder="Enter email"
          />
        </div>
        {/* Number Input */}
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="numberInput">
            Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-600"
            id="numberInput"
            name="numberInput"
            type="number"
            placeholder="Enter number"
          />
        </div>
        {/* Date Input */}
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="dateInput">
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-600"
            id="dateInput"
            name="dateInput"
            type="date"
          />
        </div>
        {/* Radio Buttons */}
        <div className="mb-4 space-x-4">
          <label className="block font-bold mb-2">Radio Buttons</label>
          {radioOptions.map((option) => (
            <label key={option} className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600"
                name="radioOption"
                defaultValue={option}
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
        {/* Checkboxes */}
        <div className="mb-4 space-x-4">
          <label className="block font-bold mb-2">Checkboxes</label>
          {checkboxOptions.map((option) => (
            <label key={option} className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600"
                name="checkboxOption"
                value={option}
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
        {/* Select Dropdown */}
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="selectInput">
            Select
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-600"
            id="selectInput"
            name="selectInput"
          >
            {selectInputs.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {/* Textarea */}
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="textareaInput">
            Textarea
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-600"
            id="textareaInput"
            name="textareaInput"
            rows={4}
            placeholder="Enter text comma sepreared (,)"
            defaultValue={""}
            ref={tags}
          />
          <button
            type="button"
            className="my-4 block bg-green-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline hover:bg-green-700 text-sm"
            onClick={addTags}
          >
            Add tags
          </button>
          {textareaInput.map((tag, index) => (
            <span
              key={tag}
              className="inline-blocktext-gray-300 font-bold px-2 py-1 bg-gray-700 rounded-xl text-sm mr-2 mt-2"
              onClick={() => removeTags(index)}
            >
              {tag}
            </span>
          ))}

          <p className="text-sm mt-4">
            {textareaInput.length !== 0 ? "Click on the tag to remove it" : ""}
          </p>
        </div>
        {/* File Upload */}
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="fileInput">
            File Upload
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-600"
            id="fileInput"
            name="fileInput"
            type="file"
          />
        </div>
        {/* Submit Button */}
        <div className="mb-4">
          <button
            className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-indigo-700"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
