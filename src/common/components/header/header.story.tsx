import { Meta, StoryFn } from '@storybook/react';
import { Header } from './header.component';

export default {
    title: 'Common/Header',
    component: Header,
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args: any) => <Header {...args} />;

export const View = Template.bind({});
View.args = {};
