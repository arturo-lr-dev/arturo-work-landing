import { Navigation, Footer } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Interlude } from "@/components/motion";
import {
  Hero,
  About,
  Skills,
  Services,
  Projects,
  Timeline,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Interlude
          src="/images/proyect-1.png"
          alt="Ilustración de flujos de transacciones convergiendo en un núcleo central"
          caption="Plataforma digital bancaria · millones de operaciones al día"
          mode="drift"
        />
        <Skills />
        <Projects />
        <Interlude
          src="/images/proyect-2.png"
          alt="Ilustración de registros de datos fluyendo hacia un sistema de gestión"
          caption="Sistema de gestión CRM · del frontend al backend"
          mode="expand"
        />
        <Timeline />
        <Interlude
          src="/images/proyect-3.png"
          alt="Ilustración de procesos convergiendo a través de un punto de automatización"
          caption="Automatización de procesos · +60% de eficiencia operativa"
          mode="pan"
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
