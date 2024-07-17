import { type Meta } from "@storybook/react";
import { MultiCode } from "../components/MultiCode/MultiCode";

const meta = {
  title: "Components/MultiCode",
  component: MultiCode,
  args: {
    items: [
      {
        nav: "npm",
        content: "npm install @lens-protocol/react-web@latest",
      },
      {
        nav: "yarn",
        content: "yarn add @lens-protocol/react-web@latest",
      },
    ],
  },
} satisfies Meta<typeof MultiCode>;

export default meta;

export const Basic = {};
