import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default createConfigForNuxt({
  features: {
    stylistic: false,
    tooling: true,
    formatters: true
  },
  extends: [eslintConfigPrettier]
})
  .append({
    ignores: ['node_modules/**', '.nuxt/**', 'dist/**', '.output/**']
  })
  .append({
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'prettier/prettier': 'error'
    }
  });
