import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default ({transformWordsFunc}) => {
  const [inputString, setInputString] = useState("");


  return (
    <Grid container spacing={4} justify="center">
      <Grid item xs={5}>
        <TextField
          label="Вход"
          multiline
          rows={30}
          fullWidth
          variant="outlined"
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
          variant="outlined"
          value={transformWordsFunc(inputString)}
        />
      </Grid>
    </Grid>
  );
};
