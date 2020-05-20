import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default () => {
  const [inputString, setInputString] = useState("");

  const appPlusBeforeWords = (input) => {
    const prepositions = ["под", "на", "от", "для", "при", "у", "в"];

    return input
      .split("\n")
      .map((string) =>
        string
          .split(" ")
          .map((word) => word.trim())
          .filter((word) => Boolean(word))
          .map((word) => (prepositions.includes(word) ? word : `+${word}`))
          .join(" ")
      )
      .join("\n");
  };

  return (
    <Grid container spacing={4} justify="center">
      <Grid item xs={5}>
        <TextField
          label="Вход"
          multiline
          rows={30}
          fullWidth
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          label="Выход"
          multiline
          InputProps={{ readOnly: true }}
          rows={30}
          fullWidth
          value={appPlusBeforeWords(inputString)}
        />
      </Grid>
    </Grid>
  );
};
