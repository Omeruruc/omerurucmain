"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  User,
  Layers,
  Briefcase,
  FolderKanban,
  Mail,
  ArrowRight,
} from "lucide-react";

const items = [
  {
    href: "/hakkimda",
    icon: User,
    title: "Hakkımda",
    desc: "Kim olduğumu ve neye odaklandığımı öğren.",
  },
  {
    href: "/yetkinlikler",
    icon: Layers,
    title: "Yetkinlikler",
    desc: "Kullandığım teknolojiler ve araçlar.",
  },
  {
    href: "/deneyim",
    icon: Briefcase,
    title: "Deneyim",
    desc: "Staj ve akademik proje geçmişim.",
  },
  {
    href: "/projeler",
    icon: FolderKanban,
    title: "Projeler",
    desc: "Geliştirdiğim canlı projeler.",
  },
  {
    href: "/iletisim",
    icon: Mail,
    title: "İletişim",
    desc: "Benimle nasıl iletişime geçebilirsin.",
  },
];

export default function QuickLinks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary-500 font-medium mb-2 tracking-wide uppercase text-sm">
            Keşfet
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white">
            Beni daha yakından <span className="gradient-text">tanı</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="group flex flex-col h-full p-6 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-primary-400 dark:hover:border-primary-500 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                    <Icon
                      className="text-primary-500 group-hover:text-white transition-colors"
                      size={20}
                    />
                  </div>
                  <h3 className="text-base font-semibold text-stone-900 dark:text-white mb-1.5 flex items-center gap-1">
                    {item.title}
                    <ArrowRight
                      size={14}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-500"
                    />
                  </h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                    {item.desc}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
