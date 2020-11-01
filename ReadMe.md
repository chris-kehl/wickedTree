# wickedTreeBrewing

This project is a website for fictional brew pub in Louisville, Ky. wich is licensed under the logo Wicked Tree.  The name wicked tree is derived from the tale of Louisville's cursed tree whick is located just down th eroad. https://spectrumnews1.com/ky/lexington/news/2019/10/30/witches-curse-louisville--the-tale-of-the-witches--tree. 

Wicked tree uses artificial intelligence to discover and create new beer recipes that are beyond traditional brewing recipes. 

# Features Used

This project is built using the “mobile first” approach. Each html file is linked to the flexbox css stylesheet which uses medi queries to allow the site to scale up to larger devices.The flexbox.css file uses 6 media queries to scale the site for users using small screen mobile devices and scales up to a large HD desktop display. 

The flexbox.css file alignes the menu to adjust for different screen sizes. For instance, starting out with the mobile first approach the menu is in a row aligned right format. When the display screen is viewed with a tablet device, the menu is layed out in a row, aligned center layout. When viewing the site with a larger device such as a laptop computer or a 4k HD 70in telivision panel, the menu is layed out in a column spaced evenly format.

This project is uploaded into a github repository, and can be viewed as a webpage by navigating to https://chris-kehl.github.io/wickedTree/. The repository is located at the following url https://github.com/chris-kehl/wickedTree.

The webpage uses three css stylesheets to assist with the page layouts.
The base.css file is the style sheet which is used to format the menu, h1, h2, and specified 
class names in each of the html files.  The next css stylesheet that is used is the flexbox.css file. This file is used to implement media queries amongst the site to use the mobile first approach and scales up to larger display panels. Both the base.css file and the flexbox.css file is used to keep the layouts of the website pages consistant. 

The menu.js and directory js file is used to set the menu pictures to appear on the menu.html page. We also use the contact.js file to enter and retrieve information from our user. At this time the content entered by the user is just repeated below the form for the demonstration purposes. The custom.js file is used to format the list items on the onTap.html page. This file uses javaScript to set the color differently for the odd and even list items. 
In addition, the custom.js uses the lists as arrays and uses the mathematical properties and the for loop algorithm to loop through the array to change the colors of the odd and even colors. with the algorithm in the custom.js javaScript we use the nth-child to style a series of list elements on our onTap.html menu. 

We use a deep learning algorithm in the about.html file.  Since I am exploring deep learning algorithms with tensorflow.js, this is a great place to add an image detection model. This page will show an image of a glass of beer and an image of an eskimo puppy as the other. When the page loads, the algorithm will start to identify the images. It will take a minute or so depending upon the speed of your device and internet connection for the algorithm to accurately make a prediction.  

This is the spot to add accessibility information.


