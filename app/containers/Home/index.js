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
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { triggerAction, requestAction,requestWebsitePorts } from './actions';

import MainBackgroundWrapper from 'components/MainBackgroundWrapper';
import BackgroundWrapper from 'components/BackgroundWrapper';
import H1 from 'components/H1';
import TermynalOut from 'components/Termynal';
import H1Secondary from 'components/H1Secondary';
import Textfield from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import RowWrapper from 'components/RowWrapper';
import TabItem from '../../components/tabItem';
import Input from '../../components/Input';

export function Home({ state, request, requestShodan }) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });

  const [values, setValues] = useState({});
  const { loading, emailData, urlData,ipData, ...rest } = state;
  const handleValueChange = event =>
    setValues({ ...values, [event.target.name]: event.target.value });
  const [selected,setSelected] = useState(1);

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
<TabItem icon={'📧'} text={'email'} onClick={()=>setSelected(0)} className={selected===0?'active':''}/>
<TabItem icon={'💻'} text={'website'} onClick={()=>setSelected(1)} className={selected===1?'active':''}/>
<TabItem icon={'🤖'} text={'advance'} onClick={()=>setSelected(2)} className={selected===2?'active':''}/>
        </RowWrapper>
        <form
          onSubmit={event => {
            event.preventDefault();
            requestShodan(values);
          }}
        >
        <Input 
        placeholder={'Type in your ip address address here'}
        onChange={event => handleValueChange(event)}
        name="url"
        />
        <input type="submit" />
        </form>
        {JSON.stringify(
          state.ipData
        )}
        {/* <form
          onSubmit={event => {
            event.preventDefault();
            request(values);
          }}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            {' '}
            <Grid item xl={6}>
              <Textfield
                variant="outlined"
                label="email"
                fullWidth
                onChange={event => handleValueChange(event)}
                name="email"
                type="email"
              />
            </Grid>
            <Grid item xs={6}>
              <Textfield
                variant="outlined"
                label="website"
                fullWidth
                onChange={event => handleValueChange(event)}
                name="url"
                type="url"
              />
            </Grid>
          </Grid>
          <input type="submit" />
        </form> */}
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
