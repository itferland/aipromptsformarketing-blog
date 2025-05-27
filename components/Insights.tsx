import React, { useState } from 'react';
import { Insight } from '../types';
import { ArcadeText } from './ArcadeText';
import { Button } from './Button';
import { Modal } from './Modal'; // Import the Modal component

interface InsightsProps {
  insights: Insight[];
}

const InsightCard: React.FC<{ insight: Insight; onReadMore: () => void }> = ({ insight, onReadMore }) => {
  return (
    <article className="bg-consultancy-bg-alt p-6 rounded-lg shadow-xl border border-consultancy-border flex flex-col hover:shadow-2xl transition-shadow duration-300 h-full">
      <ArcadeText as="h4" className="text-md text-consultancy-highlight mb-2">{insight.title}</ArcadeText>
      <p className="text-xs text-consultancy-text-muted mb-1">
        Published on: {insight.date}
        {insight.author && ` by ${insight.author}`}
      </p>
      <p className="text-sm text-consultancy-text mb-4 flex-grow">{insight.summary}</p>
      
      {insight.tags && insight.tags.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {insight.tags.map(tag => (
              <span key={tag} className="bg-consultancy-bg-card text-consultancy-accent text-xs font-press-start px-2 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
      <Button 
        variant="secondary" 
        size="sm" 
        onClick={onReadMore}
        className="mt-auto"
        aria-label={`Read more about ${insight.title}`}
      >
        Read More
      </Button>
    </article>
  );
};

export const Insights: React.FC<InsightsProps> = ({ insights }) => {
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleReadMore = (insight: Insight) => {
    setSelectedInsight(insight);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedInsight(null);
  };

  return (
    <div className="space-y-12">
      {(!insights || insights.length === 0) ? (
        <div className="text-center text-consultancy-text-muted py-8">
          <ArcadeText as="p">No insights available at the moment. Check back soon!</ArcadeText>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map(insight => (
            <InsightCard 
              key={insight.id} 
              insight={insight} 
              onReadMore={() => handleReadMore(insight)} 
            />
          ))}
        </div>
      )}

      <div className="text-center pt-8 mt-8 border-t border-consultancy-border">
        <ArcadeText as="h3" className="text-xl text-consultancy-highlight mb-4">
          Want More?
        </ArcadeText>
        <p className="text-consultancy-text max-w-md mx-auto mb-6">
          Sign up to get notified when new articles and in-depth guides are published.
        </p>
        <Button 
          variant="primary" 
          onClick={() => alert("Newsletter sign-up coming soon!")}
          aria-label="Notify me about new insights and guides"
        >
          Get Notified
        </Button>
        <p className="text-xs text-consultancy-text-muted mt-4">
          (Feature in development)
        </p>
      </div>

      {selectedInsight && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          title={selectedInsight.title}
        >
          {selectedInsight.fullContent || "Full content coming soon..."}
        </Modal>
      )}
    </div>
  );
};