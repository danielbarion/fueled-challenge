import React, { forwardRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import style from "./style.module.css";

class FieldSelect extends React.Component {
  constructor() {
    super();

    this.state = {
      focused: false,
    };
  }

  handleFocus = (e) => {
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(e);
    }

    this.setState({ focused: true });
  };

  handleBlur = (e) => {
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(e);
    }

    this.setState({ focused: false });
  };

  render() {
    const { focused } = this.state;
    const {
      value,
      label,
      placeholder,
      name,
      type,
      hint,
      disabled,
      readOnly,
      required,
      error,
      onChange,
      tabIndex,
      className,
      innerRef,
      autofocus,
      options,
      ...rest
    } = this.props;

    const containerClassNames = classNames(style.container, className, {
      [style.error]: Boolean(error),
      [style.focused]: Boolean(focused),
      [style.filled]: Boolean(value),
      [style.hasPlaceholder]: Boolean(placeholder),
      [style.disabled]: Boolean(disabled),
    });

    return (
      <div className={containerClassNames}>
        <label className={style.field} htmlFor={`select-${name}`}>
          <span className={style.selectWrapper}>
            {label && <span className={style.label}>{label}</span>}

            <select
              {...rest}
              className={style.select}
              id={`select-${name}`}
              tabIndex={tabIndex}
              value={value}
              type={type}
              name={name}
              placeholder={placeholder}
              disabled={disabled}
              readOnly={readOnly}
              required={required}
              onChange={onChange}
              onFocus={this.handleFocus.bind(this)}
              onBlur={this.handleBlur.bind(this)}
              ref={innerRef}
              autoFocus={autofocus}
            >
              {options.map((option) => (
                <option
                  className={style.option}
                  value={option.value}
                  key={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
            <Icon icon="Down-Chevron" className={style.chevronIcon} />
          </span>
          <p className={style.supportText}>{error || hint}</p>
        </label>
      </div>
    );
  }
}

FieldSelect.propTypes = {
  className: PropTypes.string,
  tabIndex: PropTypes.number,
  value: PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  hint: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.oneOf(["text", "password", "email", "search"]),
  innerRef: PropTypes.func,
  autofocus: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};

FieldSelect.defaultProps = {
  className: null,
  tabIndex: null,
  type: "text",
  label: "",
  placeholder: "",
  hint: null,
  disabled: false,
  readOnly: false,
  required: false,
  error: null,
  onFocus: null,
  onBlur: null,
  innerRef: null,
  autofocus: false,
  options: [],
};

export default forwardRef((props, ref) => (
  <FieldSelect innerRef={ref} {...props} />
));
