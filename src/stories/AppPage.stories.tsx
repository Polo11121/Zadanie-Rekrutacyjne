import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { Meta, StoryObj } from "@storybook/react";
import { TagsTable } from "@/components";
import { App } from "@/App";

const queryClient = new QueryClient();

const meta: Meta<typeof TagsTable> = {
  title: "Pages/App",
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
  ],
  component: App,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof App>;

export const Default: Story = {};
