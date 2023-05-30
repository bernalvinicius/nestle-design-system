export interface ButtonProps {
  label: string;
  icon?: string;
  disabled?: boolean;
  click: () => void;
  variant: 'primary' | 'positive' | 'info';
}
