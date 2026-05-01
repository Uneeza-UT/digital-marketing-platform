import { Dialog, DialogPanel } from "@headlessui/react";
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { X, ArrowLeft, ArrowRight, CheckSquare2} from 'lucide-react'
import { useState, useEffect } from "react";
import { toast } from 'react-hot-toast'
import BasicInfo from './HeroModalSteps/BasicInfo'
import HeroModalServices from './HeroModalSteps/HeroModalServices'
import Budget from './HeroModalSteps/Budget'
import Message from './HeroModalSteps/Message'

export default function HeroModal({isOpen, onClose, submissionSuccess, setSubmissionSuccess}) {

    const {register, handleSubmit, reset, setValue, watch, trigger, formState: {isSubmitting, errors}} = useForm({
        defaultValues: {
            serviceIds: [],
            budget: ""
        },
        mode: "onChange",
    });
    const [step, setStep] = useState(1);
    const [phone, setPhone] = useState("");
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => { 
            const response = await fetch("https://localhost:44345/api/service")
            const data = await response.json();
            setServices(data);
        };

        fetchServices();

    }, [])

    const prevStep = () => (
        setStep(current => current - 1)
    )

    const nextStep = () => (
        setStep(current => current + 1)
    )

    const progress = (step / 4) * 100;

    const handleNextStep = async () => {

    const currentStepFields = step === 1 
                                ? ["name", "email", "industry"] 
                                : step === 2 ? ["serviceIds"] 
                                : step === 3 ? ["budget"] : [] 
    

    const valid = await trigger(currentStepFields); // triggers validation for these fields
    
    if (valid) nextStep(); // go to next step only if valid
};

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
                    setStep(1);
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
                        className="w-full max-w-xl"
                        initial={{ opacity:0, y:14 }}
                        animate={{ opacity:1, y:0 }}
                        transition={{ duration:0.6, ease:"easeOut" }}
                    >                        
                        <DialogPanel className='bg-white rounded-xl shadow-lg p-8 relative w-full' >

                            {!submissionSuccess ? (
                                <>
                                <button
                                    type="button"
                                    onClick={onClose} 
                                    className='absolute w-10 h-10 flex items-center justify-center rounded-full top-4 right-6 hover:text-brandMarketing-500 hover:bg-slate-50 transition-colors'
                                >
                                    <X className='text-brandMarketing-500'/>
                                </button>

                                <div className="flex justify-between text-xs text-slate-500 mt-6">
                                    <span>Step {step} of 4</span>
                                </div>
                                    <div className="w-full bg-gray-200 h-2.5 rounded mb-8 mt-4">
                                        <div
                                            className="bg-brandMarketing-500 h-2.5 rounded transition-all duration-300"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>                                
                                    
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        {step === 1 && <BasicInfo 
                                                            register={register}
                                                            errors={errors}
                                                            phone={phone}
                                                            setPhone={setPhone}  
                                                        />}
                                        {step === 2 && <HeroModalServices 
                                                            register={register}
                                                            setValue={setValue}
                                                            watch={watch}
                                                            errors={errors} 
                                                            services={services}
                                                        />}

                                        {step === 3 && <Budget 
                                                            register={register}
                                                            setValue={setValue}
                                                            watch={watch}
                                                            errors={errors} 
                                                        />}

                                        {step === 4 && <Message 
                                                            register={register}
                                                            errors={errors}
                                                            watch={watch} 
                                                            services={services}
                                                        />}

                                        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-10">
                                            <button 
                                                onClick={prevStep} 
                                                type="button"
                                                disabled={step === 1}
                                                className="w-full sm:w-auto flex items-center justify-center h-12 px-6
                                                bg-brandMarketing-500 text-white rounded-xl font-medium 
                                                transition-all duration-300 sm:hover:bg-brandMarketing-600 
                                                sm:hover:scale-105 hover:shadow-xl disabled:bg-slate-100 
                                                disabled:text-slate-700 disabled:border disabled:border-slate-200 
                                                disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-slate-100 
                                                disabled:hover:shadow-none"
                                            >
                                                <ArrowLeft className="w-4 h-4 mr-2" /> Back
                                            </button>  

                                            <button
                                                type={step === 4 ? "submit" : "button"} 
                                                onClick={(e) => {
                                                    if (step !== 4) {
                                                        e.preventDefault(); // stop actual form submission for steps 1-3
                                                        handleNextStep();   // just go to next step
                                                    }
                                                    // step 4 will naturally submit the form via handleSubmit
                                                }}
                                                disabled={isSubmitting}
                                                className="w-full sm:w-auto flex items-center justify-center h-12 px-6
                                                bg-brandMarketing-500 text-white rounded-xl font-medium 
                                                transition-all duration-300 sm:hover:bg-brandMarketing-600 
                                                sm:hover:scale-105 hover:shadow-xl disabled:bg-slate-100 
                                                disabled:text-slate-700 disabled:border disabled:border-slate-200 
                                                disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-slate-100 
                                                disabled:hover:shadow-none"
                                            >
                                                {step === 4 ? "Book Consultation" : "Continue"}                                               
                                                <ArrowRight className="w-4 h-4 ml-2" />
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