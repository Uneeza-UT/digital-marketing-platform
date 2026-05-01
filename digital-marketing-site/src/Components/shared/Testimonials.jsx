import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import testimonial3 from '../../assets/Images/testimonial3.avif'
import testimonial2 from '../../assets/Images/testimonial2.jpg'
import { Quote } from "lucide-react"

export default function Testimonials() {

    const testimonials = [
                    {
                        id: 1,
                        quote:'AgencyName helped us 3x our qualified leads in two quarters.', 
                        name:'Jordan Lee', 
                        role:'VP of Marketing at a Global Fintech Firm',
                        img: testimonial3
                    },

                    {
                        id: 2,
                        quote:'Their content and SEO strategy pushed us to #1 for core keywords.', 
                        name:' Marcus Thorne', 
                        role:'Chief Marketing Officer, AcmeG Systems',
                        img: testimonial2
                    },

                    {
                        id: 3,
                        quote:'Our CAC dropped 32% after their paid strategy overhaul.', 
                        name:'Alex Rivera', 
                        role:'Founder of a Leading SaaS Startup',
                        img: testimonial3
                    }
                ];

    const [index, setIndex] = useState(0);
    const activeTestimonials = testimonials[index];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length)
        }, 4500);
        return () => clearInterval(timer);
    },[]);

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <motion.div className="text-center mb-12"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 , ease:"easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-7">What Clients <span className="text-brandMarketing-500">Say</span></h2>
                    <p className="text-brandMarketing-800 text-xl mt-2">Real stories from teams we’ve partnered with</p>
                </motion.div>
                <div className="relative max-w-4xl mx-auto">                  
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeTestimonials.id}
                            className=" relative glass rounded-2xl p-12 border border-gray-400 backdrop-blur-sm shadow-lg hover:border-brandMarketing-500/30 hover:shadow-xl"
                            initial={{ opacity:0, y:20 }}
                            animate={{ opacity:1, y:0 }}
                            exit={{ opacity:0, y:-20 }}
                            transition={{ duration:0.6 }}
                        >
                            <Quote className="absolute w-12 h-12 md:w-16 md:h-16 -top-6 -left-3 sm:-top-10 sm:-left-5 text-brandMarketing-500 z-10" />
                            <div className="absolute top-0 left-0 h-1 w-full bg-brandMarketing-500 rounded-t-xl" />
                            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-10 w-full">
                                <div className="flex flex-col items-center md:items-start shrink-0">
                                    <img src={activeTestimonials.img} alt={activeTestimonials.name} className="w-20 h-20 rounded-full object-cover ring-2 ring-brandMarketing-500/60 shadow-lg" />
                                    <div className="mt-8 text-center sm:text-left">
                                        <div className="font-bold text-lg">{activeTestimonials.name}</div>
                                        <div className="text-brandMarketing-500 text-sm font-semibold">{activeTestimonials.role}</div>
                                    </div>                               
                                </div>
                                <blockquote className="text-xl font-bold leading-relaxed text-center md:text-start">“{activeTestimonials.quote}”</blockquote>
                            </div>
                            
                            <div className="mt-8 flex justify-center gap-2">
                                {testimonials.map((item,idx) => (
                                    <button
                                        key={item.id} 
                                        onClick={() => setIndex(idx)}
                                        className={`w-4 h-4 rounded-full ${idx===index ? "bg-brandMarketing-500" : "bg-gray-600/60 hover:bg-gray-500"}`}                                             
                                    />
                                ))}
                                    
                            </div>
                        </motion.div>                       
                    </AnimatePresence>             
                </div>
            </div>
        </section>
    )
}