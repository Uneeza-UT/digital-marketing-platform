import Header from '../Components/layout/Header'
import Hero from '../Components/shared/Hero'
import TrustIndicator from '../Components/home/TrustIndicator'
import BriefServices from '../Components/home/BriefServices'
import Process from '../Components/home/Process'
import Results from '../Components/home/Results'
import Testimonials from '../Components/shared/Testimonials'
import FinalCTA from '../Components/shared/FinalCTA'
import Footer from '../Components/layout/Footer'
import ScrollToTop from '../Components/shared/ScrollToTop'

export default function Home() {
    return (
        <>
            <Header />
            <Hero 
                title = { 
                    <> 
                        Digital <span className="text-brandMarketing-500"> Marketing</span> Excellence
                    </>
                }
                subtitle = {"We help brands grow through innovative marketing solutions tailored to reach your target audience and drive measurable results."}
                showButtons={true}
            />
            <TrustIndicator />
            <BriefServices />
            <Process />
            <Results />
            <Testimonials />
            <FinalCTA />
            <Footer />
            <ScrollToTop />
        </>
    )
}