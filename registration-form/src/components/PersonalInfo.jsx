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
    <div className="w-2xl mx-auto mt-10 p-6 text-white bg-neutral-900 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center">Personal Information</h1>
      <p className="mt-1 text-center text-green-500">Step 1</p>
      <form className="flex flex-col gap-4">
        <label className="text-xl font-medium mt-2">Full Name:</label>
        <input
        type="text"
        name="name"
        placeholder="Yash Shetty"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-sm focus:ring-2 focus:ring-blue-500"
        />

        <label className="text-xl font-medium mt-2">Email:</label>
        <input
        type="email"
        name="email"
        placeholder="abc@gmail.com"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-sm focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full mt-4 bg-indigo-500 hover:bg-indigo-600 p-2 rounded-lg font-bold text-xl transition-all duration-200" 
        type="button" onClick={validateFunction}>Next</button>
      </form>
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  )
}

export default PersonalInfo