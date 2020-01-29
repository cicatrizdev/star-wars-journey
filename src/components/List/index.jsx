import React, { useState, useEffect } from 'react';
import { getSpaceships } from '../../services/api.js';
import { TableHead, TableRow, TableCell} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      margin: 10,
    },
  }),
);

const List = (prop) => {
  const [spaceshipsList, setSpaceshipsList] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const spaceshipsData = await getSpaceships();
      setSpaceshipsList(spaceshipsData);
    };
    fetchData();
  }, []);


  return (
    <div className={classes.wrapper}>
      <TableHead>
        <TableRow>
          <TableCell><strong>Spaceship Name</strong></TableCell>
          <TableCell><strong>Stops for inputed distance ({prop.param})</strong></TableCell>
        </TableRow>
        {prop.param 
          ?
            spaceshipsList.map(spc => 
            <TableRow>
              <TableCell align="left">{spc.name}</TableCell>
              <TableCell align="center">{isNaN(spc.MGLT) ? 'unknown' : prop.param/spc.MGLT}</TableCell>
            </TableRow>)
          :
          <p className={classes.wrapper}>Type a number below</p>
        }
      </TableHead>
    </div>
  );
}

export default List;
