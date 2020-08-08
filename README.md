# Introduction

When I moved to Denver last year, I realized that I did not fit in with the other people my age. It did not take long to learn why: other than skiing, by far the most popular pasttime for thirty-somethings in the area is hiking. And although I have *been hiking*, I would not consider myself a *hiker*. If I wanted to fit in in my new home, though, I was going to have to change.

But how does one find where to go hiking? Where do you learn about hiking trails? I'm sure aficionados could have answered this question for me, but I decided to build an app instead.

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

Here is the Trello Board for my project:

[Trello Board](https://trello.com/b/YNRvW87u/ga-project-3)

There are still a few Icebox features that I have not yet implemented, but would like to implement as I continue to work on the project.

## Getting Started

I have deployed this app on Heroku. You can check it out by following this link: [Take A Hike](https://infinite-fortress-44591.herokuapp.com/)

## Screenshots of the App

I have already shared a screenshot of the app's homepage, so here are a few of the other main pages on the app:

* Signup Page:

![Signup Page](https://i.imgur.com/ZfnRIel.jpg)

* Login Page:

![LoginPage](https://i.imgur.com/y6dFFOq.jpg)

If a user is *not* logged in, and they select a particular hike to learn more about, they will see this:

![Non-Logged-In](https://i.imgur.com/5klFjcL.jpg)

If the user *is* logged in, but there are currently no comments on that hike, then they will see this:

![Logged-InNoComments](https://i.imgur.com/OAmiDZ4.jpg)

But if the user is logged in and there *are* comments on the hike, then they will see this:

![Comments](https://i.imgur.com/QhVBciQ.jpg)

Screenshots of the results of searching for hikes will be presented below, where I discuss some unsolved problems with the app.

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

If a user then clicks on the 'Learn More' button, they will be taken to a blank page, since there is no single hike they've selected due to the "pile up".

The obvious solution to this problem is to rebuild the slider purely out of React components instead of using a static JavaScript file to build and load the slider. This is something I look forward to doing as I continue to work on the app, but I believe building the slider this way was a valuable lesson not only in incorporating external libraries into a React app, but also into seeing how one can code oneself into a corner and learn how to take a different approach.

Other unsolved problems are minor by comparison. For example, users who navigate to the login page from a particular hike are not returned to that hike; they are returned to the homepage. That is not an ideal user experience. Similarly, when a user writes a new comment, the input box where they wrote the comment does not clear automatically.

## Future Enhancements

There are a number of interesting features that could be added to this app to improve its functionality.

1. A simple feature that could be added is allowing users to filter their search results, perhaps by the length of the hike. That way users who are looking for hikes of a certain length might at least have a better idea where to start.

2. Existing users are currently able to *add* comments to a hike, but they can neither *update* nor *delete* their comments. Adding this functionality would greatly improvve the user experience.

3. Right now the ability to read or write comments on hikes is limited to users who have signed up for an account and logged into their account. But the ability to *read* comments should probably be extended to users who do not have accounts, while users *with* accounts should be able to do more than simply write comments. For example, it would be nice if each user had an "Account Page" where they could see hikes that they have commented on all in one place. This would allow frequent users to keep track of the hikes that they've already done and see what they've thought about those hikes.

4. Since the app already consumes the OpenWeather API, another nice feature might be to show an upcoming forecast for a given trail. For example, when a user navigates to a particular trail, there could be a button the user could press that would display a 5-day forecast. This would help users plan upcoming trips.

5. 