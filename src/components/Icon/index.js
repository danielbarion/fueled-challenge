import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./style.module.css";

const Icon = ({ className, icon, size }) => {
  const containerClassnames = classNames(
    className,
    style.container,
    style[size],
    "material-icons"
  );

  return <i className={containerClassnames}>{icon}</i>;
};

Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf([
    "xxxs",
    "xxs",
    "xs",
    "s",
    "m",
    "l",
    "xl",
    "xxl",
    "xxxl",
  ]),
  icon: PropTypes.string,
};

Icon.defaultProps = {
  className: null,
  size: "m",
  icon: null,
};

export default Icon;
