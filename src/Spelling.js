import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default () => {
  return (
      <Grid container justifyContent="center">
        <Grid item xs={11}>
          <TextField
              label="Вход"
              multiline
              minRows={40}
              fullWidth
              variant="outlined"
              //value={inputString}
              //onChange={(e) => setInputString(e.target.value)}
          />
        </Grid>
      </Grid>
  );
};
