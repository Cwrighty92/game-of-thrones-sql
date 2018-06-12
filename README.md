# Game of PostgreSQL (catchy title!)

Please listen to the Game of Thrones title music whilst reading this readme. For dramatic effect. 


### Goals

1. Build an end to end application using real data
2. Improve understanding of Express / PGP / 
3. Improve understanding of configs
4. Continue testing in backend
5. DAY 2 - Learn how to use EJS  


### Instructions

You have been tasked with creating a wiki for Game of Thrones. 
- The seed file has been provided for you. 
- Some of the controllers have also been provided so you can focus on the more demanding routes.

Your server should have the following available: 

- The ability to get all houses
- The ability to get a house by id
- The ability to add a house
- The ability to get all people
- The ability to get a person by id
- The ability to add a person
- The ability to get all people who pass a certain criteria (using queries). The queries should be available for 'dead' and 'religion'  e.g.  localhost:9090/people?dead=true 
- The ability to change a character's record to mark them as dead/alive (it happens a lot in Game of Thrones so we should make it easy on our wiki!)
- The ability to get all people for a particular house
- The ability to get all religions
- The ability to add a religion
- The ability to get all religions for a particular house

**All your routes should be fully tested.**


### Day 2 - Error-handling and Templating

* We are going to have a more in depth look at error-handling : using express error-handling middleware to deal with any errors that arise in our code.

* We are going to build views to display our wiki data using EJS (Embedded JavaScript) There is more EJS reading and a great tutorial on [scotch.io](https://scotch.io/tutorials/use-ejs-to-template-your-node-application).

EJS has been around for a long time. Its first commit on GitHub was over six years ago. It has almost 1.5 million downloads per month from npm and is widely used to create MVC (Model-View-Controller) application with JavaScript and express.

You should work with EJS to provide attractive templates to display all of this information. Characters and houses should have their images displayed in a standard size. The list of all houses/people should display their images as thumbnails. 

NOTE: Some of the images are deliberately missing. When there is no image available, you should use this [placeholder for people](http://vignette4.wikia.nocookie.net/gameofthrones/images/9/92/Faceless_Men_Histories_%26_Lore.png/revision/latest?cb=20160313030358) and [this placeholder for sigils](http://2.media.collegehumor.cvcdn.com/51/64/7692441a5ecc5bfc1b3925fd1cb2a98b-game-of-thrones-sigil-for-house-bluth.jpg). 


### Advanced

If you have yet to use joins, try to refactor your SQL queries to use them instead of using PGP.

