export default function ProcessCard({cardNumber, title, subtitle, reverse}) {
    return (
        <div className={`relative ${ reverse ? "bg-brandMarketing-100" : "bg-brandMarketing-200/50"} 
            backdrop-blur-sm shadow-xl rounded-lg p-4 text-left border border-gray-300  hover:border-brandMarketing-500/30 
            hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group`}>
            <div className="absolute top-0 left-0 h-1 w-full bg-brandMarketing-500 rounded-t-xl" />
            <div className="flex items-start gap-6">
                <div className="text-2xl font-bold text-brandMarketing-500"> 
                    {cardNumber} 
                </div>  
                <div>
                    <h3 className="text-2xl font-bold mb-3"> {title} </h3>
                    <p className="text-gray-700  leading-relaxed mt-3"> 
                       {subtitle}
                    </p>
                </div>                                                       
            </div>                        
        </div>
    )
}