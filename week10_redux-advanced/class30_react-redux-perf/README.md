# React and Redux Performance

## Agenda

* Higher order functions
  * functions that return functions
  * currying
    * pass arguments to a function one at a time
    * DEMO: add2
    * Real-world cases: `connect`
  * partial application
    * pass some arguments to a function
    * DEMO: add2
  * closures
    * have access to the lexical environment above
    * useful to hold state between calls
    * DEMO: counter
  * thunks
    * usually takes no arguments
    * used to put off work until later
    * DEMO: hypotenuse
* Memoization
  * what is memoization?
    * used to cache a result based on arguments
    * useful for "pure" functions (that don't rely on outside state)
  * Write a memoization function
* Demo Pure vs Functional vs Component
  * Use `React.memo` with functional component
* Reselect
  * Read the memoization code
  * Demo a slow selector
