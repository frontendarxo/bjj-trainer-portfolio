"use client";

import Image from "next/image";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Instagram,
  Languages,
  MapPin,
  Menu,
  Phone,
  X
} from "lucide-react";
import type { MouseEvent, ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { copy, locales, tickerText, type AchievementItem, type Locale } from "@/lib/content";
import { galleryImages, imagePaths } from "@/lib/images";

const phoneHref = "tel:+971508761319";
const instagramHref = "https://instagram.com/_imam_74";

type ButtonVariant = "primary" | "secondary" | "quiet";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function buttonClasses(variant: ButtonVariant) {
  return cn(
    "focus-ring group inline-flex min-h-12 items-center justify-center gap-3 border px-5 py-3 text-sm font-extrabold uppercase transition-colors duration-300",
    variant === "primary" &&
      "border-bone bg-bone text-ink hover:border-purpleBelt hover:bg-purpleBelt hover:text-bone",
    variant === "secondary" &&
      "border-bone/30 bg-transparent text-bone hover:border-bone hover:bg-bone hover:text-ink",
    variant === "quiet" &&
      "border-bone/15 bg-transparent text-bone/80 hover:border-medal hover:text-medal"
  );
}

function MagneticLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
  onClick
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
  };

  const reset = () => {
    animate(x, 0, { type: "spring", stiffness: 260, damping: 18 });
    animate(y, 0, { type: "spring", stiffness: 260, damping: 18 });
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={cn(buttonClasses(variant), className)}
    >
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden
        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </motion.a>
  );
}

function MagneticButton({
  children,
  variant = "primary",
  className,
  onClick
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick: () => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
  };

  const reset = () => {
    animate(x, 0, { type: "spring", stiffness: 260, damping: 18 });
    animate(y, 0, { type: "spring", stiffness: 260, damping: 18 });
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={cn(buttonClasses(variant), className)}
    >
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden
        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </motion.button>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
  y = 36
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={cn(
        "mb-5 flex items-center gap-3 text-xs font-black uppercase",
        dark ? "text-ink/60" : "text-medal"
      )}
    >
      <span className={cn("h-px w-10", dark ? "bg-ink/25" : "bg-medal/60")} />
      {children}
    </p>
  );
}

function Counter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-18% 0px" });
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(reducedMotion ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setCount(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.35,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setCount(Math.round(latest))
    });

    return () => controls.stop();
  }, [inView, reducedMotion, value]);

  return (
    <div ref={ref} className="border-t border-ink/20 py-8 md:py-10">
      <div className="font-display text-6xl font-black leading-none text-ink sm:text-7xl lg:text-8xl">
        {count}
        <span className="text-3xl sm:text-4xl">{suffix}</span>
      </div>
      <p className="mt-4 max-w-[14rem] text-sm font-bold uppercase text-ink/60">{label}</p>
    </div>
  );
}

