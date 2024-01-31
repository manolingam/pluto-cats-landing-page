'use client';

import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`      
        @font-face {
            font-family: 'honk';
            src: url('/fonts/Honk-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
          font-family: 'jetbrains';
          src: url('/fonts/JetBrainsMono-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'rubik';
          src: url('/fonts/RubikMonoOne-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
    `}
  />
);

export default Fonts;
