import React from 'react';

export default { title: 'Introduction/Overview', parameters: { layout: 'fullscreen', wide: true } };

const h2 = { font: '700 20px var(--font-sans)', margin: '32px 0 8px' };
const p = { font: '400 16px/1.55 var(--font-sans)', color: 'var(--ink-muted)', margin: '0 0 8px', maxWidth: 680 };
const li = { ...p, margin: '0 0 6px' };
const Code = ({ children }) => <code style={{ font: '500 13px var(--font-mono)', background: 'var(--code-bg)', padding: '1px 6px', borderRadius: 3, color: 'var(--ink)' }}>{children}</code>;

export const Overview = {
  render: () => (
    <div style={{ maxWidth: 760 }}>
      <h1 style={{ font: '700 32px/1.15 var(--font-display)', letterSpacing: '-0.02em', margin: 0 }}>UX Praxis design system</h1>
      <p style={{ ...p, marginTop: 12 }}>
        UX Praxis is a trainer for designers: short rounds of ten questions, tests and progress per topic. This system holds the tokens, components and icons used on all screens. It ships in two themes: <b style={{ color: 'var(--ink)' }}>Dark</b> (default) and <b style={{ color: 'var(--ink)' }}>Light tint</b>. Switch the theme in the toolbar above.
      </p>

      <h2 style={h2}>Themes</h2>
      <p style={p}>Every colour token has a value per theme. Components only use tokens, so they follow the theme automatically. See <i>Foundations / Colors</i> for both themes side by side.</p>
      <ul style={{ paddingLeft: 20 }}>
        <li style={li}><b style={{ color: 'var(--ink)' }}>Dark</b>: base <Code>--bg</Code> with three soft glows, white text, flat coloured icons. Taken from the mockups.</li>
        <li style={li}><b style={{ color: 'var(--ink)' }}>Light tint</b>: pale cool grey with pastel glows and dark text. Accent, good, bad and ink-dim values are derived from the dark theme and checked for contrast, they are not in the mockups yet.</li>
      </ul>

      <h2 style={h2}>Voice and copy</h2>
      <ul style={{ paddingLeft: 20 }}>
        <li style={li}>Address the user directly, in the imperative: “Calculate and read product and UX metrics”, “Choose one answer”</li>
        <li style={li}>Card descriptions and the home subtitle have no final full stop. Questions end with a question mark. Feedback explanations are full sentences.</li>
        <li style={li}>Topic and level labels are uppercase mono: <Code>METRICS</Code>, <Code>BEGINNER · CALCULATE</Code></li>
        <li style={li}>No emoji. State is always shown with a word and a mark: “✓ Correct answer”, “✕ Your choice”.</li>
        <li style={li}>The brand “UX Praxis” appears on home and onboarding only, not inside a round</li>
      </ul>

      <h2 style={h2}>Colour</h2>
      <ul style={{ paddingLeft: 20 }}>
        <li style={li}>One accent: <Code>--accent</Code>, text on it <Code>--on-accent</Code>. Use it for the primary button, the current step and active switches.</li>
        <li style={li}><Code>--good</Code> and <Code>--bad</Code> mark answers, never alone: always with a word or a mark</li>
        <li style={li}>Cards use <Code>--surface</Code> with <Code>--border</Code>; controls use <Code>--border-strong</Code></li>
      </ul>

      <h2 style={h2}>Typography</h2>
      <p style={p}>Unbounded for the wordmark and the home title, Onest for interface text, JetBrains Mono for counters, labels, progress and formulas. See <i>Foundations / Typography</i>.</p>

      <h2 style={h2}>Spacing, radius, size</h2>
      <p style={p}>Screens are 390 px wide with a 16 px side padding. Tappable controls are at least 44 px high. Cards use a 10 px radius, answer options 6 px, buttons 4 px.</p>

      <h2 style={h2}>Iconography</h2>
      <p style={p}>Five flat coloured topic illustrations (<Code>topic-*</Code> in <Code>public/illustrations</Code>) with a 2 px dark outline; UI glyphs and status icons are in <i>Foundations / Icons</i>. Illustrations are always shown on a tile (<Code>--tile</Code>): 56 px on home, 40 px in the lesson card. Draw new icons in the same palette and outline.</p>
      <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
        {['metrics', 'nielsen-heuristics', 'wcag', 'laws-of-ux', 'research-methods'].map((n) => (
          <div key={n} style={{ width: 56, height: 56, display: 'grid', placeItems: 'center', background: 'var(--tile)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)' }}>
            <img src={`/illustrations/topic-${n}.svg`} alt={n} width="40" height="40" />
          </div>
        ))}
      </div>

      <h2 style={h2}>Components</h2>
      <p style={p}>Button (all variants incl. danger), TopicCard, ProgressSteps, AnswerOption, FeedbackPanel, Menu, Logo, ProgressCard, MetricList, ShareCard, TopicLevels, Tabs, Tag, Field, Dialog, ScreenHeader, ResultSummary, MetricCard, Callout and Onboarding. Each has stories for its states.</p>
    </div>
  ),
};
