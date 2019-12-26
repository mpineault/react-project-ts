// IMPORTS
import { updateIntl } from 'react-intl-redux';
// import strore from '../../redux/store';

// TYPES
// import {} from './types';

// MAIN OPERATIONS
/**
 * Do Language Change
 * @returns {Dispatch} for redux
 */
export const doLanguageChange = ({ locale, messages }: { locale: string; messages: any }) => updateIntl({ locale, messages });
