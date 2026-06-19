1. design - planning, style guide, theme
2. file structure - trouble with background img overlaying home page
3. Reason for using Next.js

# route structure

- difficulty figuring out how the route structure would be, since the site is mostly a SPA, except for blog pages

# prefetching:

- Prefetching is the process of loading a route in the background before the user navigates to it. This makes navigation between routes in your application feel instant, because by the time a user clicks on a link, the data to render the next route is already available client side.
- Next.js automatically prefetches routes linked with the <Link> component when they enter the user's viewport.
- static routes are fully prefetched and prerendered at build time - dynamic routes arent or are partially if loading.tsx is present
- Next.js automatically splits your application into smaller JavaScript chunks based on routes. Instead of loading all the code upfront like traditional SPAs, only the code needed for the current route is loaded. This reduces the initial load time while other parts of the app are loaded in the background. By the time you click the link, the resources for the new route have already been loaded into the browser cache.
- When navigating to the new page, there's no full page reload or browser loading spinner. Instead, Next.js performs a client-side transition (keeping any shared layouts and UI), making the page navigation feel instant.

# motion - animations

- learning basics
- performance hit on re-use of animations seem minimal to none - motion batches scroll updates, and a portfolio doesnt have too many elements
- researched modern scroll animations - parallax (https://motion.dev/tutorials/react-parallax), fade in/out, bounce, hide navbar on scroll
- using variants for staggered fade-in animations on TechCards was difficult - had to target the card component's outer div with ref then make it a motion component with motion.create() - not sure how to implement reusability atm
- parallex and blur adds depth and motion - key of good design is to immerse the user in the site https://motion.dev/docs/react-scroll-animations
- wanted to improve the dynamic nature of my portfolio which was lacking in v1

# javascript & react hook-based animations

- also mixed in native javascript and react-based animations for personal learning
- but motion seems to provide better performance due to inherit caching (right...?), and provides many other utilities for more animation variety and ease-of-implementation

# responsiveness

- kept one size apart between mobile and md viewport
- struggles with responsiveness of project cards - how to account for every slight change in viewport?
- hard keeping track of the effect that parent containers have on child properties (such as justify-between, which requires h-full/w-full on parent)

# typescript

- although not needed to explicitly state types for every component (like animations), i did for practice
- once i understood the basics of typescript, i could effectively look at the code for native react and next.js components and understand the BTS of how the components were made
- made Project type customisable with optional description and tag properties - makes project cards dynamic and unique

# components

- ensured animation components are as reusable as possible for future use
- ensured components are reusable via classes that can be targeted with its index
- a lot of the components in this project are overly configured to be reusable, too much for a simple portfolio site. But it was good for my learning and I can use in future projects.

# projects section

- i want to show my progress as a student developer, so i opted for a timeline-like approach
- showcase segment is for the main projects i want to show - so employers can quickly scan my main projects
- yearly segments are all major projects i made by year - for those wanting to delve deeper

# design

- worked on providing depth and a variety of typography (like opacity, font size, color) to emphasize certain elements - my v1 portfolio was very static and samey
- used https://uicolors.app/generate/d8565f to generate brand color pallete - used tailwind classes for other colors

# snap scrolling

- implemented horizontal snap scrolling on projects section - ux friendly
- implemented site-wide, snap-based vertical scrolling, but its quite finicky...its good for this site because pages take up max full screen height, but is it worth the UX harm?

# progress bar for horizontal scrolling

- used Cursor for implementation of complex functionality (such as click to scroll to section, filling bar with color based on scroll progress)
- instead of using Motion, I used the IntersectionObserver API to add conditional rendering and styling based on when the projects section comes into view https://dev.to/bcncodeschool/detecting-if-an-element-is-in-view-with-react-5b60
- could improve by having a vertical progress bar on the side of the entire section, so that when scrolling near the bottom the user will know which section they are on without having to scroll back up to see the progress bar
- implemented vertical progress bar, but it was unintuitive since it doesnt show that the user can scroll horizontally. ALSO, it was janky because the purpose of it was to allow the user to see the section structure even when scrolling to view projects that are outside of the progress bar's view, BUT it meant a fixed position which needed intersectionObserver API to show it when the projects section is in view...but it meant you could see the progress bar even when halfway onto the About section. Was very difficult to configure, so I ended up sticking to a simpler, horizontal bar.

# code comments

- customised Better Code Comments since I realised I needed a better system that suits my needs in regards to creating structured comments for explaining code

# navbar

- was coflicted about how the navbar should look and change according to scroll behaviour
- first it was a full width navbar that was hidden when scrolling down, but visible when scrolling up
- but was unintuitive and finecky, so got inspo from Motion's site which has a fixed navbar with a defined shape
- so created a new navbar that stayed visible but doesnt take up too much space
- and also changes background color depending on the scrollY position (done via React hooks)
