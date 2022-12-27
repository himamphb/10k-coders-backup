import React from "react";

const MyContext = React.createContext();

export const ContextProvider = MyContext.Provider;
export const ContextConsumer = MyContext.Consumer;