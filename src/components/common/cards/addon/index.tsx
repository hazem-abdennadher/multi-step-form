import React, { FC } from 'react';
import checkMark from '@icons/icon-checkmark.svg';
type AddonCardProps = {
  title: string;
  description: string;
  selected?: boolean;
  onClick?: () => void;
  price: string;
};
export const AddonCard: FC<AddonCardProps> = ({
  description,
  title,
  selected,
  onClick,
  price,
}) => {
  return (
    <div
      onClick={onClick}
      className={`transition-all  duration-300 flex flex-row items-center justify-start gap-4 border p-4 rounded-md   ${
        selected && 'border-primary-purplishBlue bg-blue-50'
      }
       `}
    >
      <div
        className={`flex items-center justify-center w-6 h-6  rounded-md border ${
          selected && 'border-blue-900 bg-blue-700'
        } `}
      >
        {selected && <img src={checkMark} alt="checkMark icon" />}
      </div>
      <div>
        <h3 className="font-bold text-primary-marineBlue">{title}</h3>
        <p className="text-neutral-coolGray text-[0.7rem]">{description}</p>
      </div>
      <p className="font-medium text-primary-purplishBlue ml-auto">{price}</p>
    </div>
  );
};
