import { WrapComponentWithAppStateConsumer } from "store/context";
import Container from "components/Container";
import SingleForm from "components/SingleForm";
import Button from "components/Button";
import style from "./style.module.css";

const Form = ({ context }) => {
  const { state, handleAddNewQuestion, handleOnChangeFormQuestion } = context;
  const { formQuestions } = state;

  const handleOnClickSaveAndShare = () => {
    let answerType = null;
    const data = formQuestions.reduce((acc, item) => {
      answerType = item.answerTypes.filter((option) => option.selected)[0]
        .value;

      delete item.answerTypes;

      acc.push({ ...item, answerType });

      return acc;
    }, []);

    console.log(JSON.stringify(data));
  };

  return (
    <div className={style.form}>
      <Container className={style.container}>
        {formQuestions.length > 0 &&
          formQuestions.map(({ id, question, answer, answerTypes }) => (
            <SingleForm
              className={style.singleForm}
              id={id}
              key={id}
              questionValue={question}
              answerValue={answer}
              answerSelectValue={answerTypes[0]}
              answerTypeList={answerTypes}
              handleOnChangeValue={handleOnChangeFormQuestion}
            />
          ))}
        <Button
          className={style.addQuestionButton}
          label="Add Question"
          shadow="flat"
          icon="add"
          variant="tertiary"
          bordered
          onClick={handleAddNewQuestion}
        />
        <Button
          className={style.SaveAndShareButton}
          onClick={handleOnClickSaveAndShare}
          label="Save & Share"
          shadow="flat"
        />
      </Container>
    </div>
  );
};

export default WrapComponentWithAppStateConsumer(Form);
