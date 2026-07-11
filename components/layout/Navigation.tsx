"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { navItems, siteConfig } from "@/lib/constants";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    if (isMobileMenuOpen) {
      window.__lenis?.stop();
    } else {
      window.__lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      window.__lenis?.start();
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (window.__lenis) {
      window.__lenis.scrollTo(href, { duration: 1.4 });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Reading progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-ultra"
        style={{ scaleX: progress }}
      />

      {/* The whole bar runs in difference blend mode: it re-inks itself
          automatically over paper and over the ink sections */}
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "mix-blend-difference text-white",
          "transition-all duration-300",
          isScrolled ? "py-4" : "py-7"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <a
              href="#"
              className="font-display text-xl font-extrabold uppercase tracking-tight"
              onClick={(e) => {
                e.preventDefault();
                if (window.__lenis) {
                  window.__lenis.scrollTo(0, { duration: 1.4 });
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              {siteConfig.shortName}
              <span className="text-ultra">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-7">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70 hover:opacity-100 transition-opacity"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className={cn(
                  "rounded-full border border-white px-5 py-2",
                  "font-mono text-[11px] uppercase tracking-[0.18em]",
                  "hover:bg-white hover:text-black transition-colors"
                )}
              >
                Hablemos
              </a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span
                  className="w-full h-0.5 bg-white"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 9 : 0,
                  }}
                />
                <motion.span
                  className="w-full h-0.5 bg-white"
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-white"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -9 : 0,
                  }}
                />
              </div>
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-ink md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* my-auto centers when it fits; overflow-y-auto scrolls when it doesn't */}
            <nav className="flex h-full flex-col overflow-y-auto px-8 pb-10 pt-24">
              <div className="my-auto">
                {navItems.map((item, index) => (
                  <span key={item.href} className="block overflow-hidden">
                    <motion.button
                      onClick={() => scrollToSection(item.href)}
                      className="block py-1.5 text-left font-display text-4xl font-extrabold uppercase text-chalk hover:text-ultra transition-colors"
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "110%" }}
                      transition={{
                        duration: 0.5,
                        delay: 0.08 + index * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {item.label}
                    </motion.button>
                  </span>
                ))}
                <motion.button
                  onClick={() => scrollToSection("#contact")}
                  className="mt-8 rounded-full border border-chalk px-7 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-chalk"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.5 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Cuéntame el problema
                </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
