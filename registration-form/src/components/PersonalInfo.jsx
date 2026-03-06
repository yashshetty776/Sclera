import { useState } from "react";

const PersonalInfo = ({formData, handleChange, nextStep}) => {

  const [error, setError] = useState("");

  const validateFunction = () => {

    const nameRegex = /^[A-Za-z ]{3,}$/;
    const emailRegex = /^[A-Za-z0-9._%]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if(formData.name.trim() === "" || formData.email.trim() === ""){
      setError("Please Enter all Fields");
      return;
    } 
    
    if(!nameRegex.test(formData.name)){
      setError("Name must have atleast 3 letters and include only alphabets.");
      return;
    }
    
    if(!emailRegex.test(formData.email)){
      setError("Email must be of the form abc@gmail.com.");
      return;
    }

    setError("");
    nextStep();
  }

  return (
    <>
      <h1>Personal Information</h1>
      <form>
        <label>Name:</label>
        <input
        type="text"
        name="name"
        placeholder="Yash Shetty"
        value={formData.name}
        onChange={handleChange}
        />

        <label>Email:</label>
        <input
        type="email"
        name="email"
        placeholder="abc@gmail.com"
        value={formData.email}
        onChange={handleChange}
        />
        <button type="button" onClick={validateFunction}>Next</button>
      </form>
      {error && <p>{error}</p>}
    </>
  )
}

export default PersonalInfo