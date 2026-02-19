import { useState } from 'react'

export function ThemePicker() {
  const updateTheme = (args: {
    primary: string
    accent: string
    background: string
  }) => {
    // TODO
  }

  return (
    <div className="grid grid-cols-2">
      <div className="h-2 w-2 bg-primary shadow-[2px_2px] shadow-primary/50" />
      <div className="h-2 w-2 bg-accent shadow-[2px_2px] shadow-accent/50" />
      <div className="h-2 w-2 bg-white shadow-[2px_2px] shadow-white/50" />
      <div className="h-2 w-2 bg-green-600 shadow-[2px_2px] shadow-green-600/50" />
    </div>
  )
}
