import { CheckCircle2, ArrowRight } from "lucide-react"
import { useState } from "react";
import CaseStudyModal from "./CaseStudyModal";


export default function PortfolioCard({id, image, imgAlt, overlay, title, stats, badges, industry, duration, overview, strategy, challenge, execution, results}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div onClick={() => setIsOpen(true)} className={`flex flex-col h-full relative bg-white backdrop-blur-sm 
                shadow-xl rounded-lg p-7 text-left border border-gray-300  hover:border-brandMarketing-500/30 
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group`}
            >
                <div className="absolute top-0 left-0 h-1 w-full bg-brandMarketing-500 rounded-t-xl" />
                <div className="relative group cursor-pointer">
                    <img src={image}
                        alt={imgAlt} 
                        className="h-48 w-full mb-10 object-cover rounded-2xl shadow-2xl ring-1 ring-slate-700/60" loading="lazy" decoding="async" 
                    />
                    <div className="absolute top-3 left-3 bg-white/90 opacity-0 group-hover:opacity-100 backdrop-blur px-3 py-1 rounded-full">
                        <span className="text-brandMarketing-600 text-xs font-medium ">
                            {overlay}
                        </span>
                    </div>
                </div>

                
                <h3 className="text-xl font-semibold mb-1"> {title} </h3>

                <div className="mt-2 text-sm text-gray-500 mb-5 leading-relaxed">
                    <span className='mr-2'>{industry}</span>
                    <span className='mr-2'>•</span>
                    <span>{duration}</span>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                    {badges.map((badge, index) => (
                        <span key={index} className={`px-3 py-1 mb-3 text-xs rounded-full ${badge.className}`}>
                            {badge.label}
                        </span>
                    ))}
                </div>
                <div className="flex-1">
                    <ul className="space-y-4">
                        {stats.map((item, index) => {
                            return (
                                <li key={index} className="flex items-start">
                                    <CheckCircle2 className='text-brandMarketing-500 mr-3 w-5 h-5 flex-shrink-0 mt-[4px]'/> 
                                    <p className="text-gray-700 font-medium text-md"> 
                                        <span className='font-extrabold'> {item.value} </span>
                                        {item.label} 
                                    </p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                
                <div className="pt-6">
                    <a onClick={() => setIsOpen(true)} className="inline-flex mt-4 text-brandMarketing-500 hover:text-brandMarketing-600 hover:underline font-medium group/link">
                        View Full Case Study <ArrowRight className="ml-2 transform group-hover/link:translate-x-1 transition-transform group-hover/link:text-neon-400" />
                    </a>
                </div>             
                                                                                                        
            </div>

            {isOpen && (
                <CaseStudyModal 
                    isOpen={isOpen} 
                    onClose={() => setIsOpen(false)} 
                    id={id}
                    title={title}
                    image={image}
                    imgAlt={imgAlt}
                    overlay={overlay}
                    industry={industry}
                    duration={duration}
                    overview={overview}
                    challenge={challenge}
                    strategy={strategy}
                    execution={execution}
                    results={results}
                />
            )}

        </>
    )
}