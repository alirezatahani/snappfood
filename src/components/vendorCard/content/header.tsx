import React from 'react';

interface VendorCardHeaderProps {
  backgroundImageCustom: string;
  logo: string;
  bestCoupon?: string;
  couponCount?: number;
  hasCashback?: boolean;
  isPro?: boolean;
  [x: string]: any;
}
export const VendorCardHeader = ({
  backgroundImageCustom,
  logo,
  bestCoupon,
  couponCount,
  hasCashback,
  isPro,
}: VendorCardHeaderProps) => {
  const renderCouponText = () => {
    let rv = '';

    if (couponCount > 1) {
      rv =
        bestCoupon +
        ' و ' +
        Number(couponCount - 1).toLocaleString('fa-IR') +
        ' پیشنهاد دیگر ';
    } else {
      rv = bestCoupon;
    }
    return rv;
  };
  return (
    <header>
      <div className="details">
        {bestCoupon && (
          <div className={`bestCoupon ${isPro ? 'pro' : ''}`}>
            {renderCouponText()}
          </div>
        )}
        {hasCashback && <div className="bestCoupon">جایزه خرید</div>}
      </div>

      <div className="vendorCardHeader">
        <img src={backgroundImageCustom?.replace('w.x.h', '350x233')} />
      </div>
      <div className="vendorCardLogo">
        <img src={logo} />
      </div>
    </header>
  );
};
