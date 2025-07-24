import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero1 from "@/components/Hero1";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero1/>
      <Features/>
      <Stats/>
      <Testimonials/>
      <Footer/>
    </>
  );
}
