import React from "react";
import FormWordsTransformation from "./FormWordsTransformation";

export default () => {
  const appPlusBeforeWords = (input) => {
    return input
      .split("\n")
      .map((string) =>
          `-${string.replace('+', '')}`)
      .join(" ");
  };

  return <FormWordsTransformation transformWordsFunc={appPlusBeforeWords} />;
};
