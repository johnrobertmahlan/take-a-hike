# Introduction

When I moved to Denver last year, I realized that I did not fit in with the other people my age. It did not take long to learn why: other than skiing, by far the most popular pasttime for thirty-somethings in the area is hiking. And although I have *been hiking*, I would not consider myself a *hiker*. If I wanted to fit in, I was going to have to find some trails.

But how does one find hiking trails? I'm sure aficionados could have answered this question for me, but I decided to build an app instead.

Take A Hike is a full-stack web app that allows users to find hikes in their area. Searching by city, users are presented with a variety of local hikes in their vicinity, including some relevant information: the length of the hike, its ascent, and the highest point that it reaches. Users who create an account are also able to leave comments about the hikes they find, or read comments left by other users.

Here is the homepage for the app:

![Take A Hike Homepage](https://i.imgur.com/JxAsbuK.jpg)

## Technologies Used

* HTML, CSS, JavaScript, jQuery
* NodeJS
* ExpressJS
* MongoDB
* ReactJS
* [Hiking Project Data API] (https://www.hikingproject.com/data)
* [OpenWeatherMap API] (https://openweathermap.org/api)

## Project Planning

Here is the Trello board for my project:

[Take A Hike](https://trello.com/b/YNRvW87u/ga-project-3)

There are still a few Icebox features that I have not yet implemented, but would like to implement as I continue to work on the project.

## Getting Started

You can check out the deployed app by following this link: [Take A Hike](https://infinite-fortress-44591.herokuapp.com/)

## Unsolved Problems

The main problem I had while building the app was building the responsive slider that displays the search results when users search for hikes by city. The slider was built primarily in a static JavaScript file (`slider.js`) that relies on jQuery to manipulate the various elements of the slider in the DOM. I was able to get the slider to work almost as intended by loading that script twice in the HikePage component: first, by relying on `componentDidUpdate` to handle the functioning of the slider after the initial search; second, by relying on `componentDidMount` to handle the functioning of the slider after a user navigates to an individual hike and then uses the back button on their browser to look at their search results again. (This may seem backward, but HikePage is rendered by App, so that component is really updating rather than mounting after a user runs an initial search for hikes, while navigating back to that page re-mounts that component rather than updating it.)

The problem with building the slider this way is that it gets "doubled up" whenever users try to navigate around the website. For example, if a user who is not logged in selects a particular hike, they're told that if they want to see what other users have thought about that hike, or share their own thoughts that hike, they will need to log in (if they have an account) or sign up for an account:

![Individual Hike Page](https://i.imgur.com/mvKEggg.jpg)

If the user then logs in or signs up, they will be returned to the homepage, where they can run their search again. But if they do run their search again - or, indeed, run *any* search without refreshing the homepage - the slider will "double up":

![Doubled Up Slider](https://i.imgur.com/6PlZhbx.jpg)

Notice all the buttons on the bottom of that image. There should not be that many buttons. Here is what a user *should* see:

![Normal Slider](https://i.imgur.com/uwahXLm.jpg)

There are half as many buttons in this image.

This may not seem important, but it leads to two major issues with functionality. First, sometimes it means that two timers are running in the background, which means that instead of images sliding off the screen every 5 seconds as intended, there is a "hitch" so that a slide will appear for about 1 second and then be replaced by its duplicate for 5 seconds, before moving on to the next slide. Second, and much worse, is that if the slider is allowed to go through its progression, the slides start to "pile up" on one another:

![Piled Up Slidier](https://i.imgur.com/1enL3Qh.jpg)

If a user clicks on the 'Learn More' button, they will be taken to a blank page, since there is no single hike they've selected due to the "pile up".

The obvious solution to this problem is to rebuild the slider purely out of React components instead of using a static JavaScript file to build and load the slider. This is something I look forward to doing as I continue to work on the app, but I believe building the slider this way was a valuable lesson not only in incorporating external libraries into a React app, but also into seeing how one can code oneself into a corner and learn how to take a different approach.

