Goal: A browser version of something between a sketchpad and an Etch-A-Sketch (The Odin Project's Assignment).

General Outline:

**Finished**: (The required features have been added)
- Make a drawing area with 16x16 grid of square divs (Using JS and Flexbox instead of manually placing them). 
    + Use for... loop to generate 256 squares. 

- Set up a "hover" effect ("mouseenter") so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail trhough your grid like a pen would. 
    + Later on, set it up with a "click" effect instead, to accurately draw out what you have in mind. The "hover" will be there to help the user determine where they are currently in the drawing board - a tracking tool.  

- Add a button at the top of the page that will send the user a popup asking for the number of squares per side for the new grid. 
    + Popup using prompt() should be replaced with input field. 
    + Set the limit the user input to a maximum of 100 (and no negative value or non-integer)
    + Add a button to remove the existing grid.
        + Once entered, the existing grid should be removed and the new grid should be generated in the same total space as before, so that you've got a new sketch pad. 
        + Remove the button and set up the function to automatically remove the grid before applying a new grid.    

- Extra Credit: Instead of just changing the color of a square from white to black (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

**To-do**: 

- Make a color palette consisting of 12 colors: Red, Red-Orange, Orange, Yellow-Orange, Yellow, Yellow-Green, Green, Blue-Green, Blue, Blue-Violet, Violet/Purple and Red-Violet. 
    + Small squares (or circles) sit close to each other.
    + Each color has a dedicated class with the associated property background-color.
        + Have a default class for the color white that can be use as an erazer (at the very bottom of style.css to overwrite other color classes and can be easily toggled). Or having a function that removes all 12 color classes. 
    + In the event of a 'click', change the color value of the function that colors that drawing squares. 

- Custom cursor in the page (or specifically the drawing area).
- Add a mode to keep your previous drawing and push them down or sideways. 
- Decorate the site.
