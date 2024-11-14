import CompanyOverview from "@/components/CompanyOverview";
import HeroSection from "@/components/heroSection";
import ProductsOrServices from "@/components/ProductsOrServices";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CompanyOverview />
      <ProductsOrServices />
      <Testimonials />
    </div>
  );
}
