import React from 'react';
import handleViewport, { type InjectedViewportProps } from 'react-in-viewport';
import { FaSpinner } from 'react-icons/fa6';
import './style.scss';

const Block = (props: InjectedViewportProps<HTMLDivElement>) => {
  const { inViewport, forwardedRef } = props;

  return (
    <div className="viewportBlock" ref={forwardedRef}>
      <span>بارگذاری</span>
      <FaSpinner />
    </div>
  );
};

export const ViewportBlock = handleViewport(
  Block /** options: {}, config: {} **/
);
