import React from 'react';
import './style.scss';

interface TagProps {
  discountValueForView: number;
}
export const DiscountTag = ({ discountValueForView }: TagProps) => {
  return (
    <div className="tagWrapper">
      <span>تا</span>
      <span>{Number(discountValueForView).toLocaleString('fa-IR')}</span>
      <span>%</span>
    </div>
  );
};
