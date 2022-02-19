import {render} from '@testing-library/react';
import App from './App'


test("renders an h1", () => {
    const { getByText } = render(<App/>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const h1 = getByText(/Hello React Testing/);

    expect(h1).toHaveTextContent("Hello React Testing")
})