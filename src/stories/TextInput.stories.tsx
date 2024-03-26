import type { Meta, StoryFn } from "@storybook/react";
import { TextInput, TextInputProps } from "flowbite-react";
import { fn } from "@storybook/test";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  },
};

export default meta;

const Template: StoryFn<TextInputProps> = (props) => <TextInput {...props} />;

export const Default = Template.bind({});

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: "Type something...",
};
