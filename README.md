# UX Praxis · Storybook

Tokens, components and icons of the UX Praxis design system.

## Run

1. Node.js 18 or newer (`node -v`).
2. `npm install`
3. `npm run storybook` → http://localhost:6006
4. Switch the theme in the top toolbar (Dark / Light tint).

Publish: `npm run build-storybook`, then upload the `storybook-static` folder to Netlify, Vercel or GitHub Pages.

## Structure

- `src/tokens/tokens.json` is the token source; `tokens.css` is generated from it (variables such as `--ink`, `--accent`, and classes `.t-title`, `.t-label`).
- `src/components/` has `Button` (primary, secondary, danger, ghost, back, sm, icon, close, link), `TopicCard`, `ProgressSteps`, `AnswerOption`, `FeedbackPanel`, `Menu` (pill switches), `Logo`, `Mascot`, `ProgressCard`, `MetricList`, `ShareCard`, `TopicLevels`, `Tabs`, `Tag`, `Field`, `Dialog`, `ScreenHeader`, `ResultSummary`, `MetricCard`, `Callout`, `Onboarding` and `Icon` with stories (`*.stories.jsx`).
- `public/icons/` holds the UI glyphs (`menu`, `close`, `clock`, `lock`, `book`, `sun`, `moon`, `check`) and the five `status-*` icons. Glyphs use `currentColor` and are rendered inline by `Icon`.
- `public/illustrations/` holds the seven character poses (`mascot-*`) the level and test illustrations (`level-*`, `test`) and the five topic illustrations (`topic-*`, show them on the `--tile` tile). See `Foundations/Illustrations`.
- Fonts (Unbounded, Onest, JetBrains Mono) load from Google Fonts in `.storybook/preview-head.html`.
