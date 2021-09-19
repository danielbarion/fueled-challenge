import Container from "components/Container";
import SingleForm from "components/SingleForm";
import Button from "components/Button";
import style from "./style.module.css";

const Form = () => {
  return (
    <div className={style.form}>
      <Container className={style.container}>
        <SingleForm />
        <Button
          className={style.addQuestionButton}
          label="Add Question"
          shadow="flat"
          icon="add"
          variant="tertiary"
          bordered
        />
        <Button
          className={style.SaveAndShareButton}
          label="Save & Share"
          shadow="flat"
        />
      </Container>
    </div>
  );
};

export default Form;
