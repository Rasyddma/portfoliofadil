"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";

const DATA = {
  name: "Mochammad Fadil",
  role: "Sales & Content Talent",
  about:
    "Saya adalah pribadi komunikatif dan percaya diri dengan minat tinggi di bidang penjualan. Terbiasa menawarkan produk secara langsung dan mampu menarik minat pembeli melalui cara komunikasi yang unik.",

  contact: {
    email: "mochammadfadill273@gmail.com",
    phone: "088210366684",
    location: "Dramaga Tanjakan, Kabupaten Bogor",
  },

  projects: [
    {
      title: "Campaign Penjualan Sekolah",
      desc: "Meningkatkan penjualan melalui komunikasi langsung.",
      tags: ["Sales", "Marketing"],
      image: "/bisnis.jpg",
    },
    {
      title: "Host Live TikTok",
      desc: "Meningkatkan engagement dan penjualan saat live.",
      tags: ["Live", "Content"],
      image: "/live.jpg",
    },
    {
      title: "Talent Iklan",
      desc: "Berperan dalam iklan aplikasi dan film pendek.",
      tags: ["Talent", "Branding"],
      image: "/iklan.jpg",
    },
  ],

  experience: [
    "Talent Iklan Aplikasi dan Film Pendek",
    "Host Live Streaming TikTok",
    "Sales Konveksi Baju",
    "Berwirausaha di Sekolah",
  ],

  skills: ["Komunikasi", "Leadership", "Disiplin", "Public Speaking"],

  education: [
    { school: "SMA Negeri 1 Dramaga", year: "2023 - 2026" },
    { school: "SMP Negeri 2 Dramaga", year: "2020 - 2023" },
    { school: "SDN MARGAJAYA 03", year: "2014 - 2020" },
  ],
};

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <main className="bg-white text-zinc-900 min-h-screen">

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 md:px-24">
        <div className="grid md:grid-cols-2 gap-10 items-center w-full">

          <motion.div {...fade}>
            <span className="text-blue-900 font-semibold uppercase text-sm">
              Available for Projects
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-[#0f172a] mt-4">
              {DATA.name}
            </h1>

            <p className="mt-6 text-zinc-600 border-l-4 border-[#0f172a] pl-4">
              {DATA.about}
            </p>

            <a
              href="#contact"
              className="inline-block mt-8 bg-[#0f172a] text-white px-6 py-3 rounded-full"
            >
              Hubungi Saya <ArrowUpRight className="inline ml-2" size={16} />
            </a>
          </motion.div>

          <motion.img
            {...fade}
            src="/fotofadil.jpeg"
            className="w-60 h-80 object-cover rounded-xl shadow-xl mx-auto md:ml-auto"
          />
        </div>
      </section>

      {/* PROJECT */}
      <section className="py-24 px-6 md:px-24 bg-zinc-50">
        <h2 className="text-3xl font-bold text-center text-[#0f172a] mb-10">
          Proyek Unggulan
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {DATA.projects.map((p, i) => (
            <motion.div
              key={i}
              {...fade}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden"
            >
              <img
                src={p.image}
                className="w-full h-40 object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg text-[#0f172a]">
                  {p.title}
                </h3>

                <p className="text-sm text-zinc-600 mt-2">
                  {p.desc}
                </p>

                <div className="flex gap-2 mt-3 flex-wrap">
                  {p.tags.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      {/* EXPERIENCE & SKILLS (UPGRADE) */}
<section className="py-24 px-6 md:px-24 bg-gradient-to-b from-white to-zinc-50">
  <div className="grid md:grid-cols-2 gap-12">

    {/* EXPERIENCE */}
    <div>
      <h2 className="text-3xl font-bold text-[#0f172a] mb-8">
        Pengalaman
      </h2>

      <div className="space-y-4">
        {DATA.experience.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-5 rounded-xl border bg-white shadow-sm hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-700 rounded-full" />
              <span className="font-medium text-[#0f172a]">{e}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* SKILLS */}
    <div>
      <h2 className="text-3xl font-bold text-[#0f172a] mb-8">
        Keahlian
      </h2>

      <div className="space-y-6">
        {DATA.skills.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between mb-1">
              <span className="text-[#0f172a] font-medium">{s}</span>
              <span className="text-sm text-zinc-400">
                {80 + i * 5}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0f172a] rounded-full"
                style={{ width: `${80 + i * 5}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>

  </div>
</section>

      {/* EDUCATION */}
      <section className="py-20 px-6 md:px-24 bg-zinc-50">
        <h2 className="text-2xl font-bold text-center text-[#0f172a] mb-8">
          Pendidikan
        </h2>

        {DATA.education.map((e, i) => (
          <div key={i} className="flex justify-between max-w-xl mx-auto border p-4 rounded mb-3 bg-white">
            <span>{e.school}</span>
            <span className="text-zinc-500">{e.year}</span>
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-bold text-[#0f172a] mb-6">
          Kontak
        </h2>

        <p>{DATA.contact.email}</p>
        <p>{DATA.contact.phone}</p>
        <p>{DATA.contact.location}</p>

        <a
          href={`https://wa.me/62${DATA.contact.phone.substring(1)}`}
          className="inline-block mt-6 bg-[#0f172a] text-white px-6 py-3 rounded-full"
        >
          Chat WhatsApp
        </a>
      </section>

      <footer className="text-center py-6 text-sm text-zinc-500">
        © 2026 {DATA.name}
      </footer>

    </main>
  );
}