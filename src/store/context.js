import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const AppContext = React.createContext();

export const WrapComponentWithAppStateConsumer = (Component) => (props) =>
  (
    <AppContext.Consumer>
      {(context) => <Component {...props} context={context} />}
    </AppContext.Consumer>
  );

export const AppStateProvider = ({ children }) => {
  const [formTitle, setFormTitle] = useState("New Questionnaire");
  const [formQuestions, setFormQuestions] = useState([
    {
      id: uuidv4(),
      question: "",
      answerTypes: [{ value: "short", label: "Short Answer", selected: true }],
      answer: "",
    },
  ]);

  const handleAddNewQuestion = () => {
    setFormQuestions([
      ...formQuestions,
      {
        id: uuidv4(),
        question: "",
        answerTypes: [
          { value: "short", label: "Short Answer", selected: true },
        ],
        answer: "",
      },
    ]);
  };

  const handleRemoveQuestion = (id) => {
    setFormQuestions((currentValue) => [
      ...currentValue.filter((item) => item.id !== id),
    ]);
  };

  const handleMoveQuestion = (id, moveTo, currentIndex) => {
    const newIndexResult = {
      up: currentIndex - 1,
      down: currentIndex + 1,
    };
    const newIndex = newIndexResult[moveTo];
    const newFormQuestions = formQuestions.reduce((acc, item, index, array) => {
      if (item.id !== id) {
        if (newIndex === index && moveTo === "up") {
          acc.push(array[currentIndex]);
        }

        acc.push(item);

        if (newIndex === index && moveTo === "down") {
          acc.push(array[currentIndex]);
        }
      }

      return acc;
    }, []);

    setFormQuestions(newFormQuestions);
  };

  const handleOnChangeFormQuestion = ({ id, name, value }) => {
    const newFormQuestions = formQuestions.map((item) => {
      if (item.id === id) {
        if (name === "answerType") {
          item.answerTypes.map((option) => {
            option.selected = option.value === value;

            return option;
          });
        } else {
          item[name] = value;
        }
      }

      return item;
    });

    setFormQuestions([...newFormQuestions]);
  };

  return (
    <AppContext.Provider
      value={{
        state: {
          formTitle,
          formQuestions,
        },
        setFormTitle,
        handleAddNewQuestion,
        handleOnChangeFormQuestion,
        handleRemoveQuestion,
        handleMoveQuestion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
