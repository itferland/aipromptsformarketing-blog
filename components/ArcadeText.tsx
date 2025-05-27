
import React from 'react';

type ArcadeTextProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

export const ArcadeText = <T extends React.ElementType = 'p',>({
  as,
  children,
  className = '',
  ...props
}: ArcadeTextProps<T>): React.ReactElement => {
  const Component = as || 'p';
  return (
    <Component className={`font-press-start ${className}`} {...props}>
      {children}
    </Component>
  );
};
    