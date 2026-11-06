import React from 'react';
import { TopicCard } from './TopicCard';

export default { title: 'Navigation/TopicCard', component: TopicCard };

export const Default = {
  args: { icon: '/illustrations/topic-metrics.svg', name: 'Topic title', description: 'Short description of the card', badge: 'Badge 1' },
};

export const BadgeAndPassed = {
  args: { icon: '/illustrations/topic-metrics.svg', name: 'Topic title', description: 'Short description of the card', badge: 'Badge 3', passed: 'Tag' },
};

export const AllTopics = {
  render: () => (
    <div style={{ display: 'grid', gap: 10 }}>
      <TopicCard icon="/illustrations/topic-metrics.svg" name="Topic title" description="Short description of the card" badge="Badge 3" passed="Tag" />
      <TopicCard icon="/illustrations/topic-nielsen-heuristics.svg" name="Topic title" description="Short description of the card" badge="Badge 2" />
      <TopicCard icon="/illustrations/topic-wcag.svg" name="Topic title" description="Short description of the card" badge="Badge 1" />
      <TopicCard icon="/illustrations/topic-laws-of-ux.svg" name="Topic title" description="Short description of the card" badge="Badge 1" />
      <TopicCard icon="/illustrations/topic-research-methods.svg" name="Topic title" description="Short description of the card" badge="Badge 1" />
    </div>
  ),
};
