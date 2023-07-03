import React from 'react';

interface VendorCardHeaderProps {
  backgroundImageCustom: string;
  logo: string;
  [x: string]: any;
}
export const VendorCardHeader = ({
  backgroundImageCustom,
  logo,
}: VendorCardHeaderProps) => {
  return (
    <header>
      <div className="vendorCardHeader">
        <img src={backgroundImageCustom?.replace('w.x.h', '350x233')} />
      </div>
      <div className="vendorCardLogo">
        <img src={logo} />
      </div>
    </header>
  );
};
