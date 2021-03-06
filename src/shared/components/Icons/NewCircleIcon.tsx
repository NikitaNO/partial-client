import * as React from 'react';
import IIconProps from './IIconProps';

export const NewCircleIcon = (props: React.SVGAttributes<any>) => {
  return (
    <svg
      {...props}
      height="20px"
      width="20px"
      x="0px"
      y="0px"
      viewBox="0 0 262.5 200"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#4D4B4D">
        <path d="M90.3,160.8c-33.6-2.7-60.2-30.9-60.2-65.2c0-36.1,29.4-65.5,65.5-65.5c22.6,0,42.5,11.5,54.3,28.9c4.2-0.7,8.5-1.1,12.9-1.1c7.7,0,15.1,1.1,22,3.2C170.9,25.4,136.2,0,95.6,0C42.9,0,0,42.9,0,95.6s42.9,95.6,95.6,95.6c4.7,0,9.3-0.4,13.8-1C100.9,182.1,94.4,172.1,90.3,160.8z" />
        <g>
          <path d="M162.7,200c-35.1,0-63.5-28.4-63.5-63.5S127.7,73,162.7,73s63.5,28.4,63.5,63.5S197.8,200,162.7,200zM199.8,131.2c0-2.9-2.4-5.3-5.3-5.3h-21.2v-21.2c0-2.9-2.4-5.3-5.3-5.3h-10.6c-2.9,0-5.3,2.4-5.3,5.3v21.2H131c-2.9,0-5.3,2.4-5.3,5.3v10.6c0,2.9,2.4,5.3,5.3,5.3h21.2v21.2c0,2.9,2.4,5.3,5.3,5.3H168c2.9,0,5.3-2.4,5.3-5.3v-21.2h21.2c2.9,0,5.3-2.4,5.3-5.3V131.2z" />
        </g>
      </g>
    </svg>
  );
};
