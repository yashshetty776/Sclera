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
    <div className="w-2xl mx-auto mt-10 p-6 text-white bg-neutral-900 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center">Account Details</h1>
      <p className="mt-1 text-center text-green-500">Step 2</p>
      <form className="flex flex-col gap-4">
        <label className="text-xl font-medium mt-2">Username:</label>
        <input
        type="text"
        name="username"
        placeholder="ABC123"
        value={formData.username}
        onChange={handleChange}
        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-sm focus:ring-2 focus:ring-blue-500"
        />

        <label className="text-xl font-medium mt-2">Password:</label>
        <input
        type="password"
        name="password"
        placeholder="********"
        value={formData.password}
        onChange={handleChange}
        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-sm focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex gap-4">
          <button className="w-full mt-4 bg-indigo-500 hover:bg-indigo-600 p-2 rounded-lg font-bold text-xl transition-all duration-200" 
          type="button" onClick={prevStep}>Previous</button>
          <button className="w-full mt-4 bg-indigo-500 hover:bg-indigo-600 p-2 rounded-lg font-bold text-xl transition-all duration-200" 
          type="button" onClick={validateFunction}>Next</button>
        </div>
      </form>
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  )
}

export default AccountDetails