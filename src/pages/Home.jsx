"use client";
import { VideoIcon } from "lucide-react";
import Marquee from "react-fast-marquee";
import * as yup from 'yup';
import { featuresData } from "../data/featuresData";
import SectionTitle from "../components/SectionTitle";
// import { useThemeContext } from "../context/ThemeContext";
import { FaqSection } from "../sections/FaqSection";
import Pricing from "../sections/Pricing";
import { Controller,useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CircularProgress } from "@mui/material"
import { useState } from "react"
import { toast } from "sonner";
import { postUserInfo } from "../store/userThunks";

const schema= yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email('Invalid Email').required(),
  company: yup.string().required(),
  message: yup.string().required().min(10,"Message must be at least 10 characters"),
})

export default function Page() {
 const [loading, setLoading] = useState(false);
  const {control,handleSubmit,formState:{errors}} =useForm({
    resolver:yupResolver(schema)  })
//   const { theme } = useThemeContext();

    const onSubmit= async(data)=>{
        const userPayload={
          name:data.name,
          email:data.email,
          company:data.company,
          message:data.message
        }

        try{
          setLoading(true);
          const res = await postUserInfo(userPayload);
          toast.success(res?.data?.message)
        }catch(error){
          console.log(error)
           toast.warning("Failed to submit")
        }finally{
          setLoading(false);
        }
    }
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center px-4 bg-[url('/assets/light-hero-gradient.svg')] dark:bg-[url('/assets/dark-hero-gradient.svg')] bg-no-repeat bg-cover">
        <div className="flex flex-wrap items-center justify-center gap-3 p-1.5 pr-4 mt-46">
          {/* <div className="flex items-center -space-x-3">
                        <img className="size-7 rounded-full" height={50} width={50}
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                            alt="userImage1" />
                        <img className="size-7 rounded-full" height={50} width={50}
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                            alt="userImage2" />
                        <img className="size-7 rounded-full" height={50} width={50}
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                            alt="userImage3" />
                    </div>
                    <p className="text-xs">Join community of 1m+ founders </p> */}
        </div>
        <h1 className="mt-2 text-5xl/15 md:text-[64px]/19 font-semibold max-w-2xl">
          <span className="bg-gradient-to-r from-[#fc7d5e] dark:from-[#fc7d5e] to-[#d4573f] dark:to-[#d4573f] bg-clip-text text-transparent">
            {" "}
            Katibu ERP
          </span>{" "}
          <br />
          Your All-in-One Business Operating System{" "}
        </h1>
        <p className="text-base dark:text-slate-300 max-w-lg mt-2">
          Modular. Scalable. Intelligent.
        </p>
        <div className="flex items-center gap-4 mt-8">
          <button className="capitalize bg-[#fc7d5e] hover:bg-purple-700 transition text-white rounded-md px-6 h-11">
            request a demo
          </button>
          <button className="flex capitalize items-center gap-2 border border-[#fc7d5e] transition text-slate-600 dark:text-white rounded-md px-6 h-11">
            {/* <VideoIcon strokeWidth={1} /> */}
            <span>learn more</span>
          </button>
        </div>
        {/* <h3 className="text-base text-center text-slate-400 mt-28 pb-14 font-medium">
                    Trusting by leading brands, including —
                </h3>
                <Marquee className="max-w-5xl mx-auto" gradient={true} speed={25} gradientColor={theme === "dark" ? "#000" : "#fff"}>
                    <div className="flex items-center justify-center">
                        {[...companiesLogo, ...companiesLogo].map((company, index) => (
                            <img key={index} className="mx-11" src={company.logo} alt={company.name} width={100} height={100} />
                        ))}
                    </div>
                </Marquee> */}
      </div>

      <SectionTitle
        text1="FEATURES"
        text2="What is Katibu ERP?"
        text3="Katibu ERP is a modular enterprise management solution tailored for businesses of all sizes. From HR to Finance, CRM to Inventory, Katibu empowers growth and digital transformation across sectors."
      />

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-10 px-6 md:px-16 lg:px-24 xl:px-32">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-xl space-y-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 max-w-80 md:max-w-66"
          >
            <feature.icon
              className="text-[#fc7d5e] size-8 mt-4"
              strokeWidth={1.3}
            />
            <h3 className="text-base font-medium">{feature.title}</h3>
            <p className="text-slate-400 line-clamp-2">{feature.description}</p>
          </div>
        ))}
      </div>

      <Pricing />

      <FaqSection />

      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-20">
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl ">
          <img
            src="https://i.postimg.cc/dQgvPfyg/pexels-photo-3182773.webp"
            alt="Business team working together"
            className="w-full h-[420px] object-cover"
          />

          <div className="absolute inset-0 bg-black/45"></div>

          <div className="absolute inset-0 flex items-end">
            <div className="p-8 md:p-12 max-w-2xl">
              <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight">
                Ready to transform your business?
              </h2>
              <p className="mt-3 text-white/90 text-sm md:text-base">
                Join hundreds of businesses already using Katibu ERP to
                streamline operations and drive growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center justify-center mt-20">
        {/* <h3 className="text-3xl font-semibold mt-16 mb-4">
          Ready to Get Started?
        </h3>
        <p className="text-slate-600 dark:text-slate-200 max-w-xl mx-auto">
          Join thousands of satisfied customers and transform your business
          today.
        </p>
        <div className="flex items-center gap-4 mt-8">
          <button className="bg-[#fc7d5e] hover:bg-purple-700 transition text-white rounded-md px-6 h-11">
            Start free trial
          </button>
          <button className="border border-[#fc7d5e] transition text-slate-600 dark:text-white rounded-md px-6 h-11">
            Contact sales
          </button>
        </div> */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-semibold mt-16 mb-4">
                Ready to get started?
              </h2>

              <p className="text-slate-600 dark:text-slate-200 max-w-xl mx-auto">
                Contact us today to schedule a personalized demo and discover
                how Katibu ERP can streamline your operations and drive business
                growth.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-gray-700">📧</span>
                  <div className="text-left">
                    <p className="text-slate-600 dark:text-slate-200">Email Us</p>
                    <p className="text-slate-600 dark:text-slate-200">
                      info@katibu.africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-gray-700">📞</span>
                  <div className="text-left">
                    <p className="text-slate-600 dark:text-slate-200">Call Us</p>
                    <p className="text-slate-600 dark:text-slate-200">
                      +254 708 538 435
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-gray-700">📍</span>
                  <div className="text-left">
                    <p className="text-slate-600 dark:text-slate-200">Visit Us</p>
                    <p className="text-slate-600 dark:text-slate-200">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-slate-200 dark:border-slate-800 p-8 md:p-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Request a Demo
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-200 mb-1">
                    Full Name*
                  </label>
                  <Controller name="name" control={control} defaultValue="" 
                  render={({field})=>(
                        <input
                        {...field}
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#fc7d5e] focus:outline-none"
                  />
                  )}
                />
                 {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-200 mb-1">
                    Email Address*
                  </label>
                  <Controller name="email" control={control} defaultValue="" 
                  render={({field})=>(
                  <input
                  {...field}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#fc7d5e] focus:outline-none"
                  />
                     )}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-200 mb-1">
                    Company Name
                  </label>
                  <Controller name="company" control={control} defaultValue="" 
                  render={({field})=>(
                  <input
                  {...field}
                    type="text"
                    placeholder="Acme Inc."
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#fc7d5e] focus:outline-none"
                  />
                   )}
                    />
                    {errors.company && (
                        <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
                    )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-200 mb-1">
                    Message
                  </label>
                  <Controller name="message" control={control} defaultValue="" 
                  render={({field})=>(
                  <textarea
                  {...field}
                    rows="4"
                    placeholder="Tell us about your business needs..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#fc7d5e] focus:outline-none"
                  ></textarea>
                  )}
                    />
                     {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-[#fc7d5e] hover:bg-[#e06347] text-white font-semibold py-3 rounded-lg transition"
                >
                   {loading ? <CircularProgress size={20} /> : "Submit Request"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
