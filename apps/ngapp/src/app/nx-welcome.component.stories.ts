import { moduleMetadata, Meta } from '@storybook/angular';
import { NxWelcomeComponent } from './nx-welcome.component';

export default {
  title: 'NxWelcomeComponent',
  component: NxWelcomeComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<NxWelcomeComponent>;

export const Primary = {
  render: (args: NxWelcomeComponent) => ({
    props: args,
  }),

  args: {},
};
