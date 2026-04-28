import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";
import project4 from "../assets/img/project4.jpg";
import project5 from "../assets/img/project5.jpg";
import project6 from "../assets/img/project6.jpg";
import project7 from "../assets/img/project7.jpg";

const Projects = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const ease = [0.22, 1, 0.36, 1] as const;
  const section = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  const projects = [
    {
      title: "Comvenia Events",
      description: "Landing page para Comvenia Events, enfocada en mostrar una plataforma digital que facilita la búsqueda y conexión entre usuarios y proveedores de servicios para la organización de eventos.",
      tech: ["Astro", "React", "Tailwind", "PocketBase"],
      link: "https://eventscomvenia.com/",
      github: "#",
      image: project4,
    },
    {
      title: "Las Tunas Casa Campestre",
      description: "Página web para Las Tunas Casa Campestre, diseñada para presentar un club campestre y centro de eventos que ofrece restaurantes, bungalows y espacios para celebraciones en un entorno natural.",
      tech: ["Astro", "React", "Tailwind", "PocketBase"],
      link: "https://lastunasacascampestre.com/",
      github: "#",
      image: project5,
    },
    {
      title: "Las Tunas Tickets",
      description: "Página web de venta y gestión de tickets para eventos y actividades de Las Tunas Casa Campestre. Permite a los usuarios consultar disponibilidad y realizar reservas o compras de entradas en línea.",
      tech: ["Next.js", "TypeScript", "Tailwind", "PocketBase"],
      link: "#",
      github: "#",
      image: project6,
    },
    {
      title: "H&S Suministros Veterinarios",
      description: "Landing page desarrollada para H&S Suministros Veterinarios, una plataforma que presenta y promociona productos para el cuidado y salud animal, como medicamentos, alimentos y accesorios veterinarios.",
      tech: ["Astro", "React", "Tailwind", "Drizzle ORM"],
      link: "https://hyssuministrosveterinarios.com/",
      github: "#",
      image: project7,
    },
    {
      title: "Gustavo Cerati - Fan Page",
      description: "Landing page dedicada a Gustavo Cerati, el icónico músico argentino. La página presenta su biografía, discografía, etc.",
      tech: ["React", "Tailwind", "TypeScript"],
      link: "https://mc-cerati.vercel.app/",
      github: "#",
      image: project1,
    },
    {
      title: "Página de Turismo",
      description: "Landing page en inglés para una página de turismo, diseñada para presentar destinos turísticos, actividades y servicios disponibles para los visitantes.",
      tech: ["Angular", "Tailwind"],
      link: "https://mc-expediatravel.vercel.app/",
      github: "#",
      image: project2,
    },
    {
      title: "Pupp's",
      description: "Landing page en inglés presenta información sobre los productos, beneficios y más información para los dueños de mascotas.",
      tech: ["Angular", "Tailwind"],
      link: "https://mc-pupps.vercel.app/",
      github: "#",
      image: project3,
    },
  ];

  return (
    <motion.section
      id="projects"
      className="min-h-screen py-24 px-8 md:px-24 bg-[#050a18] relative overflow-hidden"
      variants={section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >

      <div className="absolute top-[20%] -left-20 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] -right-20 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div className="max-w-6xl mx-auto relative z-10" variants={section}>
        <motion.div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" variants={section}>
          <motion.div className="space-y-4" variants={section}>
            <motion.p className="text-cyan-400 font-bold tracking-[0.4em] uppercase text-sm flex items-center gap-2" variants={item}>
              <span className="w-8 h-px bg-cyan-400"></span> 02. Portafolio
            </motion.p>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" variants={item}>
              Proyectos <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 italic font-headline">Destacados</span>
            </motion.h2>
          </motion.div>
          <motion.p className="text-slate-400 max-w-sm text-lg font-light leading-relaxed" variants={item}>
            Explora mis creaciones más recientes. Usa las flechas para navegar entre los sistemas.
          </motion.p>
        </motion.div>

        <motion.div variants={item}>
        <Carousel
          plugins={[autoplay.current]}
          opts={{ align: "start", loop: true }} 
          className="w-full relative"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <motion.div
                  className="group relative bg-[#0a1120] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500 h-full"
                  variants={item}
                >
                  
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                {/*     <div className="absolute top-6 left-6 z-20">
                        <span className="bg-[#050a18]/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-tighter">
                            Software Architecture
                        </span>
                    </div> */}
                  </div>

                  <div className="p-8 space-y-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-4 text-slate-400">
                       {/*  <a href={project.github} className="hover:text-white transition-colors"><ChevronsLeftRight size={22} /></a> */}
                        <a href={project.link} target="_blank" className="hover:text-white transition-colors"><ExternalLink size={22} /></a>
                      </div>
                    </div>

                    <p className="text-slate-400 font-light leading-relaxed min-h-[60px]">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] uppercase font-bold tracking-widest text-cyan-400/80 bg-cyan-400/5 px-3 py-1 rounded-md border border-cyan-400/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute -inset-1 bg-linear-to-r from-blue-600/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 bg-[#0a1120] border-white/10 text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all" />
            <CarouselNext className="static translate-y-0 bg-[#0a1120] border-white/10 text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all" />
          </div>
        </Carousel>
        </motion.div>

        {/* Footer de la sección */}
    {/*     <motion.div className="mt-20 text-center" variants={item}>
            <button className="inline-flex items-center gap-3 text-slate-500 hover:text-white font-medium transition-all group">
                <Folder size={20} className="text-blue-500/50 group-hover:text-blue-500 transition-colors" />
                Explorar archivos en GitHub
                <span className="w-12 h-px bg-slate-800 group-hover:w-20 group-hover:bg-cyan-500 transition-all"></span>
            </button>
        </motion.div> */}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
