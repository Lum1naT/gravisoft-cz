"use client";

import { useEffect, useRef } from "react";

type NavigationLink = { href: string; label: string };

export function MobileMenu({ links }: { links: NavigationLink[] }) {
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const close = () => { menu.open = false; };
    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !menu.contains(event.target)) close();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.open) {
        close();
        menu.querySelector("summary")?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 981px)");

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("hashchange", close);
    desktop.addEventListener("change", close);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("hashchange", close);
      desktop.removeEventListener("change", close);
    };
  }, []);

  return (
    <details className="mobile-menu" ref={menuRef}>
      <summary aria-label="Hlavní menu"><span /><span /></summary>
      <nav aria-label="Mobilní navigace">
        {links.map(({ href, label }) => (
          <a key={href} href={href} onClick={() => {
            if (menuRef.current) menuRef.current.open = false;
          }}>{label}</a>
        ))}
      </nav>
    </details>
  );
}
