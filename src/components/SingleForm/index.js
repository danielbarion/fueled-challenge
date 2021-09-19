import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Card from "components/Card";
import FieldText from "components/FieldText";
import FieldSelect from "components/FieldSelect";
import Divider from "components/Divider";
import style from "./style.module.css";

const SingleForm = ({ className }) => {
  const [questionValue, setQuestionValue] = useState("");
  const [answerValue, setAnswerValue] = useState("");
  const [answerSelectValue, setAnswerSelectValue] = useState(null);
  const [answerTypeList] = useState([
    { value: "short", label: "Short Answer" },
  ]);

  /**
   * Handle Input Values
   * @param {*} event
   */
  const handleChangeValue = (event) => {
    const { name, value } = event.target;

    const formUtils = {
      question: () => setQuestionValue(value),
      answer: () => setAnswerValue(value),
    };

    formUtils[name]();
  };

  const handleChangeAnswerTypeValue = async (selectedOption) => {
    setAnswerSelectValue(selectedOption);
  };

  return (
    <Card className={classNames(style.singleForm, className)}>
      <FieldText
        name="question"
        label="Question"
        placeholder="What do you want to ask?"
        value={questionValue}
        onChange={handleChangeValue}
        autoComplete="off"
      />
      <Divider />
      <FieldSelect
        name="provider"
        label="Fornecedor"
        placeholder="Selecione"
        options={answerTypeList}
        selectedOption={answerSelectValue}
        onChange={handleChangeAnswerTypeValue}
        className={style.answerTypeSelect}
      />
      <FieldText
        name="answer"
        placeholder="Short answer text"
        value={answerValue}
        onChange={handleChangeValue}
        autoComplete="off"
        disabled
      />
    </Card>
  );
};

SingleForm.propTypes = {
  className: PropTypes.string,
};

SingleForm.defaultProps = {
  className: null,
};

export default SingleForm;
