import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { DialogTitle } from "@headlessui/react";

export default function BasicInfo({register, phone, setPhone, errors}) {

    const [error, setError] = useState("");

    const handlePhoneChange = (formattedValue) => {
        setPhone(formattedValue);

        const phoneNumberObj = parsePhoneNumberFromString(formattedValue.startsWith("+") 
                                                                        ? formattedValue 
                                                                        : "+" + formattedValue);
        if (phoneNumberObj && !phoneNumberObj.isValid()) {
            setError("Invalid phone number for this country");
        } 
        else {
            setError("");
        }
    }

    return (
        <>
            <DialogTitle className="text-2xl text-center font-bold text-brandMarketing-900"> 
                Let's Get Started 
            </DialogTitle> 

            <p className="text-base text-brandMarketing-800 mt-4 leading-relaxed text-center"> 
                Tell us a little about your business and how we can help. 
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                <label className='flex flex-col gap-2 w-full'>
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
            
                <label className='flex flex-col gap-2 w-full'>
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
            </div>
            

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                <label className='flex flex-col gap-2 w-full'>
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
                        containerClass="!w-full"
                        inputClass={`!w-full !h-[40px] !pl-12 !rounded-lg !outline-none !border ${
                            error ? "!border-red-500" : "!border-slate-200 !focus:ring-2 !focus:ring-brandMarketing-500/50"
                        } !bg-brandMarketing-100`}
                        inputStyle={{
                            width: '100%',
                            height: '100%'
                        }}
                    />

                    {error && <p className='text-red-500 text-sm'> {error} </p>}
                </label>

                <label className='flex flex-col gap-2 w-full'>
                    <span className='text-xs uppercase tracking-widest font-semibold text-brandMarketing-800'> 
                        Company Name: 
                    </span>
                    <input
                        type="text"
                        placeholder="Your Company Name"
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
            </div>
            

            <label className='flex flex-col gap-2 w-full mt-8'>
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

        </>
    )
}