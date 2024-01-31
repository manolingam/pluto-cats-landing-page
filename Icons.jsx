const Discord = ({
  width = '34',
  height = '25',
  fill = 'white',
  opacity = '1'
}) => (
  <svg
    viewBox='0 0 34 25'
    width={width}
    height={height}
    fill={fill}
    opacity={opacity}
  >
    <path
      d='M28.949 3.36711C24.8714 0.279184 21.0064 0.357359 21.0064 0.357359L20.6199 0.806867C25.4319 2.2922 27.6542 4.44202 27.6542 4.44202C24.7168 2.81988 21.8374 2.01858 19.1512 1.70588C17.1221 1.47136 15.1702 1.52999 13.4503 1.76451C13.2764 1.76451 13.1411 1.78406 12.9672 1.82315C11.9816 1.90132 9.56593 2.27265 6.55121 3.62118C5.50766 4.10977 4.88925 4.44202 4.88925 4.44202C4.88925 4.44202 7.22759 2.17493 12.3294 0.689604L12.0202 0.357359C12.0202 0.357359 8.13587 0.279184 4.0776 3.36711C4.0776 3.36711 0 10.8133 0 20.0184C0 20.0184 2.37699 24.1617 8.619 24.3572C8.619 24.3572 9.66256 23.0673 10.5129 21.9924C6.91839 20.8979 5.56563 18.6113 5.56563 18.6113C5.56563 18.6113 5.85551 18.8067 6.35796 19.0999C6.37729 19.1194 6.41594 19.1585 6.47391 19.1781C6.55121 19.2367 6.64784 19.2562 6.72514 19.3149C7.44017 19.7057 8.13587 20.038 8.79293 20.2921C9.95243 20.7416 11.3438 21.2106 12.9478 21.5233C15.0736 21.9142 17.5472 22.0705 20.272 21.5429C21.6055 21.3083 22.9582 20.9175 24.369 20.3116C25.3545 19.9403 26.4561 19.393 27.6156 18.6308C27.6156 18.6308 26.2049 20.9761 22.4944 22.0315C23.3447 23.1259 24.369 24.3376 24.369 24.3376C30.611 24.1422 33.0266 19.9989 33.0266 19.9989C33.0266 10.7938 28.949 3.32802 28.949 3.32802V3.36711ZM11.2279 17.3605C9.64323 17.3605 8.34845 15.9338 8.34845 14.1944C8.34845 12.455 9.62391 11.0283 11.2279 11.0283C12.8319 11.0283 14.146 12.455 14.1073 14.1944C14.1073 15.9338 12.8319 17.3605 11.2279 17.3605ZM21.5475 17.3605C19.9628 17.3605 18.6681 15.9338 18.6681 14.1944C18.6681 12.455 19.9435 11.0283 21.5475 11.0283C23.1515 11.0283 24.4269 12.455 24.4269 14.1944C24.4269 15.9338 23.1515 17.3605 21.5475 17.3605Z'
      fill={fill}
    />
  </svg>
);

const Twitter = ({
  width = '31',
  height = '31',
  fill = 'white',
  opacity = '1'
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill={fill}
    opacity={opacity}
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-twitter'
  >
    <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
  </svg>
);
export default { Discord, Twitter };
