import { DialogTitle } from "@headlessui/react";

export default function Budget({register, errors, setValue, watch}) {

    const budgetOptions = [
        "$500 – $1,000",
        "$1,000 – $5,000",
        "$5,000+",
        "Not Sure Yet"
    ]

    const selectedBudget = watch("budget");

    const handleSelect = (value) => {
        setValue("budget", value, { shouldValidate: true })
    }

    return (
        <>
            <DialogTitle className="text-2xl text-center font-bold text-brandMarketing-900"> 
                What's Your Budget Range?
            </DialogTitle> 

            <p className="text-base text-brandMarketing-800 mt-4 leading-relaxed text-center"> 
                This helps us recommend the best strategy for your goals.
            </p>

             <div className="mt-8 flex flex-wrap gap-3 justify-center mb-4">
                {budgetOptions.map((budget) => (
                    <button
                        key={budget}
                        type="button"
                        onClick={() => handleSelect(budget)}
                        className={`
                            px-5 py-2 rounded-full border text-sm font-medium transition-all
                            ${selectedBudget === budget
                                ? "bg-brandMarketing-500 text-white border-brandMarketing-500 scale-105"
                                : "bg-white text-slate-700 border-slate-300 hover:border-brandMarketing-400"
                            }
                        `}
                    >
                        {budget}
                    </button>
                ))}

            </div>

             
            <input
                type="hidden"
                {...register("budget", {
                    required: "Please select a budget range"
                })}
            />

            {errors.budget && <p className='text-red-500 text-sm'> {errors.budget.message} </p>}
        </>
       
    )
}