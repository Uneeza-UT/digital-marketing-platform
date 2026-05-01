import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { X, CheckSquare2 } from 'lucide-react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { toast } from 'react-hot-toast'

export default function Modal({isOpen, onClose, submissionSuccess, setSubmissionSuccess}) {

    const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm();
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [services, setServices] = useState([]);

    const handlePhoneChange = (formattedValue) => {
        setPhone(formattedValue);

        const phoneNumberObj = parsePhoneNumberFromString(formattedValue.startsWith("+") ? 
                                                                        formattedValue : "+" + formattedValue);
        if (phoneNumberObj && !phoneNumberObj.isValid()) {
            setError("Invalid phone number for this country");
        } 
        else {
            setError("");
        }
    }

    useEffect(() => {
        const fetchServices = async () => { 
            const response = await fetch("https://localhost:44345/api/service")
            const data = await response.json();
            setServices(data);
        };

        fetchServices();

    }, [])

    const onSubmit = async (data) => {

        try{
            const payload = {
                ...data,
                phoneNumber: phone,
            }
            const response = await fetch("https://localhost:44345/api/bookconsultation", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(payload)
            })

            if (response.ok) {
                 toast.success("Consultation submitted successfully!");
                 setSubmissionSuccess(true);
                 reset();
                 setPhone("");
            } 
            else {
                toast.error("Something went wrong");
            }
        }
        catch (error){
            toast.error("Error submtting form!")
            console.error("Error!", error)
        }
    }

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50" >
            <div className="fixed inset-0 bg-slate-900/60 z-40 backdrop-blur-sm transition-opacity" aria-hidden="true" />
            <div className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-8"> 
                    <motion.div 
                        className="w-full max-w-lg"
                        initial={{ opacity:0, y:14 }}
                        animate={{ opacity:1, y:0 }}
                        transition={{ duration:0.6, ease:"easeOut" }}
                    >                        
                        <DialogPanel className='bg-white rounded-xl shadow-lg p-8 relative w-full max-w-lg' >
    
                            
                            {!submissionSuccess ? (
                                <>
                                    <button
                                        type="button"
                                        onClick={onClose} 
                                        className='absolute w-10 h-10 flex items-center justify-center rounded-full top-4 right-6 hover:text-brandMarketing-500 hover:bg-slate-50 transition-colors'
                                    >
                                        <X className='text-brandMarketing-500'/>
                                    </button>

                                    <DialogTitle className="text-2xl text-center font-bold mb-6 text-brandMarketing-900 mt-6"> Get a Consultation </DialogTitle> 
                                    <form className='space-y-7' onSubmit={handleSubmit(onSubmit)}>
                                        <label className='flex flex-col gap-3 w-full'>
                                            <span className='text-xs uppercase tracking-widest font-semibold text-brandMarketing-800'> 
                                                Name: 
                                                <span className="text-red-500">*</span>
                                            </span>
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                className={`w-full border ${errors.name ? "border-red-500" : "border-slate-200 focus:ring-2 focus:ring-brandMarketing-500/50 "} bg-brandMarketing-100 px-2 py-2 rounded-lg outline-none`} 
                                                {...register("name", {
                                                    required: "Name is required",
                                                    pattern: {
                                                        value: /^[A-Za-z\s]+$/,
                                                        message: "Only letters allowed"
                                                    }
                                                })}
                                            />
                                            {errors.name && <p className='text-red-500 text-sm'> {errors.name.message} </p>}
                                        </label>
                                        
                                        <label className='flex flex-col gap-3 w-full'>
                                            <span className='text-xs uppercase tracking-widest font-semibold text-brandMarketing-800'> 
                                                Email: 
                                                <span className="text-red-500">*</span>
                                            </span>
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className={`w-full border ${errors.email ? "border-red-500" : "border-slate-200 focus:ring-2 focus:ring-brandMarketing-500/50 "} bg-brandMarketing-100 px-2 py-2 rounded-lg outline-none`} 
                                                {...register("email", {
                                                    required: "Email is required",
                                                    pattern: {
                                                        value: /^\S+@\S+\.\S+$/,
                                                        message: "Invalid email format"
                                                    }
                                                })}
                                            />
                                            {errors.email && <p className='text-red-500 text-sm'> {errors.email.message} </p>}
                                        </label>

                                        <label className='flex flex-col gap-3 w-full'>
                                            <span className='text-xs uppercase tracking-widest font-semibold text-brandMarketing-800'> 
                                                Phone Number: 
                                            </span>

                                            <PhoneInput
                                                country={'us'}
                                                value={phone}            // controlled value
                                                onChange={(value, data, event, formattedValue) => {
                                                    handlePhoneChange(formattedValue)
                                                }} // update state
                                                enableSearch
                                                placeholder="+1 214 000 1115"
                                                inputProps={{
                                                    maxLength: 20,
                                                }}
                                                inputClass={`!w-full !px-2 !py-2 !pl-12 !rounded-lg !outline-none !border ${
                                                    error ? "!border-red-500" : "!border-slate-200 !focus:ring-2 !focus:ring-brandMarketing-500/50"
                                                } !bg-brandMarketing-100`}
                                                inputStyle={{
                                                    width: '100%',
                                                    height: '100%'
                                                }}
                                            />

                                            {error && <p className='text-red-500 text-sm'> {error} </p>}
                                        </label>

                                        <label className='flex flex-col gap-3 w-full'>
                                            <span className='text-xs uppercase tracking-widest font-semibold text-brandMarketing-800'> 
                                                Company / Brand Name: 
                                            </span>
                                            <input
                                                type="text"
                                                placeholder="Your Company / Brand Name Here"
                                                className={`w-full border ${errors.brandName ? "border-red-500" : "border-slate-200 focus:ring-2 focus:ring-brandMarketing-500/50 "} bg-brandMarketing-100 px-2 py-2 rounded-lg outline-none`} 
                                                {...register("brandName", {
                                                    pattern: {
                                                        value: /^[A-Za-z0-9\s\-\&\.'()]+$/,
                                                        message: "Only letters, numbers, and spaces allowed"
                                                    }
                                                })}
                                            />
                                            {errors.brandName && <p className='text-red-500 text-sm'> {errors.brandName.message} </p>}
                                        </label>

                                        <label className='flex flex-col gap-3 w-full'>
                                            <span className='text-xs uppercase tracking-widest font-semibold text-brandMarketing-800'> 
                                                Industry: 
                                                <span className="text-red-500">*</span>
                                            </span>
                                            <select
                                                className={`w-full border ${errors.industry ? "border-red-500" : "border-slate-200 focus:ring-2 focus:ring-brandMarketing-500/50 "} bg-brandMarketing-100 px-2 py-2 rounded-lg outline-none`} 
                                                {...register("industry", {
                                                    required: "Industry is required",
                                                })}
                                            >
                                                <option value=""> Select Industry </option>
                                                <option value="Ecommerce"> E-commerce </option>
                                                <option value="SaaS"> SaaS </option>
                                                <option value="Healthcare"> Healthcare </option>
                                                <option value="Education"> Education </option>
                                                <option value="Other"> Other </option>
                                            </select>
                                            {errors.industry && <p className='text-red-500 text-sm'> {errors.industry.message} </p>}
                                        </label>

                                        <label className='flex flex-col gap-3 w-full'>
                                            <span className='text-xs uppercase tracking-widest font-semibold text-brandMarketing-800'> 
                                                Budget: 
                                                <span className="text-red-500">*</span>
                                            </span>
                                            <select
                                                className={`w-full border ${errors.budget ? "border-red-500" : "border-slate-200 focus:ring-2 focus:ring-brandMarketing-500/50 "} bg-brandMarketing-100 px-2 py-2 rounded-lg outline-none`} 
                                                {...register("budget", {
                                                    required: "Please select your budget range",
                                                })}
                                            >
                                                <option value=""> Select Budget </option>
                                                <option value="$500 - $1000"> $500 – $1,000 </option>
                                                <option value="$1000 - $5000"> $1,000 – $5,000 </option>
                                                <option value="$5000+"> $5,000+ </option>
                                                <option value="Not Sure Yet"> Not Sure Yet </option>
                                            </select>
                                            {errors.budget && <p className='text-red-500 text-sm'> {errors.budget.message} </p>}
                                        </label>

                                        <div className="flex flex-col gap-3">
                                            <span className="text-xs uppercase tracking-widest font-semibold text-brandMarketing-800">
                                                Services Interested In <span className="text-red-500">*</span>
                                            </span>
                                            {services
                                                .filter(service => service.isActive)
                                                .map(service => (

                                                <label key={service.id} className="flex items-center gap-3">
                                                    <input
                                                        type="checkbox"
                                                        value={service.id}
                                                        {...register("serviceIds", {
                                                            validate: value => 
                                                            value && value.length > 0 || "Please select atleast one service"
                                                    })} 
                                                    />
                                                    {service.name}
                                                </label>
                                            ))}

                                            {errors.serviceIds && (<p className="text-red-500 text-sm">{errors.serviceIds.message} </p>)}
                                        </div>

                                        <label className='flex flex-col gap-3 w-full'>
                                            <span className='text-xs uppercase tracking-widest font-semibold text-brandMarketing-800'> 
                                                Briefly Describe Your Goals Here: 
                                            </span>
                                            <textarea
                                                placeholder="Your Goals"
                                                className="w-full border border-slate-200 bg-brandMarketing-100 px-2 py-2 rounded-lg focus:ring-2 focus:ring-brandMarketing-500/50 outline-none resize-none"
                                                rows={4}
                                                {...register("message")}
                                            ></textarea>
                                        </label>

                                        <div className="p-4 flex justify-center bg-white">
                                            <button
                                                type="submit"
                                                disabled = {isSubmitting}
                                                className="min-w-60 py-3 bg-brandMarketing-500 text-white rounded-xl font-bold hover:bg-brandMarketing-600 shadow-lg shadow-brandMarketing-500/30 transition-all"
                                            >
                                                {isSubmitting ? (
                                                <>
                                                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                                    Scheduling...
                                                </>) : (
                                                    "Schedule My Consultation"
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </>   
                            ) : (
                                <div className="flex flex-col items-center text-center mt-8">
                                    <h3 className="flex justify-center items-center gap-3 text-xl font-semibold text-green-700">
                                        <CheckSquare2 className="w-6 h-6 text-green-700" />
                                        Consultation Scheduled
                                    </h3>
                                    <p className="mt-4 mb-8 text-gray-600">
                                        Thank you for choosing us! We’ve successfully scheduled your consultation and will be in touch soon.
                                    </p>

                                    <button 
                                        type="button" // submit on last step
                                        onClick={() => setSubmissionSuccess(false)}
                                        className="w-full sm:w-auto flex items-center justify-center h-12 px-6
                                        bg-brandMarketing-500 text-white rounded-xl font-medium 
                                        transition-all duration-300 sm:hover:bg-brandMarketing-600 
                                        sm:hover:scale-105 hover:shadow-xl disabled:bg-slate-100 
                                        disabled:text-slate-700 disabled:border disabled:border-slate-200 
                                        disabled:cursor-not-allowed disabled:hover:scale-100 
                                        disabled:hover:shadow-none"
                                    >
                                        OK                                            
                                    </button>
                                </div>
                            )}
                                                
                        </DialogPanel>
                    </motion.div>  
                </div>              
            </div>             
        </Dialog>
    )
}