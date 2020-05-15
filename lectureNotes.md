React Native

# [000] Agenda
1) Introduciton to React Native
  a) What is it?
2) Requirements
  a) iOS
    - A Mac system
    - Updated XCode
    - NodeJS
  b) Android
    - A Mac or Linux or Windows system
    - Android Studio
    - Java
3) Expo Framework
4) React Native Components
5) How to Style Components
6) Creating & Nesting Components
7) How does React Native work


# Introduction to React Native

- React Native is a framework for building mobile applications
- It lets you compile ReactJS, JSX, & ECMAscript 2015+ code into Native iOS or Android UI components
- No access to HTML API
  - No HTML forms
  - No HTML links
  - No HTML Images
  - No Canvas
- No access to CSS
- Navigation is not the same as a browser. There are no routes
- Developer tools for React Native are not as robust. Every new release of Android or iOS requires a React Native update which usually comes with bugs.

# Expo
A framework for React Native that streamlines the development & deployment process of React Native apps
- Abstracts React Native setup & provides excellent development tools so you don't need to deal with XCode or Android Studio and emulators
- Has most features of React Native but are missing some
- Makes over the air updates easier (You can do this without expo it's just a little harder. Also, OTA updates should be used for patches that don't change app functionality. Apple and Google do not like it when you make big changes to applications without going through their approval process)
- App.js is the default root component

# React Native Components
React Native doesn't use HTML elements like regular ReactJS instead everything that you render is a component from the React Native library. [React Native Components API](https://facebook.github.io/react-native/docs/activityindicator)

- Cant' use HTML elements

# Styling Components

React Native exposes a StyleSheet function used to create objects that can be fed into components to be used as styling. Similar to inline CSS you can use in React.

- Most properties found in CSS have a React Native equivalent
- Styling relies heavily on a Flexbox-like design https://facebook.github.io/react-native/docs/flexbox
- There are two units available: percentages as a string and a arbitrary numbered unit which represents a set amount of pixels. The amount of pixels the unit represents is dependent on the dpi of the screen. https://facebook.github.io/react-native/docs/pixelratio.html#content

# Creating & Nesting Components

- You can create components the same way you do in React
- You can nest components the same way you do using JSX in React

# How does React Native work

- Regular ReactJS turns React Components into objects which are then translated to javascript & html elements
- React Native compiles React Components into Native mobile components

## Different from other frameworks

2) Native UI
- React Native -> Compiles to Native UI but bridges logic using Javascript. Components are Native but when a component is clicked it executes javascript code
- Xamarin, .NET Mobile framework -> Compiles to Native UI but bridges logic using C#
- Flutter -> Compiles to native
- Pretty close to native

1) WebViews / Hybrid apps
- Cordova, Phonegap, Ionic are all webview frameworks which are basically HTML, CSS, JavaScript viewed through a mobile app
- Same codebase for mobile and web

# Debugging

Press d inside console to open up a browser that will print stdout

# Navigation using Stack

React native does not use routes to handle navigation. It has no built in navigation what so ever. We're going to use a community created solution to implement different views for our app

## Installing React Native Stack
We need to install Stack
1) `npm install @react-navigation/native @react-navigation/stack`
Then we need to install peer dependencies depending on our platform. With express we need to:
2) `expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`

## Configuring RN Stack

1) import React Native Gesture Handler in your top level component `import 'react-native-gesture-handler'`
2) Wrap your application in a `NavigationContainer` from `@react-navigation/native` package
3) 