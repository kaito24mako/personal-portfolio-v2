1. design - planning, style guide, theme
2. file structure - trouble with background img overlaying home page
3. Reason for using Next.js

# Prefetching:

- Prefetching is the process of loading a route in the background before the user navigates to it. This makes navigation between routes in your application feel instant, because by the time a user clicks on a link, the data to render the next route is already available client side.
- Next.js automatically prefetches routes linked with the <Link> component when they enter the user's viewport.
- static routes are fully prefetched and prerendered at build time - dynamic routes arent or are partially if loading.tsx is present
- Next.js automatically splits your application into smaller JavaScript chunks based on routes. Instead of loading all the code upfront like traditional SPAs, only the code needed for the current route is loaded. This reduces the initial load time while other parts of the app are loaded in the background. By the time you click the link, the resources for the new route have already been loaded into the browser cache.
- When navigating to the new page, there's no full page reload or browser loading spinner. Instead, Next.js performs a client-side transition (keeping any shared layouts and UI), making the page navigation feel instant.

# Motion

- learning basics
- performance hit on re-use of animations seem minimal to none - motion batches scroll updates, and a portfolio doesnt have too many elements
- researched modern scroll animations - parallax, fade in/out, bounce, hide navbar on scroll
- using variants for staggered fade-in animations on TechCards was difficult - had to target the card component's outer div with ref then make it a motion component with motion.create() - not sure how to implement reusability atm

# responsiveness

- kept one size apart between mobile and md viewport
- struggles with responsiveness of project cards - how to account for every slight change in viewport?
- hard keeping track of the effect that parent containers have on child properties (such as justify-between, which requires h-full/w-full on parent)

# typescript

- although not needed to explicitly state types for every component (like animations), i did for practice
- once i understood the basics of typescript, i could effectively look at the code for native react and next.js components and understand the BTS of how the components were made

# components

- ensured animation components are as reusable as possible for future use
- ensured components are reusable via classes that can be targeted with its array index
- some trouble figuring out just how customised a component should be - didnt want to overcomplicate it for myself

# projects section

- i want to show my progress as a student developer, so i opted for a timeline-like approach
- showcase segment is for the main projects i want to show - so employers can quickly scan my main projects
- yearly segments are all major projects i made by year - for those wanting to delve deeper

# design

- worked on providing depth and a variety of typography (like opacity, font size, color) to emphasize certain elements - my v1 portfolio was very static and samey
