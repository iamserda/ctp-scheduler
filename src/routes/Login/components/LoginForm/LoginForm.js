import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Field } from "redux-form";
import TextField from "components/FormTextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { required, validateEmail } from "utils/form";
import styles from "./LoginForm.styles";

const useStyles = makeStyles(styles);

function LoginForm({ pristine, submitting, handleSubmit }) {
  const classes = useStyles();

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Grid direction="column" container spacing={2}>
        <Grid item>
        <Field
          name="email"
          component={TextField}
          autoComplete="email"
          label="Email"
          validate={[required, validateEmail]}
        />
        </Grid>
        <Grid item>
        <Field
          name="password"
          component={TextField}
          autoComplete="current-password"
          label="Password"
          type="password"
          validate={required}
        />
        </Grid>
        <div className={classes.submit}>
          <Button
            color="primary"
            type="submit"
            variant="contained"
            disabled={pristine || submitting}
          >
            {submitting ? "Loading" : "Login"}
          </Button>
        </div>
      </Grid>
    </form>
  );
}

LoginForm.propTypes = {
  pristine: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  submitting: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm - calls onSubmit)
};

export default LoginForm;
