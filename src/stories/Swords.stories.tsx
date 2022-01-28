import { ComponentMeta } from '@storybook/react';

import Swords from '../components/sprites/Swords';

export default {
    title: 'Swords',
    component: Swords,
} as ComponentMeta<typeof Swords>;

export const Primary = {
    args: {
        vaiant: {
            options: 'primary',
        }
    }
}