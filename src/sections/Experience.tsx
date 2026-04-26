import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const ease = [0.22, 1, 0.36, 1] as const;
  const section = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  return (
    <motion.section
      id="experience"
      className="min-h-screen py-24 px-8 md:px-24 bg-[#050a18] relative overflow-hidden"
      variants={section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >

      <div className="absolute top-[30%] -right-20 w-150 h-150 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-20 w-100 h-100 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div className="max-w-6xl mx-auto relative z-10" variants={section}>

        <motion.div className="text-center mb-24 space-y-4" variants={section}>
          <motion.p className="text-cyan-400 font-bold tracking-[0.4em] uppercase text-sm" variants={item}>
            Carrera
          </motion.p>
          <motion.h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" variants={item}>
            Mi Trayectoria <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 italic font-headline">Profesional</span>
          </motion.h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div className="relative max-w-4xl mx-auto" variants={section}>

          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2 hidden md:block" />

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative mb-16" variants={item}>

            <div className="md:text-right md:pr-12 space-y-3 order-2 md:order-1">
              <div className="flex items-center gap-3 md:justify-end text-slate-500 text-sm font-medium">
                <CalendarDays size={16} className="text-cyan-400" />
                <span>Noviembre 2025 — Febrero 2026</span>
              </div>

              <h3 className="text-white text-3xl font-bold tracking-tight">
                Desarrolladora <span className="text-blue-400">Web</span>
              </h3>

              <div className="flex items-center gap-3 md:justify-end text-slate-400 font-medium">
                <MapPin size={18} className="text-blue-500" />
                <span>Empresa / Daners Agency</span>
              </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-10">
              <div className="absolute w-16 h-16 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full blur-[20px] opacity-40 animate-pulse" />

              <div className="w-10 h-10 bg-[#0a1120] border-4 border-blue-600 rounded-full flex items-center justify-center relative shadow-[0_0_20px_rgba(37,99,235,0.6)]">
                <BriefcaseBusiness className="text-white" size={18} />
              </div>
            </div>

            <div className="relative group md:pl-2 order-3">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-15 group-hover:opacity-30 transition duration-1000"></div>

              <div className="relative bg-[#0a1120] border border-white/5 p-8 rounded-2xl backdrop-blur-xl space-y-5 group-hover:border-blue-500/30 transition-colors duration-500">

                <p className="text-slate-300 text-lg font-light leading-relaxed">
                  Desarrollo de sitios web y plataformas modernas utilizando tecnologías como React, Next.js, Astro y Tailwind CSS, enfocándome en rendimiento, diseño y experiencia de usuario.
                </p>

                <ul className="space-y-3 text-slate-400 text-sm list-inside">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    Levantamiento y análisis de requerimientos funcionales según las necesidades del cliente.
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    Desarrollo de landing pages, sitios informativos y plataformas de reservas.
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    Integración con bases de datos mediante PocketBase y Drizzle ORM.
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    Implementación de funcionalidades dinámicas, filtros, buscadores y catálogos tipo e-commerce.
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    Desarrollo de autenticación (login, registro y OAuth con Google) y formularios personalizados.
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    Optimización y apoyo en la web corporativa de Comvenia, enfocada en conversión.
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    Diseño responsive, integración con WhatsApp y creación de interfaces en Figma.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                  {["React", "Next.js", "Astro", "Tailwind", "PocketBase", "Drizzle ORM", "Figma"].map((tech, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold tracking-wider text-cyan-400/80 bg-cyan-400/5 px-3 py-1 rounded-full border border-cyan-400/10">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>

            <div className="absolute top-1/2 left-[calc(50%+20px)] -translate-y-1/2 w-8 h-8 bg-[#0a1120] border-l border-b border-blue-500/20 rotate-45 hidden md:block"></div>
          </motion.div>

        </motion.div>

      </motion.div>
    </motion.section>
  );
};

export default Experience;