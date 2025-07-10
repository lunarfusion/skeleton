# Overview

An experimental Drupal theme.

## Starting

'npm i'

### To compile postCSS

'npm run dev'

## Front-end Development

### Tech Stack
We are using:

- node
- vite
- PostCSS
- BEM CSS methodology
- Prettier

#### Vite
Files that Vite uses to compile postCSS:

- vite.config.js
- includes/vite.theme
- postcss.config.js


### CSS


#### PostCSS
PostCSS is in a separate directory from compiled CSS. We are using vite to compile into CSS.

⚠️ DO NOT WRITE CSS IN THE CSS EXTENSION FILES
✅ Write CSS in the pcss files
✅ Add components as imports to dist/style.css

CSS should be written using ancestor nesting and Block-Object-Modifier methodology. We are using postCSS (instead of native nesting) so that BEM methodology can be applied through concatenation of class partials.

#### CSS files
For components which have a .pcss file, do not edit their corresponding .css file directly. Edit the .pcss file and run `npm run dev` to compile.

#### CSS Variables

CSS Variables are in components/00-base/vars.

We are using a two-level color system:

- Primitive colors (sets the values)
- Semantic colors (references the primitive colors, resetting the names to meaningful system-wide names)

Variable files do not have a .pcss version. Edit the .css file directly.

### Assets
This directory in /dist/assets contains shared graphics such as logos and icons which are needed by the theme. Some assets here may be referenced in our components CSS.

### Linting
For components, we should lint only the .pcss files (do not lint compiled CSS).

This repo has stylelintrc.json for setting linting rules and stylelintignore for ignore files.

To run linting on Components PostCSS:
'npx stylelint "components/***/*.css"'

