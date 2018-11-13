# Thursday

## Topics
  * Transitions
  * Transforms
  * Animation

## Lab
  * Landing Page
  * add animation to previously created pages 


# Transitions 
  * CSS transitions provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized. - [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
  * Often used with `:hover`
  * Transition Properties:
    ```css
      .item {
        transition-property: all | <name of the CSS prop to change>;
        transition-duration: 1s;
        transition-timing-function: ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end | steps(4, end) | cubic-bezier(0.1, 0.7, 1.0, 0.1) | frames(10);
        transition-delay: 1s;
        
        /* SHORTHAND */
        transition: <property> <duration> <timing-function> <delay>;
      }
    ```

# Transforms
 * [Using CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
 * [Transform Options](https://www.w3schools.com/cssref/css3_pr_transform.asp)

# Resources:
  * [Transitions & Animations Cheatsheet](https://cssanimation.rocks/cheatsheets/transitions_animations.pdf)
  * [Email Course: Animation 101](https://cssanimation.rocks/courses/animation-101/) - Pay what you want couse (can be free!). I took it for free when I was not working and liked the course. I ended up paying later on just to support the developer once I Was able.
  * [Video Course: Level Up](https://courses.cssanimation.rocks/p/level-up) - By same person as the email course above. Really good student price ($29 down from like the normal $200). Try using the discount code "supporter" I got in the email after completing the first course for an extra 10%. Haven't taken this one, but I like the person who made it (has good other courses and I enjoy his newsletter: [CSS Animation Weekly](http://weekly.cssanimation.rocks/))
  * [Cubic-bezier.com](http://cubic-bezier.com/?mc_cid=ba04707d5c&mc_eid=b8975c12b5#.17,.67,.83,.67)

# Resources: JS & CSS Animation Libraries
  * [Animate.css](https://daneden.github.io/animate.css/)
  * [Hover.css](http://ianlunn.github.io/Hover)
  * [Greensock (GSAP)](https://greensock.com/)
  * [Snabbt.js](http://daniel-lundin.github.io/snabbt.js)
  * [CSS Animate](http://cssanimate.com/)