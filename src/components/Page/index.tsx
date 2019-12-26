// IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';

// STYLES
import { PageStyles } from './styles';

// TYPES
interface PageProps {}

// MAIN COMPONENT
/**
 *
 * @param props
 */
const Page: React.FC<PageProps> = props => {
  // State / Props

  // Functions

  // Hooks

  // Render
  return (
    <PageStyles>
      <h1>Page</h1>
      <Link to={'/elements'}>Elements</Link>
      <hr />
    </PageStyles>
  );
};

// EXPORTS
export default Page;
