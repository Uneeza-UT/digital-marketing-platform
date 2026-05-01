import { Search, Share2Icon, PenTool, ChartLine, Mail,Target } from "lucide-react"
import { motion } from "framer-motion"
import ServiceCard from "../ui/ServiceCard"

export default function BriefServices() {
    return (
        <section className="py-20 relative bg-brandMarketing-200">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div className="text-center mb-16"
                            initial={{ opacity:0, y:14 }}
                            whileInView={{ opacity:1, y:0 }}
                            transition={{ duration:1, ease:"easeOut" }}
                            viewport={{ once:true }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">Our <span className="text-brandMarketing-500">Services</span></h2>
                    <p className="text-xl text-brandMarketing-800 max-w-2xl mx-auto">
                        Comprehensive digital marketing solutions tailored to drive your business growth.
                    </p>
                </motion.div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/*Service 1*/}
                    <ServiceCard 
                        title={"Search Engine Optimization (SEO)"}
                        subtitle={"Improve your online presence with structured optimization strategies designed to increase discoverability and drive consistent traffic."}
                        icon={<Search className="text-2xl text-brandMarketing-500" />}
                        link={"/Services#service1"}
                    />

                    {/*Service 2*/}
                    <ServiceCard 
                        title={"Social Media Management"}
                        subtitle={"Build meaningful connections with your audience across major platforms through strategic and creative campaigns."}
                        icon={<Share2Icon className="text-2xl text-brandMarketing-500" />}
                        link={"/Services#service2"}
                    />

                    {/*Service 3*/}
                    <ServiceCard 
                        title={"Content Strategy"}
                        subtitle={"Develop compelling content that informs, engages, and supports your brand’s communication goals."}
                        icon={<PenTool className="text-2xl text-brandMarketing-500" />}
                        link={"/Services#service3"}
                    />


                    {/*Service 4*/}
                    <ServiceCard 
                        title={"Performance Insights"}
                        subtitle={"Gain clarity through structured analytics and reporting that help track growth and measure effectiveness."}
                        icon={<ChartLine className="text-2xl text-brandMarketing-500" />}
                        link={"/Services#service4"}
                    />


                    {/*Service 5*/}
                    <ServiceCard 
                        title={"Email Campaigns"}
                        subtitle={"Reach your audience directly with personalized messaging and automated workflows designed to nurture relationships."}
                        icon={<Mail className="text-2xl text-brandMarketing-500" />}
                        link={"/Services#service5"}
                    />


                    {/*Service 6*/}
                    <ServiceCard 
                        title={"PPC Advertising"}
                        subtitle={"Accelerate growth through carefully managed paid campaigns across search and social platforms."}
                        icon={<Target className="text-2xl text-brandMarketing-500" />}
                        link={"/Services#service6"}
                    />

                </div>
            </div>
        </section>
    )
}