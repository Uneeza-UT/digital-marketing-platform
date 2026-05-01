import { UserCheck2, BriefcaseBusiness, Heart, HeadsetIcon } from "lucide-react"
import TrustStats from "../ui/TrustStats"

export default function TrustIndicator() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    
                    <TrustStats
                        icon={<UserCheck2 className="text-brandMarketing-500" />}
                        stats={"250+"}
                        text={"Happy Clients"} 
                    />

                    <TrustStats
                        icon={<BriefcaseBusiness className="text-brandMarketing-500" />}
                        stats={"500+"}
                        text={"Projects Completed"} 
                    />

                    <TrustStats
                        icon={<Heart className="text-brandMarketing-500" />}
                        stats={"98%"}
                        text={"Client Retention"} 
                    />

                    <TrustStats
                        icon={<HeadsetIcon className="text-brandMarketing-500" />}
                        stats={"24/7"}
                        text={"Support Available"} 
                    />
                    
                </div>
            </div>
        </section>
    )
}