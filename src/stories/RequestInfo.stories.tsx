import type { Meta, StoryObj } from "@storybook/react";
import { RequestInfo } from "@/components";
import { fn } from "@storybook/test";

const meta: Meta<typeof RequestInfo> = {
  title: "Components/RequestInfo",
  component: RequestInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onRefetch: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof RequestInfo>;

export const Error: Story = {
  args: {
    errorMessage: "An error occurred",
  },
};

export const Empty: Story = {
  args: {
    isEmpty: true,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
