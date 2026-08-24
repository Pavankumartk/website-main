"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, type NestedCategory, type PromoCard, type SimpleLink } from "../../data/navigation";
import { ChevronDownIcon, ChevronUpIcon, ChevronRightIcon } from "../icons/Icons";
import Assistant from "../Assistant/AssistantPopup";
import './header.css';

type PanelColumn = {
  title?: string;
  links: SimpleLink[];
};

function getPanelColumns(categories: NestedCategory[]): PanelColumn[] {
  const columns: PanelColumn[] = [];
  let flatLinks: SimpleLink[] = [];

  function flushFlatLinks() {
    if (flatLinks.length > 0) {
      columns.push({ links: flatLinks });
      flatLinks = [];
    }
  }

  categories.forEach((category) => {
    if (category.items && category.items.length > 0) {
      flushFlatLinks();
      columns.push({ title: category.label, links: category.items });
    } else {
      flatLinks.push({ label: category.label, href: category.href ?? "#" });
    }
  });

  flushFlatLinks();
  return columns;
}

function HeaderPromo({ promo }: { promo: PromoCard }) {
  return (
    <div className={`nlxp-header-promo nlxp-header-promo--${promo.variant}`}>
      {promo.variant === "photo" && promo.image && (
        <div className="nlxp-header-promo-image">
          <Image src={promo.image} alt={promo.imageAlt ?? ""} fill sizes="288px" />
        </div>
      )}
      <div className="nlxp-header-promo-content">
        <p className="nlxp-header-promo-heading">{promo.heading}</p>
        {promo.description && <p className="nlxp-header-promo-description">{promo.description}</p>}
        <Link href={promo.buttonHref} className="nlxp-header-promo-button">
          {promo.buttonLabel}
        </Link>
      </div>
    </div>
  );
}

function HeaderDropdownPanel({
  triggerEl,
  variant,
  children,
}: {
  triggerEl: HTMLElement | null;
  variant: "simple" | "nested" | "compact" | "customers" | "features" | "resources";
  children: React.ReactNode;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left?: number; right?: number } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    function updatePosition() {
      if (!triggerEl) return;
      const triggerRect = triggerEl.getBoundingClientRect();
      const panelWidth = panelRef.current?.offsetWidth ?? 0;
      const margin = 16;
      const wouldOverflow = triggerRect.left + panelWidth > window.innerWidth - margin;
      const top = triggerRect.bottom + 12;

      if (variant === "customers" || variant === "features" || variant === "resources") {
        setCoords({
          top,
          right: window.innerWidth - triggerRect.right,
          left: undefined,
        });
      } else if (wouldOverflow) {
        setCoords({ top, right: window.innerWidth - triggerRect.right, left: undefined });
      } else {
        setCoords({ top, left: triggerRect.left, right: undefined });
      }
    }

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [triggerEl, mounted]);

  if (!mounted) return null;

  return createPortal(
    <div
      ref={panelRef}
      className={`nlxp-header-panel nlxp-header-panel--${variant}`}
      style={{
        position: "fixed",
        top: coords?.top ?? 0,
        left: coords?.left,
        right: coords?.right,
        visibility: coords ? "visible" : "hidden",
      }}
    >
      {children}
    </div>,
    document.body
  );
}

