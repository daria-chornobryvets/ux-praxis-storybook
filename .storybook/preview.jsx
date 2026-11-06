import React from 'react';
import '../src/tokens/tokens.css';
import '../src/components/components.css';

export const globalTypes = {
  theme: {
    description: 'Theme',
    toolbar: {
      title: 'Theme',
      icon: 'circlehollow',
      items: [
        { value: 'dark', title: 'Dark' },
        { value: 'light', title: 'Light tint' },
      ],
      dynamicTitle: true,
    },
  },
};

export const initialGlobals = { theme: 'dark' };

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    return (
      <div
        data-theme={theme}
        style={{
          background: 'var(--bg)',
          color: 'var(--ink)',
          fontFamily: 'var(--font-sans)',
          padding: 16,
          minHeight: '100vh',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ maxWidth: context.parameters.wide ? 'none' : 358 }}>
          <Story />
        </div>
      </div>
    );
  },
];

export const parameters = {
  options: { storySort: { order: ['Introduction', 'Foundations', 'Brand', 'Actions', 'Navigation', 'Lesson', 'Progress'] } },
  layout: 'fullscreen',
  backgrounds: { disable: true },
  controls: { expanded: true },
};
