import { Meta, StoryFn } from '@storybook/react';
import { MenuList } from '@app/modules/menu/components/menu-list/menu-list.component';
import pizzaMenu from '@app/moсks/plants.json'



export default {
    title: 'Menu/Menu List',
    component: MenuList,
} as Meta<typeof MenuList>;

const Template: StoryFn<typeof MenuList> = (args) => <MenuList {...args} />;

export const View = Template.bind({});
View.args = {
    items: pizzaMenu,
}