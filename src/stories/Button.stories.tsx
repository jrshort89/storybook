import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

// export const Primary: ComponentStory<typeof Button> = () => <Button label='test for storybook' />;

export const Primary = {
    args: {
        variant: {
            options: 'primary',
        },
    },
};
