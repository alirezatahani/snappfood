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
        bestCoupon={data?.best_coupon}
        couponCount={data?.coupon_count}
        hasCashback={data?.has_cashback}
        isPro={data?.is_pro}
      />
      <VendorCardContent data={data} />
    </section>
  );
};
