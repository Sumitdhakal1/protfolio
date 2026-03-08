import { useEffect, useState } from "react";

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const h = () => {
      const el = document.documentElement;
      setProgress(el.scrollTop / (el.scrollHeight - el.clientHeight));
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return progress;
}
