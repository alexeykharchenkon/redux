import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 200,
    minHeight: 25,
    padding: '0 15px',
    fontSize: '18px',
  },
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '700px',
    padding: '10px',
    backgroundColor: '#b2fef7',
  }
});