import { Panels } from "../components/Panels/Panels";

export default {
  title: "Components/Panels",
  component: Panels,
  args: {
    allowMultipleOpen: false,
    panels: [
      { title: "Panel 1", content: "Content for Panel 1" },
      { title: "Panel 2", content: "Content for Panel 2" },
      { title: "Panel 3", content: "Content for Panel 3" },
    ],
  },
};

export const Basic = {};
