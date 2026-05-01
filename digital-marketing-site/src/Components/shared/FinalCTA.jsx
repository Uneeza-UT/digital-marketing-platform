import finalcta from '../../assets/Images/finalctabg.avif'
import { motion } from 'framer-motion'
import { CalendarCheck, ChartLineIcon } from 'lucide-react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import Modal from "../modal/Modal";


export default function FinalCTA() {

    const [isOpen, setIsOpen] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    return (
        <>
            <section className=" py-20 relative overflow-hidden">
                <img src= {finalcta} 
                    alt="Laptop on a desk" 
                    className="absolute inset-0 w-full h-full object-cover blur-[1px]" 
                    loading="lazy" 
                    decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-slate-900 via-slate-900/90 to-transparent" />
                <div className="container mx-auto px-6 text-center relative z-10 text-white">
                    <motion.h2 
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-7"
                        initial={{ opacity:0, y:14 }}
                        whileInView={{ opacity:1, y:0 }}
                        transition={{ duration:1, ease:"easeOut" }}
                        viewport={{ once:true }}            
                    > 
                        Ready to <span className="text-brandMarketing-500"> Transform </span> Your Digital Presence?
                    </motion.h2>
                    <motion.p 
                        className="text-xl max-w-xl mx-auto mb-9"
                        initial={{ opacity:0, y:14 }}
                        whileInView={{ opacity:1, y:0 }}
                        transition={{ duration:1.2, ease:"easeOut" }}
                        viewport={{ once:true }}
                    >
                        Let's discuss how our digital marketing services can help your business achieve remarkable growth and measurable results.
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity:0, y:14 }}
                        whileInView={{ opacity:1, y:0 }}
                        transition={{ duration:1.8, ease:"easeOut" }}
                        viewport={{ once:true }}
                    >
                        <button onClick={() => setIsOpen(true)} className="flex justify-center items-center bg-brandMarketing-500 hover:bg-brandMarketing-600 text-white px-8 py-4 sm:w-58 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
                            <CalendarCheck className="mr-2 group-hover:rotate-12 transition-transform" />Schedule a Consultation
                        </button>
                        <a href="/Portfolio" className="flex justify-center items-center border-2 border-brandMarketing-500/40 hover:border-brandMarketing-500 text-white sm:w-60 shadow-[0_0_10px_rgba(168,85,247,0.4)] px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_10px_rgba(168,85,247,0.4)] hover:bg-white/10 group">
                            <ChartLineIcon className="mr-2 group-hover:text-brandMarketing-500" />View Case Studies
                        </a>
                    </motion.div>                

                </div>
            </section>

            {isOpen && (
                <Modal 
                    isOpen={isOpen} 
                    onClose={() => {
                        setSubmissionSuccess(false)
                        setIsOpen(false)
                    }} 
                    submissionSuccess={submissionSuccess}
                    setSubmissionSuccess={setSubmissionSuccess}
                />
            )}
        </>
    )
}