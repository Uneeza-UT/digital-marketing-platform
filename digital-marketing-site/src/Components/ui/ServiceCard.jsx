import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { HashLink } from "react-router-hash-link"

export default function ServiceCard({title, subtitle, icon, link}) {
    return (
        <motion.div className="service-card group bg-brandMarketing-100 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 border border-gray-300 hover:border-brandMarketing-500/30 hover:shadow-[0_10px_50px_-15px_rgba(67, 56, 202, 0.35)]"
                    initial={{ opacity:0, y:14 }}
                    whileInView={{ opacity:1, y:0 }}
                    transition={{ duration:1, ease:"easeOut" }}
                    viewport={{ once:true }}
        >
            <div className="w-16 h-16 bg-brandMarketing-200 rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-brandMarketing-500/20 group-hover:rotate-6 transition-transform">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-brandMarketing-900"> {title} </h3>
            <p className="text-brandMarketing-800 mb-6 leading-relaxed">
                {subtitle}
            </p>
            <HashLink smooth to={link} className="text-brandMarketing-500 hover:text-brandMarketing-600 font-medium inline-flex items-center group/link">
                Learn more
                <ArrowRight className="ml-2 transform group-hover/link:translate-x-1 transition-transform group-hover/link:text-neon-400" />
            </HashLink>
        </motion.div>
    )
}