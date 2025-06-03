import Navbar from "@/components/Header";
import Image from "next/image";
import Hero from "@/components/Hero";
import CompanyOverview from "@/components/Overview";
import TestiUser from "@/components/Testimonials";
import ServicesComponent from "@/components/Services";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <CompanyOverview/>
      <ServicesComponent/>
      <TestiUser/>
    </div>
  );
}
