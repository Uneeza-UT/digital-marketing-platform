import ResultsAnalytics from '../../assets/Images/ResultsAnalytics.jpg'
import { motion } from 'framer-motion'
import { TrendingUp, Megaphone, Eye, Handshake, ChartPie } from 'lucide-react'
import CountUp from 'react-countup'

export default function Results() {
    return (
        <section className="py-20 bg-brandMarketing-200">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                            initial={{ opacity:0, y:14 }}
                            whileInView={{ opacity:1, y:0 }}
                            transition={{ duration:1, ease:"easeOut" }}
                            viewport={{ once:true }}
                            className='order-1 lg:order-1'
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-7">Data-Driven <span className="text-brandMarketing-500">Results</span></h2>
                        <p className="text-xl text-brandMarketing-800 mb-9 leading-relaxed">
                            We believe in transparency and measurable outcomes. Our comprehensive analytics provide clear insights into campaign performance and ROI.
                        </p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div className='flex flex-col items-center justify-between service-card bg-brandMarketing-100 rounded-lg shadow-lg backdrop-blur-sm p-4 border border-gray-300 hover:border-brandMarketing-500/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105'>                              
                                <div className="mx-auto w-12 h-12 rounded-full bg-brandMarketing-200 border border-brandMarketing-500/20 grid place-items-center mb-3">
                                    <TrendingUp className='text-brandMarketing-500' />
                                </div>
                                <h3 className='text-lg text-brandMarketing-800 font-semibold mb-2'>ROI Increase</h3>
                                <CountUp className='text-3xl text-brandMarketing-500 font-bold' end={150} duration={2} suffix="%" enableScrollSpy />
                            </div>
                            <div className='flex flex-col items-center justify-between service-card bg-brandMarketing-100 rounded-lg shadow-lg backdrop-blur-sm p-4 border border-gray-300 hover:border-brandMarketing-500/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105'>                               
                                 <div className="mx-auto w-12 h-12 rounded-full bg-brandMarketing-200 border border-brandMarketing-500/20 grid place-items-center mb-3">
                                    <Megaphone className='text-brandMarketing-500' />
                                </div>
                                <h3 className='text-lg text-brandMarketing-800 font-semibold mb-2'>Campaigns Managed</h3>
                                <CountUp className='text-3xl text-brandMarketing-500 font-bold' end={50} duration={2} suffix="+" enableScrollSpy />
                            </div>
                            <div className='flex flex-col items-center justify-between service-card bg-brandMarketing-100 rounded-lg shadow-lg backdrop-blur-sm p-4 border border-gray-300 hover:border-brandMarketing-500/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105'>                              
                                 <div className="mx-auto w-12 h-12 rounded-full bg-brandMarketing-200 border border-brandMarketing-500/20 grid place-items-center mb-3">
                                    <Eye className='text-brandMarketing-500' />
                                </div>
                                <h3 className='text-lg text-brandMarketing-800 font-semibold mb-2'>Ad Impressions</h3>
                                <CountUp className='text-3xl text-brandMarketing-500 font-bold' end={2.5} duration={2} suffix="M" enableScrollSpy />
                            </div>
                            <div className='flex flex-col items-center justify-between service-card bg-brandMarketing-100 rounded-lg shadow-lg backdrop-blur-sm p-4 border border-gray-300 hover:border-brandMarketing-500/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105'>                            
                                 <div className="mx-auto w-12 h-12 rounded-full bg-brandMarketing-200 border border-brandMarketing-500/20 grid place-items-center mb-3">
                                     <Handshake className='text-brandMarketing-500' />
                                </div>
                                <h3 className='text-lg text-brandMarketing-800 font-semibold mb-2'>Client Retention</h3>
                                <CountUp className='text-3xl text-brandMarketing-500 font-bold' end={98} duration={2} suffix="%" enableScrollSpy />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="relative order-2 lg:order-2" 
                                initial={{ opacity:0, y:14 }}
                                whileInView={{ opacity:1, y:0 }}
                                transition={{ duration:1.2, ease:"easeOut" }}
                                viewport={{ once:true }}
                    >
                        <img src={ResultsAnalytics}
                             alt="Analytics Dashboard" 
                             className="rounded-2xl shadow-2xl ring-1 ring-slate-700/60" loading="lazy" decoding="async" />
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-brandMarketing-500 rounded-full flex items-center justify-center shadow-lg">
                            <ChartPie className="text-3xl text-white" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}