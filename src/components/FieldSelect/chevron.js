import PropTypes from "prop-types";

const ChevronDownIcon = ({ className }) => (
  <svg
    className={className}
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.771 6L19.6494 7.87888L10.8247 16.7036L2 7.87888L3.878 6L10.8247 12.9458L17.771 6Z"
      fill="#AE0000"
    />
  </svg>
);

ChevronDownIcon.propTypes = {
  className: PropTypes.string,
};

ChevronDownIcon.defaultProps = {
  className: null,
};

export default ChevronDownIcon;
