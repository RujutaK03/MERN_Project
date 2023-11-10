// Importing necessary functions from @testing-library/react
import { render, screen } from '@testing-library/react';

// Importing the component to be tested
import App from './App';

// Writing the test
test('renders World Of Cinema in the header', () => {
  // Rendering the App component
  render(<App />);

  // Checking if the text "World Of Cinema" is present in the document
  const headerElement = screen.getByText(/World Of Cinema/i);

  // Asserting that the element is in the document
  expect(headerElement).toBeInTheDocument();
});
