import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    margin: '1%',
    flex: '0 25%'
  },
  media: {
    height: 350
  }
});

export default function LeagueCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card} onClick={() => props.onClick()}>
      <CardActionArea onClick={() => props.onClick()}>
        <CardMedia
          className={classes.media}
          image={props.leagueImg}
          title={props.leagueName}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.leagueName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={() => props.onClick()} size='small' color='secondary'>
          See Standings
        </Button>
      </CardActions>
    </Card>
  );
}
