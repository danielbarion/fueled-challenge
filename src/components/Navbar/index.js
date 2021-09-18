import PropTypes from "prop-types";
import classNames from "classnames";
import { WrapComponentWithAppStateConsumer } from "store/context";
import { Link } from "react-router-dom";
import Button from "components/Button";
import Logo from "components/Logo";
import Typography from "components/Typography";
import style from "./style.module.css";

const Navbar = ({ className, context }) => {
  const { state } = context;
  const { formTitle } = state;

  return (
    <nav className={classNames(style.nav, className)}>
      <span className={style.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </span>
      <Typography className={style.title} element="span" variant="displayL">
        {formTitle}
      </Typography>
      <span className={style.auth}>
        <Button
          label="Log In"
          shadow="flat"
          size="small"
          variant="tertiary"
          element={Link}
          to="/login"
        />
      </span>
    </nav>
  );
};
Navbar.propTypes = {
  className: PropTypes.string,
  context: PropTypes.shape({
    state: PropTypes.shape({
      formTitle: PropTypes.string,
    }),
  }).isRequired,
};

Navbar.defaultProps = {
  className: null,
};

export default WrapComponentWithAppStateConsumer(Navbar);
