"use client";

import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Target } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Eğitim",
    desc: "Fırat Üniversitesi, Yazılım Mühendisliği (Lisans) — 3. Sınıf Öğrencisi",
  },
  {
    icon: Sparkles,
    title: "Odak Alanı",
    desc: "Full-stack web geliştirme, yapay zeka entegrasyonları ve çoklu ajan (multi-agent) sistemleri",
  },
  {
    icon: Target,
    title: "Vizyon",
    desc: "Performans, ölçeklenebilirlik ve kullanıcı deneyimini önceleyen yenilikçi çözümler üretmek",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 font-medium mb-2 tracking-wide uppercase text-sm">
            Hakkımda
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white">
            Kim bu <span className="gradient-text">Ömer?</span>
          </h2>
          <p className="mt-5 text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Ben Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisi ve{" "}
            <span className="font-semibold text-stone-900 dark:text-white">
              Branchsight
            </span>{" "}
            şirketinde Yazılım Mühendisliği Stajyeriyim. Full-stack web
            geliştirme süreçlerine, yapay zeka entegrasyonlarına ve çoklu ajan
            (multi-agent) sistemlerine odaklanıyorum. Projelerimde performansı,
            ölçeklenebilirliği ve kullanıcı deneyimini ön planda tutarak
            yenilikçi çözümler üretmeyi hedefliyorum.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="p-7 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-primary-400 dark:hover:border-primary-500 transition-colors shadow-sm hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                  <Icon className="text-primary-500" size={22} />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
