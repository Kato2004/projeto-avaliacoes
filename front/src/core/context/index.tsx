import React, { createContext, useState } from "react";
import ContextProps from "../@types/context";

export const ContextAssessments = createContext<ContextProps>({
  author: "",
  setAuthor: () => {},
  content: "",
  setContent: () => {},
  stars: 0,
  setStars: () => {},
});

export const ProviderAssessments: React.FC = ({ children }) => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [stars, setStars] = useState(0);

  return (
    <ContextAssessments.Provider
      value={{
        author,
        setAuthor,
        content,
        setContent,
        stars,
        setStars,
      }}
    >
      {children}
    </ContextAssessments.Provider>
  );
};
