import PropTypes from "prop-types";
import { WrapComponentWithAppStateConsumer } from "store/context";
import Container from "components/Container";
import SingleForm from "components/SingleForm";
import Button from "components/Button";
import style from "./style.module.css";

const Form = ({ context }) => {
  const {
    state,
    handleAddNewQuestion,
    handleOnChangeFormQuestion,
    handleRemoveQuestion,
    handleMoveQuestion,
  } = context;
  const { formQuestions } = state;

  const handleOnClickSaveAndShare = () => {
    let answerType = null;

    const formQuestionsWithoutMemoryReference = JSON.parse(
      JSON.stringify(formQuestions)
    );

    const data = formQuestionsWithoutMemoryReference.reduce((acc, item) => {
      answerType = item.answerTypes.filter((option) => option.selected)[0]
        .value;

      delete item.answerTypes;

      acc.push({ ...item, answerType });

      return acc;
    }, []);

    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div className={style.form}>
      <Container className={style.container}>
        {formQuestions.length > 0 &&
          formQuestions.map(({ id, question, answer, answerTypes }, index) => (
            <SingleForm
              className={style.singleForm}
              id={id}
              key={id}
              questionValue={question}
              answerValue={answer}
              answerSelectValue={answerTypes[0]}
              answerTypeList={answerTypes}
              handleOnChangeValue={handleOnChangeFormQuestion}
              handleRemoveQuestion={() => {
                handleRemoveQuestion(id);
              }}
              handleMoveQuestionUp={() => {
                handleMoveQuestion(id, "up", index);
              }}
              handleMoveQuestionDown={() => {
                handleMoveQuestion(id, "down", index);
              }}
              index={index + 1}
              totalFormItems={formQuestions.length}
            />
          ))}
        <Button
          className={style.addQuestionButton}
          label="Add Question"
          shadow="flat"
          icon="Plus"
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

Form.propTypes = {
  context: PropTypes.shape({
    state: PropTypes.shape({
      formQuestions: PropTypes.arrayOf(
        PropTypes.shape({
          question: PropTypes.string,
          answerTypes: PropTypes.arrayOf(
            PropTypes.shape({
              value: PropTypes.string,
              label: PropTypes.string,
              selected: PropTypes.bool,
            })
          ).isRequired,
          answer: PropTypes.string,
        })
      ),
    }),
    handleAddNewQuestion: PropTypes.func.isRequired,
    handleOnChangeFormQuestion: PropTypes.func.isRequired,
    handleRemoveQuestion: PropTypes.func.isRequired,
    handleMoveQuestion: PropTypes.func.isRequired,
  }),
};

export default WrapComponentWithAppStateConsumer(Form);
