import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="icon-btn"
      title={theme === 'light' ? 'สลับเป็นธีมมืด (Dark Mode)' : 'สลับเป็นธีมสว่าง (Light Mode)'}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={18} className="text-slate-700" />
      ) : (
        <Sun size={18} className="text-yellow-400" />
      )}
    </button>
  );
}
