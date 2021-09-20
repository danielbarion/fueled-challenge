import Button from "components/Button";
import style from "./style.module.css";

const Login = () => {
  return (
    <div className={style.login}>
      <Button label="Button Text" shadow="flat" icon="add" />
      <Button
        label="Button Text"
        shadow="flat"
        icon="add"
        variant="secondary"
      />
      <Button
        label="Button Text"
        shadow="flat"
        icon="add"
        variant="tertiary"
        bordered
      />
      <Button
        label="Button Text"
        shadow="flat"
        icon="add"
        variant="quartiary"
      />
      <Button label="Button Text" shadow="flat" icon="add" size="small" />
      <Button shadow="flat" icon="add" format="circle" />
    </div>
  );
};

export default Login;
