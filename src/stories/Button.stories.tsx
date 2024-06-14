import { Meta } from "@storybook/react/*";
import { Button } from "../components/Button/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    onLongPressCompleted: () => {
      console.log("Deleted");
    },
  },
};

export default meta;

export const Basic = {};
