import React, { useEffect } from 'react';
import { VirtualizedList } from '../../components/virtualList';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { fetchRestaurants, fetchMore } from './redux';
import { VendorCard } from '../../components/vendorCard';
import { ViewportBlock } from '../../components/loadingViewPort';
import './style.scss';

export const RestaurantsModule: React.FC = () => {
  const { loading, restaurants } = useAppSelector(
    (state) => state.restaurantsReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        if (location) {
          dispatch(fetchRestaurants({ coords: location.coords, page: 0 }));
        }
      });
    }
  }, []);

  const fetchMoreData = () => {
    !loading && dispatch(fetchMore());
  };

  return (
    <VirtualizedList
      items={restaurants}
      itemHeight={248}
      onEnd={fetchMoreData}
      renderComponent={<VendorCard />}
      renderLoadingComponent={<ViewportBlock />}
    />
  );
};
