import { useState, useEffect } from "react";

/**
 * Minimal hash-based router.
 * Returns the current hash path (e.g. "/programs").
 * Scrolls to top on every navigation.
 */
export function useRoute() {
  const [path, setPath] = useState(window.location.hash.slice(1) || "/");

  useEffect(() => {
    const handler = () => {
      setPath(window.location.hash.slice(1) || "/");
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return path;
}

/**
 * Simple <Link> that maps to hash navigation.
 */
export function Link({ to, children, style, onClick, ...rest }) {
  return (
    <a
      href={`#${to}`}
      style={{ textDecoration: "none", ...style }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </a>
  );
}
