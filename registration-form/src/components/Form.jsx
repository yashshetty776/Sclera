import { useState, useEffect } from "react"
import PersonalInfo from "./PersonalInfo";
import AccountDetails from "./AccountDetails";
import Review from "./Review";
import Submitting from "./Submitting";
import Success from "./Success";

const Form = () => {

const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: ""
});

const [step, setStep] = useState(1);
const [submitting, setSubmitting] = useState(false);
const [success, setSuccess] = useState(false);

useEffect(() => {
    if(submitting) {
        setTimeout(() => {
            setSubmitting(false);
            setSuccess(true);
        }, 2000);
    }
}, [submitting]);

const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
}

const nextStep = () => setStep(prev => prev + 1);
const prevStep = () => setStep(prev => prev - 1);

const handleSubmit = () => setSubmitting(true);

if (submitting) return <Submitting />
if (success) return <Success />
  
  return (
    <>
        {step===1 && (<PersonalInfo formData={formData} handleChange={handleChange} nextStep={nextStep} />)}
        {step===2 && (<AccountDetails formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />)}
        {step===3 && (<Review formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />)}
    </>
  )
}

export default Form