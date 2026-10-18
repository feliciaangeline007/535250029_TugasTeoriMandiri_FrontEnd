# Kopi Nusantara — Next.js (`kopi-nusantara-next`)

Proyek **Next.js (App Router + TypeScript + ESLint)** untuk studi kasus **Website Toko Kopi Nusantara** pada mata kuliah **Front-End Programming (TK23023) — Pertemuan 9: Instalasi Next.js**.

---

## Identitas Mahasiswa

| Keterangan | Detail |
| :--- | :--- |
| **Nama Lengkap** | Felicia Angeline |
| **NIM** | 535250029 |
| **Program Studi** | S1 Teknik Informatika — Universitas Tarumanagara |
| **Mata Kuliah** | Front-End Programming (TK23023) |
| **Pertemuan / Topik** | Pertemuan 9 — Instalasi Next.js |

---

## Tutorial Instalasi & Menjalankan Proyek

### 1. Prasyarat Sistem
Pastikan **Node.js** (disarankan v18.18+ atau versi LTS terbaru) dan **npm** telah terinstal. Cek melalui terminal:

```bash
node -v
npm -v
```

### 2. Inisialisasi Proyek (Jika Membuat dari Awal)
Proyek ini dibuat menggunakan `create-next-app@latest` dengan konfigurasi sesuai ketentuan tugas:

```bash
npx create-next-app@latest kopi-nusantara-next
```

Opsi konfigurasi yang dipilih:
- **TypeScript**: `Yes`
- **ESLint**: `Yes`
- **Tailwind CSS**: `No`
- **`src/` directory**: `No`
- **App Router**: `Yes`
- **Customize import alias**: `No`

### 3. Menjalankan Proyek Secara Lokal (`npm run dev`)
Jika Anda mengunduh atau melakukan *clone* repositori ini, ikuti langkah berikut untuk menjalankan server lokal:

```bash
# 1. Masuk ke direktori proyek Next.js
cd kopi-nusantara-next

# 2. Instal seluruh dependencies (jika folder node_modules belum ada)
npm install

# 3. Jalankan development server
npm run dev
```

Setelah server aktif, buka **[http://localhost:3000](http://localhost:3000)** di browser.

### 4. Perintah Lainnya
```bash
# Memeriksa kualitas kode dengan ESLint
npm run lint

# Memeriksa tipe TypeScript
npx tsc --noEmit

# Membuat production build
npm run build

# Menjalankan server production setelah build
npm run start
```

---

## Struktur Direktori Proyek

```text
kopi-nusantara-next/
├── app/
│   ├── favicon.ico       # Ikon situs
│   ├── globals.css       # Styling kustom Kopi Nusantara
│   ├── layout.tsx        # Root layout + Bootstrap 5.3.3 CDN & metadata
│   └── page.tsx          # Halaman utama Kopi Nusantara (TypeScript + JSX)
├── public/               # Aset statis publik
├── tutorial.html         # Halaman tutorial & dokumentasi visual (HTML)
├── eslint.config.mjs     # Konfigurasi ESLint
├── next.config.ts        # Konfigurasi Next.js
├── package.json          # Konfigurasi paket dan script npm
└── tsconfig.json         # Konfigurasi TypeScript
```

---

## Fitur Halaman Utama (`app/page.tsx`)

1. **Identitas Mahasiswa pada Hero Section**: Menampilkan Nama Lengkap (**Felicia Angeline**) dan NIM (**535250029**).
2. **Navbar Responsif**: Navigasi sticky dengan menu hamburger mobile yang dikontrol menggunakan React State (`navOpen`).
3. **Katalog Menu & Tombol Suka Interaktif**: Daftar menu Kopi Nusantara (*Kopi Susu Senja*, *V60 Gayo*, *Cokelat Rumah*) yang dirender secara dinamis menggunakan `.map()` lengkap dengan fitur *like counter* berbasis state (`likedMap` dan `likeCounts`).
4. **Cerita & Perjalanan Kopi**: Penjelasan kisah Kopi Nusantara dan 4 tahap pengolahan biji kopi dengan Bootstrap Grid.
5. **FAQ Accordion**: Komponen tanya-jawab interaktif yang dikontrol melalui state React (`openFaq`).
