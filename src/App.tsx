import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    
  }),
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Input />
    </div>
  );
}

export default App;
