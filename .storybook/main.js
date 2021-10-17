module.exports = {
  "stories": [
    "../pages/*.stories.mdx",
    "../pages/*.stories.tsx",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}