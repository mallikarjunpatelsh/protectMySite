/**
 *
 * Home
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import MainBackgroundWrapper from 'components/MainBackgroundWrapper';
import BackgroundWrapper from 'components/BackgroundWrapper';
import H1 from 'components/H1';
import TermynalOut from 'components/Termynal';
import H1Secondary from 'components/H1Secondary';
import Textfield from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import RowWrapper from 'components/RowWrapper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Progress from '@material-ui/core/CircularProgress';
import H3 from '../../components/H3Secondary';
import Input from '../../components/Input';
import TabItem from '../../components/tabItem';
import {
  triggerAction,
  requestAction,
  requestWebsitePorts,
  requestSQLMap,
  tirggerSQLMap,
} from './actions';
import messages from './messages';
import saga from './saga';
import reducer from './reducer';
import makeSelectHome from './selectors';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function Home({ state, request, requestShodan, requestSQLMap }) {
  const classes = useStyles();

  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });

  const [values, setValues] = useState({});
  const {
    emailData,
    urlData,
    ipData,
    loadingSqlMap,
    sqlMapData,
    ...rest
  } = state;
  const handleValueChange = event =>
    setValues({ ...values, [event.target.name]: event.target.value });
  const [selected, setSelected] = useState(1);
  const bull = <span className={classes.bullet}>•</span>;
  const loading = true;
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <MainBackgroundWrapper>
        <H1>Protect My Site</H1>
        <TermynalOut />
      </MainBackgroundWrapper>
      <BackgroundWrapper>
        <H1Secondary>Security made uncomplicated.</H1Secondary>
        <RowWrapper>
          <TabItem
            icon="📧"
            text="email"
            onClick={() => setSelected(0)}
            className={selected === 0 ? 'active' : ''}
          />
          <TabItem
            icon="💻"
            text="website"
            onClick={() => setSelected(1)}
            className={selected === 1 ? 'active' : ''}
          />
          <TabItem
            icon="🤖"
            text="advance"
            onClick={() => setSelected(2)}
            className={selected === 2 ? 'active' : ''}
          />
        </RowWrapper>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <H3>SQLMap</H3>
          </Grid>
          <Grid item>
            <Textfield
              placeholder="Enter email here"
              name="sqlMapWebsite"
              onChange={event => handleValueChange(event)}
            />
          </Grid>
          <Grid item>
            <Button onClick={() => requestSQLMap(values.sqlMapWebsite)}>
              Test
            </Button>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          {(sqlMapData || loadingSqlMap) && (
            <Grid item>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    SQL Map
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {loadingSqlMap ? (
                      <>
                        Loading <Progress size={25} />
                      </>
                    ) : (
                      'Results'
                    )}
                  </Typography>
                  {JSON.stringify(sqlMapData)}
                </CardContent>
                <CardActions>
                  <Button size="small">Copy</Button>
                </CardActions>
              </Card>
            </Grid>
          )}
        </Grid>

        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <H3>WP Scan</H3>
          </Grid>
          <Grid item>
            <Textfield
              placeholder="Enter email here"
              name="wpScanWebsite"
              onChange={event => handleValueChange(event)}
            />
          </Grid>
          <Grid item>
            <Button onClick={() => requestSQLMap(values.wpScanWebsite)}>
              Test
            </Button>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          {(sqlMapData || loadingSqlMap) && (
            <Grid item>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    SQLMap
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {loadingSqlMap ? (
                      <>
                        Loading <Progress size={25} />
                      </>
                    ) : (
                      'Results'
                    )}
                  </Typography>
                  {JSON.stringify(sqlMapData)}
                </CardContent>
                <CardActions>
                  <Button size="small">Copy</Button>
                </CardActions>
              </Card>
            </Grid>
          )}
        </Grid>
      </BackgroundWrapper>
    </div>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  state: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    request: data => {
      dispatch(triggerAction());
      dispatch(requestAction(data));
    },
    requestShodan: data => {
      dispatch(requestWebsitePorts(data));
    },
    requestSQLMap: website => {
      dispatch(tirggerSQLMap());
      dispatch(requestSQLMap(website));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Home);
