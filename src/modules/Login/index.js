import Button from "components/Button";
import style from "./style.module.css";

const Login = () => {
  return (
    <div className={style.login}>
      <Button label="Button Text" shadow="flat" icon="add" />
    </div>
  );
};

export default Login;
