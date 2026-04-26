import { Code2, Layout, Database, Wrench, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const ease = [0.22, 1, 0.36, 1] as const;
  const section = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  const chips = {
    hidden: {},
    show: { transition: { staggerChildren: 0.03, delayChildren: 0.05 } },
  };

  const chip = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease } },
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-blue-400" size={24} />,
      skills: ["React", "Next.js", "Angular", "Vue.js", "Astro", "Javascript", "TypeScript", "Tailwind CSS"],
      color: "group-hover:shadow-blue-500/20"
    },
    {
      title: "Backend",
      icon: <Database className="text-cyan-400" size={24} />,
      skills: ["C#", "Java", "Springboot", ".NET", "Node.js", "Express"],
      color: "group-hover:shadow-cyan-500/20"
    },
    {
      title: "Bases de Datos",
      icon: <Code2 className="text-indigo-400" size={24} />,
      skills: ["SQL Server", "PocketBase", "PostgreSQL", "Supabase", "Firebase", "MongoDB"],
      color: "group-hover:shadow-indigo-500/20"
    },
    {
      title: "Otras Herramientas",
      icon: <Wrench className="text-slate-400" size={24} />,
      skills: ["Git / GitHub", "Postman", "Figma"],
      color: "group-hover:shadow-slate-500/20"
    }
  ];

  const getFloatAnimation = (index: number) => {
    const animations = [
      "animate-float-1",
      "animate-float-2",
      "animate-float-3",
      "animate-float-4",
      "animate-float-5",
      "animate-float-6"
    ];
    return animations[index % animations.length];
  };

  return (
    <motion.section
      id="skills"
      className="min-h-screen py-24 px-8 md:px-24 bg-[#050a18] relative overflow-hidden"
      variants={section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      
      <style>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-8px) translateX(4px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-6px) translateX(-5px); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(2px); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-5px) translateX(-3px); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-7px) translateX(4px); }
        }
        @keyframes float-6 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-9px) translateX(-2px); }
        }
        .animate-float-1 { animation: float-1 3s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 3.5s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 4s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 3.2s ease-in-out infinite; }
        .animate-float-5 { animation: float-5 3.8s ease-in-out infinite; }
        .animate-float-6 { animation: float-6 4.2s ease-in-out infinite; }
      `}</style>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none" />

      <motion.div className="max-w-6xl mx-auto z-10 relative" variants={section}>
        <motion.div className="text-center mb-20 space-y-4" variants={section}>
          <motion.p className="text-cyan-400 font-bold tracking-[0.4em] uppercase text-sm" variants={item}>
            Skills
          </motion.p>
          <motion.h2 className="text-4xl md:text-5xl font-bold text-white" variants={item}>
            Mis <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">Habilidades</span>
          </motion.h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={section}>
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index} 
              className={`group bg-[#0a1120] border border-white/5 p-8 rounded-[2rem] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 ${cat.color} hover:shadow-2xl`}
              variants={item}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  {cat.icon}
                </div>
                <h3 className="text-white text-xl font-bold tracking-tight">{cat.title}</h3>
              </div>

              <motion.div className="flex flex-wrap gap-3" variants={chips}>
                {cat.skills.map((skill, sIndex) => (
                  <motion.span
                    key={sIndex} 
                    className={`px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-slate-400 text-sm font-medium hover:bg-linear-to-r hover:from-blue-600/20 hover:to-cyan-500/20 hover:text-white hover:border-blue-500/30 transition-all cursor-default ${getFloatAnimation(sIndex)}`}
                    variants={chip}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 p-6 bg-[#0f172a]/50 border border-dashed border-blue-500/30 rounded-2xl flex items-center justify-center gap-4 max-w-2xl mx-auto"
          variants={item}
        >
          <Terminal size={20} className="text-cyan-400" />
          <p className="text-slate-400 text-sm italic">
            "Siempre aprendiendo: Actualmente explorando Rust y GraphQL para expandir mis conocimientos como desarrolladora."
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;