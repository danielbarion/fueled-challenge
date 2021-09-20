import PropTypes from "prop-types";
import classNames from "classnames";
import Card from "components/Card";
import FieldText from "components/FieldText";
import FieldSelect from "components/FieldSelect";
import Divider from "components/Divider";
import Typography from "components/Typography";
import Button from "components/Button";
import style from "./style.module.css";

const SingleForm = ({
  className,
  id,
  answerSelectValue,
  answerTypeList,
  answerValue,
  questionValue,
  handleOnChangeValue,
  handleRemoveQuestion,
  handleMoveQuestionUp,
  handleMoveQuestionDown,
  index,
  totalFormItems,
}) => {
  /**
   * Handle Input Values
   * @param {*} event
   */
  const handleChangeValue = (event) => {
    const { name, value } = event.target;

    handleOnChangeValue({
      id,
      name,
      value,
    });
  };

  const handleChangeAnswerTypeValue = (selectedOption) => {
    handleOnChangeValue({
      id,
      name: "answerType",
      selectedOption,
    });
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
        name="answerType"
        label="Answer"
        placeholder="Selecione"
        options={answerTypeList}
        value={answerSelectValue}
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
      {totalFormItems > 1 && (
        <>
          <Divider />
          <div className={style.footer}>
            <Typography element="div" variant="bodyS">
              {index} of {totalFormItems}
            </Typography>
            <div className={style.actions}>
              {index < totalFormItems && (
                <Button
                  icon="Down-Chevron"
                  className={style.chevronDownIcon}
                  onClick={handleMoveQuestionDown}
                  format="circle"
                  variant="quartiary"
                  shadow="flat"
                />
              )}
              {index > 1 && (
                <Button
                  icon="Down-Chevron"
                  className={style.chevronUpIcon}
                  onClick={handleMoveQuestionUp}
                  format="circle"
                  variant="quartiary"
                  shadow="flat"
                />
              )}
              <Button
                icon="Bin"
                className={style.binIcon}
                onClick={handleRemoveQuestion}
                format="circle"
                variant="quartiary"
                shadow="flat"
              />
            </div>
          </div>
        </>
      )}
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
