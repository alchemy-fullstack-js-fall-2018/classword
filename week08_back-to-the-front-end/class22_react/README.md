# React

## Agenda

* Background information
* React
    * Why?
    * JSX
    * life cycle
        * [diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
        * `componentDidMount`
        * `compontetDidUpdate`
        * `componentWillUnmount`
    * Props and State
    * React devtools
* Demo
    

## Background

### Single Page Applications

* View changes are programmatic, browser not refreshing
* Talk to servers
* Library/Framework in charge (no html we "attach to")

### Frontend Libraries and Frameworks

* What do they do?
    * Render and Manipulate the DOM
        1. Text nodes
        1. Element properties
        1. Blocks (multiplicity)
* But what do they help me do?
    * Keep the DOM up to date
    * Respond to user interactions
* Reactive programming
    * Offer developers API for declaring or describing:
        * how the data and html should be combined (interpolation)
        * data changes
    * Syncing data to UI happens "automagically"
* JavaScript (, HTML, CSS)
    * New language features
    * Optimizations and other production enhancements
    * Requires a build system
    * Requires a server to run development
* End result for "Modern Front End Development":
    1. Amount and complexity of programming logic for the app is great
        * Advanced JavaScript
        * Modularity and Organization
    1. Build system layer
        1. Transpile
        1. Package
        1. Serve
    1. Application layer
        * React offers a whole new paradigm

## React

React is a component based view and state management library. It's designed to be declarative, making it "painless" to create interactive UIs. React can run in browsers and natively on mobile devices.

### Components

React components have a render method that returns a view to be rendered to the page. React developers use JSX to make their applications more readable and have a more expressive workflow when writing React views. JSX looks like HTML, but gets transpiled to ordinary JavaScript `React.createElement()` invocations by Babel.

React components can also have `state` and `life cycle hooks`. When the state of a React component bound to a view changes, the view will automatically re-render itself, eliminating the pain of manual DOM manipulation under most circumstances. React components can implement specific methods that will get called at specific points. These are called life cycle hooks.

React components can also pass data into their children through what is called one way data binding. We say that React applications have one-way data flow, because data is only passed from the top down.

### State and Props

* Rules of state
    * Push state a far down as possible
    * Sibling components that share state? Must live in common ancestor
* Passing functions as actions
    * "events up"
* Props are state (or props) passed from a parent component
    * Child components **never** modify props directly
    * Nothing above a component that has state should set
    that state.
    * Though there is something called "derived state from props". Example: component is passed an id, and calls an
    API to get that entity
* And while we are mentioning it:
    * Never set `state` outside of constructor
    * Never call `setState` during _synchronous_ part of `render()`
    * Use `setState(fn)` when using previous state
