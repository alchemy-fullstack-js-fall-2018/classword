# Class 21: Back to the Front End

## Agenda

* Mid-project
    * Overview
    * Questions?
* Back-end review
    * Express
        * routes
        * middleware
    * MongoDB
        * mongoose models
        * static vs instance methods
            * `Model.static_method` ->  `Model.find()`, `Model.create`, `Model.updateMany`
            * `model.instance_method` -> `model.save()`, `model.validate`
            * Arrays
                * `Array.from` -> Static method
                * `arr.map`, `arr.length` -> instance method
                * `Array.prototype.myMethod = function() {}` -> create instance method
        * Aggregations
    * User auth
        * Basic vs token auth
            * `https://ryan:password@gmail.com`
            * Token: attaches a token to the Authorization header
* Webpack
* The DOM
* Components

## Front End Changes

1. Use 2 spaces
1. Use `camelCase` file and folder names, and `TitleCase` for files
that export components.

## Component Architectures

[Component Architectures](component-architectures.md)

## Lab

* Set user settings tab size to `2`
* Use updated `.eslintrc`
