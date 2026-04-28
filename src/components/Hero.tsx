import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function useTypewriter(
  text: string,
  options?: {
    startDelayMs?: number;
    charDelayMs?: number;
    deleteDelayMs?: number;
    pauseMs?: number;
  }
) {
  const startDelayMs = options?.startDelayMs ?? 250;
  const charDelayMs = options?.charDelayMs ?? 55;
  const deleteDelayMs = options?.deleteDelayMs ?? 30;
  const pauseMs = options?.pauseMs ?? 1200;

  const [count, setCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReducedMotion) {
      setCount(text.length);
      return;
    }

    let timeoutId: number;

    if (count === 0 && !isDeleting) {
      timeoutId = window.setTimeout(() => {
        setCount(1);
      }, startDelayMs);
      return () => window.clearTimeout(timeoutId);
    }

    if (!isDeleting && count < text.length) {
      timeoutId = window.setTimeout(() => {
        setCount(count + 1);
      }, charDelayMs);
    }

    else if (!isDeleting && count === text.length) {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(true);
      }, pauseMs);
    }

    else if (isDeleting && count > 0) {
      timeoutId = window.setTimeout(() => {
        setCount(count - 1);
      }, deleteDelayMs);
    }

    else if (isDeleting && count === 0) {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false);
      }, 400);
    }

    return () => window.clearTimeout(timeoutId);
  }, [count, isDeleting, text, startDelayMs, charDelayMs, deleteDelayMs, pauseMs]);

  return text.slice(0, count);
}

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

  const greeting = "Hola, Soy Celeste";
  const typedGreeting = useTypewriter(greeting, {
    startDelayMs: 350,
    charDelayMs: 55,
  });

  return (
    <motion.section
      id="inicio"
      className="min-h-svh flex flex-col justify-center items-center mx-auto px-6 sm:px-8 md:px-24 py-18 sm:py-20 relative overflow-hidden bg-[#050a18]"
      variants={container}
      initial="hidden"
      animate="show"
    >

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Blob principal */}
        <motion.div
          className="absolute w-[50%] h-[50%] bg-blue-500/30 blur-[120px] rounded-full"
          animate={{
            x: ["-20%", "40%", "-10%", "30%", "-20%"],
            y: ["-10%", "30%", "50%", "-20%", "-10%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blob secundario */}
        <motion.div
          className="absolute w-[40%] h-[40%] bg-cyan-400/30 blur-[100px] rounded-full"
          animate={{
            x: ["60%", "10%", "50%", "20%", "60%"],
            y: ["20%", "60%", "10%", "40%", "20%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blob pequeño */}
        <motion.div
          className="absolute w-[30%] h-[30%] bg-blue-400/20 blur-[80px] rounded-full"
          animate={{
            x: ["30%", "70%", "40%", "60%", "30%"],
            y: ["70%", "30%", "60%", "20%", "70%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      </div>

      <motion.div className="w-full max-w-5xl text-center z-10" variants={container}>
        <motion.p
          className="font-headline text-cyan-400 font-bold tracking-[0.28em] sm:tracking-[0.4em] uppercase text-[11px] sm:text-sm mb-5 sm:mb-6 opacity-80"
          variants={item}
        >
          <span aria-label={greeting} role="text">
            <span aria-hidden="true">{typedGreeting}</span>
            <span
              aria-hidden="true"
              className="inline-block align-baseline w-[0.8ch] opacity-80 animate-pulse"
            >
              |
            </span>
          </span>
        </motion.p>

        <motion.h1
          className="font-headline text-white text-[38px] sm:text-5xl md:text-[6.5rem] uppercase font-bold leading-[0.95] tracking-tight mb-6 sm:mb-8"
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
          Bienvenid@ a mi espacio digital: código, café y mucha creatividad
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