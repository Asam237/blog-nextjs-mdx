import butter from "@/lib/butter";
import { ButterEntryCallback } from "@/lib/butter/types";
import { useEffect } from "react";

/**
 * Creates a requestAnimationFrame loop
 * and manages the lifecycle of the callback.
 */
export const useFrame = (
  callback: ButterEntryCallback,
  priority = 0,
  loop = true
) => {
  useEffect(() => {
    if (callback && butter !== false) {
      const cleanup = butter.add(callback, priority, loop);
      return () => cleanup();
    }
  }, [callback, priority, loop]);
};

/**
 * Call a rAF only once.
 */
export const useFrameOnce = (callback: ButterEntryCallback, priority = 0) => {
  useFrame(callback, priority, false);
};
