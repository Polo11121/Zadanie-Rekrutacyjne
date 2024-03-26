import type { Meta, StoryObj } from "@storybook/react";
import { PaginationButtons } from "@/components";
import { fn } from "@storybook/test";

const meta: Meta<typeof PaginationButtons> = {
  title: "Components/PaginationButtons",
  component: PaginationButtons,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onNextClick: fn(),
    onPrevClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof PaginationButtons>;

export const Default: Story = {
  args: {
    hasNext: true,
    hasPrev: true,
    page: 1,
  },
};

export const Disabled: Story = {
  args: {
    page: 1,
    hasNext: false,
    hasPrev: false,
  },
};
