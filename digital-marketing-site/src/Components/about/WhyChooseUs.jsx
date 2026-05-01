import { CheckCircle2 } from "lucide-react"
import { motion } from 'framer-motion'

export default function WhyChooseUs() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 items-center">
                    <motion.div
                            initial={{ opacity:0, y:14 }}
                            whileInView={{ opacity:1, y:0 }}
                            transition={{ duration:1, ease:"easeOut" }}
                            viewport={{ once:true }}
                            className='order-1 lg:order-1'
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-7"> Why <span className="text-brandMarketing-500">Choose</span> Us</h2>
                         <p className="text-2xl text-brandMarketing-800 mb-8 leading-relaxed">
                            A reliable partner focused on clarity, strategy, and measurable growth.
                        </p>

                    </motion.div>
                    <motion.div className="relative order-2 lg:order-2" 
                                initial={{ opacity:0, y:14 }}
                                whileInView={{ opacity:1, y:0 }}
                                transition={{ duration:1.2, ease:"easeOut" }}
                                viewport={{ once:true }}
                    >
                                    
                        <div>
                            {[
                                { title: "Custom Strategy", desc: "Tailored specifically to your unique business goals" },
                                { title: "Data-Driven Results", desc: "Focus on measurable growth backed by real-time analytics" },
                                { title: "Total Transparency", desc: "Clear communication and a completely open process" },
                                { title: "Omnichannel Execution", desc: "Consistent brand voice and performance across all platforms" },
                                { title: "Modern Tech Stack", desc: "Leveraging industry-leading tools and best practices" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start p-4 text-lg rounded-xl transition-all duration-300 hover:bg-white hover:shadow-sm group gap-4">                                                                    
                                    <CheckCircle2 className="text-brandMarketing-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                                    <p className="text-brandMarketing-800 leading-snug">
                                        <span className="font-extrabold text-gray-900 mr-3">{item.title}:</span>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}