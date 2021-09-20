import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { WrapComponentWithAppStateConsumer } from "store/context";
import { Link } from "react-router-dom";
import Button from "components/Button";
import FieldText from "components/FieldText";
import Logo from "components/Logo";
import Typography from "components/Typography";
import style from "./style.module.css";

const Navbar = ({ className, context }) => {
  const { state, setFormTitle } = context;
  const { formTitle } = state;

  const [isEdittingTitle, setIsEdittingTitle] = useState(false);

  const handleChangeValue = (event) => {
    const { value } = event.target;

    setFormTitle(value);
  };

  const handleTitleOnClick = () => {
    if (isEdittingTitle) {
      return;
    }

    setIsEdittingTitle(true);
  };

  const handleTitleOnBlur = () => {
    if (!isEdittingTitle) {
      return;
    }

    setIsEdittingTitle(false);
  };

  const handleOnKeyPress = (event) => {
    if (event.which === 13) {
      setIsEdittingTitle(false);
    }
  };

  return (
    <nav className={classNames(style.nav, className)}>
      <div className={style.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div className={style.titleWrapper} onClick={handleTitleOnClick}>
        {isEdittingTitle ? (
          <FieldText
            className={style.titleField}
            name="title"
            value={formTitle}
            onChange={handleChangeValue}
            onBlur={handleTitleOnBlur}
            onKeyPress={handleOnKeyPress}
            autoComplete="off"
            autofocus
          />
        ) : (
          <Typography className={style.title} element="span" variant="displayL">
            {formTitle || "Please set the form title"}
          </Typography>
        )}
      </div>

      <div className={style.auth}>
        <Button
          className={style.authButton}
          label="Log In"
          shadow="flat"
          size="small"
          variant="tertiary"
          element={Link}
          to="/login"
        />
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  className: PropTypes.string,
  context: PropTypes.shape({
    state: PropTypes.shape({
      formTitle: PropTypes.string,
    }),
    setFormTitle: PropTypes.func.isRequired,
  }).isRequired,
};

Navbar.defaultProps = {
  className: null,
};

export default WrapComponentWithAppStateConsumer(Navbar);
