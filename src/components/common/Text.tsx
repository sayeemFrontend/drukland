import { ReactElement } from 'react';

interface TextProps {
  children?: ReactElement;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  title?: string;
  className?: string;
}
export default function Text({
  children,
  size = 'xs',
  title,
  className,
  ...props
}: TextProps) {
  const classObject = {
    xs: 'text-xs 2xl:text-sm font-medium',
    sm: 'text-sm 2xl:text-base font-medium',
    md: 'text-base 2xl:text-lg font-medium',
    lg: 'text-lg 2xl:text-xl font-semibold',
    xl: 'text-xl 2xl:text-2xl font-bold',
  };
  return (
    <p className={`${classObject[size]}`} {...props}>
      {children ? children : title}
    </p>
  );
}
