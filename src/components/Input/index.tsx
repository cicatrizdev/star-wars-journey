import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 360,
      },
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
  }),
);

export default function Input() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField  id="standard-basic" label="insert the distance in mega lights (MGLT)" />
      </form>
    </div>
  );
}