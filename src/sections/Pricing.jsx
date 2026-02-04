import { SparklesIcon } from "lucide-react";
// import { useThemeContext } from "../context/ThemeContext";
import SectionTitle from "../components/SectionTitle";
import { pricingData } from "../data/pricingData";

export default function Pricing() {
    // const { theme } = useThemeContext();
    return (
        <div className="relative">
            {/* <img className="absolute -mt-20 md:-mt-100 md:left-20 pointer-events-none" src={theme === "dark" ? "./assets/color-splash.svg" : "./assets/color-splash-light.svg"} alt="color-splash" width={1000} height={1000} priority fetchPriority="high" /> */}
            <SectionTitle text1="Modules" text2="Modules Overview" text3="Our comprehensive suite of modules covers every aspect of your business needs, allowing you to choose only what you need and scale as you grow" />

            <div className="flex flex-wrap items-center justify-center gap-6 mt-16">
                {pricingData.map((plan, index) => (
                    <div key={index} className={`p-6 flex flex-col h-full rounded-2xl max-w-75 !h-80  w-full shadow-[0px_4px_26px] shadow-black/6 ${plan.mostPopular ? "relative pt-12 bg-gradient-to-b from-indigo-600 to-violet-600" : "bg-white/50 dark:bg-gray-800/50 border border-slate-200 dark:border-slate-800"}`}>
         
                        <plan.icon size={24}/>
                        <h5 className={`text-3xl font-semibold mt-1 ${plan.mostPopular && "text-white"}`}>{plan.title}<span className={`font-normal text-sm ${plan.mostPopular ? "text-white" : "text-slate-300"}`}></span></h5>
                        <hr className={`my-8 ${plan.mostPopular ? "border-gray-300" : "border-slate-300 dark:border-slate-700"}`} />
                        <div className={`space-y-2 flex-grow ${plan.mostPopular ? "text-white" : "text-slate-600 dark:text-slate-300"}`}>
                            {plan.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-1.5">
                                    
                                    <span>{feature.name}</span>
                                    
                                </div>
                            ))}
                        </div>
                        <button className={`mt-auto transition w-full py-3 rounded-lg font-medium mt-8 ${plan.mostPopular ? "bg-white hover:bg-slate-100 text-slate-800" : "bg-[#fc7d5e] hover:bg-purple-700 text-white"}`}>
                            <span>{plan.buttonText}</span>
                            {/* <plan.buttonICon size={18}/> */}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}