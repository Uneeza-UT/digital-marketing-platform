import Header from '../Components/layout/Header'
import Footer from '../Components/layout/Footer'
import Hero from '../Components/shared/Hero'
import FinalCTA from '../Components/shared/FinalCTA'
import ScrollToTop from '../Components/shared/ScrollToTop'
import CaseStudies from '../Components/portfolio/CaseStudies'


export default function Portfolio() {
    return (
        <>
            <Header />
            <Hero 
                title = { 
                    <> 
                        Case Studies & <span className="text-brandMarketing-500"> Projects </span> 
                    </>
                }
                subtitle = {"Real-world examples of how strategy, design, and marketing work together to drive measurable business growth."}
                showButtons={false}
            />
            
           <CaseStudies />

            <FinalCTA />
            <Footer />
            <ScrollToTop />
        </>
    )
}