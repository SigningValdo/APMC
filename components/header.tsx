"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SearchBar } from "@/components/search-bar";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

const navigation = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.news", href: "/news" },
  { key: "nav.resources", href: "/resources" },
  { key: "nav.membership", href: "/membership" },
  { key: "nav.contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, locale } = useTranslation();
  const pathname = usePathname();

  const getLocalizedHref = (href: string) => {
    return locale === "fr" ? href : `/${locale}${href}`;
  };

  const isActive = (href: string) => {
    const localizedHref = getLocalizedHref(href);
    return (
      pathname === localizedHref ||
      (href !== "/" && pathname.startsWith(localizedHref))
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={getLocalizedHref("/")}
            className="flex items-center space-x-2"
          >
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                A
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-lg text-primary">
                {locale === "fr" ? "APMC" : "CAPPP"}
              </div>
              <div className="text-xs text-muted-foreground -mt-1">
                {locale === "fr" ? "Cameroun" : "Cameroon"}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={getLocalizedHref(item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(item.href) ? "text-primary" : "text-muted-foreground"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Search bar in the center for desktop */}
          <div className="hidden md:block lg:hidden">
            <SearchBar />
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block">
              <SearchBar />
            </div>
            <LanguageSwitcher />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href={getLocalizedHref("/membership")}>
                {t("nav.memberArea")}
              </Link>
            </Button>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="md:hidden">
                    <SearchBar />
                  </div>
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={getLocalizedHref(item.href)}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        isActive(item.href)
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                  <Button asChild className="mt-4">
                    <Link
                      href={getLocalizedHref("/membership")}
                      onClick={() => setIsOpen(false)}
                    >
                      {t("nav.memberArea")}
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
