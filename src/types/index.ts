/**
 * @file index.ts
 * @description Centralização das interfaces e contratos do TypeScript (Model).
 * Garante o "Type Safety" da aplicação, prevenindo que objetos mal formatados quebrem a interface.
 */
import type { ReactNode } from 'react'

export interface TeamMemberProps {
  image: string
  name: string
  role: string
}

export interface VectorData {
  icon: ReactNode
  title: string
  description: string
  tags: string[]
}

export interface ProjectData {
  title: string
  description: string
  tags: string[]
  link: string
}
