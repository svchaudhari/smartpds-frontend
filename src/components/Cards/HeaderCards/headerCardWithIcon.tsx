import { FC } from 'react';
import PendingIcon from '../../LogoComponents/PendingIcon';

interface HeaderCardProps {
  title: string;
  subtitle?: string;
  val: number;
  isSelected?: boolean;
  Icon?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const HeaderCardIcon: FC<HeaderCardProps> = ({
  title,
  // subtitle,
  val,
  isSelected,
  // Icon,
}) => {
  const colorClass = isSelected ? 'bg-yellow-400' : 'bg-white';

  return (
    <div
      className={`flex p-3 items-center shadow border border-gray-200 ${colorClass} rounded-lg min-w-[200px] h-[100px] cursor-pointer justify-between align`}
    >
      <div>
        <div className="text-base font-normal text-black mb-1">{title}</div>
        <div className="text-2xl font-bold text-black">{val}</div>
      </div>
      <div>
        <PendingIcon />
      </div>
    </div>
  );
};

export default HeaderCardIcon;
