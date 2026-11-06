import React from 'react';

const GLYPHS = {
  "menu": "<path d=\"M4 7h16M4 12h16M4 17h16\"/>",
  "close": "<path d=\"M6 6l12 12M18 6L6 18\"/>",
  "clock": "<circle cx=\"8\" cy=\"9\" r=\"5.5\"/><path d=\"M8 6.2V9l1.8 1.2M6.2 1.8h3.6\"/>",
  "lock": "<rect x=\"5\" y=\"11\" width=\"14\" height=\"9\" rx=\"2.5\"/><path d=\"M8.5 11V8a3.5 3.5 0 0 1 7 0v3\"/>",
  "book": "<path d=\"M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5z\"/><path d=\"M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5z\"/>",
  "sun": "<circle cx=\"12\" cy=\"12\" r=\"4.5\" stroke=\"none\"/><path d=\"M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6\" stroke-width=\"2\" fill=\"none\"/>",
  "moon": "<path d=\"M20 14.6A8.2 8.2 0 0 1 9.4 4a8.4 8.4 0 1 0 10.6 10.6z\" fill=\"currentColor\"/>",
  "check": "<path d=\"M5 12.5l4.2 4.2L19 7\"/>"
};

/** UI glyph, 24x24 stroke icon in currentColor. Names: menu, close, clock, lock, book, sun, moon, check. */
export function Icon({ name, size = 20, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{ __html: GLYPHS[name] }} {...rest} />
  );
}

/** 28px status circle used in result rows. `kind`: correct | time | mastered | best | wrong. */
export function StatusIcon({ kind, size = 28 }) {
  return <img src={`/icons/status-${kind}.svg`} width={size} height={size} alt="" />;
}

export const GLYPH_NAMES = Object.keys(GLYPHS);
