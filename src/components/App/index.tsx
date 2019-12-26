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
      <div>
        <button onClick={onClickLanguage}>{intl.locale}</button>
      </div>
      <>{children}</>
    </AppStyles>
  );
};

// EXPORTS
export default App;
