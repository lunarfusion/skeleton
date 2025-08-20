# Overview

An experimental Drupal theme/design system.

## Disclaimer
This theme is being created as a learning tool. It may contain errors, temporary code comments, and dev debris. Commits may or may not be conventional (https://www.conventionalcommits.org/en/v1.0.0/). Commits may contain a wide range of system-wide changes that were made to due to discoveries made while building a component. Commits primarily for one component may contain changes made to another component in response to something learned.

This is not an official codebase. It is a learning sandbox.

## Drupal Modules

### Drupal Paragraphs
In the interest of using the simplest solutions that meet the needs of site builders and content creators, we are using the [Paragraphs module (https://www.drupal.org/project/paragraphs)] for custom page layouts.

### Drupal UI Suite
We are using the UI Suite (https://www.drupal.org/project/ui_suite) with a focus on the UI Patterns and UI Styles modules.

## Starting
'npm i'

### To compile postCSS
'npm run dev'

### To lint postCSS
'npm run lint'

## Front-end Development

### Tech Stack
We are using:

- node
- vite
- PostCSS
- BEM CSS methodology

### Vite
Files that Vite uses to compile postCSS:

- vite.config.js
- includes/vite.theme
- postcss.config.js

### Assets
This /assets directory contains:

1. shared graphics, such as logos and icons which are needed by the theme and components
2. PCSS and CSS files that are not for an SDC component
3. CSS Variables
4. Javascript, when necessary
5. The theme's style.css file which imports the variables and CSS in /assets

### CSS
CSS and PostCSS files for anything that is not an SDC component or has not yet been built as a SDC component can be found in /assets.

CSS and PostCSS for each component can be found in /components within that component's subdirectory.

#### CSS BEM
CSS should be written using ancestor nesting and Block-Object-Modifier methodology. We are using postCSS (instead of native nesting) so that BEM methodology can be applied through concatenation of class partials.

#### PostCSS
We are using vite to compile into CSS.

- ⚠️ DO NOT WRITE CSS IN THE CSS EXTENSION FILES
- ✅ Write CSS in the pcss files

#### CSS Variables
CSS Variables are in assets/vars.

We are using a two-level color system:

- Primitive colors (sets the values)
- Semantic colors (references the primitive colors, resetting the names to meaningful system-wide names)

Variable files do not have a .pcss file. For variables exclusively, edit the variables .css file directly.

#### Linting
For components, we should lint only the .pcss files (do not lint compiled CSS).

This repo has stylelintrc.json for setting linting rules and stylelintignore for ignore files.
