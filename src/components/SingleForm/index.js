import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Card from "components/Card";
import FieldText from "components/FieldText";
import style from "./style.module.css";

const SingleForm = ({ className }) => {
  const [questionValue, setQuestionValue] = useState("Value");

  /**
   * Handle Input Values
   * @param {*} event
   */
  const handleChangeValue = (event) => {
    const { name, value } = event.target;

    const formUtils = {
      question: () => setQuestionValue(value),
    };

    formUtils[name]();
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
