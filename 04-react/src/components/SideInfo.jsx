import React from 'react'
import { useForm } from '../contexts/Form'

function SideInfo() {
  const { state } = useForm();
  return (
    <div className={`
      ${state.isSubmitted ? "p-6 w-80 overflow-auto" : "w-0 overflow-hidden"} transition-all duration-1000 bg-gray-700
    `}>
    <h2 className="text-2xl font-bold mb-6">Submitted Information</h2>
    <div id="infoDisplay">
      <p>Text Input:{state.textInput}</p>
      <p>Password:{state.passwordInput}</p>
      <p>Email:{state.emailInput}</p>
      <p>Number:{state.numberInput}</p>
      <p>Date:{state.dateInput}</p>
  <div>
{
  state.fileInput && (
    <>
      <p>File: <span>{state.fileInput.name}</span></p>
      <img src={URL.createObjectURL(state.fileInput)} alt={state.fileInput.name} />
    </>
  )
}
</div>
      <p>Radio Option:{state.radioOption}</p>
      <p>Checkboxes: {state.checkboxOption.map((checkbox, index) => (
        <span key={index}>{checkbox}</span>
      ))}</p>

      <p>Select: {state.selectInput}</p>
      <p>Textarea: {state.textareaInput.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}</p>
    </div>
  </div>
  )
}

export default SideInfo