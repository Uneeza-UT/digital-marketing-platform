import { motion } from 'framer-motion'
import { X, CalendarCheck, CheckCircle2 } from 'lucide-react'
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import Modal from "../modal/Modal";

export default function CaseStudyModal ({isOpen, onClose, id, title, image, imgAlt, overlay, industry, duration, overview, challenge, strategy, execution, results}) {
    
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
            <Dialog open={isOpen} onClose={onClose} className="relative z-50" >
                <div className="fixed inset-0 bg-slate-900/60 z-40 backdrop-blur-sm transition-opacity" aria-hidden="true" />
                <div className="fixed inset-0 z-50 overflow-y-auto pt-10 pb-10">
                    <motion.div 
                        className="flex justify-center p-8"
                        initial={{ opacity:0, y:14 }}
                        animate={{ opacity:1, y:0 }}
                        transition={{ duration:0.6, ease:"easeOut" }}
                    >                        
                        <DialogPanel className='bg-white rounded-xl shadow-lg p-10 relative w-full max-w-2xl' >
                            <button
                                onClick={onClose} 
                                className='absolute w-10 h-10 flex items-center justify-center rounded-full top-4 right-6 hover:text-brandMarketing-500 hover:bg-slate-50 transition-colors'
                            >
                                <X className='text-brandMarketing-500'/>
                            </button>

                            <div className="relative aspect-[16/9] group cursor-pointer">
                                <img src={image}
                                    alt={imgAlt} 
                                    className="w-full h-full mb-12 mt-12 object-cover rounded-2xl shadow-2xl ring-1 ring-slate-700/60" loading="lazy" decoding="async" 
                                />
                                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-brandMarketing-600 text-xs font-medium ">
                                    {overlay}
                                </span>
                            </div>
                            
                            <DialogTitle className="text-2xl text-center font-bold mb-7 text-brandMarketing-900 mt-8"> {title} </DialogTitle> 

                            <div className="text-center mt-2 font-semibold text-gray-500 mb-3">
                                <span className='mr-2'>{industry}</span>
                                <span className='mr-2'>•</span>
                                <span>{duration}</span>
                            </div>


                            <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-start p-4 text-lg rounded-xl group gap-4"> 
                                <p className="font-semibold text-gray-900 mr-3"> Overview: </p>                                                                   
                                <p className="text-gray-600 leading-relaxed">                            
                                    {overview}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-start p-4 text-lg rounded-xl group gap-4"> 
                                <p className="font-semibold text-gray-900 mr-3"> Challenge: </p>                                                                   
                                <p className="text-gray-600 leading-relaxed">                            
                                    {challenge}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-start p-4 text-lg rounded-xl group gap-4"> 
                                <p className="font-semibold text-gray-900 mr-3"> Strategy: </p>                                                                   
                                <ul className="text-gray-600 leading-relaxed space-y-4">                            
                                    {strategy.map((item, index) => (
                                        <li key={index} className='flex item-start'> 
                                            <CheckCircle2 className='text-brandMarketing-500 mr-3 w-5 h-5 flex-shrink-0 mt-1'/>
                                            {item} 
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-start p-4 text-lg rounded-xl group gap-4"> 
                                <p className="font-semibold text-gray-900 mr-3"> Execution: </p>                                                                   
                                <ul className="text-gray-600 leading-relaxed space-y-4">                            
                                    {execution.map((item, index) => (
                                        <li key={index} className='flex item-start'> 
                                            <CheckCircle2 className='text-brandMarketing-500 mr-3 w-5 h-5 flex-shrink-0 mt-1'/>
                                            {item} 
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-start p-4 text-lg rounded-xl group gap-4 mt-3"> 
                                <p className="font-semibold text-gray-900 mr-3"> Results: </p>                                                                   
                                <ul className="text-gray-600 leading-relaxed space-y-4">                            
                                    {results.map((item, index) => (
                                        <li key={index} className='flex item-start'> 
                                            <CheckCircle2 className='text-brandMarketing-500 mr-3 w-5 h-5 flex-shrink-0 mt-1'/>
                                            <div>                                 
                                                <span className={`px-3 py-1 text-sm rounded-full mr-2 ${item.className}`}>
                                                    {item.value}
                                                </span>
                                                {item.label}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-10 border-t pt-8 text-center">
                                <p className="text-base font-medium text-gray-700 mb-4">
                                    Want similar results for your business?
                                </p>

                                <button 
                                    onClick={() => setIsClicked(true)} 
                                    className="inline-flex justify-center items-center bg-brandMarketing-500 hover:bg-brandMarketing-600 text-white px-8 py-4 font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
                                    <CalendarCheck className="mr-2 group-hover:rotate-12 transition-transform" />
                                    <span className="sm:hidden">Free Consultation</span>
                                    <span className="hidden sm:inline">Get Free Consultation</span>
                                </button>
                            </div>

                        </DialogPanel>
                    </motion.div>    
                </div>             
            </Dialog>

            {isClicked && (
                <Modal isOpen={isClicked} onClose={() => setIsClicked(false)} />
            )}
        </>
    )
}