export default function Header() {
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileNestedExpanded, setMobileNestedExpanded] = useState<string | null>(null);
  const [activeCustomerCategory, setActiveCustomerCategory] = useState<string | null>(null);
  const [activeFeatureCategory, setActiveFeatureCategory] = useState<string | null>(null);
  const [activeResourceCategory, setActiveResourceCategory] = useState<string | null>(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const pathname = usePathname();

  useEffect(() => {
    let frameOne = 0;
    let frameTwo = 0;

    const prepareLayout = async () => {
      try {
        if (document.fonts?.ready) {
          await document.fonts.ready;
        }
      } catch {
        // Continue if font readiness is unavailable.
      }

      frameOne = window.requestAnimationFrame(() => {
        frameTwo = window.requestAnimationFrame(() => {
          setIsLayoutReady(true);
        });
      });
    };

    prepareLayout();

    return () => {
      window.cancelAnimationFrame(frameOne);
      window.cancelAnimationFrame(frameTwo);
    };
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileExpanded(null);
    setMobileNestedExpanded(null);
  }, [pathname]);

  useEffect(() => {
    const desktopMedia = window.matchMedia("(min-width: 1101px)");

    const syncResponsiveState = (event?: MediaQueryListEvent) => {
      const isDesktop = event ? event.matches : desktopMedia.matches;

      if (isDesktop) {
        setMobileOpen(false);
        setMobileExpanded(null);
        setMobileNestedExpanded(null);
      } else {
        setOpenMenu(null);
        setActiveCustomerCategory(null);
        setActiveFeatureCategory(null);
        setActiveResourceCategory(null);
      }
    };

    syncResponsiveState();
    desktopMedia.addEventListener("change", syncResponsiveState);

    return () => desktopMedia.removeEventListener("change", syncResponsiveState);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const clickedInsideHeader = headerRef.current?.contains(target);
      const clickedInsidePanel = target.closest?.(".nlxp-header-panel");
      if (!clickedInsideHeader && !clickedInsidePanel) {
        setOpenMenu(null);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
        setIsAssistantOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function toggleMenu(label: string) {
    const willOpen = openMenu !== label;

    if (willOpen) {
      if (label === "Our Customers") setActiveCustomerCategory(null);
      if (label === "Features") setActiveFeatureCategory(null);
      if (label === "Resources") setActiveResourceCategory(null);
    }

    setOpenMenu(willOpen ? label : null);
  }

  function toggleMobileTop(label: string) {
    setMobileExpanded((current) => (current === label ? null : label));
    setMobileNestedExpanded(null);
  }

  function toggleMobileNested(parentLabel: string, categoryLabel: string) {
    const key = `${parentLabel}::${categoryLabel}`;
    setMobileNestedExpanded((current) => (current === key ? null : key));
  }

  function isPathActive(href?: string) {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function isNavItemActive(item: (typeof navItems)[number]) {
    if (item.type === "link") {
      if (item.label === "Home") {
        return pathname === "/HomePage" || pathname === "/HomePage/";
      }
      return isPathActive(item.href);
    }

    if (isPathActive(item.href)) {
      return true;
    }

    if (item.type === "simple") {
      return item.items.some((link) => isPathActive(link.href));
    }

    return item.categories.some(
      (category) =>
        isPathActive(category.href) ||
        category.items?.some((link) => isPathActive(link.href))
    );
  }

  return (
    <header
      className="nlxp-header layoutReady"
      ref={headerRef}
      style={{
        display: "block",
        visibility: "visible",
        opacity: 1,
        width: "100%",
        position: "relative",
        zIndex: 10000,
        fontFamily: '"Segoe UI"',
      }}
    >
      <div className="nlxp-header-inner">
        <div className="nlxp-header-left">
          <Link href="/" className="nlxp-header-logo-link">
            <Image
              src="/images/logo_01_synapse_spark.webp"
              alt="NeuroLXP"
              width={120}
              height={45}
              className="nlxp-header-logo"
              priority
            />
          </Link>

          <nav className="nlxp-header-nav">
            {navItems.map((item) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={item.label}
                   href={item.href}
                    className={`nlxp-header-link${isNavItemActive(item) ? " nlxp-header-link--active" : ""}`}
                  >
                    {item.label}
                    {/* {item.arrow === "up" && <ChevronUpIcon className="nlxp-header-chevron" />} */}
                    {item.arrow === "down" && <ChevronDownIcon className="nlxp-header-chevron" />}
                  </Link>
                );
              }

              const isOpen = openMenu === item.label;
              const isActive = isOpen || isNavItemActive(item);

              return (
                <div key={item.label} className="nlxp-header-dropdown">
                  <button
                    type="button"
                    ref={(el) => {
                      triggerRefs.current[item.label] = el;
                    }}
                    className={`nlxp-header-link nlxp-header-dropdown-trigger${isActive ? " nlxp-header-link--active" : ""}`}
                    onClick={() => toggleMenu(item.label)}
                    aria-expanded={isOpen}
                  >
                    {item.label}
                    {isOpen ? (
                      <ChevronUpIcon className="nlxp-header-chevron" />
                    ) : (
                      <ChevronDownIcon className="nlxp-header-chevron" />
                    )}
                  </button>

                  {isOpen && item.type === "simple" && (item.label === "NeuroLXP 2.1" || item.label === "Neuro Labs") && (
                    <HeaderDropdownPanel
                      triggerEl={triggerRefs.current[item.label]}
                      variant="compact"
                    >
                      <div className="nlxp-header-compact-dropdown">
                        {item.items.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            className="nlxp-header-compact-link"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </HeaderDropdownPanel>
                  )}

                  {isOpen && item.type === "simple" && item.label !== "NeuroLXP 2.1" && item.label !== "Neuro Labs" && (
                    <HeaderDropdownPanel
                      triggerEl={triggerRefs.current[item.label]}
                      variant="simple"
                    >
                      <div className="nlxp-header-column">
                        <div className="nlxp-header-column-links">
                          {item.items.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className="nlxp-header-panel-link"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                      {item.promo && <HeaderPromo promo={item.promo} />}
                    </HeaderDropdownPanel>
                  )}

                  {isOpen && item.type === "nested" && item.label === "Our Customers" && (
                    <HeaderDropdownPanel
                      triggerEl={triggerRefs.current[item.label]}
                      variant="customers"
                    >
                      <div className="nlxp-header-customer-menu">
                        {item.categories.map((category) => {
                          const isCategoryActive = activeCustomerCategory === category.label;

                          return (
                            <button
                              key={category.label}
                              type="button"
                              className={`nlxp-header-customer-category${
                                isCategoryActive ? " is-active" : ""
                              }`}
                              onClick={() =>
                                setActiveCustomerCategory((current) =>
                                  current === category.label ? null : category.label
                                )
                              }
                            >
                              <span>{category.label}</span>
                              <ChevronRightIcon
                                className={`nlxp-header-desktop-category-arrow${
                                  isCategoryActive ? " is-open" : ""
                                }`}
                              />
                            </button>
                          );
                        })}
                      </div>

                      {activeCustomerCategory && (
                        <div className="nlxp-header-customer-submenu">
                          {item.categories
                            .find((category) => category.label === activeCustomerCategory)
                            ?.items?.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="nlxp-header-customer-sublink"
                              >
                                {link.label}
                              </Link>
                            ))}
                        </div>
                      )}
                    </HeaderDropdownPanel>
                  )}

                  {isOpen && item.type === "nested" && item.label === "Features" && (
                    <HeaderDropdownPanel
                      triggerEl={triggerRefs.current[item.label]}
                      variant="features"
                    >
                      <div className="nlxp-header-feature-menu">
                        {item.categories.map((category) => {
                          const isCategoryActive = activeFeatureCategory === category.label;

                          return (
                            <button
                              key={category.label}
                              type="button"
                              className={`nlxp-header-feature-category${
                                isCategoryActive ? " is-active" : ""
                              }`}
                              onClick={() =>
                                setActiveFeatureCategory((current) =>
                                  current === category.label ? null : category.label
                                )
                              }
                            >
                              <span>{category.label}</span>
                              <ChevronRightIcon
                                className={`nlxp-header-desktop-category-arrow${
                                  isCategoryActive ? " is-open" : ""
                                }`}
                              />
                            </button>
                          );
                        })}
                      </div>

                      {activeFeatureCategory && (
                        <div className="nlxp-header-feature-submenu">
                          {item.categories
                            .find((category) => category.label === activeFeatureCategory)
                            ?.items?.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="nlxp-header-feature-sublink"
                              >
                                {link.label}
                              </Link>
                            ))}
                        </div>
                      )}
                    </HeaderDropdownPanel>
                  )}

                  {isOpen && item.type === "nested" && item.label === "Resources" && (
                    <HeaderDropdownPanel
                      triggerEl={triggerRefs.current[item.label]}
                      variant="resources"
                    >
                      <div className="nlxp-header-resource-menu">
                        {item.categories.map((category) => {
                          const isUseCases = category.label === "Use Cases";
                          const isActive = isUseCases && activeResourceCategory === "Use Cases";

                          if (isUseCases) {
                            return (
                              <button
                                key={category.label}
                                type="button"
                                className={`nlxp-header-resource-item${
                                  isActive ? " is-active" : ""
                                }`}
                                onClick={() =>
                                  setActiveResourceCategory((current) =>
                                    current === "Use Cases" ? null : "Use Cases"
                                  )
                                }
                              >
                                <span>{category.label}</span>
                                <ChevronRightIcon
                                  className={`nlxp-header-desktop-category-arrow${
                                    isActive ? " is-open" : ""
                                  }`}
                                />
                              </button>
                            );
                          }

                          return (
                            <Link
                              key={category.label}
                              href={category.href ?? "#"}
                              className="nlxp-header-resource-item"
                              onClick={() => setActiveResourceCategory(null)}
                            >
                              {category.label}
                            </Link>
                          );
                        })}
                      </div>

                      {activeResourceCategory === "Use Cases" && (
                        <div className="nlxp-header-resource-submenu">
                          {item.categories
                            .find((category) => category.label === "Use Cases")
                            ?.items?.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="nlxp-header-resource-sublink"
                              >
                                {link.label}
                              </Link>
                            ))}
                        </div>
                      )}
                    </HeaderDropdownPanel>
                  )}

                  {isOpen && item.type === "nested" && item.label !== "Our Customers" && item.label !== "Features" && item.label !== "Resources" && (
                    <HeaderDropdownPanel triggerEl={triggerRefs.current[item.label]} variant="nested">
                      <div className="nlxp-header-columns">
                        {getPanelColumns(item.categories).map((column, index) => (
                          <div key={column.title ?? `column-${index}`} className="nlxp-header-column">
                            {column.title && <p className="nlxp-header-column-title">{column.title}</p>}
                            <div className="nlxp-header-column-links">
                              {column.links.map((link) => (
                                <Link key={link.label} href={link.href} className="nlxp-header-panel-link">
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      {item.promo && <HeaderPromo promo={item.promo} />}
                    </HeaderDropdownPanel>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        <button
          type="button"
          className="nlxp-header-signin"
          onClick={() => setIsAssistantOpen(true)}
        >
          Sign in Help
        </button>

        <button
          type="button"
          className={`nlxp-header-burger${mobileOpen ? " nlxp-header-burger--open" : ""}`}
          onClick={() => setMobileOpen((current) => !current)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <div className="nlxp-header-mobile-panel">
          {navItems
            .filter((item) => item.label !== "Home")
            .map((item) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`nlxp-header-mobile-link${
                      isNavItemActive(item) ? " nlxp-header-mobile-link--active" : ""
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              }

              const isExpanded = mobileExpanded === item.label;
              const isActive = isExpanded || isNavItemActive(item);

              return (
                <div
                  key={item.label}
                  className={`nlxp-header-mobile-group${
                    isExpanded ? " nlxp-header-mobile-group--open" : ""
                  }`}
                >
                  <button
                    type="button"
                    className={`nlxp-header-mobile-link nlxp-header-mobile-trigger${
                      isActive ? " nlxp-header-mobile-link--active" : ""
                    }`}
                    onClick={() => toggleMobileTop(item.label)}
                    aria-expanded={isExpanded}
                  >
                    <span>{item.label}</span>
                    <ChevronRightIcon
                      className={`nlxp-header-chevron-right${
                        isExpanded ? " nlxp-header-chevron-right--open" : ""
                      }`}
                    />
                  </button>

                  {isExpanded && item.type === "simple" && (
                    <div className="nlxp-header-mobile-sublist">
                      {item.items.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className={`nlxp-header-mobile-sublink${
                            isPathActive(link.href) ? " nlxp-header-mobile-sublink--active" : ""
                          }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {isExpanded && item.type === "nested" && (
                    <div className="nlxp-header-mobile-sublist nlxp-header-mobile-sublist--nested">
                      {item.categories.map((category) => {
                        const hasChildren = Boolean(category.items?.length);
                        const categoryKey = `${item.label}::${category.label}`;
                        const isCategoryOpen = mobileNestedExpanded === categoryKey;

                        if (!hasChildren) {
                          return (
                            <Link
                              key={category.label}
                              href={category.href ?? "#"}
                              className={`nlxp-header-mobile-category nlxp-header-mobile-category-link${
                                isPathActive(category.href)
                                  ? " nlxp-header-mobile-category--active"
                                  : ""
                              }`}
                              onClick={() => setMobileOpen(false)}
                            >
                              <span>{category.label}</span>
                            </Link>
                          );
                        }

                        return (
                          <div
                            key={category.label}
                            className={`nlxp-header-mobile-column${
                              isCategoryOpen ? " nlxp-header-mobile-column--open" : ""
                            }`}
                          >
                            <button
                              type="button"
                              className={`nlxp-header-mobile-category nlxp-header-mobile-category-trigger${
                                isCategoryOpen ? " nlxp-header-mobile-category--active" : ""
                              }`}
                              onClick={() => toggleMobileNested(item.label, category.label)}
                              aria-expanded={isCategoryOpen}
                            >
                              <span>{category.label}</span>
                              <ChevronRightIcon
                                className={`nlxp-header-chevron-right nlxp-header-mobile-category-chevron${
                                  isCategoryOpen ? " nlxp-header-chevron-right--open" : ""
                                }`}
                              />
                            </button>

                            {isCategoryOpen && (
                              <div className="nlxp-header-mobile-category-children">
                                {category.items?.map((link) => (
                                  <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`nlxp-header-mobile-sublink${
                                      isPathActive(link.href)
                                        ? " nlxp-header-mobile-sublink--active"
                                        : ""
                                    }`}
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}


          <Link
            href="/book-demo"
            className="nlxp-header-mobile-book-demo"
            onClick={() => setMobileOpen(false)}
          >
            Book a Demo
          </Link>

          <div className="nlxp-header-mobile-signin-row">
            <button
              type="button"
              className="nlxp-header-mobile-signin"
              onClick={() => {
                setMobileOpen(false);
                setIsAssistantOpen(true);
              }}
            >
              Sign in help
            </button>
          </div>
        </div>
      )}

      {isAssistantOpen &&
        createPortal(
          <div
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsAssistantOpen(false);
              }
            }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
              background: "rgba(0, 0, 0, 0.35)",
              overflowY: "auto",
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="NeuroLXP Assistant"
              style={{
                position: "relative",
                width: "min(100%, 520px)",
                maxHeight: "calc(100vh - 32px)",
              }}
            >
              <button
                type="button"
                onClick={() => setIsAssistantOpen(false)}
                aria-label="Close assistant"
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  zIndex: 10,
                  width: "36px",
                  height: "36px",
                  border: 0,
                  borderRadius: "50%",
                  background: "#dfe6e9",
                  boxShadow: "-4px -4px 8px #fff, 4px 4px 8px #c6c6c9",
                  color: "#31344b",
                  fontSize: "22px",
                  lineHeight: 1,
                  cursor: "pointer",
                }}
              >
                ×
              </button>

              <Assistant />
            </div>
          </div>,
          document.body
        )}

    </header>
  );
}


// "use client";

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { navItems, type NestedCategory, type PromoCard, type SimpleLink } from "@/data/navigation";
// import { ChevronDownIcon, ChevronUpIcon, ChevronRightIcon } from "@/components/icons/Icons";

// type PanelColumn = {
//   title?: string;
//   links: SimpleLink[];
// };

// function getPanelColumns(categories: NestedCategory[]): PanelColumn[] {
//   const columns: PanelColumn[] = [];
//   let flatLinks: SimpleLink[] = [];

//   function flushFlatLinks() {
//     if (flatLinks.length > 0) {
//       columns.push({ links: flatLinks });
//       flatLinks = [];
//     }
//   }

//   categories.forEach((category) => {
//     if (category.items && category.items.length > 0) {
//       flushFlatLinks();
//       columns.push({ title: category.label, links: category.items });
//     } else {
//       flatLinks.push({ label: category.label, href: category.href ?? "#" });
//     }
//   });

//   flushFlatLinks();
//   return columns;
// }

// function HeaderPromo({ promo }: { promo: PromoCard }) {
//   return (
//     <div className={`nlxp-header-promo nlxp-header-promo--${promo.variant}`}>
//       {promo.variant === "photo" && promo.image && (
//         <div className="nlxp-header-promo-image">
//           <Image src={promo.image} alt={promo.imageAlt ?? ""} fill sizes="288px" />
//         </div>
//       )}
//       <div className="nlxp-header-promo-content">
//         <p className="nlxp-header-promo-heading">{promo.heading}</p>
//         {promo.description && <p className="nlxp-header-promo-description">{promo.description}</p>}
//         <Link href={promo.buttonHref} className="nlxp-header-promo-button">
//           {promo.buttonLabel}
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default function Header() {
//   const [openMenu, setOpenMenu] = useState<string | null>(null);
//   const [alignRight, setAlignRight] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
//   const headerRef = useRef<HTMLElement>(null);
//   const panelRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     if (!openMenu) return;

//     function checkOverflow() {
//       const panel = panelRef.current;
//       const parent = panel?.offsetParent as HTMLElement | null;
//       if (!panel || !parent) return;
//       const parentLeft = parent.getBoundingClientRect().left;
//       const wouldOverflow = parentLeft + panel.offsetWidth > window.innerWidth - 16;
//       setAlignRight(wouldOverflow);
//     }

//     checkOverflow();
//     window.addEventListener("resize", checkOverflow);
//     return () => window.removeEventListener("resize", checkOverflow);
//   }, [openMenu]);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
//         setOpenMenu(null);
//       }
//     }
//     function handleEscape(event: KeyboardEvent) {
//       if (event.key === "Escape") {
//         setOpenMenu(null);
//         setMobileOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("keydown", handleEscape);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, []);

//   function toggleMenu(label: string) {
//     setOpenMenu((current) => (current === label ? null : label));
//   }

//   function toggleMobileTop(label: string) {
//     setMobileExpanded((current) => (current === label ? null : label));
//   }

//   return (
//     <header className="nlxp-header" ref={headerRef}>
//       <div className="nlxp-header-inner">
//         <div className="nlxp-header-left">
//           <Link href="/" className="nlxp-header-logo-link">
//             <Image
//               src="/images/logo_01_synapse_spark.png"
//               alt="NeuroLXP"
//               width={120}
//               height={45}
//               className="nlxp-header-logo"
//               priority
//             />
//           </Link>

//           <nav className="nlxp-header-nav">
//             {navItems.map((item) => {
//               if (item.type === "link") {
//                 return (
//                   <Link
//                     key={item.label}
//                     href={item.href}
//                     className={`nlxp-header-link${item.active ? " nlxp-header-link--active" : ""}`}
//                   >
//                     {item.label}
//                     {/* {item.arrow === "up" && <ChevronUpIcon className="nlxp-header-chevron" />} */}
//                     {item.arrow === "down" && <ChevronDownIcon className="nlxp-header-chevron" />}
//                   </Link>
//                 );
//               }

//               const isOpen = openMenu === item.label;

//               return (
//                 <div key={item.label} className="nlxp-header-dropdown">
//                   <button
//                     type="button"
//                     className={`nlxp-header-link nlxp-header-dropdown-trigger${isOpen ? " nlxp-header-link--active" : ""}`}
//                     onClick={() => toggleMenu(item.label)}
//                     aria-expanded={isOpen}
//                   >
//                     {item.label}
//                     {isOpen ? (
//                       <ChevronUpIcon className="nlxp-header-chevron" />
//                     ) : (
//                       <ChevronDownIcon className="nlxp-header-chevron" />
//                     )}
//                   </button>

//                   {isOpen && item.type === "simple" && (
//                     <div
//                       ref={panelRef}
//                       className={`nlxp-header-panel nlxp-header-panel--simple${alignRight ? " nlxp-header-panel--align-right" : ""}`}
//                     >
//                       <div className="nlxp-header-column">
//                         <div className="nlxp-header-column-links">
//                           {item.items.map((link) => (
//                             <Link key={link.label} href={link.href} className="nlxp-header-panel-link">
//                               {link.label}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                       {item.promo && <HeaderPromo promo={item.promo} />}
//                     </div>
//                   )}

//                   {isOpen && item.type === "nested" && (
//                     <div
//                       ref={panelRef}
//                       className={`nlxp-header-panel nlxp-header-panel--nested${alignRight ? " nlxp-header-panel--align-right" : ""}`}
//                     >
//                       <div className="nlxp-header-columns">
//                         {getPanelColumns(item.categories).map((column, index) => (
//                           <div key={column.title ?? `column-${index}`} className="nlxp-header-column">
//                             {column.title && <p className="nlxp-header-column-title">{column.title}</p>}
//                             <div className="nlxp-header-column-links">
//                               {column.links.map((link) => (
//                                 <Link key={link.label} href={link.href} className="nlxp-header-panel-link">
//                                   {link.label}
//                                 </Link>
//                               ))}
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                       {item.promo && <HeaderPromo promo={item.promo} />}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </nav>
//         </div>

//         <Link href="/signin" className="nlxp-header-signin">
//           Sign in Help
//         </Link>

//         <button
//           type="button"
//           className={`nlxp-header-burger${mobileOpen ? " nlxp-header-burger--open" : ""}`}
//           onClick={() => setMobileOpen((current) => !current)}
//           aria-label="Toggle menu"
//           aria-expanded={mobileOpen}
//         >
//           <span />
//           <span />
//           <span />
//         </button>
//       </div>

//       {mobileOpen && (
//         <div className="nlxp-header-mobile-panel">
//           {navItems.map((item) => {
//             if (item.type === "link") {
//               return (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className="nlxp-header-mobile-link"
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   {item.label}
//                   <ChevronRightIcon className="nlxp-header-chevron-right" />
//                 </Link>
//               );
//             }

//             const isExpanded = mobileExpanded === item.label;

//             return (
//               <div key={item.label} className="nlxp-header-mobile-group">
//                 <button
//                   type="button"
//                   className="nlxp-header-mobile-link nlxp-header-mobile-trigger"
//                   onClick={() => toggleMobileTop(item.label)}
//                   aria-expanded={isExpanded}
//                 >
//                   {item.label}
//                   <ChevronRightIcon
//                     className={`nlxp-header-chevron-right${isExpanded ? " nlxp-header-chevron-right--open" : ""}`}
//                   />
//                 </button>

//                 {isExpanded && item.type === "simple" && (
//                   <div className="nlxp-header-mobile-sublist">
//                     {item.items.map((link) => (
//                       <Link
//                         key={link.label}
//                         href={link.href}
//                         className="nlxp-header-mobile-sublink"
//                         onClick={() => setMobileOpen(false)}
//                       >
//                         {link.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}

//                 {isExpanded && item.type === "nested" && (
//                   <div className="nlxp-header-mobile-sublist">
//                     {getPanelColumns(item.categories).map((column, index) => (
//                       <div key={column.title ?? `column-${index}`} className="nlxp-header-mobile-column">
//                         {column.title && <p className="nlxp-header-mobile-column-title">{column.title}</p>}
//                         {column.links.map((link) => (
//                           <Link
//                             key={link.label}
//                             href={link.href}
//                             className="nlxp-header-mobile-sublink"
//                             onClick={() => setMobileOpen(false)}
//                           >
//                             {link.label}
//                           </Link>
//                         ))}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//           <div className="nlxp-header-mobile-signin-row">
//             <Link href="/signin" className="nlxp-header-mobile-signin" onClick={() => setMobileOpen(false)}>
//               Sign in help
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }