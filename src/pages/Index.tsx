import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Why from "@/components/Why";
import Team from "@/components/Team";
import Process from "@/components/Process";
import Cases from "@/components/Cases";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Why />
      <Team />
      <Process />
      <Clients />
      <Cases />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
