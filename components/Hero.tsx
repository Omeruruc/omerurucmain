"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[420px] h-[420px] rounded-full bg-primary-400/20 dark:bg-primary-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[420px] h-[420px] rounded-full bg-purple-400/20 dark:bg-purple-500/20 blur-3xl"
        />
      </div>

      <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center gap-8 pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-primary-400/40 shadow-xl">
            <Image
              src="/images/profile.jpg"
              alt="Ömer Faruk Uruç"
              width={176}
              height={176}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-green-500 ring-4 ring-white dark:ring-stone-900"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-primary-500 font-medium mb-3 tracking-wide">
            Merhaba, ben
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-white">
            Ömer Faruk <span className="gradient-text">Uruç</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
            Yazılım Mühendisi &amp; Yapay Zeka Araştırmacısı
          </p>
          <p className="mt-3 text-base text-stone-500 dark:text-stone-400 max-w-xl mx-auto">
            Fırat Üniversitesi Yazılım Mühendisliği öğrencisi ·
            Branchsight&apos;ta Junior Yazılım Mühendisi
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4"
        >
          <a
            href="mailto:omeruruc59@gmail.com"
            className="p-3 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:bg-primary-500 hover:text-white transition-colors"
            aria-label="E-posta"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/omeruruc/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:bg-primary-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/Omeruruc"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:bg-primary-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <Link
            href="/hakkimda"
            className="px-7 py-3 rounded-full bg-primary-500 text-white font-medium shadow-lg shadow-primary-500/30 hover:bg-primary-600 hover:scale-105 transition-all"
          >
            Beni Tanı
          </Link>
          <Link
            href="/iletisim"
            className="px-7 py-3 rounded-full border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-200 font-medium hover:border-primary-500 hover:text-primary-500 transition-all"
          >
            İletişime Geç
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
