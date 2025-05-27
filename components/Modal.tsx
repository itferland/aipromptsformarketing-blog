import React, { useEffect, useRef } from 'react';
import { ArcadeText } from './ArcadeText';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Focus the modal or first focusable element when it opens
      modalRef.current?.focus(); 
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset'; // Ensure cleanup
    };
  }, [isOpen]);


  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={onClose} // Close on overlay click
    >
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
      
      <div
        ref={modalRef}
        tabIndex={-1} // Make the modal itself focusable
        className="relative bg-consultancy-bg-alt w-full max-w-2xl max-h-[90vh] rounded-lg shadow-2xl border-2 border-consultancy-cta flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
      >
        <header className="flex items-center justify-between p-4 md:p-6 border-b border-consultancy-border sticky top-0 bg-consultancy-bg-alt">
          <ArcadeText as="h2" id="modal-title" className="text-lg md:text-xl text-consultancy-highlight">
            {title}
          </ArcadeText>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 rounded-full text-consultancy-text-muted hover:text-consultancy-highlight hover:bg-consultancy-bg-card focus:outline-none focus:ring-2 focus:ring-consultancy-focus-ring"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>
        
        <div className="p-4 md:p-6 overflow-y-auto flex-grow">
          <div className="prose prose-sm sm:prose-base max-w-none text-consultancy-text font-sans leading-relaxed whitespace-pre-line">
            {children}
          </div>
        </div>
         <footer className="p-4 border-t border-consultancy-border sticky bottom-0 bg-consultancy-bg-alt">
          <button
            onClick={onClose}
            className="font-press-start text-xs bg-consultancy-cta hover:bg-consultancy-cta-hover text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-consultancy-focus-ring"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};