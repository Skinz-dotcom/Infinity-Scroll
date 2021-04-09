# Infinity-Scroll

Basic webpage that displays images randomly picked from the unsplash website and displays them in an infinite scrollable webpage.
You can then click on an image you like to go to the unsplash page and find out more info on the image.

perpose of the site was to create an infinite scrollable page that fetched the new image date seamlessly when near the end of the page to give a seamless infinite webpage. 

I then added a return to top button to allow users the ability to return to top quickly and easily. 
Then went in to make the initial fetch request only call for 5 images to make the initial page loading time much faster especially if the user has a slow internet connect. 
But then after the initial load, the fetch requests then call for 30 images to give a better infinite scrolling experience. 

Finally, I made some adjustments to the responsiveness of the page, specifically for the return to top button's position when in landscape mode on mobile devices. This proved to be tricky but I feel I have a nice middle ground for all the screen sizes I attempted via chromes inspect tools.
