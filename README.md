# Ömer Faruk Uruç — Kişisel Portföy Sitesi

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion ile
geliştirilmiş modern, minimalist ve animasyonlu bir portföy sitesi.

## Özellikler

- 🎨 Modern minimalist tasarım, dark/light mode desteği
- ✨ Framer Motion ile akıcı geçiş animasyonları
- 📱 Tam responsive (mobil, tablet, masaüstü)
- ⚡ Next.js App Router ile hızlı statik render
- 🔍 SEO uyumlu meta veriler

## Bölümler

1. **Ana Sayfa (Hero)** — Tanıtım, sosyal linkler
2. **Hakkımda** — Kısa biyografi ve odak alanları
3. **Yetkinlikler** — Backend/Frontend, veritabanı, AI, araçlar
4. **Deneyim** — Branchsight stajı ve akademik proje
5. **Projeler** — Roomiks, Benim Saham, MBM Elektrik İnşaat
6. **İletişim** — E-posta, LinkedIn, GitHub

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini aç.

## Profil Fotoğrafı Ekleme

`public/images/profile.jpg` yoluna kendi profil fotoğrafını eklemen gerekiyor.
Hero bölümü bu dosyayı otomatik olarak kullanır.

## Production Build

```bash
npm run build
npm run start
```

## Deployment (Netlify)

Bu proje [Netlify](https://netlify.com) üzerinde `@netlify/plugin-nextjs` ile deploy edilmeye hazırdır. `netlify.toml` dosyası build ayarlarını içerir.

1. [Netlify](https://app.netlify.com) üzerinde "Add new site" → "Import an existing project"
2. GitHub reposunu seç: `Omeruruc/omerurucmain`
3. Build command: `npm run build`, Publish directory: `.next` (otomatik algılanır)
4. Deploy'u başlat

CLI ile deploy etmek istersen:

```bash
npx netlify-cli deploy --build
```
