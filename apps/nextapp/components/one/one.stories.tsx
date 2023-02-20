import type { StoryFn, Meta } from '@storybook/react';
import { One } from './one';

const Story: Meta<typeof One> = {
  component: One,
  title: 'One',
};
export default Story;

export const Primary = {
  args: {},
};
