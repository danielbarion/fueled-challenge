import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "components/Button";
import Logo from "components/Logo";
import Typography from "components/Typography";
import style from "./style.module.css";

const Navbar = ({ className, title }) => (
  <nav className={classNames(style.nav, className)}>
    <span className={style.logo}>
      <Logo />
    </span>
    <Typography className={style.title} element="span" variant="displayL">
      {title}
    </Typography>
    <span className={style.auth}>
      <Button label="Log In" shadow="flat" size="small" variant="tertiary" />
    </span>
  </nav>
);

Navbar.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

Navbar.defaultProps = {
  className: null,
  title: null,
};

export default Navbar;
