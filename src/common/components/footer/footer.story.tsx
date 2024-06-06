import { Meta, StoryFn } from "@storybook/react";
import { Footer } from "./footer.component";

export default {
  title: "Common/Footer",
  component: Footer,
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = () => <Footer/>;

export const View = Template.bind({});
