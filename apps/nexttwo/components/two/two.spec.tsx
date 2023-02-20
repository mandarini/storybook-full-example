import { render } from '@testing-library/react';

import Two from './two';

describe('Two', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Two />);
    expect(baseElement).toBeTruthy();
  });
});
