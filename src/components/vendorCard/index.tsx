import React from 'react';
import { VendorCardHeader } from './content/header';
import { VendorCardContent } from './content/content';
import './style.scss';

export const VendorCard = ({ data }: any) => {
  return (
    <section className="vendorCard">
      <VendorCardHeader
        backgroundImageCustom={data?.backgroundImageCustom}
        logo={data?.logo}
      />
      <VendorCardContent data={data} />
    </section>
  );
};
