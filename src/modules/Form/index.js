import Container from "components/Container";
import SingleForm from "components/SingleForm";
import style from "./style.module.css";

const Form = () => {
  return (
    <div className={style.form}>
      <Container className={style.container}>
        <SingleForm />
      </Container>
    </div>
  );
};

export default Form;
