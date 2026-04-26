import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, FolderRoot, Home, Mail, User, Wrench } from "lucide-react";
import { useMemo, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { icon: <Home size={20} />, href: "#inicio", label: "Inicio" },
      { icon: <User size={20} />, href: "#about", label: "Sobre mí" },
      { icon: <Wrench size={20} />, href: "#skills", label: "Habilidades" },
      { icon: <FolderRoot size={20} />, href: "#projects", label: "Proyectos" },
      { icon: <Briefcase size={20} />, href: "#experience", label: "Experiencia" },
      { icon: <Mail size={20} />, href: "#contacto", label: "Contacto" },
    ],
    [],
  );

  const desktopItems = navItems;
  const mobileItems = navItems.filter((i) => i.href !== "#inicio");

  const mobilePositions = useMemo(() => {
    const radius = 130;
    const yOffset = 80; 
    const start = (215 * Math.PI) / 180;
    const end = (325 * Math.PI) / 180;
    const n = mobileItems.length;
    return mobileItems.map((_, idx) => {
      const t = n === 1 ? 0.5 : idx / (n - 1);
      const angle = start + (end - start) * t;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius + yOffset;
      return { x, y };
    });
  }, [mobileItems.length]);

  return (
    <>

      <nav className="hidden md:block fixed left-6 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col gap-6 p-4 rounded-full bg-[#111827]/80 backdrop-blur-md border border-white/5 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          {desktopItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`group relative p-3 rounded-full transition-all duration-300 ${
                item.href === "#inicio"
                  ? "bg-cyan-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.6)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.icon}

              <span className="absolute left-14 scale-0 group-hover:scale-100 transition-all bg-cyan-500 text-white text-xs px-2 py-1 rounded-md">
                {item.label}
              </span>
            </a>
          ))}
        </div>

        <div className="absolute inset-0 -z-10 bg-blue-500/10 blur-2xl rounded-full scale-y-110" />
      </nav>

      <nav className="md:hidden fixed left-1/2 bottom-6 -translate-x-1/2 z-50">
        <div className="relative">
          <AnimatePresence>
            {open && (
              <motion.div
                className="absolute left-1/2 bottom-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {mobileItems.map((item, idx) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="absolute left-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-12 h-12 rounded-full bg-[#111827]/85 backdrop-blur-md border border-white/10 text-slate-200 shadow-[0_0_18px_rgba(59,130,246,0.18)] active:scale-95"
                    initial={{ opacity: 0, scale: 0.85, x: 0, y: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: mobilePositions[idx]?.x ?? 0,
                      y: mobilePositions[idx]?.y ?? 0,
                      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
                    }}
                    exit={{ opacity: 0, scale: 0.85, x: 0, y: 0, transition: { duration: 0.18 } }}
                    whileHover={{ y: (mobilePositions[idx]?.y ?? 0) - 4 }}
                    aria-label={item.label}
                    title={item.label}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid place-items-center w-16 h-16 rounded-full bg-cyan-500 text-white shadow-[0_0_24px_rgba(37,99,235,0.55)] border border-white/10 backdrop-blur-md active:scale-95 transition-transform"
          >
            <Home size={22} />
          </button>

          <div className="absolute inset-0 -z-10 bg-blue-500/20 blur-2xl rounded-full scale-110" />
        </div>
      </nav>
    </>
  );
};

export default Header;
