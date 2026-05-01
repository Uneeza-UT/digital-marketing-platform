import { DialogTitle } from "@headlessui/react";

export default function Message({register, watch, services}) {

    return (
        <>
            <DialogTitle className="text-2xl text-center font-bold text-brandMarketing-900"> 
                Tell Us More About Your Goals
            </DialogTitle> 

            <p className="text-base text-brandMarketing-800 mt-4 leading-relaxed text-center"> 
                
            </p>

            <label className='flex flex-col gap-2 w-full mt-8'>
                <span className='text-xs uppercase tracking-widest font-semibold text-brandMarketing-800'> 
                    Briefly Describe Your Goals Here (Optional): 
                </span>
                <textarea
                    placeholder="Your Goals"
                    className="w-full border border-slate-200 bg-brandMarketing-100 px-2 py-2 rounded-lg focus:ring-2 focus:ring-brandMarketing-500/50 outline-none resize-none"
                    rows={4}
                    {...register("message")}
                ></textarea>
            </label>  

            <div className="mt-10 p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="text-2xl text-center font-bold text-brandMarketing-900 mb-6"> 
                    Review Your Details
                </h3>

                <div className="space-y-5">

                    <div>
                        <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
                            Basic Info
                        </p>

                        <div className="text-sm text-slate-700 space-y-1">
                            <p><span className="font-medium">Name:</span> {watch("name")}</p>
                            <p><span className="font-medium">Email:</span> {watch("email")}</p>
                            <p><span className="font-medium">Industry:</span> {watch("industry")}</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                            Services
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {watch("serviceIds")?.map(id => {
                                const service = services.find(s => s.id === id);
                                return (
                                    <span
                                        key={id}
                                        className="px-3 py-1 text-xs rounded-full border border-slate-300 bg-white text-brandMarketing-700 shadow-sm"
                                    >
                                        {service?.name}
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
                            Budget
                        </p>
                        <p className="text-sm text-slate-700 font-medium">
                            {watch("budget")}
                        </p>
                    </div>
                </div>
            </div>      
        </>     
    )
}