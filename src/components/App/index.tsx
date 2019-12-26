// IMPORTS
import React from 'react';

// STYLES
import { AppStyles } from './styles';

// TYPES
interface AppProps {
  intl: any;
  languageChange: Function;
}

// MAIN COMPONENT
/**
 *
 * @param props
 */
const App: React.FC<AppProps> = props => {
  // State / Props
  const { children, intl, languageChange } = props;

  // Functions
  const onClickLanguage = () => {
    languageChange();
  };

  // Hooks

  // Render
  return (
    <AppStyles>
      <>
        <button onClick={onClickLanguage}>{intl.locale}</button>
      </>
      <>{children}</>
    </AppStyles>
  );
};

// EXPORTS
export default App;
