import { render } from '@testing-library/react';

import Rlv2 from './rlv2';

describe('Rlv2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rlv2 />);
    expect(baseElement).toBeTruthy();
  });
});
