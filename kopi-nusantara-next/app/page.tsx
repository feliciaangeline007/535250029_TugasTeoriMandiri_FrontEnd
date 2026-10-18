"use client";

import { useEffect, useRef, useState, type JSX } from "react";

interface MenuItem {
  id: number;
  icon: string;
  isV60?: boolean;
  cardVariant?: string;
  type: string;
  title: string;
  description: string;
  price: string;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    icon: "☕",
    type: "Favorit",
    title: "Kopi Susu Senja",
    description:
      "Perpaduan kopi, susu, dan rasa manis yang lembut untuk menemani waktu santai.",
    price: "Rp18.000",
  },
  {
    id: 2,
    icon: "V60",
    isV60: true,
    cardVariant: "menu-card-green",
    type: "Single Origin",
    title: "V60 Gayo",
    description:
      "Kopi Arabika Gayo dengan karakter aroma yang khas dan rasa yang seimbang.",
    price: "Rp25.000",
  },
  {
    id: 3,
    icon: "🍫",
    cardVariant: "menu-card-gold",
    type: "Non Coffee",
    title: "Cokelat Rumah",
    description:
      "Minuman cokelat lembut dengan rasa manis yang cocok untuk semua suasana.",
    price: "Rp20.000",
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq1",
    question: "Apa itu Kopi Nusantara?",
    answer:
      "Kopi Nusantara adalah konsep kedai kopi yang menghadirkan minuman dengan inspirasi dari berbagai kopi dan cita rasa Indonesia.",
  },
  {
    id: "faq2",
    question: "Apa saja menu yang tersedia?",
    answer:
      "Beberapa menu yang tersedia adalah Kopi Susu Senja, V60 Gayo, dan Cokelat Rumah.",
  },
  {
    id: "faq3",
    question: "Dari mana kopi yang digunakan?",
    answer:
      "Kopi yang digunakan terinspirasi dari berbagai daerah penghasil kopi di Indonesia.",
  },
  {
    id: "faq4",
    question: "Apakah tersedia minuman non-kopi?",
    answer:
      "Ya. Salah satu pilihan minuman non-kopi adalah Cokelat Rumah.",
  },
];

