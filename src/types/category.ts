export type Category = {
  title: string;
  id: number;
  img?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
};
