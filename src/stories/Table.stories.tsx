import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "@/components";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    headers: ["Name", "Price"],
    rows: [
      ["Apple", "$1.00"],
      ["Banana", "$0.50"],
      ["Cherry", "$2.00"],
    ],
  },
};

export const Empty: Story = {
  args: {
    ...Default.args,
    rows: [],
  },
};
