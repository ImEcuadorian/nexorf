import Hero from "@/features/landing/sections/Hero";
import {About} from "@/features/landing/sections/About";
import {Services} from "@/features/landing/sections/services";
import {Testimonials} from "@/features/landing/sections/Testimonials";
import {CompaniesMarquee} from "@/shared/ui/organisms/marquee/CompaniesMarquee";
import {Differentials} from "@/features/landing/sections/Differentials";

export default function Home() {
  return (
      <>
          <Hero/>
          <About/>
          <Services />
          <Differentials />
          <Testimonials />
          <CompaniesMarquee />
      </>
  );
}
