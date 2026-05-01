import { CheckCircle2, Users2 } from "lucide-react"
import { motion } from 'framer-motion'
import workspace from '../../assets/Images/workspacedesk.avif'

export default function WhoWeAre() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                            initial={{ opacity:0, y:14 }}
                            whileInView={{ opacity:1, y:0 }}
                            transition={{ duration:1, ease:"easeOut" }}
                            viewport={{ once:true }}
                            className='order-1 lg:order-1'
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-7"><span className="text-brandMarketing-500">Who</span> We Are </h2>
                         <p className="text-xl text-brandMarketing-800 mb-9 leading-relaxed">
                            A strategic partner focused on helping businesses succeed in the digital space.
                        </p>
                        <div>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <CheckCircle2 className="text-brandMarketing-500 mr-4" />
                                    <p className="text-brandMarketing-800 ">
                                        Focused on long-term brand growth
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle2 className="text-brandMarketing-500 mr-4" />
                                    <p className="text-brandMarketing-800 ">
                                        Strategy-driven, not guess-driven
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle2 className="text-brandMarketing-500 mr-4" />
                                    <p className="text-brandMarketing-800 ">
                                        Emphasis on clarity and consistency
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle2 className="text-brandMarketing-500 mr-4" />
                                    <p className="text-brandMarketing-800 ">
                                        Results measured through real data
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div className="relative order-2 lg:order-2" 
                                initial={{ opacity:0, y:14 }}
                                whileInView={{ opacity:1, y:0 }}
                                transition={{ duration:1.2, ease:"easeOut" }}
                                viewport={{ once:true }}
                    >
                        <img src={workspace}
                             alt="Analytics Dashboard" 
                             className="rounded-2xl shadow-2xl ring-1 ring-slate-700/60" loading="lazy" decoding="async" />
                        <div className="absolute -top-8 -right-6 w-24 h-24 bg-brandMarketing-500 rounded-full flex items-center justify-center shadow-xl">
                            <Users2 className="text-3xl text-white" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}