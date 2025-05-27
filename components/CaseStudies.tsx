
import React from 'react';
import { CaseStudy } from '../types';
import { ArcadeText } from './ArcadeText';

interface CaseStudiesProps {
  studies: CaseStudy[];
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ studies }) => {
  if (!studies || studies.length === 0) {
    return (
      <div className="text-center text-consultancy-text-muted py-8">
        <ArcadeText as="p">No case studies available at the moment. Check back soon!</ArcadeText>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {studies.map((study) => (
        <article key={study.id} className="bg-consultancy-bg-alt p-6 rounded-lg shadow-xl border border-consultancy-border flex flex-col hover:shadow-2xl transition-shadow duration-300">
          {study.imageUrl && (
            <img src={study.imageUrl} alt={`${study.title} visual representation`} className="rounded-md mb-4 h-48 w-full object-cover" />
          )}
          <ArcadeText as="h3" className="text-lg text-consultancy-highlight mb-2">{study.title}</ArcadeText>
          <p className="text-sm text-consultancy-text-muted mb-3 font-bold">{study.clientName}</p>
          
          <div className="space-y-3 text-sm text-consultancy-text flex-grow">
            <div>
              <strong className="block text-consultancy-accent">Challenge:</strong>
              <p>{study.challenge}</p>
            </div>
            <div>
              <strong className="block text-consultancy-accent">Solution:</strong>
              <p>{study.solution}</p>
            </div>
            <div>
              <strong className="block text-consultancy-accent">Results:</strong>
              <p>{study.results}</p>
            </div>
          </div>

          {study.tags && study.tags.length > 0 && (
            <div className="mt-4 pt-4 border-t border-consultancy-border">
              <ArcadeText as="h4" className="text-xs text-consultancy-text-muted mb-2">Key Areas:</ArcadeText>
              <div className="flex flex-wrap gap-2">
                {study.tags.map(tag => (
                  <span key={tag} className="bg-consultancy-bg-card text-consultancy-accent text-xs font-press-start px-2 py-1 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      ))}
    </div>
  );
};
