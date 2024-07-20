export const INITIAL_STATE = {
  textInput: '',
  passwordInput: '',
  emailInput: '',
  numberInput: '',
  dateInput: '',
  radioOption: '',
  checkboxOption: [],
  selectInput: '',
  textareaInput: [],
  fileInput: null,
  isSubmitted: false
}

export function reducer (currState,action) {
  switch(action.type) {
    case 'SUBMIT_FORM':
      console.log(action.payload)
      return {
        ...currState, 
        textInput: action.payload.textInput,
        passwordInput: action.payload.passwordInput,
        emailInput: action.payload.emailInput,
        numberInput: action.payload.numberInput,
        dateInput: action.payload.dateInput,
        radioOption: action.payload.radioOption,
        checkboxOption: action.payload.checkboxOption,
        selectInput: action.payload.selectInput,
        fileInput: action.payload.fileInput,
        isSubmitted: true
      }
      case 'ADD_TAGS':
        return {
          ...currState,
          textareaInput: [...currState.textareaInput, 
            ...action.payload]
        }
      case 'REMOVE_TAGS':
        return {
          ...currState,
          textareaInput: currState.textareaInput.filter((_,index) => index !== action.payload)
        }
      default:
        return currState
  }

}