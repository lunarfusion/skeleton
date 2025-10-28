## Prerequisites

Make sure you have added your SSH key in [Acquia Cloud profile](https://accounts.acquia.com/account), and that it's saved in your ~/.ssh folder.

Follow [Drupal security best practices](https://www.drupal.org/docs/8/security).

## Components

New components and component variants should model [Drupal's SDC annotated example](https://www.drupal.org/docs/develop/theming-drupal/using-single-directory-components/annotated-example-componentyml#s-components-without-props-with-a-schema).

Components in Skeleton should:

 - use [atomic design principles](https://atomicdesign.bradfrost.com/)
 - not replicate functionality of existing components
 - use BEM CSS, with double underscores for elements (&__element) and double dashes for variants (&--variant)
 - include story YMLs for expected implementations of variants
