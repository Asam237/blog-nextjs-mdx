import { gsap } from "gsap"
import { useMemo } from "react"

/**
 * @see https://greensock.com/docs/v3/GSAP/gsap.context()
 */
export const useGsapContext = (scope?: any): gsap.Context => {
  const context = useMemo(() => gsap.context(() => {}, scope), [scope])
  return context
}
