import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Stack} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const GuestButtons = props => {
  return (
      <Stack direction="row" spacing={2} sx={{marginLeft: "auto"}}>
          <Button
              className={props.classes.tab}
              color="secondary"
              component={Link}
              endIcon={<LoginIcon/>}
              size="large"
              to="/api/users/signin"
          >
              Log in
          </Button>
          <Button
              className={props.classes.tab}
              color="secondary"
              component={Link}
              endIcon={<AppRegistrationIcon/>}
              size="large"
              to="/api/users/signup"
              variant="text"
          >
              Register
          </Button>
      </Stack>
  );
}

export default GuestButtons;