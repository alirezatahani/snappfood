import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { DiscountTag } from 'src/components/discountTag';
import { Rate } from 'src/components/rate';

interface VendorCardHeaderProps {
  data: any;
}
export const VendorCardContent = ({ data }: VendorCardHeaderProps) => {
  return (
    <>
      <div className="vendorCardBody">
        <div className="vendorCardBodyHeader">
          <div>
            <h3 className="vendorCardBodyHeaderTitle">{data?.title}</h3>
            {data?.discountValueForView > 0 && (
              <DiscountTag discountValueForView={data?.discountValueForView} />
            )}
          </div>
          <div>
            <div className="vendorCardBodyHeaderRateCount">
              ({Number(data?.voteCount).toLocaleString('fa-IR')})
            </div>
            <Rate rate={data?.rate} />
          </div>
        </div>
        <div className="vendorCardDesc">
          <span>{data?.description}</span>
        </div>
        <div className="vendorCardDelivery">
          <span className="vendorCardDeliveryType">
            {data?.isZFExpress ? 'ارسال اکسپرس' : 'پیک فروشنده'}
          </span>
          <span>
            {data?.deliveryFee <= 0 ? (
              ' رایگان'
            ) : (
              <span>
                {Number(data?.deliveryFee).toLocaleString('fa-IR')} تومان{' '}
              </span>
            )}
          </span>
        </div>
      </div>
    </>
  );
};
