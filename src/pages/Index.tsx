import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Services = lazy(() => import("@/components/Services"));
const Why = lazy(() => import("@/components/Why"));
const Process = lazy(() => import("@/components/Process"));
const Cases = lazy(() => import("@/components/Cases"));
const Clients = lazy(() => import("@/components/Clients"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <Services />
        <Why />
        <Process />
        <Cases />
        <Clients />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
