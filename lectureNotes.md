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
5)



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

# React Native Components
React Native doesn't use HTML elements like regular ReactJS instead everything that you render is a component from the React Native library. [React Native Components API](https://facebook.github.io/react-native/docs/activityindicator)

