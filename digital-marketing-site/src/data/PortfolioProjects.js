import dentalportfolio from '../assets/Images/dentalportfolio.avif'
import saasportfolio from '../assets/Images/saasportfolio.avif'
import fitnessportfolio from '../assets/Images/fitnessportfolio.avif'
import seoportfolio2 from '../assets/Images/seoportfolio2.avif'

export const portfolioProjects = [
    {
        id: 1,
        featured: true,
        category: ["SEO", "Content Strategy", "Analytics"],
        image: seoportfolio2,
        imgAlt: "A computer screen with a rocket on top of it",
        overlay: "SEO",
        title: "SEO Growth Compaign",
        subtitle:"Helped a fashion e-commerce store increase organic traffic and revenue through technical SEO and content optimization.",
        stats:[{ value: "+112%", label: "organic traffic" },
                { value: "+47%", label: "revenue from search" },
                { value: "+36%", label: "conversion rate" }],
        badges:[
           {
            label: "SEO",
            className: "bg-brandMarketing-500/10 text-brandMarketing-500",
            },
            {
            label: "Content Strategy",
            className: "bg-purple-600/10 text-purple-600",
            },
            {
            label: "Performance Insights",
            className: "bg-neon-400/10 text-neon-400",
            },
        ],
        industry: "Fashion E-commerce",
        duration:"5 months",
        overview:"An online fashion retailer struggled with low organic visibility and relied heavily on paid ads for sales.",
        challenge:"High customer acquisition cost and minimal search engine presence limited sustainable growth.",
        strategy:["Technical SEO audit", "Keyword targeting for product pages", 
                "Content optimization", "Site speed improvements"],
        execution:["Optimized 150+ product pages", "Improved page speed by 42%", 
                    "Published 18 SEO articles"],
        results:[
            { value: "+112%", label: "organic traffic", className: "bg-brandMarketing-500/10 text-brandMarketing-500" },
            { value: "+47%", label: "revenue from search",  className: "bg-purple-600/10 text-purple-600"},
            { value: "+36%", label: "conversion rate", className: "bg-neon-400/10 text-neon-400" },
        ],                          
    },
    {
        id: 2,
        featured: false,
        category: ["PPC", "Analytics"],
        image: dentalportfolio,
        imgAlt: "Business professional calculating marketing budget and campaign performance metrics on desk",
        overlay: "PPC",
        title: "Lead Generation Campaign",
        stats:[{ value: "+212%", label: "leads" },
               { value: "−38%", label: "CPL" },
               { value: "3.4×", label: "ROAS" }],
        badges:[
            {
                label: "PPC Advertising",
                className: "bg-brandMarketing-500/10 text-brandMarketing-500",
            },
            {
                label: "Performance Insights",
                className: "bg-purple-600/10 text-purple-600",
            },
        ],
        industry: "Dental Clinic",
        duration:"3 months",
        overview:"A local dental clinic needed more patient bookings and consistent monthly leads.",
        challenge:"Low online visibility and ineffective ad targeting resulted in few inquiries.",
        strategy:["Google Ads optimization", "Landing page redesign", "Conversion tracking setup"],
        execution:["Created high-converting landing page", "Optimized ad targeting", 
                    "Implemented call tracking"],
        results:[
            { value: "+212%", label: "qualified leads", className: "bg-brandMarketing-500/10 text-brandMarketing-500" },
            { value: "−38%", label: "cost per lead",  className: "bg-purple-600/10 text-purple-600"},
            { value: "3.4×", label: "return on ad spend", className: "bg-neon-400/10 text-neon-400" },
        ],                          
    },
    {
        id: 3,
        featured: false,
        category: ["Email Campaigns", "Analytics", "Content Strategy"],
        image: saasportfolio,
        imgAlt: "Laptop surrounded by charts, notes, and analytics reports showing website performance analysis",
        overlay: "Conversion",
        title: "SaaS Conversion Optimization",
        stats:[{ value: "+58%", label: "signups" },
                { value: "+34%", label: "activation" },
                { value: "+29%", label: "revenue" }],
        badges:[
            {
            label: "Email Campaign",
            className: "bg-brandMarketing-500/10 text-brandMarketing-500",
            },
            {
            label: "Performance Insights",
            className: "bg-purple-600/10 text-purple-600",
            },
            {
            label: "Content Strategy",
            className: "bg-neon-400/10 text-neon-400",
            },
        ],
        industry: "SaaS Startup",
        duration:"4 months",
        overview:"A SaaS company struggled to convert website visitors into trial users.",
        challenge:"Low conversion rates and unclear messaging reduced signup performance.",
        strategy:["UX audit", "Landing page redesign", "Funnel optimization"],
        execution:["Redesigned homepage", "Simplified signup process", 
                    "Improved page load speed"],
        results:[
            { value: "+58%", label: "signup rate", className: "bg-brandMarketing-500/10 text-brandMarketing-500" },
            { value: "+34%", label: "user activation",  className: "bg-purple-600/10 text-purple-600"},
            { value: "+29%", label: "revenue growth", className: "bg-neon-400/10 text-neon-400" }
        ],                          
    },
    {
        id: 4,
        featured: false,
        category: [ "Social Media", "Content Strategy"],
        image: fitnessportfolio,
        imgAlt: "Professional managing digital marketing campaigns on laptop at modern workspace",
        overlay: "Social Media",
        title: "Social Media Growth Campaign",
        stats:[{ value: "+186%", label: "engagement" },
            { value: "+92%", label: "followers" },
            { value: "+47%", label: "traffic" }],
        badges:[
            {
                label: "Social Media Management",
                className: "bg-purple-600/10 text-purple-600",
            },
            {
                label: "Content Strategy",
                className: "bg-neon-400/10 text-neon-400",
            },
        ],
        industry: "Fitness Brand",
        duration:"3 months",
        overview:"A fitness brand needed stronger social presence and audience engagement.",
        challenge:"Low engagement and inconsistent content reduced brand visibility.",
        strategy:["Content strategy", "Paid social campaigns", "Audience targeting"],
        execution:["Designed branded content", "Ran targeted ad campaigns", 
                    "Optimized posting schedule"],
        results:[
            { value: "+186%", label: "engagement", className: "bg-brandMarketing-500/10 text-brandMarketing-500" },
            { value: "+92%", label: "follower growth",  className: "bg-purple-600/10 text-purple-600"},
            { value: "+47%", label: "website traffic", className: "bg-neon-400/10 text-neon-400" },
        ],                          
    }
]