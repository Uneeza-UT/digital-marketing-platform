import { CheckCircle2 } from "lucide-react"
import { motion } from 'framer-motion'

export default function ServiceSection ({id, title, subtitle, listData, icon, image, imageAlt, reverse}) {
    return (
        <section 
            className={`py-20 ${reverse ? "bg-brandMarketing-200" : "bg-brandMarketing-100"}`}
            id={id}
        >
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                            initial={{ opacity:0, y:14 }}
                            whileInView={{ opacity:1, y:0 }}
                            transition={{ duration:1, ease:"easeOut" }}
                            viewport={{ once:true }}
                            className={`${reverse ? "order-1 lg:order-2 " : "order-1 lg:order-1"}`}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-7"> {title} </h2>
                        <p className="text-xl text-brandMarketing-800 mb-9 leading-relaxed">
                            {subtitle}
                        </p>
                        <div>
                            <ul className="space-y-4">
                                {listData.map((item, index) => {
                                    return (<li key={index} className="flex items-start"> 
                                        <CheckCircle2 className="text-brandMarketing-500 mr-4 flex-shrink-0" />
                                        <p className="text-brandMarketing-800"> {item} </p>
                                    </li>)
                                })}
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div className={`relative ${reverse ? "order-2 lg:order-1 " : "order-2 lg:order-2"}`} 
                                initial={{ opacity:0, y:14 }}
                                whileInView={{ opacity:1, y:0 }}
                                transition={{ duration:1.2, ease:"easeOut" }}
                                viewport={{ once:true }}
                    >
                        <img src={image}
                             alt={imageAlt} 
                             className="rounded-2xl shadow-2xl ring-1 ring-slate-700/60" loading="lazy" decoding="async" />
                        <div className={`absolute w-24 h-24 bg-brandMarketing-500 rounded-full flex items-center justify-center shadow-xl
                            ${reverse ? "-top-8 -left-6" : "-top-8 -right-6" } `}>
                            {icon}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 