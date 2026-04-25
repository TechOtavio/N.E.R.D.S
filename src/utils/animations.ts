/**
 * @file animations.ts
 * @description Controladores de Animação e Física (Controller).
 * Isola a complexidade da biblioteca Framer Motion, fornecendo os vetores "variants" 
 * prontos para serem injetados nas Views.
 */
import type { Variants } from 'framer-motion'

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}
