import { useState } from "react";

const AccountDetails = ({formData, nextStep, prevStep, handleChange}) => {

  const [error, setError] = useState("");
  
    const validateFunction = () => {
  
      const usernameRegex = /^[A-Za-z0-9]{3,}$/;
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
      if(formData.username.trim() === "" || formData.password.trim() === ""){
        setError("Please Enter all Fields");
        return;
      } 
      
      if(!usernameRegex.test(formData.username)){
        setError("Username must have atleast 3 letters and can include only alphabets and numbers.");
        return;
      }
      
      if(!passwordRegex.test(formData.password)){
        setError("Password must contain uppercase, lowercase, number, special character and must have atlest 8 characters.");
        return;
      }
  
      setError("");
      nextStep();
    }


  return (
    <>
      <h1>Account Details</h1>
      <form>
        <label>Username:</label>
        <input
        type="text"
        name="username"
        placeholder="ABC"
        value={formData.username}
        onChange={handleChange}
        />

        <label>Password:</label>
        <input
        type="password"
        name="password"
        placeholder="******"
        value={formData.password}
        onChange={handleChange}
        />

        <button type="button" onClick={validateFunction}>Next</button>
        <button type="button" onClick={prevStep}>Previous</button>
      </form>
      {error && <p>{error}</p>}
    </>
  )
}

export default AccountDetails