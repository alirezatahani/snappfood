import React, { useRef, useState } from 'react';
import { VendorCard } from '../vendorCard';
import { ViewportBlock } from '../loadingViewPort';
import './style.scss';

interface VirtualizedListProps {
  items: any[];
  itemHeight: number;
  onEnd: () => void;
  renderComponent: React.ReactElement;
  renderLoadingComponent: React.ReactElement;
}
export const VirtualizedList: React.FC<VirtualizedListProps> = ({
  items = [],
  itemHeight,
  onEnd,
  renderComponent,
  renderLoadingComponent,
}) => {
  const [state, setState] = useState({
    startIndex: 0,
    endIndex: 7,
  });

  const ref = useRef(null);

  const handleScroll = (event: any) => {
    setState(() => {
      const start = Math.floor(event.target.scrollTop / (itemHeight + 12));
      return {
        startIndex: start,
        endIndex:
          start + Math.ceil((ref.current.clientHeight * 2) / itemHeight),
      };
    });
  };

  const generateRows = () => {
    const itemsWithLoading = [...items, { type: 'LOADING' }];
    let rv: any[] = [];

    let index = state.startIndex;

    do {
      if (index >= itemsWithLoading.length) {
        index = itemsWithLoading.length;
        break;
      }

      const style = {
        top: index * itemHeight + index * 12,
        height: itemHeight,
      };
      switch (itemsWithLoading[index].type) {
        case 'VENDOR':
          rv.push(
            <div className="itemWrapper" key={index} style={style}>
              {React.cloneElement(renderComponent, {
                data: itemsWithLoading[index].data,
              })}
            </div>
          );
          break;

        case 'LOADING':
          rv.push(
            <div className="itemWrapper" key={index} style={style}>
              {React.cloneElement(renderLoadingComponent, {
                onEnterViewport: onEnd,
              })}
            </div>
          );
          break;
      }

      index++;
    } while (index <= state.endIndex);

    return rv;
  };

  return (
    <div
      ref={ref}
      style={{
        height: 'inherit',
        overflowY: 'scroll',
      }}
      onScroll={handleScroll}
    >
      <div
        style={{
          position: 'relative',
        }}
      >
        {generateRows()}
      </div>
    </div>
  );
};
