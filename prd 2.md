# Product Requirements Document (PRD)

## Modern 3D Interactive Portfolio Website

------------------------------------------------------------------------

## 1. Overview

### Product Name

Modern 3D Interactive Portfolio

### Description

Website portofolio personal berbasis Next.js dengan desain modern,
interaktif, dan elemen 3D untuk menampilkan profil, skill, dan project
secara profesional.

### Objective

-   Menampilkan identitas profesional developer
-   Menarik recruiter / client
-   Menjadi personal branding digital
-   Showcase kemampuan Next.js & animasi modern

------------------------------------------------------------------------

## 2. Target User

### Primary Users

-   Recruiter
-   HRD perusahaan tech
-   Client freelance
-   Dosen / akademik

### User Needs

-   Melihat skill dengan cepat
-   Melihat daftar project
-   Mengetahui cara menghubungi
-   Akses cepat dan responsif di semua device

------------------------------------------------------------------------

## 3. Goals & Success Metrics

### Goals

-   Website responsif (mobile-first)
-   Loading cepat (\<3 detik)
-   UX modern dan smooth
-   SEO optimized

### Success Metrics

-   Lighthouse score \> 85
-   Responsive di semua device
-   Tidak ada error console
-   Bounce rate rendah

------------------------------------------------------------------------

## 4. Features

### 4.1 Core Features

#### 1. Hero Section (3D Interactive)

-   Nama besar
-   Subtitle (Frontend Developer \| Next.js Developer)
-   CTA button (View Projects)
-   3D animated object (react-three/fiber)

#### 2. About Section

-   Deskripsi singkat
-   Glassmorphism card
-   Hover 3D tilt effect
-   Scroll reveal animation

#### 3. Skills Section

-   Grid layout
-   Icon teknologi
-   Animated progress bar
-   Hover glow effect

#### 4. Projects Section

-   Card layout modern
-   3D tilt hover effect
-   Screenshot project
-   Deskripsi singkat
-   Tech stack
-   Link GitHub
-   Link Live Demo

#### 5. Contact Section

-   Email adarrr.04gmail.com
-   GitHub asepp
-   WhatsApp 0813

------------------------------------------------------------------------

## 5. Non-Functional Requirements

### Performance

-   Optimized image (Next/Image)
-   Lazy loading
-   Code splitting

### Responsiveness

-   Mobile
-   Tablet
-   Desktop

### SEO

-   Metadata per page
-   Open Graph
-   Proper semantic HTML

### Accessibility

-   Alt text image
-   Proper heading structure
-   Keyboard accessible

------------------------------------------------------------------------

## 6. Tech Stack

### Frontend

-   Next.js 14 (App Router)
-   React
-   TypeScript (optional)

### Styling

-   TailwindCSS
-   Framer Motion

### 3D

-   @react-three/fiber
-   @react-three/drei

### Deployment

-   Vercel

------------------------------------------------------------------------

## 7. Project Structure

    app/
     ├── page.tsx
    components/
     ├── Navbar.tsx
     ├── Hero3D.tsx
     ├── About.tsx
     ├── Skills.tsx
     ├── Projects.tsx
     ├── Contact.tsx
     ├── Footer.tsx

------------------------------------------------------------------------

## 8. UI/UX Design Guidelines

### Theme

-   Dark mode
-   Neon accent (cyan / purple)
-   Glassmorphism
-   Smooth animation

### Typography

-   Inter / Space Grotesk
-   Clear hierarchy (H1, H2, H3)

### Animation

-   Scroll reveal
-   Hover scale
-   3D tilt effect
-   Smooth transition

------------------------------------------------------------------------

## 9. Timeline (Estimated)

  Phase                    Duration
  ------------------------ ----------
  Setup Project            1 hari
  Layout & UI              2-3 hari
  Animasi & 3D             2 hari
  Testing & Optimization   1 hari
  Deployment               1 hari

Total: ± 1 minggu

------------------------------------------------------------------------

## 10. Future Enhancements

-   Blog integration (MDX)
-   Multi-language support
-   Admin panel CMS
-   Theme switcher (light/dark)
-   Analytics integration

------------------------------------------------------------------------

## 11. Risks

-   3D dapat memperlambat performa
-   Over-animation mengganggu UX
-   Compatibility device lama

Mitigation: - Gunakan lazy load - Batasi kompleksitas model 3D -
Optimize assets

------------------------------------------------------------------------

## 12. Conclusion

Website ini bertujuan menjadi portofolio modern yang profesional,
interaktif, dan mencerminkan kemampuan teknis dalam Next.js, animasi,
dan desain UI modern.
