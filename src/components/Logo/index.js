import PropTypes from "prop-types";

const Logo = ({ className }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M0 48H48V0H0V48Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.0329 13.7518L29.0319 22.1741H28.0507H19.9183H18.9422L18.9412 13.759L19.9158 12.7856H28.0688L29.0329 13.7518ZM36.6531 32.4594V23.6333C36.6531 23.6334 37.095 23.1917 37.095 23.1917V19.3104L34.7782 16.9759H32.4439V17.6668H34.5035L35.831 19.0156L35.1834 19.6609L35.1822 23.1894L35.6148 23.6184V32.022H33.6725V22.8386L33.0212 22.1809H30.6549V13.0835L28.746 11.175H19.2356L17.3265 13.0835V35.0099H15.72V36.6231H32.257V35.0099H30.6549V23.2352H32.6048V32.4209L33.2564 33.0784H36.0391L36.6531 32.4594Z"
      fill="#F5F5F1"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.601 17.2563V17.6604H36.5029V17.0205H36.5956L36.799 17.4624L37.0024 17.0205H37.0951V17.6604H36.997V17.2572L36.844 17.592H36.7549L36.601 17.2563ZM36.2042 17.1168V17.6604H36.1061V17.1168H35.873V17.0205H36.4449V17.1168H36.2042Z"
      fill="#F5F5F1"
    />
  </svg>
);

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: null,
};

export default Logo;
