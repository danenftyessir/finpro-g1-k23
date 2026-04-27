"use client";

import Image from "next/image";

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const target = el.offsetTop;
  const start = window.scrollY;
  const duration = 700;
  let startTime: number | null = null;
  function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3); }
  function animate(currentTime: number) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + (target - start) * easeOutCubic(progress));
    if (progress < 1) requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-godwit)" }}>

      {/* ======================= 2. HERO SECTION ======================= */}
      <section className="px-6 pt-12 pb-20 relative overflow-hidden bg-gradient-to-b from-[#D9F3FF] to-white">
        {/* Decorative wave blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-20 pointer-events-none bg-[#7EC8E3] blur-[80px] translate-x-[30%] -translate-y-[30%]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15 pointer-events-none bg-[#7EC8E3] blur-[100px] -translate-x-[20%] translate-y-[20%]" />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text content */}
            <div className="text-center md:text-left relative z-10">
              <p className="text-sm font-medium tracking-widest uppercase mb-4 text-[#6B879A]">
                Jumat Berkah
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#123B5D]" style={{ fontFamily: "var(--font-times)" }}>
                Bantu Hadirkan 50+ Box Makanan
                <br />untuk Jamaah dan Masyarakat Sekitar
              </h1>
              <p className="text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-8 text-[#6B879A]">
                Program berbagi makanan/minuman setelah Shalat Jumat
                di Masjid At-Taufiq, Coblong, Bandung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <button onClick={() => smoothScrollTo("donasi")} className="bg-[#7EC8E3] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#5bb8d4] transition-all hover:-translate-y-0.5 text-center cursor-pointer">
                  Donasi Sekarang
                </button>
                <button onClick={() => smoothScrollTo("detail")} className="border-2 border-[#7EC8E3] text-[#7EC8E3] px-6 py-2.5 rounded-full font-semibold hover:bg-[#7EC8E3] hover:text-white transition-all text-center cursor-pointer">
                  Lihat Detail Program
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start flex-wrap">
                <span className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-[#123B5D]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Jumat, 8 Mei 2026
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-[#123B5D]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Masjid At-Taufiq, Bandung
                </span>
              </div>
            </div>
            {/* Image */}
            <div className="relative z-10">
              <div className="relative w-full max-w-md mx-auto" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/masjid_tubis1.jpeg"
                  alt="Masjid At-Taufiq"
                  fill
                  className="object-cover rounded-2xl shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= 3. LATAR BELAKANG ======================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#123B5D]" style={{ fontFamily: "var(--font-times)" }}>
            Mengapa Program Ini Dibutuhkan?
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-10 text-[#6B879A] max-w-[700px] mx-auto">
            Islam mengajarkan umatnya untuk memiliki kepedulian sosial melalui sedekah dan berbagi.
            Di Kecamatan Coblong, masih terdapat masyarakat yang membutuhkan bantuan sederhana seperti makanan dan minuman.
          </p>
          <div className="max-w-md mx-auto">
            <div className="shadow-lg rounded-2xl p-8 text-center border border-[#7EC8E3]">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-[#7EC8E3]">
                12.041
              </div>
              <p className="text-base font-medium text-[#123B5D]">
                jiwa mustahik di Kecamatan Coblong
              </p>
              <p className="text-sm mt-3 italic text-[#6B879A]">
                Sekitar 10,66% dari penduduk Muslim wilayah tersebut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= 4. TENTANG PROGRAM ======================= */}
      <section id="tentang" className="py-20 px-6 bg-[#F5FBFF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#123B5D]" style={{ fontFamily: "var(--font-times)" }}>
            Tentang Jumat Berkah
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/masjid_tubis2.jpeg"
                alt="Masjid At-Taufiq"
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <p className="text-base md:text-lg leading-relaxed text-[#6B879A] mb-6">
                Program Jumat Berkah adalah kegiatan berbagi makanan dan minuman kepada jamaah serta masyarakat
                sekitar setelah pelaksanaan Shalat Jumat.
              </p>
              <p className="font-semibold mb-4 text-[#123B5D]">Tujuan Program:</p>
              <ul className="space-y-3">
                {[
                  "Membiasakan sedekah",
                  "Menghadirkan masjid sebagai pusat sosial",
                  "Membantu masyarakat sekitar",
                  "Membangun budaya peduli",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-[#6B879A]">
                    <svg className="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#F4C95D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= 5. TARGET & DAMPAK ======================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#123B5D]" style={{ fontFamily: "var(--font-times)" }}>
            Target Dampak Kita
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🍱", label: "50+ Box", sub: "Makanan/minuman dibagikan" },
              { icon: "📅", label: "8 Mei 2026", sub: "Tanggal pelaksanaan" },
              { icon: "🤝", label: "Jamaah & masyarakat sekitar", sub: "Penerima manfaat" },
            ].map(({ icon, label, sub }) => (
              <div key={label} className="shadow-lg rounded-2xl p-6 text-center bg-white">
                <div className="text-3xl mb-3">{icon}</div>
                <div className="text-lg md:text-xl font-bold mb-1 text-[#7EC8E3]">
                  {label}
                </div>
                <p className="text-sm text-[#6B879A]">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= 6. DETAIL KEGIATAN ======================= */}
      <section id="detail" className="py-20 px-6 bg-[#F5FBFF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#123B5D]" style={{ fontFamily: "var(--font-times)" }}>
            Detail Pelaksanaan
          </h2>
          <div className="shadow-lg rounded-3xl p-8 md:p-12 bg-white max-w-2xl mx-auto">
            {[
              { label: "Nama Program", value: "Jumat Berkah" },
              { label: "Tanggal", value: "Jumat, 8 Mei 2026" },
              { label: "Waktu", value: "Setelah Shalat Jumat" },
              { label: "Tempat", value: "Masjid At-Taufiq" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col sm:flex-row sm:items-start gap-2 mb-5 last:mb-0 border-b pb-4 last:border-b-0 last:pb-0 border-[#D9F3FF]">
                <span className="text-xs font-semibold uppercase tracking-wider sm:w-32 shrink-0 pt-0.5 text-[#6B879A]">
                  {label}
                </span>
                <span className="text-base md:text-lg font-medium text-[#123B5D]">
                  {value}
                </span>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-[#D9F3FF]">
              <p className="text-sm leading-relaxed text-[#6B879A]">
                Jl. Tubagus Ismail No.44, Sekeloa,<br />
                Kecamatan Coblong, Kota Bandung,<br />
                Jawa Barat 40134
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= 7. CARA BERDONASI ======================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#123B5D]" style={{ fontFamily: "var(--font-times)" }}>
            Cara Berdonasi
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "1", text: "Scan QR donasi" },
              { num: "2", text: "Masukkan nominal terbaik" },
              { num: "3", text: "Selesaikan pembayaran" },
              { num: "4", text: "Donasi digunakan untuk pembelian konsumsi Jumat Berkah" },
            ].map(({ num, text }) => (
              <div key={num} className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 bg-[#7EC8E3]">
                  {num}
                </div>
                <p className="text-sm font-medium leading-snug text-[#123B5D]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= 8. TRANSPARANSI DANA ======================= */}
      <section className="py-20 px-6 bg-[#F5FBFF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#123B5D]" style={{ fontFamily: "var(--font-times)" }}>
            Estimasi Penggunaan Dana
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="shadow-lg rounded-2xl p-8 bg-white border-l-4 border-[#7EC8E3]">
              <p className="text-sm mb-2 text-[#6B879A]">Target dana:</p>
              <p className="text-3xl font-bold mb-6 text-[#123B5D]">
                Rp500.000 – Rp750.000
              </p>
              <p className="text-sm font-semibold mb-3 text-[#123B5D]">Dana akan digunakan untuk:</p>
              <ul className="space-y-2">
                {[
                  "Pembelian makanan/minuman",
                  "Pengemasan konsumsi",
                  "Logistik sederhana",
                  "Dokumentasi kegiatan",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#6B879A]">
                    <span className="text-[#7EC8E3]">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= 9. TIMELINE PROGRAM ======================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#123B5D]" style={{ fontFamily: "var(--font-times)" }}>
            Timeline Program
          </h2>
          <div className="max-w-lg mx-auto">
            {[
              { date: "20–21 April 2026", desc: "Penyusunan proposal" },
              { date: "22–26 April 2026", desc: "Open donasi" },
              { date: "27 April–1 Mei 2026", desc: "Survey dan penentuan target masjid" },
              { date: "1–3 Mei 2026", desc: "Pembelian dan persiapan konsumsi" },
              { date: "4–7 Mei 2026", desc: "Briefing kegiatan" },
              { date: "8 Mei 2026", desc: "Pelaksanaan kegiatan" },
              { date: "9–10 Mei 2026", desc: "Penyusunan portofolio dan laporan akhir" },
              { date: "11 Mei 2026", desc: "Presentasi laporan" },
            ].map(({ date, desc }, i, arr) => (
              <div key={date} className="relative flex gap-5 pb-8 last:pb-0">
                {/* Vertical line */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#7EC8E3] border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-bold shrink-0 z-10">
                    {i + 1}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[#7EC8E3]/30 mt-2 last:hidden" />
                  )}
                </div>
                {/* Content */}
                <div className="pt-1.5">
                  <p className="text-sm font-bold text-[#123B5D]">{date}</p>
                  <p className="text-sm text-[#6B879A] mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= 10. PENYELENGGARA ======================= */}
      <section className="py-20 px-6 bg-[#F5FBFF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#123B5D]" style={{ fontFamily: "var(--font-times)" }}>
            Penyelenggara
          </h2>
          <div className="max-w-xl mx-auto">
            <div className="shadow-lg rounded-2xl p-8 bg-white">
              <p className="text-xl font-bold mb-1 text-center text-[#123B5D]" style={{ fontFamily: "var(--font-times)" }}>
                Kelompok I
              </p>
              <p className="text-sm text-center mb-6 text-[#6B879A]">
                Mata Kuliah Agama Islam K-23<br />Institut Teknologi Bandung
              </p>
              <div className="space-y-2">
                {[
                  { role: "Ketua", name: "Muhammad Kemal Setiadi", npm: "13723071" },
                  { role: "Sekretaris", name: "Amanda Devina Tarigan", npm: "12024077" },
                  { role: "Bendahara", name: "Muhammad Rafi Fathia Dzaky", npm: "13224079" },
                  { role: "PJ Portofolio", name: "Danendra Shafi Athalla", npm: "13523136" },
                  { role: "Editor", name: "Muhammad Iqbal", npm: "12024089" },
                  { role: "PJ Vendor", name: "Maulidya Riana Thalia L", npm: "13122063" },
                  { role: "PJ Logistik", name: "Fairuz Dwinaufal Rasyid", npm: "12824062" },
                ].map(({ role, name, npm }) => (
                  <div key={role} className="flex justify-between items-center py-2.5 text-sm border-b border-[#D9F3FF] last:border-b-0">
                    <span className="text-[#6B879A]">{role}</span>
                    <span className="font-medium text-[#123B5D]">{name} <span className="font-normal text-[#6B879A]">({npm})</span></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= 11. LOKASI & PETA ======================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-center mb-2 text-[#123B5D]" style={{ fontFamily: "var(--font-times)" }}>
            Lokasi Kegiatan
          </h2>
          <p className="text-sm text-[#6B879A] mb-8">Masjid At-Taufiq, Jl. Tubagus Ismail No.44, Sekeloa, Coblong, Bandung</p>
          <div className="shadow-lg rounded-2xl overflow-hidden">
            <iframe
              className="w-full"
              style={{ height: "360px", border: "none" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.035!2d107.6201464!3d-6.8851003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7bc6e0ed17b%3A0x2000000000000000!2sMasjid%20At-Taufiq!5e0!3m2!1sen!2sid!4v1714000000000!5m2!1sen!2sid"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Masjid At-Taufiq"
            />
          </div>
          <a
            href="https://www.google.com/maps/@-6.8851003,107.6201464,3a,75y,15.15h,90t/data=!3m10!1e1!3m8!1s14yspLZCnYRkL30YGJkq4Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3D14yspLZCnYRkL30YGJkq4Q%26yaw%3D15.150438!7i16384!8i8192!9m2!1b1!2i48?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-sm font-semibold text-[#7EC8E3] hover:underline"
          >
            Buka di Google Maps →
          </a>
        </div>
      </section>

      {/* ======================= 12. PREVIEW VIDEO YOUTUBE ======================= */}
      <section className="py-20 px-6 bg-[#F5FBFF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#123B5D]" style={{ fontFamily: "var(--font-times)" }}>
            Lihat Gambaran Kegiatan
          </h2>
          <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed text-[#6B879A]">
            Saksikan video singkat berikut untuk melihat gambaran lokasi,
            suasana, atau konteks kegiatan Jumat Berkah yang akan dilaksanakan.
          </p>
          <div className="shadow-lg rounded-2xl overflow-hidden bg-white max-w-3xl mx-auto">
            <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/1aAhRxSefOI"
                title="Preview Video Jumat Berkah"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <a
            href="https://youtu.be/1aAhRxSefOI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-base font-semibold text-[#7EC8E3] hover:underline"
          >
            Tonton di YouTube →
          </a>
        </div>
      </section>

      {/* ======================= 13. QR DONASI ======================= */}
      <section id="donasi" className="py-20 px-6 bg-[#D9F3FF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#123B5D]" style={{ fontFamily: "var(--font-times)" }}>
            Mari Ikut Berbagi
          </h2>
          <p className="text-base md:text-lg mb-10 text-[#6B879A]">
            Scan QR di bawah ini untuk ikut mendukung program Jumat Berkah.
          </p>
          <div className="shadow-lg rounded-3xl p-8 md:p-12 bg-white max-w-md mx-auto">
            <div className="relative w-full max-w-xs mx-auto mb-6 aspect-square">
              <Image
                src="/qris.jpg"
                alt="QR Code Donasi Jumat Berkah"
                fill
                className="object-contain rounded-xl"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <p className="text-sm mb-1 text-[#6B879A]">Atas nama:</p>
            <p className="font-semibold mb-4 text-[#123B5D]">QRIS / Jumat Berkah</p>
            <p className="text-sm mb-1 text-[#6B879A]">Contact Person:</p>
            <p className="font-semibold mb-6 text-[#123B5D]">Kemal (+62 811-9133-765)</p>
            <a
              href="https://wa.me/628119133765"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#1da851] transition-all -translate-y-0 hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hubungi Bendahara
            </a>
          </div>
        </div>
      </section>

      {/* ======================= 14. FOOTER ======================= */}
      <footer className="py-10 px-6 text-center bg-[#123B5D]">
        <p className="text-sm text-white/70">
          Jumat Berkah — Masjid At-Taufiq, Coblong, Bandung
        </p>
        <p className="text-xs mt-2 text-white/40">
          Kelompok I · Agama Islam K-23 · Institut Teknologi Bandung
        </p>
      </footer>

    </div>
  );
}
