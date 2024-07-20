import { useState, useCallback, useEffect, useRef } from "react";

function Password() {
  const [length, setLength] = useState(16);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialAllowed, setspecialAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pwd ='';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (specialAllowed) str += "!@#$%^&*()_+~`[]{}|?><.:";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pwd += str.charAt(char);
    }

    setPassword(pwd);
  }, [length, numberAllowed, specialAllowed, setPassword]);

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, specialAllowed, passwordGenerator])

  const passwordRef = useRef(null)

  const copyPassword = useCallback((e)=>{
    e.preventDefault();
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])
  
  return (
    <form>
      <input
        type="text"
        value={password}
        readOnly
        className="border-2 px-3 py-2"
        ref={passwordRef}
      />
      <button 
      onClick={copyPassword}
      className="bg-blue-600 text-white px-3 py-2">copy</button>
      <input
        type="range"
        onChange={(e) => setLength(e.target.value)}
        min={6}
        max={30}
        value={length}
        
      />
      <label>Length : {length}</label>
      <input
        type="checkbox"
        id="numbers"
        onChange={() => setNumberAllowed((flag) => !flag)}
      />
      <label htmlFor="numbers">Numbers</label>
      <input
        type="checkbox"
        id="special"
        onChange={() => setspecialAllowed((flag) => !flag)}
      />
      <label htmlFor="special">Special Chars</label>
    </form>
  );
}

export default Password;
