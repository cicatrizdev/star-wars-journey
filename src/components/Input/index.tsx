import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '../List';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'contents',
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
  const [distance, setDistance] = useState('');

  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.root}>
          <TextField  
            id="search-input" 
            type="number" 
            label="insert the distance in mega lights (MGLT)" 
            value={distance}
            onChange={e => setDistance(e.target.value)}
          />
        </div>
      </div>
      <List
        param={distance}
      />
    </div>
  );
}