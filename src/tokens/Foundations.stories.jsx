import React from 'react';
import tokens from './tokens.json';

export default { title: 'Foundations/Tokens', parameters: { wide: true } };

const mono = { font: '500 12px var(--font-mono)' };
const swatch = (v) => ({ width: 36, height: 36, borderRadius: 6, border: '1px solid var(--border-strong)', background: v, flex: 'none' });

const val = (x, id) => (typeof x.value === 'string' ? x.value : x.value[id] ?? x.value[tokens.color.themes[0].id]);

function Row({ t }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '150px 1.2fr 1.2fr 1.6fr', gap: 12, alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
      <span style={{ ...mono, color: 'var(--ink)' }}>{t.name}</span>
      {tokens.color.themes.map((th) => (
        <span key={th.id} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {/* each swatch sits on its own theme's ground */}
          <span style={{ padding: 4, borderRadius: 8, background: th.id === 'dark' ? '#12141b' : '#edf0f7' }}>
            <span style={{ ...swatch(val(t, th.id)), display: 'block' }} />
          </span>
          <span style={{ ...mono, color: 'var(--ink-muted)', overflowWrap: 'anywhere' }}>{val(t, th.id)}</span>
        </span>
      ))}
      <span style={{ font: '400 13px/1.4 var(--font-sans)', color: 'var(--ink-muted)' }}>{t.usage}</span>
    </div>
  );
}

export const Colors = {
  name: 'Colors (Dark and Light tint)',
  render: () => (
    <div style={{ maxWidth: 1000 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr 1fr 1.4fr', gap: 12, padding: '0 0 8px', borderBottom: '1px solid var(--border-strong)', ...mono, color: 'var(--ink)' }}>
        <span>Token</span>
        {tokens.color.themes.map((th) => <span key={th.id}>{th.name}</span>)}
        <span>Usage</span>
      </div>
      {tokens.color.tokens.map((t) => <Row key={t.name} t={t} />)}
    </div>
  ),
};

const FAMILIES = [
  { key: 'display', name: 'Unbounded', role: 'Display', use: 'Brand name and screen titles', weights: '500, 700', sample: 'Aa' },
  { key: 'sans', name: 'Onest', role: 'Text', use: 'Questions, answers, buttons, cards', weights: '400, 500, 600, 700', sample: 'Aa' },
  { key: 'mono', name: 'JetBrains Mono', role: 'Mono', use: 'Counters, labels, tags, code', weights: '500, 700', sample: 'Aa' },
];
const cap = { font: '500 11px var(--font-mono)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-muted)' };

export const Typography = {
  render: () => (
    <div style={{ display: 'grid', gap: 40, maxWidth: 960 }}>
      <section>
        <h3 style={{ font: '700 20px var(--font-sans)', margin: '0 0 4px' }}>Font families</h3>
        <p style={{ margin: '0 0 16px', color: 'var(--ink-muted)', font: '400 14px/1.5 var(--font-sans)' }}>
          Three families, one role each: do not mix them inside one text block.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
          {FAMILIES.map((f) => (
            <div key={f.key} style={{ padding: 16, border: '1px solid var(--border-strong)', borderRadius: 12, background: 'var(--surface)' }}>
              <div style={{ fontFamily: tokens.type.families[f.key], fontSize: 48, lineHeight: 1, fontWeight: 700, marginBottom: 14 }}>{f.sample}</div>
              <div style={{ fontFamily: tokens.type.families[f.key], fontSize: 18, fontWeight: 700 }}>{f.name}</div>
              <div style={{ ...cap, margin: '6px 0 10px' }}>{f.role} · weights {f.weights}</div>
              <div style={{ font: '400 14px/1.45 var(--font-sans)', color: 'var(--ink-muted)' }}>{f.use}</div>
            </div>
          ))}
        </div>
      </section>

      {tokens.type.groups.map((g) => (
        <section key={g.name}>
          <h3 style={{ font: '700 20px var(--font-sans)', margin: '0 0 12px' }}>
            {g.name} <span style={{ ...cap, marginLeft: 8 }}>{String(tokens.type.families[g.family]).split(',')[0].replace(/"/g, '')}</span>
          </h3>
          <div style={{ border: '1px solid var(--border-strong)', borderRadius: 12, overflow: 'hidden' }}>
            {g.styles.map((st, i) => (
              <div key={st.name} style={{ display: 'grid', gridTemplateColumns: '150px minmax(0, 1fr) 190px', gap: 16, alignItems: 'center', padding: '16px 18px', borderTop: i ? '1px solid var(--border-strong)' : 0 }}>
                <span style={{ font: '500 12px var(--font-mono)', color: 'var(--accent)' }}>.t-{st.name}</span>
                <span className={`t-${st.name}`} style={{ overflowWrap: 'anywhere' }}>{st.sample || st.name}</span>
                <span style={{ font: '500 11px/1.6 var(--font-mono)', color: 'var(--ink-muted)' }}>
                  {st.fontSize} / {st.lineHeight}<br />weight {st.fontWeight}{st.letterSpacing ? <><br />tracking {st.letterSpacing}</> : null}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};

export const SpacingRadiusSize = {
  name: 'Spacing, radius, size, shadow',
  render: () => (
    <div style={{ display: 'grid', gap: 24, maxWidth: 800 }}>
      {['spacing', 'radius', 'size', 'shadow'].map((fam) => (
        <div key={fam}>
          <h3 style={{ font: '700 16px var(--font-sans)', margin: '0 0 8px', textTransform: 'capitalize' }}>{fam}</h3>
          {tokens[fam].tokens.map((t) => (
            <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '140px 100px 60px 1fr', gap: 12, alignItems: 'center', margin: '4px 0' }}>
              <span style={mono}>{t.name}</span>
              <span style={{ ...mono, color: 'var(--ink-muted)' }}>{typeof t.value === 'string' ? t.value : 'per theme'}</span>
              <span style={{ height: fam === 'spacing' ? 12 : 24, width: fam === 'spacing' ? t.value : 40, background: 'var(--accent)', borderRadius: fam === 'radius' ? t.value : 2, maxWidth: 60 }} />
              <span style={{ font: '400 13px var(--font-sans)', color: 'var(--ink-muted)' }}>{t.usage}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};
