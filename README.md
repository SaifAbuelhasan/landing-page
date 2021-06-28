# Landing Page Project

I'm not really sure if there should be a common practice for the readme file.
If there are certain practices that I should be following please provide instructions in feedback.

HTML changes:
Added an extra section.
Added bootstrap navbar. (Used bootstrap for better mobile responsiveness)
Added Top button.

CSS changes:
added transition property to the page header. (For smooth navbar animations)
added button styles. (I realize the button design looks ugly, especially on mobile view, 
I just wanted to implement the feature using Javascript)

*********************************************************************************************

Javascript:
app.js line 81:
The buildNav function loops through the sections creating the corresponding nav links. 

app.js line 105:
On user scroll the scrollResp function does the following:
-Records scroll distance from top, to decide whether the to top button will be visible.
-Shows navigation and starts countdown to hide navigation.
-Calls checkActiveSection function (line 95).
-The checkActiveSection function may call the setActive function (line 41)
-The setActive function changes the active section and nav item.

app.js 128:
Scrolls to top on click.



