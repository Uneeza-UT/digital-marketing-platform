import Header from '../Components/layout/Header'
import Hero from '../Components/shared/Hero'
import Footer from '../Components/layout/Footer'
import WhoWeAre from '../Components/about/WhoWeAre'
import WhyChooseUs from '../Components/about/WhyChooseUs'
import Approach from '../Components/about/Approach'
import FinalCTA from '../Components/shared/FinalCTA'
import ScrollToTop from '../Components/shared/ScrollToTop'

export default function About() {
    return (
        <>
            <Header />
            <Hero 
                title = { 
                    <> 
                        <span className="text-brandMarketing-500"> About </span> Our Digital Marketing Studio 
                    </>
                }
                subtitle = {`We focus on creating structured, results-driven marketing strategies that 
                            help businesses grow their presence, reach the right audience, and achieve measurable 
                            progress.`}
                showButtons={false}
            />
            <WhoWeAre />
            <Approach />
            <WhyChooseUs />
            <FinalCTA />
            <Footer />
            <ScrollToTop />
        </>
    )
}