// IMPORTS
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, bindActionCreators } from 'redux';

// CONTAINERS

// PRESENTATIONS
import Elements from '../../components/Elements';

// COMMONS

// ACTIONS

// TYPES
interface ElementsContainerProps extends RouteComponentProps {}

// MAIN COMPONENT
/**
 *
 * @param props
 */
const ElementsContainer: React.FC<ElementsContainerProps> = props => {
  // State / Props
  const { children } = props;

  // Functions

  // Hooks

  // Render
  return <Elements>{children}</Elements>;
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ElementsContainer));
