import type { Meta, StoryObj } from "@storybook/react";
import { SortButtons } from "@/components";
import { fn } from "@storybook/test";

const meta: Meta<typeof SortButtons> = {
  title: "Components/SortButtons",
  component: SortButtons,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChangeSortOrder: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof SortButtons>;

export const Default: Story = {
  args: {
    sortFields: ["name", "price"],
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
    currentSortField: "name",
  },
};

export const Ascending: Story = {
  args: {
    ...Default.args,
    sortOrder: "asc",
  },
};

export const Descending: Story = {
  args: {
    ...Default.args,
    sortOrder: "desc",
  },
};
