"use client";

import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function DarkMode() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setTheme, resolvedTheme]);

  if (!mounted) {
    return null;
  }

  const isLight = resolvedTheme === "light";

  return (
    <Toggle
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className="relative size-8 overflow-hidden border-none bg-transparent! cursor-pointer text-foreground data-pressed:bg-transparent data-pressed:hover:bg-muted"
      onPressedChange={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      pressed={isLight}
      variant={"default"}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {isLight ? (
          <motion.div
            key="sun"
            initial={{ y: 8, opacity: 0, rotate: -30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -8, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <IconSun aria-hidden="true" size={16} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: 8, opacity: 0, rotate: 30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -8, opacity: 0, rotate: -30 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <IconMoon aria-hidden="true" size={16} />
          </motion.div>
        )}
      </AnimatePresence>
    </Toggle>
  );
}
