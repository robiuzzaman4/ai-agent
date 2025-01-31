"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

    // mounted state
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
      return () => setMounted(false);
    }, []);

    if (!mounted) return null; // render only when the component is mounted

  return (
    <>
      {theme === "light" ? (
        <Button onClick={() => setTheme("dark")} size="sm" variant="outline" className="p-0 w-8">
          <Moon className="size-4" />
        </Button>
      ) : (
        <Button onClick={() => setTheme("light")} size="sm" variant="outline" className="p-0 w-8">
          <Sun className="size-4" />
        </Button>
      )}
    </>
  );
};

export default ThemeToggle;
