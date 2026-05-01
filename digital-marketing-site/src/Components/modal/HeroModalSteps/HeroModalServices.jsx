import { DialogTitle } from "@headlessui/react";
import { Search, Share2Icon, PenTool, ChartLine, Mail,Target } from "lucide-react"
import HeroModalServiceCard from "./HeroModalServiceCard";

export default function HeroModalServices({register, setValue, watch, errors, services}) {
    
    const selectedServices = watch("serviceIds") || [];

    const serviceIconMap = {
        "Search Engine Optimization" : Search,
        "Social Media Management" : Share2Icon,
        "Content Strategy" : PenTool,
        "Performance Insights" : ChartLine,
        "Email Campaigns" : Mail,
        "PPC Advertising" : Target
    }

    const handleServices = (id) => {
        let updated;
        updated = selectedServices.includes(id)
                                    ? selectedServices.filter(x => x !== id)
                                    : [...selectedServices, id];
        setValue("serviceIds", updated, { shouldValidate: true });
    }

    return (
        <>
            <DialogTitle className="text-2xl text-center font-bold text-brandMarketing-900"> 
                What services are you interested in?
                <span className="text-red-500"> * </span>
            </DialogTitle> 

            <p className="text-base text-brandMarketing-800 mt-4 leading-relaxed text-center"> 
                Select the services you’d like help with. You can choose more than one.
            </p>

            <div className="mt-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                    {services
                    .filter(service => service.isActive)
                        .map(service => {
                        const icon = serviceIconMap[service.name];

                        return (
                            <HeroModalServiceCard 
                                key={service.id} 
                                Icon={icon}  
                                title={service.name}
                                selected={selectedServices.includes(service.id)}
                                onClick={() => handleServices(service.id)}
                            />
                        )
                    })}

                    <input
                        type="hidden"
                        {...register("serviceIds", {
                            validate: value => value.length > 0 || "Please select at least one service"
                        })}
                    />
                    {errors.serviceIds && (<p className="text-red-500 text-sm">{errors.serviceIds.message} </p>)}
                </div>
            </div>       
        </>    
    )
}