import {
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";

const login = () => {
  return (
    <div>
      <form method="" action="">
        <TextField id="outlined-basic" label="Email" variant="outlined" />

        <TextField id="outlined-basic" label="Password" variant="outlined" />
      </form>
    </div>
  );
};

export default login;
