import { motion } from "framer-motion"

export default function TrustStats({icon, stats, text}) {
    return (
        <motion.div
            initial={{ opacity:0, y:14 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:1, ease:"easeOut" }}
            viewport={{ once:true }}
        >
            <div className="mx-auto w-12 h-12 rounded-xl bg-brandMarketing-200 border border-brandMarketing-500/20 grid place-items-center mb-3">
                {icon}
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-brandMarketing-500 mb-2"> {stats} </div>
            <div className="text-brandMarketing-800"> {text} </div>
        </motion.div>
    )
}