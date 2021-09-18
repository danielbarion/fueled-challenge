import { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./style.module.css";

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
  useLayoutEffect(() => {
    let bounce = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

const Ripple = ({ className }) => {
  const [rippleArray, setRippleArray] = useState([]);

  useDebouncedRippleCleanUp(rippleArray.length, 500, () => {
    setRippleArray([]);
  });

  const addRipple = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;

    const lastRiipleId =
      rippleArray.length === 0 ? 0 : rippleArray[rippleArray.length - 1].id;
    const id = lastRiipleId + 1;

    const newRipple = {
      x,
      y,
      size,
      id,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <div
      className={classNames(style.container, className)}
      onMouseDown={addRipple}
      aria-hidden
    >
      {rippleArray.length > 0 &&
        rippleArray.map(({ id, x, y, size }) => (
          <span
            key={`ripple-${id}`}
            style={{
              top: y,
              left: x,
              width: size,
              height: size,
            }}
          />
        ))}
    </div>
  );
};

Ripple.propTypes = {
  className: PropTypes.string,
};

Ripple.defaultProps = {
  className: null,
};

export default Ripple;
