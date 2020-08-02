# Folio20 - A Vue.js Portfolio
A little more than a portfolio: there's now a page for you to edit your own projects

# Requirements
- Low maintenance
- Easy to upgrade the projects in the portfolio
- Easy to change whole appearance, if needed

# Solution
Based on the requirements I set for myself, the solution involves:
- No dependencies: outside Vue.js and Firebase
- Authentication. After login, owners can edit their projects in a CMS-like interface.
- Styling via custom SCSS / CSS, so this can be changed easily

### Non standard feature
A color theme changer. This is mostly due to the fact that, as I work on a projects, I tend to get tired of the project's colors, so this stops me from changing the styles. (too much!)

### Todos
- (Maybe) Make everything editable through the interface: the theme colors, the texts, the stack, the contact links
- (Maybe) get rid of the SCSS and rely on CSS alone
- (OR better!) also set the css / styles via an edit interface
- (Desirably) Take the time and properly comment the code
- (Desirably) Allow full collaboration on project

# Standard Vue.js installation

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
