import { useState, useEffect, type ReactNode } from 'react'
import { resumeConfig } from '@/data/resume-config'
import { presets } from '@/data/presets'
import type { ThemeColors, PresetName } from '@/data/types'
import { ThemeContext } from './ThemeContext'

function getTimeBasedTheme(): 'light' | 'dark' {
  const hour = new Date().getHours()
  return hour >= 20 || hour < 7 ? 'dark' : 'light'
}

function getInitialDark(): boolean {
  const stored = localStorage.getItem('resume-theme')
  if (stored === 'dark') return true
  if (stored === 'light') return false

  const mode = resumeConfig.theme?.defaultMode
  if (mode === 'dark') return true
  if (mode === 'light') return false
  if (mode === 'system') return window.matchMedia('(prefers-color-scheme: dark)').matches

  // Default: time-based
  return getTimeBasedTheme() === 'dark'
}

function resolveColors(presetName: PresetName): ThemeColors {
  const base = presets[presetName]
  const overrides = resumeConfig.theme?.colors
  return { ...base, ...overrides }
}

const defaultPreset: PresetName = resumeConfig.theme?.preset ?? 'minimal'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(getInitialDark)
  const [preset, setPreset] = useState<PresetName>(defaultPreset)
  const colors = resolveColors(preset)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', isDark)
  }, [isDark])

  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev
      localStorage.setItem('resume-theme', next ? 'dark' : 'light')
      return next
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggle, colors, preset, setPreset }}>
      {children}
    </ThemeContext.Provider>
  )
}
