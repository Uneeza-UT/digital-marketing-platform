import { Check } from "lucide-react"

export default function HeroModalServiceCard({Icon, title, selected, onClick}) {
    return (
        <div 
            onClick={onClick}
            className={`flex flex-col items-center text-center service-card group bg-white 
                backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 border
                hover:border-brandMarketing-500 hover:shadow-md cursor-pointer hover:scale-[1.02]
                ${selected ? "border-brandMarketing-500 shadow-lg" 
                            : "border border-gray-300"}`}
        >
            {selected && (
                <div className="absolute top-3 left-3 w-5 h-5 bg-brandMarketing-500 text-white 
                                rounded-full flex items-center justify-center text-xs">
                    <Check className="w-3 h-3" />
                </div>
            )}

            <div className="w-14 h-14 bg-brandMarketing-500/10 rounded-xl flex items-center 
                justify-center transition-transform mb-4">
                <Icon className="text-xl text-brandMarketing-500" />
            </div>

            <h3 className="text-lg font-semibold text-brandMarketing-900"> {title} </h3>
        </div>
    )
}