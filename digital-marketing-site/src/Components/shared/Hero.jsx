import HeroBG from '../../assets/Images/herobgempty.avif'
import {Star, PlayCircle, Eye } from "lucide-react"
import {FaSlack, FaShopify, FaFigma, FaWordpress, FaHubspot} from "react-icons/fa"
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import HeroModal from "../modal/HeroModal";

export default function Hero({title, subtitle, showButtons}) {

    const [isOpen, setIsOpen] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    return (
        <>
            <section className="relative pt-20 pb-24 overflow-hidden">
                {/* Decorative background image */}
                <img src={HeroBG}
                    alt="Abstract digital marketing neon gradient background"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
                    loading="lazy" 
                    decoding="async" />
                <div className="absolute inset-0 bg-black/40"></div>    
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brandMarketing-500/10 via-transparent to-transparent"></div>
                <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-brandMarketing-500/10 blur-3xl animate-spin-slow"></div>
                <div className="absolute -right-16 bottom-0 w-80 h-80 rounded-full bg-brandMarketing-400/10 blur-3xl animate-spin-slow"></div>

                <div className="container mx-auto px-6 text-center relative z-10 text-white">
                    <motion.div 
                        className="max-w-4xl mx-auto"
                        initial={{ opacity:0, y:14 }}
                        whileInView={{ opacity:1, y:0 }}
                        transition={{ duration:1, ease:"easeOut" }}
                        viewport={{ once:true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/20 bg-white/10 text-white/80 text-sm mb-8">
                            <Star className="text-brandMarketing-500" fill="currentColor"  />
                            Top-rated digital agency • 4.9/5 from 200+ reviews
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.1]">
                        {title}
                        </h1>
                        <p className="text-lg md:text-2xl max-w-3xl mx-auto  mb-8 leading-[1.7]">
                            {subtitle}
                        </p>
                        {showButtons && 
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button onClick={() => setIsOpen(true)} className="bg-brandMarketing-500 hover:bg-brandMarketing-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse-glow flex">
                                    <PlayCircle className="mr-2" />Get Started Today
                                </button>
                                <Link to={"/Portfolio"} className="border border-brandMarketing-600 hover:border-brandMarketing-600 shadow-[0_0_10px_rgba(168,85,247,0.4)] px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 group flex">
                                    <Eye className="mr-2 group-hover:text-brandMarketing-600" />View Case Studies
                                </Link>
                            </div>      
                        }

                        <div className="mt-10 opacity-90 text-gray-300">
                            <p className="text-sm uppercase tracking-wider mb-4">Trusted by teams worldwide</p>
                            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                                <FaSlack className="text-2xl hover:text-brandMarketing-600 transition-colors" />
                                <FaShopify className="text-2xl hover:text-brandMarketing-600 transition-colors" />
                                <FaFigma className="text-2xl hover:text-brandMarketing-600 transition-colors" />
                                <FaWordpress className="text-2xl hover:text-brandMarketing-600 transition-colors" />
                                <FaHubspot className="text-2xl hover:text-brandMarketing-600 transition-colors" />
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brandMarketing-500/50 to-transparent pointer-events-none"></div>
            </section>

            {isOpen && (
                <HeroModal 
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