import type { Meta, StoryFn } from "@storybook/react";
import { Tooltip, TooltipProps } from "flowbite-react";
import { fn } from "@storybook/test";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  },
};

export default meta;

const Template: StoryFn<TooltipProps> = (props) => <Tooltip {...props} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>Hover me</div>,
  content: "Hello, world!",
};

export const Bottom = Template.bind({});
Bottom.args = {
  ...Default.args,
  placement: "bottom",
};
