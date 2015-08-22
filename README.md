# glitch

[chris.bolin.co/glitch/](https://chris.bolin.co/glitch/)

glitch is interactive art.

### technical

How does React behave with thousands of elements? Really well, actually. In glitch, a box splits into 4 smaller boxes on each mouse-over or tap. To see how many DOM elements have been created, open your console and run `document.getElementsByTagName('*').length`. The page can easily handle 10,000+ elements.

Glitch doesn't use the [PureRenderMixin](https://facebook.github.io/react/docs/pure-render-mixin.html), even though it could. On each box's `render()`, it is assigned a random color. If it re-rendered for any reason, it would change colors.
