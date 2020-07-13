# TimeLoc

## Inspiration

Companies are full of diverse people- whether that be the culture, background experience, or location. Nowadays, remote work and working with people all across the globe are becoming more prevalent. The problem that is now seen is communication across timezones and messaging co-workers at appropriate reply times. There is a need for more effective communication between global teammates.

This is were TimeLoc becomes useful. Especially with a larger magnitude of teammates abroad, TimeLoc provides a convenient Confluence Macro for collaborators of a Space to check on each other’s timezones, availability, and location. It puts all of that information in one place, so users don’t have to remember every teammate’s current time/make unnecessary google searches. —Hence you can save **time** and **energy** with TimeLoc!

## What it does

TimeLoc is an Atlassian Confluence Macro. It fetches all the collaborators that have connections to a Space and lists their timezone/location, live time, and day/night availably. It is a simple, compact macro, allowing for easy reference as the project develops. It’s even customizable, so the Macro can fit seamlessly between confluence pages and better suit the user’s needs.

## How I built it

Using Atlassian’s new Forge (Beta) platform and infrastructure, the app can be launched in minutes with little to no experience in cloud app development. It was perfect for making the set-up extremely easy and allowed me to focus on my idea and becoming more familiar with typescript. 

The list below outlines some of the features this Macro includes!

> 1. @name + avatar 
> 2. night/day identifier
> 3. location
> 4. timezone
> 5. local real time
> 6. customizable design 
     * title of widget
     * 24hr or 12 hr clock

## Challenges I ran into

-Learning Typescript and the Forge UI syntax to align with my app idea. Some of the things I was used to in React and Javascript were slightly different, so this adjustment was a bit of a challenge. <br>
-Since Forge is still in Beta, I had to do some research to go around some of the limitations such as authentication when grabbing information with the confluence REST API- hence I had to use Jira’s REST API! <br>

## Accomplishments that I'm proud of

* Incorporating all the APIs (Jira, WorldTime)
* Figuring out how to import SVG's into Forge
* Using Moment.js for calendar conversion

## What I learned

Everything that I submitted I learned. This includes Jira/Confluence usage, programming on the Forge platform and its tools, learning typescript, and using REST apis for the first time.

## What's next for TimeLoc

In the future, I hope to add more configuration options such as color choice, and style the Forge app a bit better. Additional features can include setting up times with a user based on their availability in their timezone and a comparison feature of two user’s times.
