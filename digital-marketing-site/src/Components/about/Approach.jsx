import { motion } from 'framer-motion'
import ProcessCard from '../ui/ProcessCard'

export default function () {
    return (
         <section className="py-20 bg-brandMarketing-200">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity:0, y:14 }}
                    whileInView={{ opacity:1, y:0 }}
                    transition={{ duration:1.2, ease:"easeOut" }}
                    viewport={{ once:true }}
                    className="order-1 lg:order-2"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-7">Our <span className="text-brandMarketing-500">Approach</span></h2>
                    <p className="text-xl text-brandMarketing-800 mb-16 leading-relaxed">
                        A structured process designed to deliver clear, measurable results.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                      
                        <ProcessCard
                            cardNumber={"01"}
                            title={"Research & Discovery"}
                            subtitle={"We dive deep into your business, audience, and market to uncover insights that drive growth."}
                            reverse={true}
                        />

                        <ProcessCard
                            cardNumber={"02"}
                            title={"Strategic Planning"}
                            subtitle={"We create a roadmap based on data, aligning your goals with actionable marketing strategies."}
                            reverse={true}
                        />

                        <ProcessCard
                            cardNumber={"03"}
                            title={"Creative Execution"}
                            subtitle={"Our team develops campaigns and content that engage your audience and communicate your brand clearly."}
                            reverse={true}
                        />

                        <ProcessCard
                            cardNumber={"04"}
                            title={"Performance Optimization"}
                            subtitle={"We track results continuously and refine campaigns to maximize ROI and long-term impact."}
                            reverse={true}
                        />

                    </div>
                </motion.div>
            </div>
        </section>
    )
}