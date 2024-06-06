import { Meta, StoryFn } from '@storybook/react';
import { FooterLink } from './footer-link.component';


export default {
    title: 'Common/Footer link',
    component: FooterLink,
} as Meta<typeof FooterLink>;

const Template: StoryFn<typeof FooterLink> = (args) => (
    
    <ul>
        <FooterLink {...args} />
    </ul>
);

export const View = Template.bind({});
View.args = {
    href: 'tel:0380441234567',
    children: '044 123 45 67',
};
