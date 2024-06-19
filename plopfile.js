module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Generate files to develop a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name ?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "src/stories/{{name}}.stories.tsx",
        templateFile: "templates/component.stories.hbs",
      },
    ],
  });
};
