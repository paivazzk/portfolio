"use client";

import Image from "next/image";
import { motion } from "motion/react";
import TypingEffect from "./components/TypingEffect ";
import ProjectCard from "./components/ProjectCard";
import { useState, useEffect } from "react";
import { CodeXml, Zap, Database, Globe, Send } from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div id="inicio" className="w-full min-h-screen bg-[#030303] overflow-x-hidden text-white">
      <Image
        id="bg-teia"
        src="/png-teia-aranha.png"
        alt="Background Image"
        fill
        priority
        className="fixed top-0 left-0 w-full h-auto object-cover z-0 pointer-events-none opacity-15"
      />

      <Image
        id="bg-logo"
        src="/bg-spider-header.png"
        alt="Logo"
        width={550}
        height={650}
        priority
        className="opacity-15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none pulse-animation"
      />

      <div
        className={`fixed top-0 w-full h-20 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg border-b border-neutral-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 md:px-16 flex justify-between items-center">
          <h1 className="select-none text-white font-extrabold text-2xl">
            PORT<span className="text-neutral-400">FÓLIO</span>
          </h1>

          <ul className="hidden md:flex text-lg tracking-wider space-x-8 font-bold">
            <a href="#inicio"><li className="hover:scale-110 transition-transform duration-300 cursor-pointer hover:text-red-600">
              INÍCIO
            </li></a>
            <a href="#projetos"><li className="hover:scale-110 transition-transform duration-300 cursor-pointer hover:text-red-600">
              PROJETOS
            </li></a>
            <a href="#sobre"><li className="hover:scale-110 transition-transform duration-300 cursor-pointer hover:text-red-600">
              SOBRE
            </li></a>
            <a href="#contato"><li className="hover:scale-110 transition-transform duration-300 cursor-pointer hover:text-red-600">
              CONTATO
            </li></a>
          </ul>
        </div>
      </div>

      <div className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-26">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative w-full flex flex-col justify-center"
        >
          <TypingEffect
            strings={[
              "Olá, ^500 sou o Vinícius <span class='text-[2.5rem] md:text-[4rem] font-light text-red-600 neon-text'>Paiva.</span>",
              "Desenvolvedor Web.",
              "Veja meu portfólio.",
            ]}
            typeSpeed={40}
            backSpeed={20}
            className="mt-20 md:mt-80 text-[2rem] sm:text-[2.5rem] md:text-[4rem] font-bold text-white z-50"
            showCursor={true}
            contentType="html"
          />

          <p className="mt-6 text-base sm:text-lg md:text-xl font-sans font-light tracking-wide text-[#999999]">
            Transformando código em experiências digitais que <br /> desafiam o
            comum.
          </p>

          <ul className="mt-10 flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
             <a href="#projetos"><button className="relative w-full sm:w-[190px] h-14 bg-white text-black font-bold cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-red-600">
              <img
                src="/btnImage-black.png"
                alt="Ícone"
                className="opacity-70 w-full h-full object-cover"
              />

             <span className="absolute inset-0 flex items-center justify-center text-[#000000] font-bold tracking-wider text-[1.3rem]">
                VER PROJETOS
              </span>
            </button></a>

            <a href="#contato"><button className="relative w-full sm:w-[190px] h-14 border border-neutral-600 text-white font-bold cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-red-600">
              <img
                src="/btnImage-white.png"
                alt="Ícone"
                className="opacity-70 w-full h-full object-cover"
              />

              <span className="absolute inset-0 flex items-center justify-center text-[#e6e6e6] font-bold tracking-wider text-[1.3rem]">
                CONTATO
              </span>
            </button></a>
          </ul>
        </motion.div>
      </div>

      <div id="projetos" className="w-full select-none bg-[#030303] pt-32 pb-10 flex flex-col items-baseline px-6 md:px-16">
        <div className="flex items-center gap-4 px-6 md:px-16 mt-20">
          <div className="w-16 h-[1px] bg-white/20" />
          <span className="text-[0.9rem] tracking-[0.3em] uppercase text-white/30 font-sans font-medium">
            Portfolio
          </span>
        </div>

        <span className="text-[4rem] mt-5 tracking-[0.1rem] text-white font-medium">
          Projetos
        </span>
      </div>

      <main className="select-none relative overflow-hidden bg-[#030303] px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* CARD 1 */}
            <div className="relative flex justify-center">
              <motion.div
                variants={fadeUp}
                className="relative flex justify-center"
              >
                {/* Teia */}
                <img
                  src="/teia-componentes.png"
                  alt=""
                  className="absolute top-60 w-100 opacity-90 pointer-events-none z-0"
                />

                <div className="relative z-10">
                  <ProjectCard
                    title="Portfólio Cliente"
                    description="Portfólio desenvolvido com foco em design moderno, performance e experiência do usuário."
                    image="/Project-Wall.png"
                    tags={["React", "Next.js", "Tailwind CSS", "JavaScript"]}
                  />
                </div>
              </motion.div>
            </div>

            {/* CARD 2 */}
            <div className="relative flex justify-center">
              <motion.div
                variants={fadeUp}
                className="relative flex justify-center"
              >
                <img
                  src="/teia-componentes.png"
                  alt=""
                  className="absolute top-60 w-100 opacity-90 pointer-events-none z-0"
                />

                <div className="relative z-10">
                  <ProjectCard
                    title="Nexus Business"
                    description="Site desenvolvido para uma empresa de negócios, com foco em credibilidade e apresentação estratégica dos serviços."
                    image="/Project-Nexus.png"
                    tags={["React", "Next.js", "Tailwind CSS", "JavaScript"]}
                  />
                </div>
              </motion.div>
            </div>

            {/* CARD 3 */}
            <div className="relative flex justify-center">
              <motion.div
                variants={fadeUp}
                className="relative flex justify-center"
              >
                <img
                  src="/teia-componentes.png"
                  alt=""
                  className="absolute top-60 w-100 opacity-90 pointer-events-none z-0"
                />

                <div className="relative z-10">
                  <ProjectCard
                    title="Soluções Matemáticas"
                    description="Site de soluções matemáticas desenvolvido com foco em clareza, organização e usabilidade."
                    image="/Project-Soluc.png"
                    tags={["React", "Next.js", "Tailwind CSS", "JavaScript"]}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <div id="sobre" className="select-none relative w-full bg-[#030303] pt-12 pb-10 flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="select-none relative w-full bg-[#030303] pt-12 pb-10 flex flex-col items-center justify-center overflow-hidden"
        >
          <img
            src="/logo-spider-about.png"
            alt="Teia"
            className="absolute w-140 h-140 opacity-10 pointer-events-none select-none z-0 "
          />

          {/* Conteúdo */}
          <div className="relative z-10 w-full flex flex-col items-baseline justify-baseline">
            <div className="flex items-center gap-4">
              <div className="w-16 h-[1px] bg-white/20" />
              <span className="text-[0.9rem] tracking-[0.3em] uppercase text-white/30 font-sans font-medium">
                Bio
              </span>
            </div>

            <span className="text-[3rem] md:text-[4rem] ml-0 md:ml-26 mt-5 tracking-[0.1rem] text-white font-medium">
              Sobre Mim
            </span>

            <div className="w-full max-w-[1300px] mt-5 flex flex-col lg:flex-row mx-auto px-6">
              {/* Lado esquerdo */}
              <div className="w-full lg:w-[700px] min-h-[500px] pt-12 pb-10 flex flex-col items-baseline justify-center">
                <span className="font-sans text-left text-xl font-light tracking-wide text-[#999999]">
                  Sou um desenvolvedor full stack apaixonado por criar
                  experiências digitais que misturam performance técnica com
                  design impecável. Com anos de experiência em projetos
                  desafiadores.
                </span>

                <span className="mt-5 font-sans text-left text-md font-light tracking-wide text-[#6e6e6e]">
                  Minha abordagem combina código limpo, arquitetura sólida e uma
                  obsessão por detalhes visuais. Cada projeto é uma oportunidade
                  de criar algo que realmente faz diferença.
                </span>

                <ul className="flex flex-wrap gap-10 mt-10">
                  <li>
                    <h1 className="text-[#b9b9b9] text-3xl font-bold mb-1">
                      5+
                    </h1>
                    <h1 className="text-sm text-[#6e6e6e] font-sans">
                      ANOS DE <br />
                      EXPERIÊNCIA
                    </h1>
                  </li>

                  <li>
                    <h1 className="text-[#b9b9b9] text-3xl font-bold mb-1">
                      15+
                    </h1>
                    <h1 className="text-sm text-[#6e6e6e] font-sans">
                      PROJETOS <br />
                      CONCLUÍDOS
                    </h1>
                  </li>

                  <li>
                    <h1 className="text-[#b9b9b9] text-3xl font-bold mb-1">
                      10+
                    </h1>
                    <h1 className="text-sm text-[#6e6e6e] font-sans">
                      CLIENTES <br />
                      SATISFEITOS
                    </h1>
                  </li>
                </ul>
              </div>

              {/* Lado direito */}
              <div className="w-full lg:w-[900px] min-h-[500px] pt-12 pb-20 flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-[600px]">
                  <div className="font-sans text-left text-md font-light tracking-wide text-[#808080]">
                    <CodeXml className="w-5 h-5 text-[#6e6e6e] mb-5" />
                    <h1 className="text-[#b9b9b9] font-bold mb-1">FrontEnd</h1>
                    <h1 className="text-sm">
                      React, Next.js, Tailwind CSS, JavaScript, TypeScript
                    </h1>
                  </div>

                  <div className="font-sans text-left text-md font-light tracking-wide text-[#808080]">
                    <Database className="w-5 h-5 text-[#6e6e6e] mb-5" />
                    <h1 className="text-[#b9b9b9] font-bold mb-1">BackEnd</h1>
                    <h1 className="text-sm">Node.js, SQLite, Git</h1>
                  </div>

                  <div className="font-sans text-left text-md font-light tracking-wide text-[#808080]">
                    <Zap className="w-5 h-5 text-[#6e6e6e] mb-5" />
                    <h1 className="text-[#b9b9b9] font-bold mb-1">DevOps</h1>
                    <h1 className="text-sm">Vercel</h1>
                  </div>

                  <div className="font-sans text-left text-md font-light tracking-wide text-[#808080]">
                    <Globe className="w-5 h-5 text-[#6e6e6e] mb-5" />
                    <h1 className="text-[#b9b9b9] font-bold mb-1">FullStack</h1>
                    <h1 className="text-sm">APIs REST, Microsserviços</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div id="contato" className="w-full select-none bg-[#030303] pt-10 pb-10 flex flex-col items-baseline justify-baseline">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full select-none bg-[#030303] pt-10 pb-10 flex flex-col items-baseline justify-baseline"
        >
          <div className="flex items-center gap-4 px-6 md:px-16">
            <div className="w-16 h-[1px] bg-white/20" />
            <span className="text-[0.9rem] tracking-[0.3em] uppercase text-white/30 font-sans font-medium">
              Fale Comigo
            </span>
          </div>

          <span className="text-[3rem] md:text-[4rem] mt-5 px-6 md:px-16 tracking-[0.1rem] text-white font-medium">
            Contato
          </span>

          <span className="text-[1rem] mt-1 px-6 md:px-16 tracking-[0.1rem] text-white/30 font-medium font-sans">
            Tem um projeto em mente? Vamos conversar.
          </span>

          <div className="w-full bg-black flex justify-center px-6 md:px-16 py-24">
            <form className="w-full max-w-2xl space-y-10">
              <div>
                <label className="block text-md tracking-[0.2em] text-neutral-500 mb-4">
                  NOME
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full bg-transparent border-b border-neutral-800 text-white text-md pb-3 placeholder-neutral-700 focus:outline-none focus:border-red-600 transition-colors duration-300 placeholder:tracking-wide font-sans text-white/80"
                />
              </div>

              <div>
                <label className="block text-md tracking-[0.2em] text-neutral-500 mb-4">
                  EMAIL
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full bg-transparent border-b border-neutral-800 text-white text-md pb-3 placeholder-neutral-700 focus:outline-none focus:border-red-600 transition-colors duration-300 placeholder:tracking-wide font-sans text-white/80"
                />
              </div>

              <div>
                <label className="block text-md tracking-[0.2em] text-neutral-500 mb-4">
                  MENSAGEM
                </label>
                <textarea
                  rows="4"
                  placeholder="Descreva seu projeto..."
                  className="w-full max-w-[650px] bg-transparent border-b border-neutral-800 text-white text-md pb-3 placeholder-neutral-700 focus:outline-none focus:border-red-600 transition-colors duration-300 resize-none placeholder:tracking-wide font-sans text-white/80"
                ></textarea>
              </div>

              <button className="relative w-full sm:w-[300px] h-16 text-2xl bg-white overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-red-600">
                <img
                  src="/btnImage-black.png"
                  alt="Ícone"
                  className="opacity-70 w-full h-full object-cover"
                />
                <span className="flex absolute inset-0 flex items-center justify-center text-[#000000] font-bold tracking-wider text-[1.3rem]">
                  <Send className="mr-3" />
                  ENVIAR MENSAGEM
                </span>
              </button>
            </form>

            <img
              src="/bg-about-spiderr.png"
              alt="Teia"
              className="hidden lg:block relative ml-20 mb-20 w-[180px] h-auto grayscale opacity-60 hover:grayscale-0 transition-all duration-300 hover:opacity-80 hover:scale-101 hover:animate-pulse"
            />
          </div>
        </motion.div>
      </div>

      <footer className="bg-black border-t border-neutral-900 select-none">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
            <div className="text-[#dadada] font-medium tracking-wide">
              PORT<span className="text-neutral-400">FÓLIO</span>
            </div>

            <div className="text-neutral-600 text-center">
              © 2026 — Todos os direitos reservados
            </div>

            <div className="flex gap-8 text-neutral-500 tracking-widest text-xs">
              <a
                href="https://github.com/paivazzk"
                className="hover:text-red-600 transition-colors duration-300 hover:underline underline-offset-4"
              >
                GITHUB
              </a>

              <a
                href="#"
                className="hover:text-red-600 transition-colors duration-300 hover:underline underline-offset-4"
              >
                LINKEDIN
              </a>

              <a
                href="https://www.instagram.com/paivazzk_/"
                className="hover:text-red-600 transition-colors duration-300 hover:underline underline-offset-4 "
              >
                INSTAGRAM
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}