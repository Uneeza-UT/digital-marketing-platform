import { useState, useEffect } from "react"
import { Rocket, Menu, X, MessageCircle, CalendarCheck } from "lucide-react";
import {motion, AnimatePresence} from "framer-motion"
import { NavLink } from 'react-router-dom'
import Modal from "../modal/Modal";


export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
      
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);

    return (
        <>
            <header className={`backdrop-blur-md border-b border-brandMarketing-400/40 sticky top-0 z-50 transition-all ${scrolled ? "bg-white/70 shadow-lg" : "bg-brandMarketing-200/85"}`}>
                <nav className="container mx-auto px-6 py-4" aria-label="Primary">
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-2xl font-bold text-brandMarketing-900 flex items-center space-x-2 group">
                            <span className="relative grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-brandMarketing-500 to-neon-400 text-white shadow-lg">
                                <Rocket className="w-5 h-5"/>
                            </span>
                            <span className="group-hover:text-brandMarketing-800 transition-colors">AgencyName</span>
                        </a>
                        <div className="hidden md:flex items-center space-x-8 text-gray-800 font-semibold">
                            <NavLink to={"/"} 
                                    className={({isActive}) =>
                                        `hover:text-brandMarketing-500 transition-all duration-300 transform hover:scale-105
                                        ${isActive ? 
                                            "text-brandMarketing-500 font-medium border-b-2 border-brandMarketing-500" : ""}`
                                        }
                            >   
                                Home
                            </NavLink>

                            <NavLink to={"/About"} 
                                    className={({isActive}) =>
                                        `hover:text-brandMarketing-500 transition-all duration-300 transform hover:scale-105
                                        ${isActive ? 
                                            "text-brandMarketing-500 font-medium border-b-2 border-brandMarketing-500" : ""}`
                                        }
                            >   
                                About
                            </NavLink>

                            <NavLink to={"/Services"} 
                                    className={({isActive}) =>
                                        `hover:text-brandMarketing-500 transition-all duration-300 transform hover:scale-105
                                        ${isActive ? 
                                            "text-brandMarketing-500 font-medium border-b-2 border-brandMarketing-500" : ""}`
                                        }
                            >   
                                Services
                            </NavLink>

                            <NavLink to={"/Portfolio"} 
                                    className={({isActive}) =>
                                        `hover:text-brandMarketing-500 transition-all duration-300 transform hover:scale-105
                                        ${isActive ? 
                                            "text-brandMarketing-500 font-medium border-b-2 border-brandMarketing-500" : ""}`
                                        }
                            >   
                                Portfolio
                            </NavLink>
                            
                            <button onClick={() => setIsOpen(true)} className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brandMarketing-500 text-white hover:bg-brandMarketing-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse-glow">
                                <MessageCircle className="w-5 h-5" /><span>Get Consultation</span>
                            </button>
                        </div>
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded="mobileMenuOpen" aria-controls="mobileMenu" className="md:hidden text-gray-300 p-2 rounded-lg hover:bg-brandMarketing-500 transition-colors" aria-label="Toggle menu">
                            {!mobileMenuOpen && <Menu className="w-6 h-6 text-gray-900" />}
                            {mobileMenuOpen && <X className="w-6 h-6 text-brandMarketing-500"/>}
                        </button>
                    </div>

                    <AnimatePresence>
                        {mobileMenuOpen && 
                            <motion.div id="mobileMenu"
                                className="md:hidden mt-4 space-y-4 glass rounded-xl p-4 bg-gradient-to-r from-brandMarketing-500 to-brandMarketing-400 border border-brandMarketing-400/40" 
                                initial={{ opacity:0, y:-16}}
                                animate={{ opacity:1, y:0 }}
                                exit={{ opacity:0, y:-16 }}
                                transition={{ duration:0.4, ease:"easeOut" }}
                            >
                              
                                <NavLink to={"/"} 
                                className={({isActive}) =>
                                    `block transition-colors py-2
                                    ${isActive ? "text-brandMarketing-500 font-medium" : "text-brandMarketing-800 "}`}
                                >   
                                    Home
                                </NavLink>

                                <NavLink to={"/About"} 
                                className={({isActive}) =>
                                    `block transition-colors py-2
                                    ${isActive ? "text-brandMarketing-500 font-medium" : "text-brandMarketing-800 "}`}
                                >   
                                    About
                                </NavLink>

                                <NavLink to={"/Services"} 
                                className={({isActive}) =>
                                    `block transition-colors py-2
                                    ${isActive ? "text-brandMarketing-500 font-medium" : "text-brandMarketing-800 "}`}
                                >   
                                    Services
                                </NavLink>

                                <NavLink to={"/Portfolio"} 
                                className={({isActive}) =>
                                    `block transition-colors py-2
                                    ${isActive ? "text-brandMarketing-500 font-medium" : "text-brandMarketing-800 "}`}
                                >   
                                    Portfolio
                                </NavLink>
                               
                                <a onClick={() => setIsOpen(true)} className="mt-2 text-white bg-brandMarketing-500 hover:bg-brandMarketing-600 px-4 py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                                    <CalendarCheck className="w-5 h-5 text-white" />Book Consultation
                                </a>
                            </motion.div>
                        }
                    </AnimatePresence>
                    
                </nav>
            </header>

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