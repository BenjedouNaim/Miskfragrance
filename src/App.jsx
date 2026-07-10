import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Check,
  ShoppingBag,
  MapPin,
  Clock,
} from "lucide-react";

const Facebook = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const PRODUCTS = [
  {
    id: "amyris-homme",
    name: "Amyris Homme Extrait de Parfum — Maison Francis",
    family: "Boisé aromatique",
    price: "129 DT",
    image: "/1.png",
    description:
      "Un profil chaud et élégant, construit autour d’une vanille dominante et de bois raffinés.",
    composition: [
      ["vanille", 100],
      ["boisé", 88],
      ["aromatique", 76],
      ["épicé chaud", 65],
      ["agrume", 54],
      ["iris", 43],
      ["poudré", 38],
      ["balsamique/baumé", 33],
      ["sucré", 27],
      ["cannelle", 21],
    ],
  },
  {
    id: "oceania",
    name: "Oceania — Roja Dove",
    family: "Agrumé frais",
    price: "139 DT",
    image: "/3.png",
    description:
      "Une structure lumineuse, fraîche et aromatique avec une base boisée douce.",
    composition: [
      ["agrume", 100],
      ["aromatique", 84],
      ["boisé", 72],
      ["épicé frais", 60],
      ["poudré", 50],
      ["violette", 42],
      ["lavande", 33],
      ["terreux", 22],
    ],
  },
  {
    id: "tango",
    name: "Tango — Gissah",
    family: "Sucré tropical",
    price: "149 DT",
    image: "/5.png",
    description:
      "Une lecture plus gourmande et solaire, avec un cœur fruité et gourmand.",
    composition: [
      ["sucré", 100],
      ["agrume", 86],
      ["tropical", 74],
      ["fruité", 62],
      ["caramel", 50],
      ["vanille", 40],
      ["fleurs blanches", 33],
      ["terpénique", 26],
      ["épicé frais", 20],
    ],
  },
  {
    id: "kolada",
    name: "Kolada — Kajal",
    family: "Gourmand fruité",
    price: "155 DT",
    image: "/7.png",
    description:
      "Un rendu crémeux et exotique, dominé par le fruit, la noix de coco et la vanille.",
    composition: [
      ["sucré", 100],
      ["fruité", 94],
      ["noix de coco", 80],
      ["tropical", 68],
      ["ambre", 56],
      ["frais", 44],
      ["vanille", 36],
      ["lactonique", 28],
      ["agrume", 20],
    ],
  },
  {
    id: "topaz",
    name: "Topaz — Kajal",
    family: "Ambré musqué",
    price: "159 DT",
    image: "/9.png",
    description:
      "Un accord ambré structuré, musqué et boisé avec une finition très propre.",
    composition: [
      ["ambre", 100],
      ["agrume", 90],
      ["musqué", 76],
      ["boisé", 64],
      ["fleurs blanches", 54],
      ["sucré", 44],
      ["animal", 38],
      ["rhum", 30],
      ["vert", 24],
      ["floral", 18],
    ],
  },
  {
    id: "gaultier-divine",
    name: "Gaultier Divine — Jean Paul Gaultier",
    family: "Floral salé",
    price: "119 DT",
    image: "/11.png",
    description:
      "Un floral blanc lumineux avec une facette marine, poudrée et légèrement salée.",
    composition: [
      ["fleurs blanches", 100],
      ["sucré", 88],
      ["aquatique", 74],
      ["odeur marine", 62],
      ["aromatique", 52],
      ["poudré", 42],
      ["fleurs jaunes", 34],
      ["salé", 26],
      ["musqué", 20],
      ["boisé", 16],
    ],
  },
  {
    id: "eclaire-banoffi",
    name: "Eclaire Banoffi — Lattafa Perfumes",
    family: "Gourmand vanillé",
    price: "145 DT",
    image: "/13.png",
    description:
      "Un gourmand doux, lactonique et vanillé avec une lecture dessert très nette.",
    composition: [
      ["sucré", 100],
      ["vanille", 68],
      ["fruité", 56],
      ["lactonique", 44],
      ["tropical", 34],
    ],
  },
  {
    id: "limmensite",
    name: "L'Immensité — Louis Vuitton",
    family: "Agrumé épicé",
    price: "169 DT",
    image: "/15.png",
    description:
      "Une fraîcheur épicée et aérienne, avec un fond ambré et herbacé.",
    composition: [
      ["épicé frais", 100],
      ["aromatique", 90],
      ["agrume", 76],
      ["ambre", 58],
      ["herbacé", 46],
      ["aquatique", 36],
      ["frais", 28],
      ["musqué", 20],
    ],
  },
  {
    id: "imagination",
    name: "Imagination — Louis Vuitton",
    family: "Agrumé frais",
    price: "151 DT",
    image: "/17.png",
    description:
      "Une composition claire et moderne portée par les agrumes et la fraîcheur.",
    composition: [
      ["agrume", 100],
      ["épicé frais", 68],
      ["frais", 52],
      ["vert", 40],
      ["ambre", 28],
    ],
  },
  {
    id: "boss-bottled-pacific",
    name: "Boss Bottled Pacific — Hugo Boss",
    family: "Boisé salé",
    price: "175 DT",
    image: "/19.png",
    description:
      "Une signature marine et solaire, avec coco, sel et bois en premier plan.",
    composition: [
      ["noix de coco", 100],
      ["boisé", 88],
      ["salé", 70],
      ["agrume", 58],
      ["sucré", 48],
      ["aromatique", 40],
      ["lactonique", 32],
      ["tropical", 20],
      ["vanille", 16],
    ],
  },
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(PRODUCTS[0].id);
  const [orderForm, setOrderForm] = useState({
    product: PRODUCTS[0].id,
    name: "",
    phone: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
    }, 3000);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOrdered(true);
    }, 1200);
  };

  const selectedOrderProduct =
    PRODUCTS.find((product) => product.id === orderForm.product) ?? PRODUCTS[0];

  const handleSelectProduct = (productId) => {
    setSelectedProductId(productId);
    setOrderForm((current) => ({ ...current, product: productId }));
    const element = document.getElementById("order-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const updateOrderField = (field, value) => {
    setOrderForm((current) => ({ ...current, [field]: value }));
  };

  const handleClearOrder = () => {
    setIsOrdered(false);
    setSelectedProductId(PRODUCTS[0].id);
    setOrderForm({ product: PRODUCTS[0].id, name: "", phone: "", address: "" });
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-cream-200 selection:bg-gold-500 selection:text-obsidian-950 font-sans relative overflow-hidden">
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[60%] right-1/4 w-[600px] h-[600px] bg-gold-700/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Header / Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-obsidian-950/85 backdrop-blur-md border-b border-gold-500/10 py-4 shadow-xl"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col items-center group">
            <span className="font-serif text-2xl md:text-3xl tracking-[0.25em] font-medium text-cream-100 transition-colors duration-300 group-hover:text-gold-500">
              MÎSK
            </span>
            <span className="text-[9px] tracking-[0.4em] text-gold-500/80 -mt-1 uppercase">
              fragrance
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-12">
            <a
              href="#collection"
              className="text-xs uppercase tracking-[0.2em] font-light hover:text-gold-500 transition-colors duration-300"
            >
              Collection
            </a>
            <a
              href="#heritage"
              className="text-xs uppercase tracking-[0.2em] font-light hover:text-gold-500 transition-colors duration-300"
            >
              Héritage
            </a>
            <a
              href="#contact"
              className="text-xs uppercase tracking-[0.2em] font-light hover:text-gold-500 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Direct CTA/Social icons in navbar */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61575200395987"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-200/70 hover:text-gold-500 transition-colors duration-300"
              title="Visitez notre page Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/miskf_ragrance/"
              className="text-cream-200/70 hover:text-gold-500 transition-colors duration-300"
              title="Suivez-nous sur Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="tel:29377207"
              className="flex items-center space-x-2 border border-gold-500/20 hover:border-gold-500/50 px-4 py-2 rounded-full bg-gold-500/5 hover:bg-gold-500/10 transition-all duration-300 text-xs tracking-wider"
            >
              <Phone size={12} className="text-gold-500" />
              <span>29 377 207</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cream-200 hover:text-gold-500 transition-colors focus:outline-none"
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-obsidian-950/95 backdrop-blur-lg z-30 pt-28 px-8 flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col space-y-8 text-center">
              <a
                href="#collection"
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl tracking-widest text-cream-100 hover:text-gold-500 transition-colors duration-300"
              >
                Collection
              </a>
              <a
                href="#heritage"
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl tracking-widest text-cream-100 hover:text-gold-500 transition-colors duration-300"
              >
                Héritage
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl tracking-widest text-cream-100 hover:text-gold-500 transition-colors duration-300"
              >
                Contact
              </a>
            </div>

            <div className="flex flex-col items-center space-y-6">
              <div className="flex space-x-8">
                <a
                  href="https://www.facebook.com/profile.php?id=61575200395987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-200 hover:text-gold-500 transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/miskf_ragrance/"
                  className="text-cream-200 hover:text-gold-500 transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
              <a
                href="tel:29377207"
                className="flex items-center space-x-3 border border-gold-500/30 px-6 py-3 rounded-full bg-gold-500/5 text-base tracking-wider"
              >
                <Phone size={16} className="text-gold-500" />
                <span>29 377 207</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Ambient Darkened Hero Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="Mîsk Parfum flacon fond de luxe"
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_8s_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-obsidian-950/20" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-12 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center space-x-2 border border-gold-500/30 px-4 py-1.5 rounded-full bg-gold-500/5 backdrop-blur-sm">
              <Sparkles size={14} className="text-gold-500 animate-pulse" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold-400 font-light">
                Découvrez la Haute Parfumerie
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-8xl tracking-tight leading-tight text-cream-100 font-normal">
              L'Essence de <br className="hidden md:inline" />
              <span className="font-light italic text-gold-500">
                l'Élégance
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-sm md:text-lg text-cream-300/80 font-light leading-relaxed tracking-wide">
              Élaboré en quantités limitées à partir d'extraits rares du monde
              entier. Mîsk propose des signatures olfactives conçues pour ceux
              qui apprécient le luxe pur et discret.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#collection"
                className="w-full sm:w-auto px-8 py-4 rounded-none bg-gold-500 hover:bg-gold-600 text-obsidian-950 text-xs md:text-sm uppercase tracking-[0.25em] font-medium shadow-2xl transition-all duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Découvrir la Collection</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                {/* Gold glow hover overlay */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#heritage"
                className="w-full sm:w-auto px-8 py-4 rounded-none border border-cream-200/20 hover:border-gold-500/40 text-cream-200 hover:text-gold-500 text-xs md:text-sm uppercase tracking-[0.25em] font-light bg-black/25 backdrop-blur-sm transition-all duration-300"
              >
                Notre Héritage
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50 hover:opacity-100 transition-opacity pointer-events-none">
          <span className="text-[9px] uppercase tracking-[0.3em] font-light text-cream-300">
            Faites Défiler
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent" />
        </div>
      </section>

      {/* The Mîsk Philosophy (About Section) */}
      <section
        id="heritage"
        className="py-24 md:py-36 bg-obsidian-900 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Side: Poetic Text Content */}
            <div className="lg:col-span-6 space-y-6 md:space-y-8">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-gold-500/90 font-light block">
                  Notre Art
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-cream-100 tracking-wide font-normal leading-tight">
                  Né du Parfum, <br />
                  Guidé par l'Artisanat
                </h2>
              </div>

              <div className="w-16 h-[1px] bg-gold-500" />

              <div className="space-y-5 text-cream-300/80 text-sm md:text-base font-light leading-relaxed tracking-wide">
                <p>
                  Chez Mîsk fragrance, nous rejetons l'idée de parfums
                  commerciaux produits en masse. Chaque formulation commence par
                  une quête artistique — un dévouement à la maîtrise
                  intemporelle de la haute parfumerie.
                </p>
                <p>
                  Nous parcourons le monde pour nous procurer du bois d'agar
                  (oud) précieux d'Assam, du bois de santal crémeux de Mysore,
                  de la bergamote fraîche de Calabre et de riches gousses de
                  vanille biologique de Madagascar.
                </p>
                <p className="italic text-gold-300/80 font-serif text-gold-400">
                  "Un parfum n'est pas un simple accessoire. C'est une présence.
                  Une armure invisible qui commande la mémoire, laissant une
                  empreinte indélébile de votre passage."
                </p>
              </div>

              {/* Sourcing credentials */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gold-500/10">
                <div>
                  <span className="text-xl md:text-2xl font-serif text-gold-500 font-medium">
                    100%
                  </span>
                  <p className="text-[10px] uppercase tracking-wider text-cream-400 font-light mt-1">
                    Extraits Purs
                  </p>
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-serif text-gold-500 font-medium">
                    Rares
                  </span>
                  <p className="text-[10px] uppercase tracking-wider text-cream-400 font-light mt-1">
                    Ingrédients
                  </p>
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-serif text-gold-500 font-medium">
                    Limités
                  </span>
                  <p className="text-[10px] uppercase tracking-wider text-cream-400 font-light mt-1">
                    Lots Artisanaux
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Split-Layout Masked Luxury Image */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[4/5] border border-gold-500/20 p-3 group overflow-hidden">
                <div className="absolute inset-0 bg-gold-500/5 group-hover:bg-gold-500/10 transition-colors duration-500 z-10 pointer-events-none" />
                <div className="w-full h-full overflow-hidden relative">
                  <img
                    src="/philosophy.png"
                    alt="Ingrédients nobles : oud, vanille, safran"
                    className="w-full h-full object-cover filter brightness-[0.8] hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                {/* Decorative absolute corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold-500" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold-500" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold-500" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Fragrances Section */}
      <section
        id="collection"
        className="py-24 md:py-36 bg-obsidian-950 relative"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto space-y-4 mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-light block">
              Nos Flacons Signatures
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-cream-100 tracking-wide font-normal">
              La Collection
            </h2>
            <div className="w-12 h-[1px] bg-gold-500 mx-auto mt-4" />
            <p className="text-sm text-cream-300/70 font-light leading-relaxed">
              Découvrez des signatures olfactives élaborées avec une profondeur
              complexe, conçues pour résonner avec votre individualité.
            </p>
          </div>

          {/* Perfume Showcase Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 lg:gap-6">
            {PRODUCTS.map((product, idx) => (
              <motion.button
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                type="button"
                className={`glass-panel-light flex flex-col group border transition-all duration-500 relative overflow-hidden p-4 text-left ${
                  selectedProductId === product.id
                    ? "border-gold-500/45 bg-gold-500/10"
                    : "border-gold-500/10 hover:border-gold-500/30"
                }`}
                onClick={() => handleSelectProduct(product.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center justify-between mb-3 relative z-10">
                  <span className="text-[10px] uppercase tracking-widest text-gold-500 font-light bg-gold-500/10 px-3 py-1 rounded-full">
                    {product.family}
                  </span>
                  <span className="font-serif text-gold-400 font-medium text-sm">
                    {product.price}
                  </span>
                </div>

                <div className="aspect-[4/5] w-full relative flex items-center justify-center mb-4 overflow-hidden rounded-2xl bg-obsidian-900/70 border border-gold-500/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="space-y-3 relative z-10 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl text-cream-100 tracking-wider font-normal">
                      {product.name}
                    </h3>
                    <p className="text-xs text-cream-300/80 font-light leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {product.composition
                      .slice(0, 3)
                      .map(([note, percentage]) => (
                        <span
                          key={`${product.id}-${note}`}
                          className="text-[10px] uppercase tracking-wider text-cream-300 bg-obsidian-900 border border-gold-500/10 px-2.5 py-1 font-light"
                        >
                          {note} {percentage}%
                        </span>
                      ))}
                  </div>

                  <div className="pt-4 border-t border-gold-500/10 flex items-center justify-between group/btn text-xs tracking-widest uppercase">
                    <span className="text-gold-500 group-hover/btn:text-cream-100 transition-colors font-medium">
                      Choisir
                    </span>
                    <div className="w-8 h-8 rounded-full border border-gold-500/20 group-hover/btn:border-gold-500/60 flex items-center justify-center transition-colors">
                      <ArrowRight
                        size={14}
                        className="text-gold-500 group-hover/btn:translate-x-0.5 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div
            id="order-form"
            className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            <div className="lg:col-span-5 glass-panel border border-gold-500/10 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-2xl pointer-events-none" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-light block mb-4">
                Commande rapide
              </span>
              <h3 className="font-serif text-2xl md:text-4xl text-cream-100 font-normal leading-tight mb-4">
                Choisissez votre parfum, puis remplissez le formulaire.
              </h3>
              <p className="text-sm text-cream-300/80 font-light leading-relaxed mb-8">
                Une commande simple, sans étape inutile. Sélectionnez un produit
                dans la collection et envoyez vos coordonnées pour être rappelé
                rapidement.
              </p>

              <div className="border border-gold-500/10 bg-obsidian-900/60 p-5 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-cream-400 font-light block">
                      Produit sélectionné
                    </span>
                    <p className="font-serif text-xl text-cream-100 mt-1">
                      {selectedOrderProduct.name}
                    </p>
                  </div>
                  <span className="text-gold-500 font-serif text-lg">
                    {selectedOrderProduct.price}
                  </span>
                </div>
                <p className="text-xs text-cream-300/75 leading-relaxed">
                  {selectedOrderProduct.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedOrderProduct.composition
                    .slice(0, 4)
                    .map(([note, percentage]) => (
                      <span
                        key={`${selectedOrderProduct.id}-${note}`}
                        className="text-[10px] uppercase tracking-wider text-cream-300 bg-obsidian-950 border border-gold-500/10 px-2.5 py-1 font-light"
                      >
                        {note} {percentage}%
                      </span>
                    ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 glass-panel border border-gold-500/10 p-8 md:p-10">
              {isOrdered ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col justify-center border border-gold-500/20 bg-gold-500/5 p-8 text-center space-y-4"
                >
                  <Check className="text-gold-500 mx-auto" size={34} />
                  <h4 className="font-serif text-2xl text-gold-500">
                    Commande reçue
                  </h4>
                  <p className="text-sm text-cream-300 font-light leading-relaxed max-w-lg mx-auto">
                    Merci {orderForm.name}. Nous avons bien reçu votre commande
                    pour {selectedOrderProduct.name}. Notre équipe vous
                    contactera au{" "}
                    <span className="text-gold-400 font-normal">
                      {orderForm.phone}
                    </span>{" "}
                    pour confirmer la livraison à{" "}
                    <span className="text-cream-100">{orderForm.address}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={handleClearOrder}
                    className="mt-2 self-center px-6 py-3 bg-gold-500 hover:bg-gold-600 text-obsidian-950 text-xs uppercase tracking-[0.25em] font-medium transition-colors"
                  >
                    Nouvelle commande
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleOrderSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-wider text-cream-400 font-light">
                        Produit
                      </label>
                      <select
                        value={orderForm.product}
                        onChange={(e) =>
                          updateOrderField("product", e.target.value)
                        }
                        className="w-full px-4 py-4 bg-obsidian-900 border border-gold-500/15 focus:border-gold-500/50 text-cream-100 text-sm focus:outline-none transition-colors"
                      >
                        {PRODUCTS.map((product) => (
                          <option key={product.id} value={product.id}>
                            {product.name} - {product.price}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-wider text-cream-400 font-light">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        required
                        value={orderForm.name}
                        onChange={(e) =>
                          updateOrderField("name", e.target.value)
                        }
                        placeholder="Votre nom"
                        className="w-full px-4 py-4 bg-obsidian-900 border border-gold-500/15 focus:border-gold-500/50 text-cream-100 text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-wider text-cream-400 font-light">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        required
                        value={orderForm.phone}
                        onChange={(e) =>
                          updateOrderField("phone", e.target.value)
                        }
                        placeholder="29 377 207"
                        className="w-full px-4 py-4 bg-obsidian-900 border border-gold-500/15 focus:border-gold-500/50 text-cream-100 text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-wider text-cream-400 font-light">
                        Adresse de livraison
                      </label>
                      <input
                        type="text"
                        required
                        value={orderForm.address}
                        onChange={(e) =>
                          updateOrderField("address", e.target.value)
                        }
                        placeholder="Votre adresse complète"
                        className="w-full px-4 py-4 bg-obsidian-900 border border-gold-500/15 focus:border-gold-500/50 text-cream-100 text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-4 bg-gold-500 hover:bg-gold-600 disabled:bg-gold-800 text-obsidian-950 font-medium text-xs md:text-sm tracking-widest uppercase transition-colors flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <span>Envoi en cours...</span>
                      ) : (
                        <>
                          <ShoppingBag size={14} />
                          <span>Commander maintenant</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleClearOrder}
                      className="px-6 py-4 border border-gold-500/15 text-cream-200 hover:text-gold-500 hover:border-gold-500/40 text-xs uppercase tracking-widest transition-colors"
                    >
                      Réinitialiser
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sensory Experience / Master Perfumer Quote */}
      <section className="py-28 relative overflow-hidden bg-obsidian-900 border-y border-gold-500/10">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gold-600/5 rounded-full blur-[100px] z-0 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.4em] text-gold-500 font-light block">
            L'Expérience Sensorielle
          </span>

          <h3 className="font-serif text-2xl md:text-4xl text-cream-100 leading-relaxed font-light italic">
            "Nous ne créons pas seulement des parfums ; nous composons des
            expériences. Un flacon Mîsk est un récit persistant, un code secret
            écrit en molécules volatiles qui éveille l'émotion avant la raison."
          </h3>

          <div className="w-8 h-[1px] bg-gold-500 mx-auto" />

          <div>
            <span className="font-serif tracking-widest text-lg block text-gold-500 font-normal">
              MOHAMED MEJDI
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-cream-400 font-light">
              Fondateur & Maître Parfumeur
            </span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-obsidian-950 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Contact details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-light block">
                  Contactez-nous
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-cream-100 tracking-wide font-normal">
                  Visiter la Maison
                </h2>
                <p className="text-sm text-cream-300/80 font-light leading-relaxed">
                  Une question sur une commande, une consultation olfactive sur
                  mesure ou une demande professionnelle ? Contactez notre
                  boutique.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href="tel:29377207"
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-12 h-12 border border-gold-500/20 group-hover:border-gold-500/50 flex items-center justify-center bg-gold-500/5 transition-colors">
                    <Phone size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-cream-400 font-light block">
                      Ligne Directe Boutique
                    </span>
                    <span className="text-lg text-cream-200 group-hover:text-gold-500 transition-colors font-medium">
                      29 377 207
                    </span>
                  </div>
                </a>

                {/* Email */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 border border-gold-500/20 flex items-center justify-center bg-gold-500/5">
                    <Mail size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-cream-400 font-light block">
                      Demandes par E-mail
                    </span>
                    <span className="text-lg text-cream-200 font-medium">
                      boutique@miskfragrance.com
                    </span>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex space-x-4 pt-4 border-t border-gold-500/10">
                  <a
                    href="https://www.facebook.com/profile.php?id=61575200395987"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-gold-500/20 hover:border-gold-500/50 flex items-center justify-center text-cream-200 hover:text-gold-500 transition-colors"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/miskf_ragrance/"
                    className="w-10 h-10 border border-gold-500/20 hover:border-gold-500/50 flex items-center justify-center text-cream-200 hover:text-gold-500 transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription Panel */}
            <div className="lg:col-span-7">
              <div className="glass-panel border border-gold-500/10 p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-2xl pointer-events-none" />

                <h3 className="font-serif text-2xl md:text-3xl text-cream-100 font-normal mb-2">
                  Rejoindre la Maison
                </h3>
                <p className="text-xs md:text-sm text-cream-300/80 font-light mb-8 leading-relaxed">
                  Recevez des invitations privées pour nos lancements de
                  parfums, nos micro-lots exclusifs et nos événements privés en
                  boutique.
                </p>

                {newsletterSubscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="border border-gold-500/20 bg-gold-500/5 p-6 text-center space-y-3"
                  >
                    <Check className="text-gold-500 mx-auto" size={32} />
                    <h4 className="font-serif text-lg text-gold-500">
                      Bienvenue dans la Maison
                    </h4>
                    <p className="text-xs text-cream-300 font-light">
                      Un e-mail de confirmation vous a été envoyé. Nous sommes
                      ravis de rester en contact.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        required
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Entrez votre adresse e-mail"
                        className="flex-grow px-5 py-4 bg-obsidian-900 border border-gold-500/15 focus:border-gold-500/50 text-cream-100 placeholder-cream-300/30 text-sm focus:outline-none transition-colors"
                      />
                      <button
                        type="submit"
                        className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-obsidian-950 font-medium text-xs md:text-sm tracking-widest uppercase transition-colors"
                      >
                        S'abonner
                      </button>
                    </div>
                    <p className="text-[10px] text-cream-300/40 font-light">
                      *Nous respectons votre vie privée. Désabonnez-vous à tout
                      moment.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-obsidian-950 border-t border-gold-500/10 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <span className="font-serif text-xl tracking-[0.25em] font-medium text-cream-100">
              MÎSK
            </span>
            <p className="text-[10px] tracking-wider text-cream-300/50 font-light">
              &copy; {new Date().getFullYear()} Mîsk fragrance. Tous droits
              réservés.
            </p>
          </div>

          {/* Center Coordinates */}
          <div className="text-center text-xs text-cream-300/70 font-light flex flex-col sm:flex-row gap-2 sm:gap-6">
            <span>Boutique : 29 377 207</span>
            <span className="hidden sm:inline text-gold-500/30">|</span>
            <span>Tunis, Tunisie</span>
          </div>

          {/* Social connections */}
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61575200395987"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-200/50 hover:text-gold-500 transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/miskf_ragrance/"
              className="text-cream-200/50 hover:text-gold-500 transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
