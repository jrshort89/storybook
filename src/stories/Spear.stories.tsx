import { ComponentMeta } from '@storybook/react';

import Spear from '../components/sprites/Spear';

export default {
    title: 'Spear',
    component: Spear,
} as ComponentMeta<typeof Spear>;

export const Primary = {
    args: {
        vaiant: {
            options: 'primary',
        }
    }
}