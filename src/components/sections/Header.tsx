"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { nav, profile } from "@/content/profile"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-rule bg-ground/88 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-[64px] items-center justify-between gap-6">
        <a href="/#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span aria-hidden className="h-2.5 w-2.5 bg-signal" />
          <span className="font-display text-[16px] font-semibold tracking-[-0.01em] text-bone">
            {profile.name}
          </span>
          <span className="tag hidden lg:inline">{profile.shortRole}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {nav.map((item, i) => (
            <a key={item.href} href={item.href} className="group tag flex items-baseline gap-1.5 hover:text-bone">
              <span className="text-bone-3 group-hover:text-signal">0{i + 1}</span>
              {item.label}
            </a>
          ))}
          <a href="/#contact" className="btn btn-primary btn-sm">
            Discuss a project
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center text-bone md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </div>

      <div id="mobile-nav" hidden={!open} className="border-t border-rule bg-ground md:hidden">
        <div className="shell flex flex-col py-4">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-rule py-4 font-display text-2xl text-bone"
            >
              <span className="tag text-signal">0{i + 1}</span>
              {item.label}
            </a>
          ))}
          <a href="/#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-6 w-full">
            Discuss a project
          </a>
        </div>
      </div>
    </header>
  )
}
