import { Meta, StoryFn } from '@storybook/react';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';

export default {
    title: 'Menu/Menu Item',
    component: MenuItem,
} as Meta<typeof MenuItem>;

const Template: StoryFn<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const View = Template.bind({});
View.args = {
    imagePath: '/assets/pizza/rose.jpg',
    weight: 555,
    title: 'Піца Мангеттен',
    ingredients: '(подвійна порція грибів), Гриби, Моцарелла, Папероні, Соус Альфредо',
price: 215,
};