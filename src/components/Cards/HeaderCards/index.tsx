import { FC } from 'react';

interface HeaderCardProps {
  title: string;
  subtitle?: string;
  val: number;
  isSelected: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const HeaderCard: FC<HeaderCardProps> = ({
  title,
  // subtitle,
  val,
  isSelected,
  onClick,
}) => {
  const colorClass = isSelected ? 'bg-yellow-400' : 'bg-white'; // Yellow background for selected

  return (
    <div
      className={`flex flex-col p-2 space-y-4 shadow border border-gray-200 ${colorClass} rounded-lg min-w-[200px] h-[100px] cursor-pointer`}
      onClick={onClick} // Added onClick handler
    >
      {/* Title */}
      <div className="text-base font-normal text-black">{title}</div>

      {/* Value */}
      <div className="text-2xl font-bold text-black">{val}</div>
    </div>
  );
};

export default HeaderCard;
