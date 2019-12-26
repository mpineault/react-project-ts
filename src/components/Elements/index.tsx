// IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

// STYLES
import { ElementsStyles } from './styles';

// TYPES
interface ElementsProps {}

// MAIN COMPONENT
/**
 *
 * @param props
 */
const Elements: React.FC<ElementsProps> = props => {
  // State / Props

  // Functions

  // Hooks

  // Render
  return (
    <ElementsStyles>
      <h1>Elements</h1>
      <Link to={'/'}>Back Home</Link>
      <hr />
      <h1>
        <FormattedMessage id="app.greeting" />
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsa ut facere fugiat delectus inventore neque nulla quaerat. Nam tempore maxime quia voluptatum provident exercitationem quam
        ullam soluta laudantium reprehenderit?
      </p>
      <h2>Heading 2 Lorem Ipsum Dolor Sed</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsa ut facere fugiat delectus inventore neque nulla quaerat. Nam tempore maxime quia voluptatum provident exercitationem quam
        ullam soluta laudantium reprehenderit?
      </p>
      <h3>Heading 3 Lorem Ipsum Dolor Sed</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsa ut facere fugiat delectus inventore neque nulla quaerat. Nam tempore maxime quia voluptatum provident exercitationem quam
        ullam soluta laudantium reprehenderit?
      </p>
      <h4>Heading 4 Lorem Ipsum Dolor Sed</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsa ut facere fugiat delectus inventore neque nulla quaerat. Nam tempore maxime quia voluptatum provident exercitationem quam
        ullam soluta laudantium reprehenderit?
      </p>
      <h5>Heading 5 Lorem Ipsum Dolor Sed</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsa ut facere fugiat delectus inventore neque nulla quaerat. Nam tempore maxime quia voluptatum provident exercitationem quam
        ullam soluta laudantium reprehenderit?
      </p>
      <h6>Heading 6 Lorem Ipsum Dolor Sed</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsa ut facere fugiat delectus inventore neque nulla quaerat. Nam tempore maxime quia voluptatum provident exercitationem quam
        ullam soluta laudantium reprehenderit?
      </p>
      <hr />
      <p>
        Lorem ipsum <b>dolor</b> sit amet <i>consectetur</i> adipisicing elit.
        <b>
          <i>Modi</i>
        </b>
        , ipsa ut <Link to={'/'}>facere</Link> fugiat delectus inventore neque nulla quaerat. Nam tempore maxime quia voluptatum provident exercitationem quam ullam soluta laudantium reprehenderit?
      </p>
      <ul>
        <li>
          Lorem ipsum <b>dolor</b> sit amet <i>consectetur</i> adipisicing elit.
        </li>
        <li>
          ipsa ut <Link to={'/'}>facere</Link> fugiat{' '}
        </li>
      </ul>
      <ol>
        <li>
          Lorem ipsum <b>dolor</b> sit amet <i>consectetur</i> adipisicing elit.
        </li>
        <li>
          ipsa ut <Link to={'/'}>facere</Link> fugiat{' '}
        </li>
      </ol>

      <form>
        <p>
          <label htmlFor="input-text">
            Text
            <input type="text" placeholder="Text Placeholder" name="text" id="input-text" />
          </label>
        </p>

        <p>
          <label htmlFor="input-email">
            Email
            <input type="email" placeholder="Email Placeholder" name="email" id="input-email" />
          </label>
        </p>

        <p>
          <label htmlFor="input-password">
            Password
            <input type="password" placeholder="password Placeholder" name="password" id="input-password" />
          </label>
        </p>

        <p>
          <label htmlFor="input-date">
            Date
            <input type="date" placeholder="Date Placeholder" name="date" id="input-date" />
          </label>
        </p>

        <p>
          <label htmlFor="input-number">
            Number
            <input type="number" placeholder="Number Placeholder" name="number" id="input-number" />
          </label>
        </p>

        <p>
          <label htmlFor="input-select">
            Select
            <select name="select" id="input-select" defaultValue={''}>
              <option value="" disabled>
                Select
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </label>
        </p>

        <p>
          <label htmlFor="input-checkbox-one">
            <input type="checkbox" placeholder="Checkbox Placeholder" name="checkbox-one" id="input-checkbox-one" />
            <span>Checkbox One</span>
          </label>
        </p>

        <p>
          <label htmlFor="input-checkbox-two">
            <input type="checkbox" placeholder="Checkbox Placeholder" name="checkbox-two" id="input-checkbox-two" />
            <span>Checkbox Two</span>
          </label>
        </p>

        <p>
          <label htmlFor="input-radio-one">
            <input type="radio" placeholder="Radio Placeholder" name="radio" id="input-radio-one" />
            <span>Checkbox One</span>
          </label>
        </p>

        <p>
          <label htmlFor="input-radio-two">
            <input type="radio" placeholder="Radio Placeholder" name="radio" id="input-radio-two" />
            <span>Checkbox Two</span>
          </label>
        </p>

        <p>
          <label htmlFor="input-radio-three">
            <input type="radio" placeholder="Radio Placeholder" name="radio" id="input-radio-three" />
            <span>Checkbox Three</span>
          </label>
        </p>

        <p>
          <button type="submit">Submit</button>
        </p>
      </form>

      <p>
        <code>hello there</code>
      </p>

      <hr />

      <p>
        <button>Another Button</button>
      </p>
    </ElementsStyles>
  );
};

// EXPORTS
export default Elements;