export default function Home(): JSX.Element {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [likedMap, setLikedMap] = useState<Record<number, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
  });
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleLike = (id: number) => {
    const currentlyLiked = !!likedMap[id];
    const nextLiked = !currentlyLiked;

    setLikedMap((prev) => ({
      ...prev,
      [id]: nextLiked,
    }));

    setLikeCounts((counts) => ({
      ...counts,
      [id]: nextLiked
        ? (counts[id] || 0) + 1
        : Math.max(0, (counts[id] || 0) - 1),
    }));
  };

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const yearRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (yearRef.current) {
      yearRef.current.textContent = String(new Date().getFullYear());
    }
  }, []);

  return (
    <>
      {/* Navbar Bootstrap */}
      <header className="site-header sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a
              href="#home"
              className="navbar-brand brand d-flex align-items-center gap-2"
            >
              <span className="brand-mark">K</span>
              Kopi Nusantara
            </a>

            {/* Tombol hamburger Bootstrap untuk mobile */}
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="main-nav"
              aria-expanded={navOpen}
              aria-label="Buka menu"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navigasi Bootstrap */}
            <div
              className={`collapse navbar-collapse ${navOpen ? "show" : ""}`}
              id="main-nav"
            >
              <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
                <li className="nav-item">
                  <a
                    href="#home"
                    className="nav-link"
                    onClick={() => setNavOpen(false)}
                  >
                    Beranda
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#menu"
                    className="nav-link"
                    onClick={() => setNavOpen(false)}
                  >
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#story"
                    className="nav-link"
                    onClick={() => setNavOpen(false)}
                  >
                    Cerita
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#faq"
                    className="nav-link"
                    onClick={() => setNavOpen(false)}
                  >
                    FAQ
                  </a>
                </li>
                <li className="nav-item ms-lg-2">
                  <a
                    href="#order"
                    className="nav-link nav-cta"
                    onClick={() => setNavOpen(false)}
                  >
                    Pesan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero py-5" id="home">
          <div className="container py-lg-5">
            <div className="row align-items-center g-5">
              {/* Bootstrap column */}
              <div className="col-12 col-lg-6 hero-copy">
                <p className="eyebrow mb-2">Kopi Nusantara</p>

                <h1 className="mb-3">
                  Rasa Lokal, <em>Cerita Istimewa.</em>
                </h1>

                <div className="student-identity">
                  <p className="student-name">Felicia Angeline</p>
                  <p className="student-nim">NIM: 535250029</p>
                </div>

                <p className="hero-intro mb-4">
                  Menikmati kopi Indonesia dengan cita rasa khas dari berbagai
                  daerah Nusantara.
                </p>

                {/* Bootstrap flex utility */}
                <div className="d-flex flex-wrap align-items-center gap-3">
                  <a href="#menu" className="button button-primary">
                    Lihat Menu <span>→</span>
                  </a>
                  <a href="#story" className="button button-text">
                    Cerita Kami
                  </a>
                </div>
              </div>

              {/* Bootstrap column */}
              <div className="col-12 col-lg-6 d-flex justify-content-center">
                <div className="hero-image shadow-sm">
                  <div className="coffee-scene">
                    <div className="bubble bubble-one">Nikmat!</div>
                    <div className="bubble bubble-two">Kopi Indonesia</div>
                    <div className="steam steam-satu"></div>
                    <div className="steam steam-dua"></div>
                    <div className="coffee-disc">KOPI</div>
                  </div>

                  <div className="cup-caption">
                    <strong>KOPI NUSANTARA</strong>
                    <span>RASA DARI INDONESIA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section className="menu-section py-5" id="menu">
          <div className="container py-4">
            {/* Bootstrap text utility */}
            <div className="text-center mb-5">
              <p className="eyebrow mb-2">Pilihan Kami</p>
              <h2 className="mb-3">Menu Kopi Nusantara</h2>
              <p className="section-description mx-auto mb-0">
                Pilihan minuman dengan bahan dan cita rasa yang terinspirasi
                dari kekayaan Indonesia.
              </p>
            </div>

            <div className="row g-4 justify-content-center">
              {MENU_ITEMS.map((item) => {
                const isLiked = !!likedMap[item.id];
                const count = likeCounts[item.id] ?? 0;
                return (
                  <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                    <article
                      className={`card menu-card ${item.cardVariant ?? ""} h-100 rounded-0 shadow-sm`}
                    >
                      <div className="card-body d-flex flex-column p-4">
                        <div
                          className={`menu-icon ${item.isV60 ? "icon-v60" : ""} mb-3`}
                        >
                          {item.icon}
                        </div>

                        <p className="menu-type mb-2">{item.type}</p>

                        <h3 className="card-title mb-2">{item.title}</h3>

                        <p className="card-text flex-grow-1">
                          {item.description}
                        </p>

                        <div className="menu-bottom d-flex justify-content-between align-items-center mt-3 pt-3">
                          <strong>{item.price}</strong>

                          <button
                            className={`like-button ${isLiked ? "liked" : ""}`}
                            type="button"
                            onClick={() => toggleLike(item.id)}
                          >
                            {isLiked ? "♥ Disukai" : "♡ Suka"}{" "}
                            <span className="like-count">{count}</span>
                          </button>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cerita */}
        <section className="story-section py-5" id="story">
          <div className="container py-4">
            {/* Bootstrap row dan column */}
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-4 d-flex justify-content-center">
                <div className="story-badge shadow">
                  <strong>100%</strong>
                  <span>
                    Inspirasi
                    <br />
                    Nusantara
                  </span>
                  <small>KOPI INDONESIA</small>
                </div>
              </div>

              <div className="col-12 col-lg-8">
                <p className="eyebrow mb-2">Cerita Kami</p>

                <h2 className="mb-3">
                  Dari Nusantara ke dalam secangkir kopi.
                </h2>

                <p className="mb-3">
                  Kopi Nusantara hadir untuk memperkenalkan kekayaan kopi
                  Indonesia melalui minuman yang sederhana dan dekat dengan
                  keseharian.
                </p>

                <p className="mb-0">
                  Setiap kopi membawa cerita mengenai daerah, petani, proses
                  pengolahan, dan perjalanan hingga akhirnya sampai ke dalam
                  cangkir.
                </p>
              </div>
            </div>

            {/* Perjalanan Kopi */}
            <div className="journey border-top mt-5 pt-5">
              <div className="text-center mb-5">
                <p className="eyebrow mb-2">Perjalanan</p>
                <h2 className="mb-0">Dari biji hingga menjadi kopi.</h2>
              </div>

              {/* Bootstrap Grid */}
              <div className="row g-4 text-center">
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="journey-item">
                    <div className="journey-year mx-auto">01</div>
                    <h3>Dipilih</h3>
                    <p>Biji kopi dipilih dari berbagai daerah Indonesia.</p>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                  <div className="journey-item">
                    <div className="journey-year mx-auto">02</div>
                    <h3>Diolah</h3>
                    <p>
                      Biji kopi diproses untuk menghasilkan karakter terbaik.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                  <div className="journey-item">
                    <div className="journey-year mx-auto">03</div>
                    <h3>Disangrai</h3>
                    <p>
                      Proses sangrai dilakukan untuk menghasilkan aroma dan
                      rasa.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                  <div className="journey-item">
                    <div className="journey-year mx-auto">04</div>
                    <h3>Diseduh</h3>
                    <p>
                      Kopi diseduh dengan metode yang sesuai hingga siap
                      dinikmati.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section py-5" id="faq">
          <div className="container py-4">
            <div className="text-center mb-5">
              <p className="eyebrow mb-2">FAQ</p>

              <h2 className="mb-3">Pertanyaan yang Sering Diajukan</h2>

              <p className="section-description mx-auto mb-0">
                Temukan jawaban dari pertanyaan yang sering ditanyakan mengenai
                Kopi Nusantara.
              </p>
            </div>

            {/* Bootstrap Accordion */}
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <div className="accordion accordion-flush" id="faqAccordion">
                  {FAQ_ITEMS.map((faq) => {
                    const isOpen = openFaq === faq.id;
                    return (
                      <div className="accordion-item faq-item" key={faq.id}>
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={faq.id}
                            onClick={() => toggleFaq(faq.id)}
                          >
                            {faq.question}
                          </button>
                        </h2>

                        <div
                          id={faq.id}
                          className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                        >
                          <div className="accordion-body">
                            <p className="mb-0">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Order */}
        <section className="order-section py-5" id="order">
          <div className="container py-4">
            {/* Bootstrap flex utility */}
            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
              <div>
                <p className="eyebrow mb-2">Siap Menikmati?</p>
                <h2 className="mb-0">Temukan kopi favoritmu.</h2>
              </div>

              <a href="#menu" className="button button-light">
                Lihat Menu <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer py-4">
        <div className="container">
          {/* Bootstrap row dan column */}
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-5">
              <strong className="footer-brand">Kopi Nusantara</strong>

              <p className="mb-0">Rasa lokal, cerita istimewa.</p>
            </div>

            <div className="col-12 col-md-4">
              <div className="footer-contact d-flex flex-column">
                <span>Felicia Angeline &bull; NIM: 535250029</span>
                <span>Kopi dari Nusantara</span>
              </div>
            </div>

            <div className="col-12 col-md-3 text-md-end">
              <div className="copyright">
                ©{" "}
                <span id="current-year" ref={yearRef}>
                  2026
                </span>{" "}
                Kopi Nusantara
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
