import { gsap } from "gsap"
import { useMemo } from "react"

/**
 * @see https://greensock.com/docs/v3/GSAP/gsap.matchMedia()
 */
export const useGsapMatchMedia = (scope?: any): gsap.MatchMedia => {
  const matchMedia = useMemo(() => gsap.matchMedia(scope), [scope])
  return matchMedia
}
