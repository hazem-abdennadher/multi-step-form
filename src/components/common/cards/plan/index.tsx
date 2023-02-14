import React, { FC } from 'react';
type PlanCardProps = {
  title: string;
  description: string;
  icon: any;
  selected?: boolean;
  onClick?: () => void;
  promo?: string;
};
export const PlanCard: FC<PlanCardProps> = ({
  description,
  icon,
  title,
  selected,
  onClick,
  promo,
}) => {
  return (
    <div
      onClick={onClick}
      className={`transition-all duration-300 flex flex-row items-start justify-start gap-4 border p-4 rounded-md   ${
        selected && 'border-primary-purplishBlue bg-blue-50'
      }
       `}
    >
      <img src={icon} alt="card icon" />
      <div>
        <h3 className="font-bold text-primary-marineBlue">{title}</h3>
        <p className="text-neutral-coolGray">{description}</p>
        {promo && <p className="text-primary-purplishBlue">{promo}</p>}
      </div>
    </div>
  );
};
