'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MdAutoAwesome, MdClose, MdMenu } from 'react-icons/md';

import DarkModeToggle from '@/components/layout/DarkModeToggle';

const navLinks = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/about', label: 'About', icon: '💼' },
  { href: '/skills', label: 'Skills', icon: '⚡' },
  { href: '/contact', label: 'Contact', icon: '📧' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl border border-[var(--glass-border)] shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center space-x-3 group focus-ring rounded-xl p-2 transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 gradient-bg">
                    <MdAutoAwesome className="w-6 h-6 on-gradient" />
                  </div>
                  <div className="absolute -inset-1 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300 gradient-bg"></div>
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl font-bold gradient-text">Christopher Tanaka</span>
                  <div className="text-xs text-[var(--muted)] font-medium">
                    Senior Software Engineer
                  </div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-xl transition-all duration-300 group focus-ring ${
                      pathname === link.href
                        ? 'text-[var(--foreground)] bg-[var(--glass-bg)] border border-[var(--glass-border)]'
                        : 'text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--glass-bg)]'
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span className="text-lg">{link.icon}</span>
                      <span className="font-medium">{link.label}</span>
                    </span>
                    {pathname === link.href && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full gradient-bg"></div>
                    )}
                  </Link>
                ))}
              </div>

              {/* Right side */}
              <div className="flex items-center space-x-3">
                <DarkModeToggle />

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 rounded-xl transition-all duration-300 focus-ring bg-[var(--glass-bg)] hover:bg-[var(--glass-bg)]/80 border border-[var(--glass-border)]"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <MdClose className="w-6 h-6 text-[var(--foreground)]" />
                  ) : (
                    <MdMenu className="w-6 h-6 text-[var(--foreground)]" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden border-t border-[var(--glass-border)]">
                <div className="px-6 py-4 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 focus-ring ${
                        pathname === link.href
                          ? 'text-[var(--foreground)] bg-[var(--glass-bg)] border border-[var(--glass-border)]'
                          : 'text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--glass-bg)]'
                      }`}
                    >
                      <span className="text-xl">{link.icon}</span>
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;
