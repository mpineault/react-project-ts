// IMPORTS
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, bindActionCreators } from 'redux';

// CONTAINERS

// PRESENTATIONS
import Page from '../../components/Page';

// COMMONS

// ACTIONS

// TYPES
interface PageContainerProps extends RouteComponentProps {}

// MAIN COMPONENT
/**
 *
 * @param props
 */
const PageContainer: React.FC<PageContainerProps> = props => {
  // State / Props
  const { children } = props;

  // Functions

  // Hooks

  // Render
  return <Page>{children}</Page>;
};

// Map State / Dispatch To Props
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PageContainer));
