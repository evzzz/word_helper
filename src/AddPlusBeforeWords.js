import React from "react";
import FormWordsTransformation from "./FormWordsTransformation";

export default () => {
  const appPlusBeforeWords = (input) => {
    const prepositions = ["под", "на", "от", "для", "при", "у", "в", "и", "к", "по"];

    return input
      .split("\n")
      .map((string) =>
        string
          .split(" ")
          .map((word) => word.trim())
          .map((word) => word.replace('+', ''))
          .filter((word) => Boolean(word) && word.indexOf("-") !== 0)
          .map((word) => (prepositions.includes(word) ? word : `+${word}`))
          .join(" ")
      )
      .join("\n");
  };

  return <FormWordsTransformation transformWordsFunc={appPlusBeforeWords} />;
};
