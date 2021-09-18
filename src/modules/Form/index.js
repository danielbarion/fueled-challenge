import Container from "components/Container";
import Card from "components/Card";
import style from "./style.module.css";

const Form = () => {
  return (
    <div className={style.form}>
      <Container className={style.container}>
        <Card>lorem ipsum</Card>
      </Container>
    </div>
  );
};

export default Form;
