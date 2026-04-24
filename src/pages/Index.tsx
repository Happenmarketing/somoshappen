import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Services from "@/components/Services";
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
      <Process />
      <Cases />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
