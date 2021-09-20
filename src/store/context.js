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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
