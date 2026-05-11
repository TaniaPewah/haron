import type { ContactLink } from '../types';

/**
 * Parses contactRaw string into structured clickable links.
 * Handles emails (mailto:), phone numbers (tel:), URLs, and mixed values.
 * Explicit, robust parsing for clean code and accessibility.
 */
export function parseContactRaw(contactRaw: string): ContactLink[] {
  if (!contactRaw) return [];

  const parts = contactRaw
    .split(/[,;]/)
    .map((p) => p.trim())
    .filter(Boolean);

  return parts.map((part) => {
    const trimmed = part.trim();
    if (trimmed.includes('@') && !trimmed.startsWith('http')) {
      return {
        type: 'email' as const,
        href: `mailto:${trimmed}`,
        label: trimmed,
        icon: '✉️',
      };
    }
    // URL detection: starts with http(s):// or www.
    if (/^https?:\/\//i.test(trimmed) || /^www\./i.test(trimmed)) {
      const href = trimmed.startsWith('http') ? trimmed : `https://${trimmed}`;
      const displayLabel = trimmed.replace(/^https?:\/\/(www\.)?/i, '').replace(/\/$/, '');
      return {
        type: 'url' as const,
        href,
        label: displayLabel,
        icon: '🌐',
      };
    }
    // Simple phone detection: contains digits or common phone chars
    if (/[\d+\-() ]{5,}/.test(trimmed)) {
      const cleanPhone = trimmed.replace(/[^\d+]/g, '');
      return {
        type: 'phone' as const,
        href: `tel:${cleanPhone}`,
        label: trimmed,
        icon: '📞',
      };
    }
    return {
      type: 'other' as const,
      href: '#',
      label: trimmed,
      icon: 'ℹ️',
    };
  });
}
