import { render } from '@testing-library/react';

import Rlv1 from './rlv1';

describe('Rlv1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rlv1 />);
    expect(baseElement).toBeTruthy();
  });
});
