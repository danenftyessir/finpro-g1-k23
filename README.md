# Jumat Berkah — Finpro G1 K23

Website landing page untuk program sosial **Jumat Berkah**: berbagi makanan dan minuman kepada jamaah serta masyarakat sekitar Masjid At-Taufiq, Coblong, Bandung, setelah pelaksanaan Shalat Jumat.

---

## Tentang Program

| Info | Detail |
|---|---|
| Nama Program | Jumat Berkah |
| Tanggal Pelaksanaan | Jumat, 8 Mei 2026 |
| Waktu | Setelah Shalat Jumat |
| Lokasi | Masjid At-Taufiq, Jl. Tubagus Ismail No.44, Sekeloa, Coblong, Bandung |
| Target | 50+ box makanan/minuman |
| Target Dana | Rp500.000 – Rp750.000 |

## Penyelenggara

**Kelompok I** — Mata Kuliah Agama Islam K-23, Institut Teknologi Bandung

| Jabatan | Nama | NPM |
|---|---|---|
| Ketua | Muhammad Kemal Setiadi | 13723071 |
| Sekretaris | Amanda Devina Tarigan | 12024077 |
| Bendahara | Muhammad Rafi Fathia Dzaky | 13224079 |
| PJ Portofolio | Danendra Shafi Athalla | 13523136 |
| Editor | Muhammad Iqbal | 12024089 |
| PJ Vendor | Maulidya Riana Thalia L | 13122063 |
| PJ Logistik | Fairuz Dwinaufal Rasyid | 12824062 |

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Runtime**: React 19

## Struktur Proyek

```
finpro-g1-k23/
├── public/              # Aset statis (gambar, QR code, logo)
├── src/
│   └── app/
│       ├── layout.tsx   # Root layout & metadata
│       ├── page.tsx     # Halaman utama (single-page)
│       └── globals.css  # Global styles
├── package.json
└── README.md
```

## Fitur Halaman

- **Hero Section** — judul, deskripsi singkat, dan tombol navigasi
- **Latar Belakang** — data mustahik di Kecamatan Coblong
- **Tentang Program** — tujuan dan foto masjid
- **Target Dampak** — statistik program
- **Detail Pelaksanaan** — info waktu, tempat, carousel dokumentasi, dan video kegiatan
- **Cara Berdonasi** — panduan langkah-langkah
- **Estimasi Penggunaan Dana** — rincian alokasi donasi
- **Timeline Program** — jadwal dari penyusunan proposal hingga presentasi
- **Penyelenggara** — profil kelompok dan anggota
- **Lokasi & Peta** — embed Google Maps
- **Preview Video YouTube** — video gambaran kegiatan
- **QR Donasi** — QRIS dan kontak bendahara
- **Laporan Keuangan** — tabel transparan dari Google Sheets (live)
- **Footer**

---

## Cara Menjalankan

### Prasyarat

- Node.js 18+
- npm / yarn / pnpm

### Instalasi

```bash
npm install
```

### Development

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Laporan Keuangan

Data laporan keuangan diambil secara langsung dari Google Sheets dan ditampilkan di halaman utama sebagai wujud transparansi kepada donatur.

---

*Jumat Berkah — Kelompok I · Agama Islam K-23 · Institut Teknologi Bandung*
