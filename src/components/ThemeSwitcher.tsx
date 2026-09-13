import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sun, Moon, Sparkles, Compass } from 'lucide-react';
import { useTheme, THEME_OPTIONS, ThemeType } from '../context/ThemeContext';

interface ThemeSwitcherProps {
  variant?: 'navbar' | 'floating';
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ variant = 'navbar' }) => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = THEME_OPTIONS.find(opt => opt.id === theme) || THEME_OPTIONS[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getThemeIcon = (id: ThemeType) => {
    switch (id) {
      case 'light':
        return <Sun className="w-3.5 h-3.5 text-amber-500" />;
      case 'midnight':
        return <Moon className="w-3.5 h-3.5 text-sky-400" />;
      case 'emerald':
        return <Sparkles className="w-3.5 h-3.5 text-emerald-400" />;
      case 'obsidian':
      default:
        return <Compass className="w-3.5 h-3.5 text-blue-400" />;
    }
  };

  if (variant === 'floating') {
    return (
      <div 
        ref={dropdownRef}
        className="fixed bottom-5 right-5 z-40"
      >
        {isOpen && (
          <div className="absolute bottom-14 right-0 w-72 p-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] shadow-2xl backdrop-blur-xl animate-fade-in space-y-1.5 mb-2">
            <div className="px-2 py-1.5 border-b border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                Select Theme
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--text-muted)]">
                4 Modes
              </span>
            </div>

            {THEME_OPTIONS.map((opt) => {
              const active = opt.id === theme;
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    setTheme(opt.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                    active 
                      ? 'bg-[var(--badge-bg)] border border-[var(--border-accent)]' 
                      : 'hover:bg-[var(--bg-card-hover)] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="w-6 h-6 rounded-lg flex items-center justify-center border border-[var(--border-subtle)] shadow-inner"
                      style={{ backgroundColor: opt.iconBg }}
                    >
                      <div 
                        className="w-2.5 h-2.5 rounded-full" 
                        style={{ backgroundColor: opt.accentColor }} 
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[var(--text-primary)] leading-none">
                        {opt.name}
                      </div>
                      <div className="text-[10px] text-[var(--text-muted)] mt-0.5">
                        {opt.badge}
                      </div>
                    </div>
                  </div>
                  {active && <Check className="w-3.5 h-3.5 text-[var(--accent-primary)]" />}
                </button>
              );
            })}
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-3.5 py-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-medium)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] shadow-xl flex items-center gap-2 text-xs font-semibold backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
          title="Customize Theme & Colors"
        >
          <Palette className="w-4 h-4 text-[var(--accent-primary)]" />
          <span className="hidden sm:inline">Theme:</span>
          <span className="text-[var(--accent-primary)] font-bold">{currentOption.badge}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-medium)] transition-all cursor-pointer"
        title="Change Visual Theme"
      >
        <span 
          className="w-2.5 h-2.5 rounded-full" 
          style={{ backgroundColor: currentOption.accentColor }} 
        />
        <span>{currentOption.badge}</span>
        {getThemeIcon(theme)}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 p-2.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] shadow-2xl backdrop-blur-xl z-50 animate-fade-in space-y-1">
          <div className="px-2 py-1 border-b border-[var(--border-subtle)] flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              Theme Styles
            </span>
            <span className="text-[10px] text-[var(--text-muted)] font-mono">Live Preview</span>
          </div>

          {THEME_OPTIONS.map((opt) => {
            const active = opt.id === theme;
            return (
              <button
                key={opt.id}
                onClick={() => {
                  setTheme(opt.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left p-2 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                  active 
                    ? 'bg-[var(--badge-bg)] border border-[var(--border-accent)]' 
                    : 'hover:bg-[var(--bg-card-hover)] border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div 
                    className="w-6 h-6 rounded-lg flex items-center justify-center border border-[var(--border-subtle)]"
                    style={{ backgroundColor: opt.iconBg }}
                  >
                    <div 
                      className="w-2.5 h-2.5 rounded-full" 
                      style={{ backgroundColor: opt.accentColor }} 
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--text-primary)] leading-none">
                      {opt.name}
                    </div>
                    <div className="text-[10px] text-[var(--text-muted)] mt-0.5">
                      {opt.badge}
                    </div>
                  </div>
                </div>
                {active && <Check className="w-3.5 h-3.5 text-[var(--accent-primary)]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
