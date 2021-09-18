import React, { useState } from "react";
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

  return (
    <AppContext.Provider
      value={{
        state: {
          formTitle,
        },
        setFormTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
