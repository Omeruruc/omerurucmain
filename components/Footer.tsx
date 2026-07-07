'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-stone-500 dark:text-stone-400">
          © {new Date().getFullYear()} Ömer Faruk Uruç. Tüm hakları saklıdır.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:omeruruc59@gmail.com"
            aria-label="E-posta"
            className="text-stone-500 dark:text-stone-400 hover:text-primary-500 transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/omeruruc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-stone-500 dark:text-stone-400 hover:text-primary-500 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/Omeruruc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-stone-500 dark:text-stone-400 hover:text-primary-500 transition-colors"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
