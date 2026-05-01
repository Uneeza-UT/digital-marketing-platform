import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react'
import PortfolioCard from './PortfolioCard'
import CaseStudyModal from './CaseStudyModal'
import { useState } from 'react'
import { portfolioProjects } from '../../data/PortfolioProjects'
import seoportfolio from '../../assets/Images/seoportfolio.avif'

 export default function CaseStudies() {

    const [isOpen, setIsOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All");
    const categories = ["All", ...(new Set(portfolioProjects.flatMap(item => item.category)))]
    const featuredProjects = portfolioProjects.filter(project => project.featured);

    const filteredProject = activeFilter === "All" ? portfolioProjects :
                                                     portfolioProjects.filter(
                                                        project => project.category.includes(activeFilter)
                                                    ); 

    return (
        <>
            <section onClick={() => setIsOpen(true)}
                className="py-24 max-w-8xl mx-auto px-6"
            >
                <div className="container p-8 md:p-12 lg:p-16 group cursor-pointer bg-gradient-to-br from-brandMarketing-600/20 via-brandMarketing-500/10 to-white rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <motion.div
                        initial={{ opacity:0, y:14 }}
                        whileInView={{ opacity:1, y:0 }}
                        transition={{ duration:1.2, ease:"easeOut" }}
                        viewport={{ once:true }}
                    >
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                    initial={{ opacity:0, y:14 }}
                                    whileInView={{ opacity:1, y:0 }}
                                    transition={{ duration:1, ease:"easeOut" }}
                                    viewport={{ once:true }}
                                    className='order-1 lg:order-2'
                            >

                                {featuredProjects.map(project => (
                                        <div key={project.id}>
                                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-9 tracking-tight"><span className="text-brandMarketing-500">Featured</span> Case Study </h2>
                                            <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold"> {project.title} </h3>
                                            
                                            <div className="mt-4 text-sm font-medium text-gray-500 leading-relaxed">
                                                <span className='mr-2'> {project.industry} </span>
                                                <span className='mr-2'>•</span>
                                                <span> {project.duration} </span>
                                            </div>

                                            <p className="text-gray-700 text-base leading-relaxed mt-4 max-w-xl"> 
                                                {project.subtitle}
                                            </p>

                                            <div className="flex gap-3 mt-7">
                                                {project.badges.map((badge, index) => (
                                                    <span key={index} className={`px-3 py-1 text-xs rounded-full ${badge.className}`}>{badge.label}</span>
                                                ))}
                                            </div>

                                            <ul className="space-y-4 mt-7">   
                                                {project.stats.map((stat, index) => (                             
                                                    <li key={index} className="flex items-start">
                                                        <CheckCircle2 className='text-brandMarketing-500 mr-3 w-5 h-5 flex-shrink-0 mt-1'/> 
                                                        <p className="text-gray-700 font-medium text-md"> 
                                                            <span className='font-extrabold'> {stat.value} </span>
                                                            {stat.label} 
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        
                                            <a onClick={() => setIsOpen(true)} className="mt-7 inline-flex font-medium text-brandMarketing-500 hover:text-brandMarketing-600 group/link">
                                                View Full Case Study <ArrowRight className="ml-2 transform group-hover/link:translate-x-1 transition-transform group-hover/link:text-neon-400" />
                                            </a>
                                        </div>
                                    ))
                                }

                            </motion.div>
                            <motion.div className="relative order-2 lg:order-1 group cursor-pointer" 
                                        initial={{ opacity:0, y:14 }}
                                        whileInView={{ opacity:1, y:0 }}
                                        transition={{ duration:1.2, ease:"easeOut" }}
                                        viewport={{ once:true }}
                            >
                                <img src={seoportfolio}
                                    alt="Magnifying glass analyzing computer screens with analytics data representing SEO optimization" 
                                    className="rounded-2xl shadow-2xl ring-1 ring-slate-700/60" loading="lazy" decoding="async" />

                                <div className="absolute top-3 left-3 bg-white/90 opacity-0 group-hover:opacity-100 backdrop-blur px-3 py-1 rounded-full">
                                    <span className="text-brandMarketing-600 text-xs font-medium ">
                                        SEO Case Study
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>


            <section className='bg-brandMarketing-200 py-20 max-w-8xl mx-auto px-6'>
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity:0, y:14 }}
                        whileInView={{ opacity:1, y:0 }}
                        transition={{ duration:1.2, ease:"easeOut" }}
                        viewport={{ once:true }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"><span className="text-brandMarketing-500">Results</span> we've delivered for clients </h2>
                        <p className="text-xl text-gray-500 leading-relaxed mb-8">
                            Explore our portfolio of successful projects where we've helped businesses a
                            chieve measurable growth through strategic digital marketing.
                        </p>

                        <div className="flex flex-wrap pb-4 gap-2 sm:gap-3 mb-8"> 
                            {/* 'no-scrollbar' is a custom utility to hide the scrollbar track */}
                            {categories.map((item) => (
                                <button 
                                    key={item}
                                    onClick={() => setActiveFilter(item)}
                                    className={`whitespace-nowrap px-3 sm:px-5 py-2 rounded-full border border-gray-200 font-bold 
                                        ${activeFilter === item 
                                        ? "bg-brandMarketing-500 text-white border-brandMarketing-500 shadow-md" 
                                        : "bg-white text-slate-600 border-slate-200 hover:border-brandMarketing-500/50"
                                        } text-sm transition-all`}>
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/*<div className="relative flex justify-start items-center mb-10 w-full">

                            <select
                                value={activeFilter}
                                onChange={(e) => setActiveFilter(e.target.value)}
                                className="px-6 pr-12 py-2 appearance-none rounded-lg border border-gray-300
                                        bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 
                                        focus:ring-brandMarketing-500 cursor-pointer w-52" 
                                >
                                <option value="All">All Case Studies</option>
                                <option value="SEO">SEO</option>
                                <option value="PPC">PPC</option>
                                <option value="SaaS">SaaS</option>
                                <option value="Lead Generation">Lead Generation</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Email Marketing">Email Marketing</option>
                                <option value="Content Marketing">Content Marketing</option>
                            </select>
                            <div className="pointer-events-none absolute left-40">
                                <ChevronDown />
                            </div>
                        </div>*/}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            
                            {filteredProject
                                .map(project => (

                                    <PortfolioCard
                                        key={project.id}
                                        image={project.image}
                                        imgAlt={project.imgAlt}
                                        overlay={project.overlay}
                                        title={project.title}
                                        subtitle={project.subtitle}                                  
                                        stats={project.stats}
                                        badges={project.badges}
                                        industry={project.industry}
                                        duration={project.duration}
                                        overview={project.overview}
                                        challenge={project.challenge}
                                        strategy={project.strategy}
                                        execution={project.execution}
                                        results={project.results}
                                    />

                                ))
                            }

                        </div>
                    </motion.div>
                </div>
            </section>
                    


            {isOpen && (
                featuredProjects.map(project => (
                    
                    <CaseStudyModal 
                        isOpen={isOpen} 
                        onClose={() => setIsOpen(false)} 
                        id={project.id}
                        image={project.image}
                        imgAlt={project.imgAlt}
                        overlay={project.overlay}
                        title={project.title}                                
                        stats={project.stats}
                        badges={project.badges}
                        industry={project.industry}
                        duration={project.duration}
                        overview={project.overview}
                        challenge={project.challenge}
                        strategy={project.strategy}
                        execution={project.execution}
                        results={project.results}
                    />
                ))
            )}
        </>
    )
 }
