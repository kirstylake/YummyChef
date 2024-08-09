This project uses HTML, JavaScript, CSS and Bootstrap 5 to create a responsive Chef website. It is lightweight and has multiple visual effects.

**Introduction**
My website is a cooking club magazine, it intends to bring likeminded chefs together to cook, bake and learn together.

**Inspiration** 
I was very inspired by the food&home website, however I preferred to have a more minimalistic and modern look for my website.
I was inspired by https://www.epicurious.com/ , they have a sleek layout, I achieved a similar looking sleek layout using bootstrap and css.
https://www.allrecipes.com/ was also an inspiration, I enjoyed the way their recipes were shown. I added my own flare to the community by also adding events that would be hosted by YummyChef Inc.

**Accessibility**
All of the images have alternate descriptions so that people with disabilities that make them unable to see the images can still have a description of what is being shown 
The colour scheme for the website is very contrasting and most uses of text are on top of very plain backgrounds, this makes reading the website better for people with sight disabilities.
The different sections of my webpage use appropriate tags to show a difference between heading and paragraphs (I use the h4, h3, h2, and h1 tags with care ad thought.

**Useability**
 -  The website is incredibly easy to use as all the main information is at the top tags, thatis; I have a clear navigation scheme which feels natural to the user, and there are even links that can take you directly to a portion of a page that you may be looking for (ie the “about us link”
 - I also conducted useability tests with my family and friends about a week before the project deadline to adjust the website to be more user friendly. I instructed them to find certain aspects of the page and depending on how much they struggled, I would rearrange my layout to accommodate them.
 - I have also optimized the performance of the page by using the two second rule, if anything took longer than two seconds to load I would look at ways to either make the image files smaller or look at what is causing the sluggishness (ie if the JS was written ineffectively).
 - My website has also been designed to be responsive, I adapted the code to account for all the mobile devices that are given on chrome. This means that my site works smoothly regardless of the device it is displayed on. I used bootstrap mostly to accomplish this, and where bootstrap couldn’t provide me with the layout I desired, I then used CSS to override the bootstrap commands.

**What I had to learn/find out**
 - I was originally not that familiar with any tool to help with web design, in fact I really struggled to grasp the concept of html and css. So I did most of my research on bootstrap straight from the boostrap 5 website, (you will see this in the code, majority of my spacing is controlled by bootstrap). I must say this made my life so much easier and I fell in love with the grid system (I know some people are not a fan). But I found myself being inspired by the capabilities of this technology. The responsiveness using bootstrap was also completely new to me and in many aspects the responsiveness was limited and wouldn’t display elements the way I wanted them to be shown, so I also had to learn to what extent the css can override bootstrap commands by trial and error and using the console on Chrome. I eventually discovered that the “!important” command in css can override bootstrap commands.
 - I had to learn about animations and how to apply them to elements only when the scrollbar comes close to them, I did this by watching some youtube tutorials(these are referenced where I used them in the code aswell). I also had to learn about how the different animations work for different browsers and how to implement this difference in my css code.
 - I had to learn how to create hover effects over an image. Initially the idea was to create a hover effect that covered the entire photo, I tried a few different techniques that didn’t work, as my images were contained in bootstrap cards and the formatting was always going over the picture. I found a resource that explained how to get writing to only partially show over an image and I adapted this to work within cards.
 - I also had issues trying to pass variables between pages because I didn’t know that the javascript files are reloaded everytime a user navigates to another page. This was such an interesting journey and definitely had me scratching my head as to why my parameters were not being passed, as I have never worked with a multiple web page project that implements Javascript. I found out by many google searches that the fix is to store the variable in “localStorage”.
What aspects worked well and why?
 - I am pleasantly surprised at how well my entire project turned out, I kept battling with little pieces until I looked at the project and I had created and it was this complex beautiful design. I think the way I laid everything out is aesthetically pleasing, and this has been confirmed by family and friends that tested the useability of the site. 
One of my favourite features of the site is how the words on the top jumbotrons fade in, it gives the site this sleek polished look. I also love how I implemented the “single-recipes” page, this page dynamically creates itself depending on which recipe was selected in the previous page. It looks a bit simple to the user, but the javascript that made that happen took me a lot of time and careful thought. I decided to implement objects to hold the recipe information, this way if in future more recipes are to be added all the developer will have to do is just create an object for the recipe and when the user clicks on its card it will be dynamically created. This was fun for me to implement because I used my Intro To Programming knowledge to modify the DOM. I must admit though, although this course encouraged us to use a templating engine such as mustache, it just didn’t feel intuitive to me and the resources availalble for its javascript implementation were scares, so I decided to stick with what I know which is vanilla Javascript.
What aspects could be improved and how might you do things differently next time?
 - I think I could create javascript to dynamically create the recipe cards aswell based on what objects are present in the Javascript file, this would make maintenance of the ite so much easier and would allow the user to remove and add recipes at their will, this could also be organized acoording to the date they were added.
 - I also could add functionaliy to the search bar at the top of the website, currently that search bar is just present as place holder, but I do believe adding functionaliy to it would make the site a lot more user friendly and would help the users immediately find the recipe they are looking for.
 - I also wanted to add categories to the recipes page such as “beef”, “vegetarian”, “chicken” etc, as to further filter the recipes so the user can find what they are looking for easily.
 - I would probably want to use something like JQuery next time to modify the html, I think it would be quicker and probably easier to understand from an outside party.
 - I could also make the links to social media at the footer actually work and link to real social media pages (this would only be possible if the website was being built for a real company)

**What resources were used?**
 - I used most of my information from the bootstrap 5 website
 - I used youtube programming sites,
 - I used the awesome font icon library 
 - W3c schools for a lot of the html and CSS 
 - Most of my images were from Pexels (they are referenced as they are used)
 - I used the bootstrap library



![image](https://github.com/user-attachments/assets/d6ef6f7c-4de6-48f8-b0b7-e961a351d5fe)
![image](https://github.com/user-attachments/assets/d6cac99a-f774-434c-9fab-b66e170148dd)
![image](https://github.com/user-attachments/assets/19db6ed1-1315-4239-98c7-4a8717d13b9c)
![image](https://github.com/user-attachments/assets/fc2fe672-3668-40d4-9131-0941d0e63d79)
