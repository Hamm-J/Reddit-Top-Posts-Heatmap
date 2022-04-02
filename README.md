# Reddit Top Posts Heatmap

## Description

Quickly find the best time and day of week to post on your favorite subreddit [right now!](https://reddit-top-posts-heatmap.netlify.app/)

### How To Use

This application allows the user to search for a subreddit of their choice and
then visualize the top posts from the last year in a heatmap. To further inspect
the posts the posts from a particular time, the user can simply click on that
heatmap cell.
If the user wishes to give their heatmap at a later date, the user
can simply: register an account, click the "save" button, and view their snapshots
at any time within the "Snapshots" page.

### Technologies

This is a React application built with stock `create-react-app` [TypeScript Template](https://create-react-app.dev/docs/adding-typescript/)
webpack and configuration. Styling
was handled using [styled-components](https://styled-components.com/) to allow for
dynamic state styling. The [Reddit API](https://www.reddit.com/dev/api/) HTTP
pipeline was handled with JavaScript's native [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/fetch). User registration and authentication is handled via [Firebase](https://firebase.google.com/), and CRUD database management is implemented with [Firestore](https://firebase.google.com/docs/firestore),
to facilitate fast deployment, efficient application scaling, and provide industry standard data security. The application is hosted with [Netlify](https://www.netlify.com/) for continuous deployment via Github integration and repository coupling.

### Future Features

- **Comment sentiment analysis**: In addition to the current data presented
  when inspecting a heatmap cell (i.e. number of upvotes), I plan to perform a
  sentiment analysis of each top posts' comment section to gauge if the posts'
  engagement is positive or negative. This information could inform the user
  as to which type of post to make on their selected subreddit.
- **Data downloading**: In addition to saving and revisualizing the top posts of a
  subreddit at a particular moment in time, I plan to allow the user to download
  the heatmap's data in the form of a CSV, JSON, etc..
- **Auto scraping**: News moves fast in some of Reddit's most popular subreddits.
  As such, the top 100 posts of these subreddits might fluctuate more frequently.
  To assist the user in getting the best sense of when to post on their subreddit,
  I plan to allow users to tag subreddits for auto-scraping, which will automatically
  save heatmap data on a selected time interval.
- **Search autocompletion**: Sometimes we need autocompletion to find the subreddit
  we desire. I plan to leverage the search auto-complete API Reddit provides to
  generate a dropdown of subreddits that the user might be in the process of inputting.
- **Convert to local time**: Currently, the Heatmap displays the day and time in terms
  of [Unix Time](https://en.wikipedia.org/wiki/Unix_time), as the Reddit API is set in.
  I plan to to leverage the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
  to convert the Heatmap's time to the user's local time.

## License

This project is licensed under the MIT License.
