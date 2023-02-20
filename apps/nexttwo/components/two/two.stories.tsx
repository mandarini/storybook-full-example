import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Two } from './two';

const Story: ComponentMeta<typeof Two> = {
  component: Two,
  title: 'Two',
};
export default Story;

const Template: ComponentStory<typeof Two> = (args) => <Two {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
