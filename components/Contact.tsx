'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'

const links = [
  {
    icon: Mail,
    label: 'E-posta',
    value: 'omeruruc59@gmail.com',
    href: 'mailto:omeruruc59@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/omeruruc',
    href: 'https://www.linkedin.com/in/omeruruc/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Omeruruc',
    href: 'https://github.com/Omeruruc',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-500 font-medium mb-2 tracking-wide uppercase text-sm">
            İletişim
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4">
            Birlikte bir şeyler <span className="gradient-text">inşa edelim</span>
          </h2>
          <p className="text-stone-600 dark:text-stone-400 max-w-xl mx-auto mb-14">
            Bir proje fikrin mi var, yoksa sadece merhaba mı demek istiyorsun?
            Aşağıdaki kanallardan bana ulaşabilirsin.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {links.map((link, i) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group p-7 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-primary-400 dark:hover:border-primary-500 shadow-sm hover:shadow-lg transition-all flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                  <Icon className="text-primary-500 group-hover:text-white transition-colors" size={22} />
                </div>
                <span className="text-sm font-semibold text-stone-900 dark:text-white flex items-center gap-1">
                  {link.label}
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
                <span className="text-xs text-stone-500 dark:text-stone-400 break-all">
                  {link.value}
                </span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
