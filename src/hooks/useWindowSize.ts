import { debounce } from "@/lib/garden";
import { useEffect, useState } from "react";

export const useWindowSize = (): { width: number; height: number } => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const onWindowResize = debounce(
      () =>
        setSize(() => ({
          width: window.innerWidth,
          height: window.innerHeight,
        })),
      150
    );

    onWindowResize();
    window.addEventListener("resize", onWindowResize, false);
    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  return size;
};
