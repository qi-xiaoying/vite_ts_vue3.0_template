/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  overrides: [
    {
      files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
  rules: {
    // 句末不出现分号
    semi: ["true", "never"],
    // 括号内的空格限制
    "array-bracket-spacing": ["error", "never"],
    // 声明变量时强制换行
    "one-var-declaration-per-line": ["error", "always"],
    // 禁止函数圆括号之前有一个空格
    "space-before-function-paren": ["error", "never"],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 关闭禁用不必要的return await
    "no-return-await": 0,
  },
};
