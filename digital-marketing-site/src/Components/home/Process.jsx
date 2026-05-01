import { motion } from 'framer-motion'
import ProcessCard from '../ui/ProcessCard'

export default function Process() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity:0, y:14 }}
                    whileInView={{ opacity:1, y:0 }}
                    transition={{ duration:1.2, ease:"easeOut" }}
                    viewport={{ once:true }}
                    className="order-1 lg:order-2"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-7">How We <span className="text-brandMarketing-500">Work</span></h2>
                    <p className="text-xl text-brandMarketing-800 mb-16 leading-relaxed">
                        We follow a structured and transparent process to ensure every project is executed with clarity and purpose.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                        <ProcessCard
                            cardNumber={"01"}
                            title={"Discovery"}
                            subtitle={" We begin by understanding your goals, audience, and objectives to build a strong strategic foundation."}
                            reverse={false}
                        />

                        <ProcessCard
                            cardNumber={"02"}
                            title={"Strategy"}
                            subtitle={"We create a clear roadmap outlining key milestones, deliverables, and execution priorities."}
                            reverse={false}
                        />

                        <ProcessCard
                            cardNumber={"03"}
                            title={"Execution"}
                            subtitle={"Our team implements the plan using modern tools and best practices to ensure quality and efficiency."}
                            reverse={false}
                        />

                        <ProcessCard
                            cardNumber={"04"}
                            title={"Optimization"}
                            subtitle={"We continuously analyze performance and refine strategies to drive sustainable improvement."}
                            reverse={false}
                        />

                    </div>
                </motion.div>
            </div>
        </section>
    )
}