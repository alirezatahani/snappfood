import React from 'react';
import { FaStar } from 'react-icons/fa6';
import './style.scss';

interface RateProps {
  rate: number;
}
export const Rate = ({ rate }: RateProps) => {
  const roundNearest5 = (num: number) => {
    return Math.round(num / 5) * 5;
  };

  const addState = () => {
    const newRate = roundNearest5(rate * 10);
    return `--starcolor${newRate}`;
  };
  return (
    <div className={`rateWrapper ${addState()}`}>
      {Number(rate).toLocaleString('fa-IR', {
        style: 'decimal',
      })}
      <FaStar />
    </div>
  );
};
