'use client'

import { motion } from 'framer-motion'
import { Building2, ExternalLink } from 'lucide-react'

type Project = {
  title: string
  url?: string
  company?: string
  desc: string
  tags: string[]
  gradient: string
}

const projects: Project[] = [
  {
    title: 'AI Visibility',
    company: 'Branchsight',
    desc: 'Markaların her şubesi için lokasyona özel sorguları Gemini, ChatGPT, Claude ve Google AI Mode’a sorup markanın yanıtlarda yer alıp almadığını, sırasını ve rakiplere karşı payını ölçen izleme paneli.',
    tags: ['Next.js', 'LLM Entegrasyonu', 'PostgreSQL', 'Inngest'],
    gradient: 'from-violet-500 to-fuchsia-400',
  },
  {
    title: 'Rakip Reklam Takip Sistemi',
    company: 'Branchsight',
    desc: 'Rakiplerin Meta reklamlarını her gün tarayıp önceki durumla karşılaştıran, yalnızca yeni başlayan ve duran reklamları Slack’e bildiren otomatik takip sistemi.',
    tags: ['Next.js', 'Inngest', 'Apify', 'Slack Entegrasyonu'],
    gradient: 'from-sky-500 to-indigo-400',
  },
  {
    title: 'Roomiks',
    url: 'https://roomiks.com',
    desc: 'Öğrencilere yönelik, birlikte çalışma ve verimlilik odaklı geliştirilmiş kapsamlı bir web platformu.',
    tags: ['Next.js', 'Full-Stack', 'Web Platform'],
    gradient: 'from-primary-500 to-cyan-400',
  },
  {
    title: 'Benim Saham',
    url: 'https://benimsaham.netlify.app',
    desc: 'Halı saha işletmeleri ve oyuncular için geliştirilmiş, kapora entegrasyonuna sahip online rezervasyon sistemi.',
    tags: ['React', 'Rezervasyon Sistemi', 'Ödeme Entegrasyonu'],
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    title: 'MBM Elektrik İnşaat',
    url: 'https://mbmelektrikinsaat.com',
    desc: 'İnşaat ve elektrik sektörü için modern arayüze ve kurumsal kimliğe sahip ticari web sitesi.',
    tags: ['Kurumsal Web Sitesi', 'Modern UI'],
    gradient: 'from-orange-500 to-amber-400',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-stone-50 dark:bg-stone-950/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 font-medium mb-2 tracking-wide uppercase text-sm">
            Projeler
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white">
            Öne Çıkan <span className="gradient-text">Çalışmalarım</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target={project.url ? '_blank' : undefined}
              rel={project.url ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-white group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  {project.url && (
                    <ExternalLink
                      size={16}
                      className="text-stone-400 group-hover:text-primary-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  )}
                </div>
                {project.company && (
                  <span className="self-start inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 mb-3 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400">
                    <Building2 size={12} />
                    {project.company} Şirket Projesi
                  </span>
                )}
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
