import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "components/Icon";
import Ripple from "components/Ripple";
import style from "./style.module.css";

const Button = ({
  className,
  icon,
  iconClassName,
  type,
  label,
  variant,
  display,
  format,
  size,
  onClick,
  disabled,
  bordered,
  element: ButtonElement,
  iconSize,
  shadow,
  ...rest
}) => {
  const buttonClassNames = classNames(
    style.button,
    style[variant],
    style[display],
    style[shadow],
    style[format],
    style[size],
    {
      [style.disabled]: disabled,
      [style.hasLabel]: Boolean(label),
      [style.hasIcon]: Boolean(icon),
      [style.bordered]: bordered,
    }
  );

  return (
    <ButtonElement
      type={type}
      onClick={onClick}
      className={classNames(buttonClassNames, className)}
      disabled={disabled}
      {...rest}
    >
      {icon && (
        <Icon
          className={classNames(style.icon, iconClassName)}
          icon={icon}
          size={iconSize}
        />
      )}
      <span className={style.label}>{label}</span>
      <Ripple />
    </ButtonElement>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  display: PropTypes.oneOf(["neutral", "success", "danger"]),
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "quartiary"]),
  format: PropTypes.oneOf(["normal", "circle"]),
  size: PropTypes.oneOf(["default", "small"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  bordered: PropTypes.bool,
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.object,
  ]),
  iconSize: PropTypes.oneOf([
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
  shadow: PropTypes.oneOf(["flat", "raised"]),
};

Button.defaultProps = {
  className: null,
  icon: null,
  iconClassName: null,
  display: "neutral",
  variant: "primary",
  format: "normal",
  size: "default",
  label: null,
  type: null,
  element: "button",
  onClick: null,
  disabled: false,
  bordered: false,
  iconSize: "xs",
  shadow: "raised",
};

export default Button;
