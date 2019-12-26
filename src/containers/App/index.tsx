// IMPORTS
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, bindActionCreators } from 'redux';

// LANGUAGES
import English from '../../locales/en.json';
import French from '../../locales/fr.json';

// CONTAINERS

// PRESENTATIONS
import App from '../../components/App';

// COMMONS

// ACTIONS
import { doLanguageChange } from '../App/actions';

// TYPES
interface AppContainerProps extends RouteComponentProps {
  intl: any;
  doLanguageChange: Function;
}

// MAIN COMPONENT
/**
 *
 * @param props
 */
const AppContainer: React.FC<AppContainerProps> = props => {
  // State / Props
  const { children, intl, doLanguageChange: languageChange } = props;

  // Functions
  const handleLanguageChange = () => {
    languageChange({
      locale: intl.locale === 'en' ? 'fr' : 'en',
      messages: intl.locale === 'en' ? French : English
    });
  };

  // Hooks

  // Render
  return (
    <App intl={intl} languageChange={handleLanguageChange}>
      {children}
    </App>
  );
};

// Map State / Dispatch To Props
/**
 *
 * @param state
 */
const mapStateToProps = (state: any) => ({
  intl: state.intl
});

/**
 *
 * @param dispatch
 */
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      doLanguageChange
    },
    dispatch
  );

// EXPORTS
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppContainer));
