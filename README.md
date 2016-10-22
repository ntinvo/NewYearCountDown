## New Year 2017 Count Down

1. I spent about 10 minutes to write the script for the count down, about 30 minutes to improve the UI and to add some more features to the site. So, it's about 40 minutes in total. I deviced not to use Jquery because it is a little bit overkill for such a simple function. 

2. Tools used:
   * Bootstrap: I used Bootstrap because I find it really easy to layout the website as well as make it to look good on different devices.

    * SweetAlert: since the traditional alert does not look good to me, so I used SweetAlert to implement the alert because it makes the alert look great on all of devices, and it is easily customized. 

3. Bugs & Improvements:
    * The bug that I have was when I was writing the script for the count down function. I did some calculations incorrectly and forgot to used Math.floor to round the number down. However, that was quick-fixed bugs.

    * I should optimized the background image for the tablet, and mobile device because it is using the big backgound for all of the devices, and this may affect the site's performance. I would make the background image smaller, the quality a little bit lower so that it can work best on any devices.

    * Because this is a count down website to new year, I would add some background new year music so that it will be a little bit more fun for the users. I would put a list of songs that the users can choose to play.

    * The website can scale to count down to any date. I would scale it so that the users can choose to count down to any date/events in the year such as Halloween, Thanksgiving, Black Friday, Christmas, and may be a dating anniversary.  

    * I would add the user location on the count down (such as Austin, TX or San Francisco, CA).


## Usage

1. Testing: there is two buttons that can be used for testing purpose:
    * "Go To New Year" button will set the time to 5 seconds before New Year. This will help when we want to test what will happen when time reaches 0.

    * "Go To Current Time" is the actualy time left to New Year. This button is used after we test out site with "Go To New Year" button and want to go back to the actual time.

2. Bonus: there is a audio play in the background when time reaches 0. If you are interested and want to test it, please go to "./js/countDown.js" file and uncomment lines 52-54 and 127-129.

## Sources:

1. Images:
	* happy-new-year.gif is from [Giphy](http://giphy.com/)
	* new-year.jpg is from [Shutterstock](http://www.shutterstock.com/)
	* newyear2017.png is from [Manyhappynewyear](http://www.manyhappynewyear.com/)

2. Audio:
	* song.mp3 is Auld Lang Syne (Rock Version) from [Youtube](https://www.youtube.com/watch?v=NRpXdcEUZTc)