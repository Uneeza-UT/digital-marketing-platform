import Header from '../Components/layout/Header'
import Footer from '../Components/layout/Footer'
import Hero from '../Components/shared/Hero'
import FinalCTA from '../Components/shared/FinalCTA'
import ScrollToTop from '../Components/shared/ScrollToTop'
import ServiceSection from '../Components/services/ServiceSection'
import seo from '../assets/Images/seo.avif'
import socialmedia from '../assets/Images/socialmedia.avif'
import content from '../assets/Images/content.avif'
import performance from '../assets/Images/performance.avif'
import emailcompaign from '../assets/Images/emailcompaign.avif'
import ppc from '../assets/Images/ppc.avif'
import { Search, Share2Icon, PenTool, ChartLine, Mail,Target } from "lucide-react"

export default function Services() {
    return (
        <>
            <Header />
            <Hero 
                title = { 
                    <> 
                        Our Digital Marketing <span className="text-brandMarketing-500"> Services </span>
                    </>
                }
                subtitle = {`Strategic solutions designed to increase visibility, attract the right audience,
                            and drive measurable business growth.`}
                showButtons={false}
            />

            <ServiceSection 
                id={"service1"}
                title = {
                    <>
                        Search Engine Optimization <span className="text-brandMarketing-500"> (SEO) </span> 
                    </>
                }
                subtitle={"Improve your search visibility and attract qualified, long-term traffic."}
                listData={["Technical website optimization", "Keyword research and targeting" ,
                    "On-page SEO improvements", "Content optimization", "Performance monitoring and reporting"
                ]}
                icon={<Search className="text-3xl text-white" />}
                image={seo}
                imageAlt={"Laptop with rocket representing SEO growth"}
                reverse={false}
            />

            <ServiceSection
                id={"service2"}
                title = {
                    <>
                        <span className="text-brandMarketing-500"> Social Media </span> Management
                    </>
                }
                subtitle={"Build a strong and consistent presence across key social platforms."}
                listData={["Content planning and scheduling", "Branded posts and visuals" ,
                    "Profile optimization", "Audience engagement", "Performance tracking"
                ]}
                icon={<Share2Icon className="text-3xl text-white" />}
                image={socialmedia}
                imageAlt={"Smartphone showing social media app icons for social media management"}
                reverse={true}
            />

            <ServiceSection 
                id={"service3"}
                title = {
                    <>
                        <span className="text-brandMarketing-500"> Content </span> Strategy
                    </>
                }
                subtitle={"Create purposeful content that supports your brand and marketing goals."}
                listData={["Content planning and direction", "Website and landing page content", 
                    "Blog and educational articles", "Brand-aligned messaging", "Content optimization"
                ]}
                icon={<PenTool className="text-3xl text-white" />}
                image={content}
                imageAlt={"Team collaborating on content strategy in a boardroom meeting"}
                reverse={false}
            />

            <ServiceSection
                id={"service4"}
                title = {
                    <>
                        <span className="text-brandMarketing-500"> Performance </span> Insights
                    </>
                }
                subtitle={"Track performance and gain clarity through actionable analytics."}
                listData={["Analytics setup and integration", "Traffic and engagement tracking", 
                    "Campaign performance analysis", "Custom reports and summaries", "Growth recommendations"
                ]}
                icon={<ChartLine className="text-3xl text-white" />}
                image={performance}
                imageAlt={"Digital performance insights dashboard with charts and graphs"}
                reverse={true}
            />

            <ServiceSection
                id={"service5"}
                title = {
                    <>
                        <span className="text-brandMarketing-500"> Email </span> Campaigns
                    </>
                }
                subtitle={"Connect with your audience through targeted and automated emails."}
                listData={["Campaign planning and setup", "Email template design", "Audience segmentation",
                    "Automated workflows", "Performance tracking"
                ]}
                icon={<Mail className="text-3xl text-white" />}
                image={emailcompaign}
                imageAlt={"Email marketing and automation concept showing laptop and email campaign visuals"}
                reverse={false}
            />

            <ServiceSection
                id={"service6"}
                title = {
                    <>
                        <span className="text-brandMarketing-500"> PPC </span> Advertising
                    </>
                }
                subtitle={"Drive immediate traffic through targeted paid campaigns."}
                listData={["Campaign setup and management", "Keyword and audience targeting", 
                    "Ad copy and creative optimization", "Budget and bid management", "Performance monitoring"
                ]}
                icon={<Target className="text-3xl text-white" />}
                image={ppc}
                imageAlt={"Laptop screen showing performance analytics for PPC advertising campaigns"}
                reverse={true}
            />

            <FinalCTA />
            <Footer />
            <ScrollToTop />
        </>
    )
}