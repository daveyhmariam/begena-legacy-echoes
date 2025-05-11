
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  image
}) => {
  return (
    <div className="bg-muted p-6 rounded-lg shadow-md border border-ethiopia-gold/10 backdrop-blur-sm">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          {image ? (
            <img 
              src={image} 
              alt={author} 
              className="w-12 h-12 rounded-full object-cover border border-ethiopia-gold/20"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-ethiopia-gold/20 flex items-center justify-center text-ethiopia-gold">
              {author.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="text-ethiopia-gold font-medium">{author}</h4>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
      
      <div className="relative">
        <svg 
          className="absolute -top-3 -left-2 w-6 h-6 text-ethiopia-gold/20" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-sm text-foreground italic pl-4">{quote}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
