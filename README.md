# Sharing style variables between JS and SCSS files

This is an example project that shows how you're able to share style variables between scss and js files.

## Problem
There are plenty of useful style variables defined in eg. Bootstraps `variables.scss` file that you would sometimes want to use in your React components. Good example is the breakpoints. All the necessary breakpoints are already defined in one place and you don't want to store them in multiple files like in variables.scss and variables.js to be able to use them. If you need to change a value you should always remember to change it on both files. 

## Solution
I defined the style variables in javascript module `src/constants/styles.js`. Then I used <a href="https://github.com/davidkpiano/sassport">Sassport</a>, library that lets you easily share assets, and JavaScript functions and values in your Sass projects, to compile sass files. 

## Example
If you take a look at the `src/constants/styles.js` file you can notice that I have defined breakpoints on the lines 36-49 like this:
```js
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
  },
  // Grid containers
  '$container-max-widths': {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1240px',
  },
```
Now if I want to use these already defined values in my styled-components all I need to do is import the `styles.js` file and use them. The scss-files read the variables from this same file so you need to only define them in one place.

Here's an example from `App.js`

```js
import styled from 'styled-components';

const Container = styled.div`
  background: hotpink;
  @media (min-width: ${styles['$grid-breakpoints'].xl}) {
    background: teal;
  }
`;
```

## Testing
Clone the project and just run `yarn` and `yarn start` to test it out.
