// IMPORTS
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

// CONTAINERS
import AppContainer from '../containers/App';
import PageContainer from '../containers/Page';
import ElementsContainer from '../containers/Elements';

// COMPONENTS

// COMMONS

// TYPES
interface RoutesContainerProps {}

// MAIN COMPONENT
/**
 *
 * @param props
 */
const RoutesContainer: React.FC<RoutesContainerProps> = props => {
  return (
    <AppContainer>
      <Switch>
        <Route exact path={'/'} component={PageContainer} />
        <Route exact path={'/elements'} component={ElementsContainer} />
      </Switch>
    </AppContainer>
  );
};

// REDUX
/**
 *
 * @param state
 */
const mapStateToProps = (state: any) => ({});

/**
 *
 * @param dispatch
 */
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({}, dispatch);

// EXPORTS
export default connect(mapStateToProps, mapDispatchToProps)(RoutesContainer);
