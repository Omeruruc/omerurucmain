"use client";

import { motion } from "framer-motion";
import { Code2, Database, BrainCircuit, Wrench } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Backend & Frontend",
    tags: [
      "C#",
      ".NET",
      "Java",
      "Python",
      "React",
      "Next.js",
      "JavaScript",
      "HTML5",
    ],
  },
  {
    icon: Database,
    title: "Veritabanı",
    tags: ["SQL Server", "PostgreSQL"],
  },
  {
    icon: BrainCircuit,
    title: "Yapay Zeka & Araştırma",
    tags: ["Multi-Agent Systems", "LLM Hallucination Filtering"],
  },
  {
    icon: Wrench,
    title: "Metodolojiler & Araçlar",
    tags: ["Agile / Scrum", "Scrum Master", "Git", "GitHub"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 bg-stone-50 dark:bg-stone-950/50"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 font-medium mb-2 tracking-wide uppercase text-sm">
            Teknik Yetkinlikler
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white">
            Neler <span className="gradient-text">yapabiliyorum?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
                    <Icon className="text-primary-500" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.06 }}
                      className="text-sm px-3 py-1.5 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 font-medium"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
