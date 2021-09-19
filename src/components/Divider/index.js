import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./style.module.css";

const Divider = ({ className }) => (
  <hr className={classNames(style.divider, className)} />
);

Divider.propTypes = {
  className: PropTypes.string,
};

Divider.defaultProps = {
  className: null,
};

export default Divider;
