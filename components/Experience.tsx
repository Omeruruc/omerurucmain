'use client'

import { motion } from 'framer-motion'
import { Briefcase, Users } from 'lucide-react'

const items = [
  {
    icon: Briefcase,
    role: 'Yazılım Mühendisliği Stajyeri',
    org: 'Branchsight',
    period: 'Temmuz 2026 - Halen',
    points: [
      'Full-stack geliştirme süreçlerinde aktif rol alma ve şirket içi projelere katkı sağlama.',
    ],
  },
  {
    icon: Users,
    role: 'Scrum Master & Yapay Zeka Araştırmacısı',
    org: 'Akademik Proje',
    period: 'Mart 2026 - Halen',
    points: [
      'Büyük Dil Modellerinde (LLM) halüsinasyon filtreleme üzerine odaklanan çoklu ajan (multi-agent) sistemi projesinde Scrum Master olarak görev aldım.',
      'Projenin akademik bir makaleye dönüştürülmesi süreçlerini ve literatür taramasını yürüttüm.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 font-medium mb-2 tracking-wide uppercase text-sm">
            Deneyim
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white">
            Yolculuğum <span className="gradient-text">nereden geçti?</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-stone-200 dark:border-stone-800 ml-4 md:ml-0">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-10 pb-12 last:pb-0"
              >
                <span className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center ring-4 ring-white dark:ring-black">
                  <Icon size={12} className="text-white" />
                </span>

                <div className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                      {item.role}
                    </h3>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-primary-500 mb-3">
                    {item.org}
                  </p>
                  <ul className="space-y-2">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed flex gap-2"
                      >
                        <span className="text-primary-500 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
