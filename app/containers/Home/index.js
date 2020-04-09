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

import {triggerAction,requestAction} from './actions';

export function Home({
  state,request
}) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });

  const [values,setValues] = useState({});
  const {loading,emailData,urlData,...rest} = state
  const handleValueChange = event=>setValues({...values,[event.target.name]:event.target.value})

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
{loading?<p>Loading....</p>:<form onSubmit={
        event=>{
          event.preventDefault()
          request(values)
        }
      }>
      <input onChange={event=>handleValueChange(event)} name='email' type='email'/>
      <input onChange={event=>handleValueChange(event)} name='url' type='url'/>
      <input type='submit'/>
      </form>}
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
    request: (data)=>{
      dispatch(triggerAction());
      dispatch(requestAction(data));
    }
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
