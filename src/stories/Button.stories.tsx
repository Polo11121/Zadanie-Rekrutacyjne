import type { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "flowbite-react";
import { fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  },
};

export default meta;

const Template: StoryFn<ButtonProps> = (props) => <Button {...props} />;

export const Default = Template.bind({});

Default.args = {
  children: "Click me",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Blue = Template.bind({});
Blue.args = {
  ...Default.args,
  color: "blue",
};
