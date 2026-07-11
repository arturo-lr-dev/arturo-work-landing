import { Navigation, Footer } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Interlude } from "@/components/motion";
import {
  Hero,
  About,
  Principles,
  Method,
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
        <Principles />
        <Method />
        <Interlude
          src="/images/proyect-1.png"
          alt="Ilustración de flujos de transacciones convergiendo en un núcleo central"
          caption="Servicios core bancarios · millones de operaciones al día"
          mode="drift"
        />
        <Projects />
        <Interlude
          src="/images/proyect-2.png"
          alt="Ilustración de registros de datos fluyendo hacia un sistema central"
          caption="Migración de datos y API · 50+ endpoints sin parar la operación"
          mode="expand"
        />
        <Timeline />
        <Interlude
          src="/images/proyect-3.png"
          alt="Ilustración de procesos convergiendo a través de un punto de control"
          caption="Seguridad y automatización · 110 pruebas en verde"
          mode="pan"
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
