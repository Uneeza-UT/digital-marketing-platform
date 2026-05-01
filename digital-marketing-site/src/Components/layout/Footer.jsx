import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6"
import { Rocket, Mail, Phone, MapPin, ChevronRight } from "lucide-react"
import { HashLink } from "react-router-hash-link"
import { useForm } from "react-hook-form"
import { toast } from 'react-hot-toast'

export default function Footer() {

    const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm();

    const onSubmit = async (data) => {
        setSubmitting(true);
        try{
            const response = await fetch("https://localhost:44345/api/contactmessage", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(data)
            })

            if (response.ok) {
                toast.success("Message Sent successfully!");
                reset();
                setSubmitting(false);
            } 
            else {
                toast.error("Something went wrong");
            }
        }
        catch (error){
            console.error("Error!", error)
            toast.error("Error submtting form!")
        }
    }

    return (
        <footer className="bg-brandMarketing-200 border-t border-slate-700 pt-12 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20 items-start">
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold text-brandMarketing-500 mb-4 flex items-center">
                            <Rocket className="mr-2" />AgencyName
                        </h3>
                        <p className="text-brandMarketing-800 leading-7">
                            Transforming businesses through innovative digital marketing strategies and data-driven solutions.
                        </p>
                        
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-brandMarketing-800">
                            <li><HashLink smooth to={"/Services#service1"} className="hover:text-brandMarketing-500 transition-colors flex items-center"><ChevronRight className="text-xs mr-3" />Search Engine Optimization (SEO)</HashLink></li>
                            <li><HashLink smooth to={"/Services#service2"} className="hover:text-brandMarketing-500 transition-colors flex items-center"><ChevronRight className="text-xs mr-3" />Social Media Management</HashLink></li>
                            <li><HashLink smooth to={"/Services#service3"} className="hover:text-brandMarketing-500 transition-colors flex items-center"><ChevronRight className="text-xs mr-3" />Content Strategy</HashLink></li>
                            <li><HashLink smooth to={"/Services#service4"} className="hover:text-brandMarketing-500 transition-colors flex items-center"><ChevronRight className="text-xs mr-3" />Performance Insights</HashLink></li>
                            <li><HashLink smooth to={"/Services#service5"} className="hover:text-brandMarketing-500 transition-colors flex items-center"><ChevronRight className="text-xs mr-3" />Email Compaigns</HashLink></li>
                            <li><HashLink smooth to={"/Services#service6"} className="hover:text-brandMarketing-500 transition-colors flex items-center"><ChevronRight className="text-xs mr-3" />PPC Advertising</HashLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
                        <ul className="space-y-3 text-brandMarketing-800 mb-6">
                            <li className="flex items-center">
                                <Mail className="text-brandMarketing-500 mr-3" />
                                hello@agencyname.com
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-brandMarketing-500 mr-3" />
                                +1 (555) 123-4567
                            </li>
                            <li className="flex items-center">
                                <MapPin className="text-brandMarketing-500 mr-3" />
                                123 Business Ave, City
                            </li>
                        </ul>

                        <div className="flex space-x-6">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-brandMarketing-800 hover:text-brandMarketing-500 transition-colors" aria-label="Facebook">
                                <FaFacebook size={20} />
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-brandMarketing-800 hover:text-brandMarketing-500 transition-colors" aria-label="X">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-brandMarketing-800 hover:text-brandMarketing-500 transition-colors" aria-label="LinkedIn">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-brandMarketing-800 hover:text-brandMarketing-500 transition-colors" aria-label="Instagram">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Send a Message</h4>
                        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                            <input 
                                type="text" 
                                placeholder="Name" 
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandMarketing-500 focus:border-transparent"
                                {...register("name", {
                                    required: "Name is required",
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/,
                                        message: "Only letters allowed"
                                    }
                                })}
                            />
                            {errors.name && <p className='text-red-500 text-sm'> {errors.name.message} </p>}
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandMarketing-500 focus:border-transparent"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: "Invalid email format"
                                    }
                                })}
                            />
                            {errors.email && <p className='text-red-500 text-sm'> {errors.email.message} </p>}
                            <textarea 
                                placeholder="Message" 
                                rows={3} 
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandMarketing-500 focus:border-transparent resize-none"
                                {...register("message", {
                                    required: "Message is required",
                                })}
                            />
                            {errors.message && <p className='text-red-500 text-sm'> {errors.message.message} </p>}

                            <button 
                                type="submit" 
                                disabled = {isSubmitting}
                                className="bg-brandMarketing-500 text-white px-4 py-2 rounded-lg hover:bg-brandMarketing-600 w-full"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                        Sending Message...
                                    </>) : (
                                        "Send Message"
                                    )}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-brandMarketing-800 tracking-wider">
                    <p>&copy; 2024 AgencyName. All rights reserved. | <a href="#" className="hover:text-brandMarketing-500 transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-brandMarketing-500 transition-colors">Terms of Service</a></p>
                </div>
            </div>
        </footer>
    )
}