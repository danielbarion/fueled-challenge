import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./style.module.css";

const Card = ({ className, children, element: Element, type, ...rest }) => (
  <Element
    {...rest}
    className={classNames(style.card, className, style[`shadow-${type}`])}
  >
    {children}
  </Element>
);

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.object,
  ]).isRequired,
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.object,
  ]),
  type: PropTypes.oneOf(["flat", "login", "default", "1", "2", "3", "4"]),
};

Card.defaultProps = {
  className: null,
  element: "div",
  type: "default",
};

export default Card;
