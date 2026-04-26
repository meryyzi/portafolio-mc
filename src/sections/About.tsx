import { GraduationCap, MapPin, Calendar, Award, User } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const ease = [0.22, 1, 0.36, 1] as const;
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease },
    },
  };

  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-8 md:px-24 relative overflow-hidden bg-[#050a18]"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >

      <div className="absolute -top-24 right-0 w-150 h-150 bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 z-10" variants={container}>

        <motion.div className="lg:col-span-7 space-y-8" variants={container}>
          <motion.div className="space-y-4" variants={container}>
            <motion.p className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-sm flex items-center gap-2" variants={item}>
              <span className="w-8 h-px bg-cyan-400"></span> 01. Sobre mí
            </motion.p>
            <motion.h2 className="text-5xl md:text-6xl font-bold text-white leading-tight" variants={item}>
              Conoce un poco <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 italic font-headline">
                más de mí.
              </span>
            </motion.h2>
          </motion.div>

          <motion.div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light max-w-xl" variants={container}>
            <motion.p variants={item}>
              Soy una <span className="text-white font-medium">Desarrolladora de Software </span> enfocada en crear aplicaciones web modernas, funcionales y bien estructuradas.
            </motion.p>
            <motion.p variants={item}>
              Me interesa el desarrollo Full Stack, pero también disfruto mucho trabajar la parte visual (UI), buscando siempre que lo que construyo no solo funcione bien, sino que también se vea limpio y agradable.
            </motion.p>
          </motion.div>

          <motion.div className="pt-4" variants={item}>
            <a className="px-8 py-4 w-70 bg-white/5 border border-white/10 rounded-2xl text-white font-medium hover:bg-white/10 hover:border-blue-500/50 transition-all flex items-center gap-3 group" href="#experience">
              Explorar mi trayectoria
              <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="lg:col-span-5 grid grid-cols-1 gap-6" variants={container}>

          <motion.div
            className="bg-[#0a1120] border border-white/10 p-6 rounded-3xl flex items-center gap-5 shadow-lg shadow-black/30 hover:shadow-black/50 transition-all duration-300"
            variants={item}
          >

            <div className="p-3 bg-blue-600/20 rounded-2xl text-blue-400">
              <GraduationCap size={28} />
            </div>

            <div>
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-1 font-bold">
                Formación Principal
              </p>
              <h4 className="text-white text-xl font-bold">
                Desarrolladora de Software
              </h4>
              <p className="text-blue-300/80 text-sm mt-1 font-medium">
                ISIL
              </p>
            </div>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-3" variants={container}>
            <motion.div className="flex items-center gap-3 bg-white/5 border border-white/10 py-3 px-6 rounded-2xl hover:bg-white/10 transition-colors" variants={item}>
              <MapPin className="text-cyan-400" size={20} />
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold">Ubicación</p>
                <p className="text-slate-200 text-sm font-medium">Villa El Salvador, Perú</p>
              </div>
            </motion.div>

            <motion.div className="flex items-center gap-3 bg-white/5 border border-white/10 py-3 px-6 rounded-2xl hover:bg-white/10 transition-colors" variants={item}>
              <Calendar className="text-cyan-400" size={20} />
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold">Condición</p>
                <p className="text-slate-200 text-sm font-medium">Egresada</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-3" variants={container}>
            <motion.div className="flex items-center gap-3 bg-white/5 border border-white/10 py-3 px-6 rounded-2xl hover:bg-white/10 transition-colors" variants={item}>
              <User className="text-cyan-400" size={20} />
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold">Edad</p>
                <p className="text-slate-200 text-sm font-medium">20 años</p>
              </div>
            </motion.div>

            <motion.div className="bg-linear-to-br from-blue-600/10 to-transparent border border-white/10 py-3 px-6 rounded-2xl flex items-center justify-between group overflow-hidden relative" variants={item}>
              <div className="z-10">
                <p className="text-slate-500 text-[10px] uppercase font-bold">Enfoque</p>
                <p className="text-white text-sm font-medium">Full Stack & UI</p>
              </div>
              <Award className="text-white/10 absolute -right-1 -bottom-1 group-hover:text-blue-500/20 transition-colors" size={40} />
            </motion.div>
          </motion.div>

        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;