[![Netlify Status](https://api.netlify.com/api/v1/badges/765f5154-b4ac-4dd5-8a59-6a3e0b974bb4/deploy-status)](https://app.netlify.com/sites/angry-shockley-8b7157/deploys)

# Questionnaire's Tool

Project built with CRA, CSS Modules and Vanilla JavaScript.

The project can be accessed here: [Demo](https://angry-shockley-8b7157.netlify.app/)

![image](https://user-images.githubusercontent.com/9615850/134065706-9388fd50-7c14-40de-85ec-1640877415f4.png)
![image](https://user-images.githubusercontent.com/9615850/134065769-5729add9-6673-429f-9b4e-2ce61f35dbad.png)

## Full Screenshot

![image](https://user-images.githubusercontent.com/9615850/134065926-aa7ae249-0de6-4552-9ece-1f9c040d4a0c.png)

## Mobile ScreenShot

![image](https://user-images.githubusercontent.com/9615850/134066032-d0ba337e-27b0-4465-b04d-7e3785bd15ef.png)
![image](https://user-images.githubusercontent.com/9615850/134066079-471aaebe-f200-4387-b551-404014a086c0.png)

## Challenge and Project Description

As that project sounds like an internal tool and what doesn't need server-side rendering, I've picked React with `create react app` as a starter boilerplate for this project, but if need server-side rendering, next.js can be a very good option.

All base components like `Button`, `Icon`, `FieldText`, `FieldSelect`, `Container`, `Ripple`, `Typography`, `Divider`, `Card` can be moved to a design system and just be imported. The Navbar component has some dependencies like the react-router but can be refactored to be more generic and be moved to the DS too.

As can be sawed in the Icons component, we have two different options of icons in the project:

1. Icons downloaded from the design system in Figma and we just need to run `yarn generate-icons | npm run generate-icons`.
2. Import and use an existent icons library like `material design icons`. In that case, the MDI is still in the project as a fallback of icons provided by the designer.

PS: The generate-icons can generate the JSON or we can generate the react icon component with just a little refactoring.

I've picked CSS modules instead of just CSS because of the scoped styles and the possibility of move some components to the design system.

I love to use CSS tokens to improve project code quality, ESLint, Prettier, and StyleLint. But I've not added because I've made the project in one weekend and I have no time to spend more, unfortunately.

I've picked craco to set up the project alias and defined the project base into jsconfig.json to improve the dev experience and code quality.

Some of those components I've copied from personal projects that I've made in the past and just updated with that project styles, because that, the Button component for example have a lot of unnecessary variants for what we need, but I let the extra code in the component to show how we can do a lot of different scenarios and still have the base button in the design system.

I've added some extra things like the `hover` effect in some button variants and the `ripple` effect to improve the user experience when using the web app.

I was a little confused about whether the `answer` field was a visual variant of the text field or it was disabled, so I left it disabled but I have no problem making a visual variant, it would be very similar to how the `button` component works.

Almost all if not all components are given the `className` property to make the visual manipulation of the component more dynamic. As css despite being scoped is very simple in the queries, it's very simple to overwrite the style attributes with a new class and be more specific in the style query.

If was a real project with a designer, I'll let the designer know the inconsistency in some parts of the layout and discuss what we can do to improve the standardization of the design system and the project UI and the code.

I've choose the react context api instead of redux because for that project, all we need is just the context api.

If I had an option, instead of using the CRA, I'll probably start a project with rollup instead of webpack because rollup is a faster bundle than webpack and very easy to customize and manipulate the build than webpack.

## Improvements

- Use font `GT Cinetype` instead of `Roboto`.
- We can use `slugify` and `camelcase` libraries to padronize the icon's name.
- We can remove unnecessary tokens from `tokens.css` after discussing what we can use with the designer or take a look through the design system and what we already have.

## Available Scripts

In the project directory, you can run:

### `yarn generate-icons`

Get all icons inside `src/components/icons/*` and generate the icons.json that will be used in Icon's component.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
