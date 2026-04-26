import { motion } from "framer-motion";

const Hero = () => {
  const ease = [0.22, 1, 0.36, 1] as const;
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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
      id="inicio"
      className="min-h-svh flex flex-col justify-center items-center mx-auto px-6 sm:px-8 md:px-24 py-18 sm:py-20 relative overflow-hidden bg-[#050a18]"
      variants={container}
      initial="hidden"
      animate="show"
    >
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-250 h-100 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-blue-500/40 to-transparent blur-[100px] rounded-full" />
        <div className="absolute top-[-10%] left-[20%] w-[40%] h-[60%] bg-cyan-400/30 blur-[80px] rounded-full" />
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[40%] bg-blue-400/20 blur-[60px] rounded-full" />
      </div>

      <motion.div className="w-full max-w-5xl text-center z-10" variants={container}>
        <motion.p
          className="font-headline text-cyan-400 font-bold tracking-[0.28em] sm:tracking-[0.4em] uppercase text-[11px] sm:text-sm mb-5 sm:mb-6 opacity-80"
          variants={item}
        >
          Hola, Soy Celeste
        </motion.p>
        
        <motion.h1
          className="font-headline text-white text-[2.7rem] sm:text-5xl md:text-[6.5rem] uppercase font-bold leading-[0.95] tracking-tight mb-6 sm:mb-8"
          variants={item}
        >
          <span className="block">Desarrolladora</span>
          <span className="uppercase text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
            de Software
          </span>
        </motion.h1>

        <motion.p
          className="text-slate-400 text-base sm:text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-10 sm:mb-12 px-1"
          variants={item}
        >
          Bienvenid@ a mi portafolio, donde la pasión por el código se encuentra con el arte del diseño.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-4 sm:gap-6" variants={item}>
          <a
            className="bg-linear-to-r from-blue-600 to-cyan-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-headline font-bold tracking-widest uppercase hover:scale-105 hover:shadow-[0_0_40px_rgba(30,144,255,0.4)] transition-all duration-500 w-full sm:w-auto" 
            href="#projects"
          >
            Ver Proyectos
          </a>
          
          <a
            className="border-2 border-slate-600 text-slate-300 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-headline font-bold tracking-widest uppercase hover:border-cyan-400 hover:text-cyan-400 transition-all duration-500 w-full sm:w-auto"
            href="/cv.pdf"
            download="CV_MariaCarhuaricra.pdf"
          >
            Descargar CV
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 w-full h-px bg-linear-to-r from-transparent via-slate-800 to-transparent" />
    </motion.section>
  )
}

export default Hero