function IntroLoader({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }}
        >
          <motion.div
            initial={{ y: 24, opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-black uppercase text-bone sm:text-6xl md:text-7xl"
          >
            IMAM GETSIEV
          </motion.div>
          <motion.span
            aria-hidden
            className="absolute bottom-12 h-px w-56 bg-purpleBelt"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function TitleReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{
          y: reducedMotion ? 0 : "105%",
          clipPath: reducedMotion ? "inset(0 0 0 0)" : "inset(0 0 100% 0)"
        }}
        animate={{ y: 0, clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function AchievementItemRow({
  item,
  index,
  tone
}: {
  item: AchievementItem;
  index: number;
  tone: "gold" | "bronze";
}) {
  const [open, setOpen] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const reducedMotion = useReducedMotion();

  const handleMove = (event: MouseEvent<HTMLButtonElement>) => {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    rotateX.set((y / rect.height - 0.5) * -2.5);
    rotateY.set((x / rect.width - 0.5) * 2.5);
  };

  const reset = () => {
    animate(rotateX, 0, { type: "spring", stiffness: 240, damping: 20 });
    animate(rotateY, 0, { type: "spring", stiffness: 240, damping: 20 });
  };

  return (
    <motion.button
      type="button"
      onClick={() => setOpen((current) => !current)}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="focus-ring group w-full border-t border-bone/10 py-5 text-left transition-colors duration-300 hover:border-bone/30"
    >
      <div className="grid grid-cols-[2.75rem_1fr_auto] items-start gap-4">
        <span className={cn("font-display text-sm font-black", tone === "gold" ? "text-medal" : "text-bone/50")}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-base font-extrabold text-bone sm:text-lg">{item.title}</span>
        <ArrowRight
          aria-hidden
          className={cn(
            "mt-1 h-4 w-4 transition-transform duration-300",
            open ? "rotate-90 text-medal" : "text-bone/40 group-hover:translate-x-1"
          )}
        />
      </div>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="ml-[4.2rem] overflow-hidden pt-3 text-sm leading-6 text-muted"
          >
            {item.detail}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </motion.button>
  );
}

function GalleryTile({
  image,
  index,
  onOpen,
  priority = false
}: {
  image: (typeof galleryImages)[number];
  index: number;
  onOpen: (index: number) => void;
  priority?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      className={cn(
        "gallery-button group relative min-h-[300px] overflow-hidden border border-bone/10 bg-graphite text-left",
        index === 2 ? "md:row-span-2 md:min-h-[620px]" : "md:min-h-[300px]"
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
      <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 text-sm font-bold uppercase text-bone">
        {image.label}
        <ArrowUpRight aria-hidden className="h-4 w-4 text-medal" />
      </span>
    </button>
  );
}

function Lightbox({
  index,
  onClose,
  onNext,
  onPrevious
}: {
  index: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}) {
  const image = index === null ? null : galleryImages[index];

  return (
    <AnimatePresence>
      {image ? (
        <motion.div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-ink/95 p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="focus-ring absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center border border-bone/20 bg-ink/70 text-bone"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onPrevious();
            }}
            aria-label="Previous photo"
            className="focus-ring absolute left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-bone/20 bg-ink/70 text-bone md:inline-flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
            aria-label="Next photo"
            className="focus-ring absolute right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-bone/20 bg-ink/70 text-bone md:inline-flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <motion.div
            className="relative h-[82vh] w-full max-w-6xl overflow-hidden border border-bone/10 bg-graphite"
            initial={{ scale: 0.96, y: 24 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 24 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-contain" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent p-5">
              <p className="font-display text-2xl font-black uppercase text-bone">{image.label}</p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function MobileMenu({
  open,
  onClose,
  links,
  locale,
  setLocale
}: {
  open: boolean;
  onClose: () => void;
  links: Array<{ href: string; label: string }>;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[95] bg-ink p-6 pt-24 md:hidden"
          initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex h-full flex-col justify-between">
            <nav className="space-y-4">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block border-b border-bone/10 py-4 font-display text-5xl font-black uppercase text-bone"
                  initial={{ y: 22, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 + index * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="flex items-center justify-between border-t border-bone/10 pt-5">
              <span className="text-sm font-bold uppercase text-muted">Language</span>
              <div className="flex border border-bone/20">
                {locales.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setLocale(item);
                      onClose();
                    }}
                    className={cn(
                      "h-11 px-4 text-sm font-black uppercase",
                      locale === item ? "bg-bone text-ink" : "text-bone/70"
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Navigation({
  links,
  locale,
  setLocale,
  menuOpen,
  setMenuOpen
}: {
  links: Array<{ href: string; label: string }>;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}) {
  return (
    <header className="nav-blur fixed left-0 right-0 top-0 z-[100] border-b border-bone/10">
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="focus-ring font-display text-sm font-black uppercase text-bone">
          IMAM GETSIEV
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-bold text-bone/70 transition-colors hover:text-bone"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-medal transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <div className="flex border border-bone/15">
            {locales.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLocale(item)}
                aria-pressed={locale === item}
                className={cn(
                  "h-9 px-3 text-xs font-black uppercase transition-colors",
                  locale === item ? "bg-bone text-ink" : "text-bone/60 hover:text-bone"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center border border-bone/15 text-bone md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
}

export function ImamPortfolio() {
  const [locale, setLocale] = useState<Locale>("en");
  const [introVisible, setIntroVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 80]);
  const heroTitleY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -42]);

  const t = copy[locale];
  const navLinks = useMemo(
    () => [
      { href: "#profile", label: t.nav.profile },
      { href: "#achievements", label: t.nav.achievements },
      { href: "#coaching", label: t.nav.coaching },
      { href: "#contact", label: t.nav.contact }
    ],
    [t.nav.achievements, t.nav.coaching, t.nav.contact, t.nav.profile]
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const alreadySeen = window.sessionStorage.getItem("imam-intro-seen") === "true";
    if (alreadySeen || reducedMotion) {
      setIntroVisible(false);
      return;
    }

    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem("imam-intro-seen", "true");
      setIntroVisible(false);
    }, 1700);

    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

  useEffect(() => {
    const shouldLock = menuOpen || lightboxIndex !== null;
    document.body.style.overflow = shouldLock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setLightboxIndex(null);
      }
      if (event.key === "ArrowRight" && lightboxIndex !== null) {
        setLightboxIndex((current) => (current === null ? current : (current + 1) % galleryImages.length));
      }
      if (event.key === "ArrowLeft" && lightboxIndex !== null) {
        setLightboxIndex((current) =>
          current === null ? current : (current - 1 + galleryImages.length) % galleryImages.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const handleConversation = () => {
    const isMobileIntent = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
    if (isMobileIntent) {
      window.location.href = phoneHref;
      return;
    }
    setContactOpen((current) => !current);
  };

  const nextImage = () =>
    setLightboxIndex((current) => (current === null ? current : (current + 1) % galleryImages.length));
  const previousImage = () =>
    setLightboxIndex((current) =>
      current === null ? current : (current - 1 + galleryImages.length) % galleryImages.length
    );

  return (
    <main className="grain bg-ink text-bone">
      <IntroLoader visible={introVisible} />
      <Navigation
        links={navLinks}
        locale={locale}
        setLocale={setLocale}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
        locale={locale}
        setLocale={setLocale}
      />

      <section ref={heroRef} id="top" className="relative min-h-[92svh] overflow-hidden pt-16">
        <motion.div
          style={{ y: heroImageY }}
          className="image-mask absolute bottom-0 right-0 top-0 w-full opacity-[0.82] md:w-[68%] md:opacity-95"
        >
          <Image
            src={imagePaths.hero}
            alt="Imam Getsiev in a black gi with purple belt"
            fill
            priority
            sizes="(min-width: 768px) 68vw, 100vw"
            className="object-cover object-[52%_48%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/36 to-ink/8" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/45" />
        </motion.div>

        <div className="section-shell relative z-10 flex min-h-[calc(92svh-4rem)] flex-col justify-end pb-8 pt-20 md:pb-12">
          <motion.div style={{ y: heroTitleY }} className="max-w-5xl">
            <p className="mb-5 max-w-xs text-sm font-extrabold uppercase text-medal sm:max-w-none">
              {t.hero.eyebrow}
            </p>
            <h1 className="font-display text-7xl font-black uppercase leading-[0.82] text-bone sm:text-8xl md:text-[9rem] lg:text-[12rem] xl:text-[13.5rem]">
              <TitleReveal delay={0.1}>{t.hero.titleTop}</TitleReveal>
              <span className="relative block">
                <TitleReveal delay={0.24}>{t.hero.titleBottom}</TitleReveal>
                <motion.span
                  aria-hidden
                  className="purple-line absolute bottom-1 left-1 h-2 w-[64%] origin-left md:h-3"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.18 }}
                />
              </span>
            </h1>
          </motion.div>

          <div className="mt-8 grid gap-6 border-t border-bone/10 pt-6 md:grid-cols-[1.1fr_0.8fr_auto] md:items-end">
            <Reveal y={18}>
              <p className="max-w-xl text-xl font-extrabold leading-8 text-bone md:text-2xl">{t.hero.status}</p>
              <p className="mt-3 flex items-center gap-2 text-sm font-bold text-muted">
                <MapPin aria-hidden className="h-4 w-4 text-purpleBelt" />
                {t.hero.location}
              </p>
            </Reveal>
            <Reveal delay={0.08} y={18}>
              <div className="flex flex-wrap gap-3">
                <MagneticLink href="#coaching">{t.hero.primaryCta}</MagneticLink>
                <MagneticLink href="#contact" variant="secondary">
                  {t.hero.secondaryCta}
                </MagneticLink>
              </div>
            </Reveal>
            <Reveal delay={0.16} y={18} className="hidden justify-self-end md:block">
              <p className="vertical-label text-xs font-black uppercase text-bone/40">{t.hero.discipline}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="masked-row border-y border-bone/10 py-4">
        <div className="flex w-max animate-ticker gap-10 whitespace-nowrap font-display text-2xl font-black uppercase text-bone/80 md:text-4xl">
          {Array.from({ length: 4 }).map((_, index) => (
            <span key={index}>{tickerText}</span>
          ))}
        </div>
      </div>

      <section id="profile" className="py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <Reveal>
            <SectionLabel>{t.profile.label}</SectionLabel>
            <h2 className="font-display text-5xl font-black uppercase leading-none text-bone md:text-7xl">
              {t.profile.title}
            </h2>
          </Reveal>
          <div>
            <Reveal>
              <p className="max-w-3xl text-xl leading-9 text-bone/80 md:text-2xl md:leading-10">{t.profile.body}</p>
            </Reveal>
            <div className="mt-12 grid gap-x-8 gap-y-6 border-y border-bone/10 py-8 sm:grid-cols-2 lg:grid-cols-4">
              {t.profile.facts.map((fact, index) => (
                <Reveal key={fact.label} delay={index * 0.05} y={20}>
                  <div>
                    <p className="font-display text-4xl font-black uppercase text-bone">{fact.value}</p>
                    <p className="mt-2 text-sm font-bold uppercase leading-5 text-muted">{fact.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone py-20 text-ink md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionLabel dark>{t.stats.label}</SectionLabel>
            <h2 className="max-w-5xl font-display text-4xl font-black uppercase leading-[1.02] text-ink md:text-6xl">
              {t.stats.title}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.stats.items.map((item) => (
              <Counter key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionLabel>{t.journey.label}</SectionLabel>
            <h2 className="font-display text-5xl font-black uppercase leading-none text-bone md:text-7xl">
              {t.journey.title}
            </h2>
            <div className="mt-12 border-y border-bone/10 py-7">
              <p className="mb-5 text-sm font-black uppercase text-medal">{t.journey.clubsTitle}</p>
              <div className="flex flex-wrap gap-3">
                {t.journey.clubs.map((club) => (
                  <span key={club} className="border border-bone/15 px-4 py-2 text-sm font-bold text-bone/80">
                    {club}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute left-[5.2rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-bone/10 sm:block" />
            {t.journey.items.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.06} y={28}>
                <div className="grid gap-5 border-t border-bone/10 py-7 sm:grid-cols-[8rem_1fr]">
                  <div className="relative font-display text-xl font-black uppercase text-medal">
                    <span className="relative z-10 bg-ink pr-4">{item.year}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase text-bone">{item.title}</h3>
                    <p className="mt-3 max-w-2xl leading-7 text-muted">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="relative overflow-hidden bg-graphite py-20 md:py-28">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <Reveal>
              <SectionLabel>{t.achievements.label}</SectionLabel>
              <h2 className="font-display text-5xl font-black uppercase leading-none text-bone md:text-7xl">
                {t.achievements.title}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="max-w-2xl text-xl leading-8 text-bone/75">{t.achievements.lead}</p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { label: t.achievements.world, tone: "gold" },
              { label: t.achievements.asian, tone: "purple" },
              { label: t.achievements.belt, tone: "dark" }
            ].map((item, index) => (
              <Reveal key={item.label} delay={index * 0.06} y={28}>
                <div
                  className={cn(
                    "min-h-52 border p-6",
                    item.tone === "gold" && "border-medal/40 bg-medal/10",
                    item.tone === "purple" && "border-purpleBelt/40 bg-purpleBelt/10",
                    item.tone === "dark" && "border-bone/10 bg-ink/40"
                  )}
                >
                  <p className="mb-16 text-sm font-black uppercase text-bone/50">0{index + 1}</p>
                  <h3 className={cn("font-display text-4xl font-black uppercase", index === 0 && "gold-text")}>
                    {item.label}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.82fr]">
            <Reveal>
              <div>
                <h3 className="mb-5 font-display text-3xl font-black uppercase text-bone">
                  {t.achievements.goldTitle}
                </h3>
                {t.achievements.gold.map((item, index) => (
                  <AchievementItemRow key={item.title} item={item} index={index} tone="gold" />
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <h3 className="mb-5 font-display text-3xl font-black uppercase text-bone">
                  {t.achievements.bronzeTitle}
                </h3>
                {t.achievements.bronze.map((item, index) => (
                  <AchievementItemRow key={item.title} item={item} index={index} tone="bronze" />
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {galleryImages.slice(0, 3).map((image, index) => (
              <GalleryTile key={image.src} image={image} index={index} onOpen={setLightboxIndex} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionLabel>{t.belt.label}</SectionLabel>
            <div className="relative">
              <h2 className="font-display text-7xl font-black uppercase leading-none text-bone sm:text-8xl md:text-[10rem] lg:text-[12rem]">
                {t.belt.title}
              </h2>
              <motion.div
                aria-hidden
                className="purple-line mt-8 h-5 origin-left md:h-7"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-18% 0px" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="mt-8 grid gap-8 border-y border-bone/10 py-8 md:grid-cols-[1fr_0.9fr]">
              <p className="text-2xl font-black text-bone">{t.belt.subtitle}</p>
              <div>
                <p className="mb-3 text-sm font-black uppercase text-medal">{t.belt.awardedBy}</p>
                <ul className="space-y-2 text-lg font-bold text-bone/80">
                  {t.belt.professors.map((professor) => (
                    <li key={professor}>{professor}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="coaching" className="bg-bone py-20 text-ink md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
          <div>
            <Reveal>
              <SectionLabel dark>{t.coaching.label}</SectionLabel>
              <h2 className="font-display text-5xl font-black uppercase leading-none text-ink md:text-7xl">
                {t.coaching.title}
              </h2>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-ink/70">{t.coaching.body}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-12 grid border-y border-ink/15 sm:grid-cols-2">
                {t.coaching.directions.map((direction) => (
                  <div
                    key={direction}
                    className="flex min-h-16 items-center justify-between border-b border-ink/10 py-4 pr-4 text-base font-black uppercase text-ink last:border-b-0 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"
                  >
                    {direction}
                    <ArrowUpRight aria-hidden className="h-4 w-4 text-purpleBelt" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} y={48}>
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-graphite">
              <Image
                src={imagePaths.training}
                alt="Imam Getsiev in a training environment"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="max-w-sm font-display text-3xl font-black uppercase text-bone">
                  Discipline creates confidence.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="section-shell mt-14">
          <Reveal>
            <div className="grid gap-0 border-y border-ink/15 md:grid-cols-5">
              {t.coaching.principles.map((principle, index) => (
                <div
                  key={principle}
                  className="min-h-36 border-b border-ink/10 p-5 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <p className="font-display text-sm font-black text-purpleBelt">0{index + 1}</p>
                  <p className="mt-8 text-xl font-black uppercase leading-7 text-ink">{principle}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionLabel>{t.international.label}</SectionLabel>
            <h2 className="font-display text-5xl font-black uppercase leading-none text-bone md:text-7xl">
              {t.international.title}
            </h2>
          </Reveal>
          <div>
            <Reveal>
              <p className="max-w-3xl text-xl leading-9 text-bone/80">{t.international.body}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {t.international.languages.map((language) => (
                  <div key={language} className="flex items-center gap-4 border-t border-bone/10 py-5">
                    <Languages aria-hidden className="h-5 w-5 text-purpleBelt" />
                    <span className="text-xl font-black uppercase text-bone">{language}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-10 border border-bone/10 p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap aria-hidden className="mt-1 h-6 w-6 text-medal" />
                  <div>
                    <p className="text-sm font-black uppercase text-medal">{t.international.educationTitle}</p>
                    <p className="mt-3 text-2xl font-black text-bone">{t.international.education}</p>
                    <p className="mt-2 text-muted">{t.international.university}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-bone/10 bg-graphite py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <blockquote className="max-w-5xl font-display text-5xl font-black uppercase leading-[1.02] text-bone md:text-7xl">
              “{t.philosophy.quote}”
            </blockquote>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-muted">{t.philosophy.body}</p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-y-0 right-0 hidden w-[42%] opacity-[0.32] lg:block">
          <Image src={imagePaths.podium03} alt="" fill sizes="42vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
        </div>
        <div className="section-shell relative z-10">
          <Reveal>
            <SectionLabel>{t.opportunity.label}</SectionLabel>
            <h2 className="max-w-5xl font-display text-5xl font-black uppercase leading-none text-bone md:text-7xl">
              {t.opportunity.title}
            </h2>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-bone/75">{t.opportunity.body}</p>
          </Reveal>
          <div className="mt-10 grid gap-0 border-y border-bone/10 md:grid-cols-3">
            {t.opportunity.list.map((item, index) => (
              <Reveal key={item} delay={index * 0.04} y={20}>
                <div className="min-h-20 border-b border-bone/10 py-5 text-lg font-black uppercase text-bone md:border-r md:pr-5 md:last:border-r-0">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticLink href="#contact">{t.opportunity.contact}</MagneticLink>
              <MagneticLink href={instagramHref} external variant="secondary">
                {t.opportunity.instagram}
              </MagneticLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="bg-bone py-20 text-ink md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <Reveal>
            <h2 className="font-display text-6xl font-black uppercase leading-none text-ink md:text-8xl">
              {t.contact.title}
            </h2>
            <p className="mt-5 text-2xl font-black text-ink/70">{t.contact.subtitle}</p>
            <p className="mt-3 flex items-center gap-2 text-base font-bold text-ink/60">
              <MapPin aria-hidden className="h-4 w-4 text-purpleBelt" />
              {t.contact.location}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="border-y border-ink/15 py-7">
              <div className="grid gap-6 sm:grid-cols-2">
                <a href={phoneHref} className="group flex items-start gap-4 text-ink">
                  <Phone aria-hidden className="mt-1 h-5 w-5 text-purpleBelt" />
                  <span>
                    <span className="block text-sm font-black uppercase text-ink/50">{t.contact.phoneLabel}</span>
                    <span className="mt-1 block text-xl font-black group-hover:text-purpleBelt">{t.contact.phone}</span>
                  </span>
                </a>
                <a href={instagramHref} target="_blank" rel="noreferrer" className="group flex items-start gap-4 text-ink">
                  <Instagram aria-hidden className="mt-1 h-5 w-5 text-purpleBelt" />
                  <span>
                    <span className="block text-sm font-black uppercase text-ink/50">
                      {t.contact.instagramLabel}
                    </span>
                    <span className="mt-1 block text-xl font-black group-hover:text-purpleBelt">
                      {t.contact.instagram}
                    </span>
                  </span>
                </a>
              </div>
              <div className="mt-8">
                <MagneticButton onClick={handleConversation}>{t.contact.cta}</MagneticButton>
              </div>
              <AnimatePresence>
                {contactOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 border border-ink/15 p-5">
                      <p className="text-sm font-bold uppercase text-ink/60">{t.contact.desktopHint}</p>
                      <p className="mt-3 text-xl font-black text-ink">{t.contact.phone}</p>
                      <p className="mt-1 text-xl font-black text-ink">{t.contact.instagram}</p>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-ink py-8">
        <div className="section-shell flex flex-col gap-3 text-sm font-bold text-bone/50 md:flex-row md:items-center md:justify-between">
          <p>{t.footer.line}</p>
          <p>{t.footer.availability}</p>
        </div>
      </footer>

      <Lightbox index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNext={nextImage} onPrevious={previousImage} />
    </main>
  );
}
