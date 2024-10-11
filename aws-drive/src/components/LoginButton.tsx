import { useState } from "react";

function LoginButton() {
  const [inputValue, setInputValue] = useState("");
  const [username, setUsername] = useState("");

  const msg = () => {
    setUsername(inputValue);
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form>
        <label htmlFor="submit">Username</label>

        <input type="text" value={inputValue} onChange={handleInputChange} />

        <input type="button" id="submit" onClick={msg} value="Submit" />
      </form>
      <p>User is: {username}</p>
    </>
  );
}

export default LoginButton;
