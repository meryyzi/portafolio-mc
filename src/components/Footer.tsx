import { Mail, ArrowUpRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ease = [0.22, 1, 0.36, 1] as const;

  const section = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  const socialLinks = [
    { icon: <Mail size={20} />, href: "mailto:mariacelestee.mcg", label: "Email" },
  ];

  return (
    <motion.footer
      id="contacto"
      className="bg-[#050a18] pt-24 pb-12 px-8 md:px-24 relative overflow-hidden"
      variants={section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-75 bg-linear-to-t from-blue-200/10 to-transparent blur-[100px] pointer-events-none" />

      <motion.div className="max-w-6xl mx-auto relative z-10" variants={section}>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16 border-b border-white/5" variants={section}>
          <motion.div className="space-y-6" variants={item}>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
              ¿BUSCAS NUEVO <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 uppercase">
                Talento?
              </span>
            </h2>
            <p className="text-slate-400 text-lg font-light max-w-md italic">
              "Abierta a nuevas oportunidades donde pueda aportar mis conocimientos y crecer junto a un equipo innovador."
            </p>
          </motion.div>

          <motion.div className="flex lg:justify-end" variants={item}>
            <a
              href="https://wa.me/51923948051"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-10 py-6 bg-green-500 text-white rounded-full font-bold text-xl hover:bg-green-600 transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.3)]"
            >
              Contactar ahora
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />

              <div className="absolute -inset-2 border border-green-500/30 rounded-full animate-ping opacity-20 pointer-events-none" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16" variants={section}>
          <motion.div className="space-y-4" variants={item}>
            <div className="flex items-center gap-2 text-white font-bold text-2xl tracking-tighter uppercase">
              <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center">
                <Terminal size={18} />
              </div>
              María<span className="text-cyan-400 text-sm ml-1 font-light tracking-widest">Celeste</span>
            </div>
            <p className="text-slate-500 text-sm max-w-62.5">
              Programadora Full-Stack enfocada en la eficiencia, escalabilidad y la integridad estructural del software.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-8" variants={item}>
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Menú</h4>
              <nav className="flex flex-col gap-2 text-slate-400 text-sm font-light">
                <a href="#about" className="hover:text-cyan-400 transition-colors">Perfil</a>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Habilidades</a>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Portafolio</a>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">Experiencia</a>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Recursos</h4>
              <nav className="flex flex-col gap-2 text-slate-400 text-sm font-light">
                <a href="/cv.pdf"
                  download="CV_MariaCarhuaricra.pdf" className="hover:text-cyan-400 transition-colors font-medium text-blue-400">Descargar CV</a>
              </nav>
            </div>
          </motion.div>

          <motion.div className="space-y-4 p-6 bg-white/5 rounded-2xl border border-white/5" variants={item}>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mt-4">Disponibilidad</h4>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-slate-300 text-sm">Cuento con disponibilidad inmediata</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-[10px] font-bold tracking-[0.2em] uppercase" variants={item}>
          <p>© {currentYear} María Celeste — Desarrolladora de Software</p>

          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="p-3 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p>Lima, Perú</p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;