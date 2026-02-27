import React from 'react';
import Link from '@docusaurus/Link';
import {MODULES} from '../../data/modules';

export default function HomepageModules() {
  return (
    <section className="modules-container">
      <div className="container">
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '1rem',
          color: 'var(--healthsync-dark-primary)'
        }}>
          Browse by Topic
        </h2>
        <p style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          color: 'var(--healthsync-gray)',
          marginBottom: '3rem'
        }}>
          Select a module below to explore detailed documentation and guides
        </p>
        
        <div className="modules-grid">
          {MODULES.map((module, idx) => (
            <Link
              key={idx}
              to={module.link}
              className="module-card"
              style={{'--module-color': module.color} as React.CSSProperties}
            >
              <span className="module-card__icon">{module.emoji}</span>
              <h3 className="module-card__title">{module.title}</h3>
              <p className="module-card__description">{module.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
