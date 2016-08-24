# Plugin Directory

A template for plugin directories made by npm tags

## What Is It?

If you have a project that accepts plugins, it's often useful for users to be able to search for relevant plugins. Setting up your own plugin registry, however, is a huge pain. An easier way is to just specify a **unique npm tag** that plugin authors should use when publishing, then pull a filtered list of packages with this tag. That's exactly what this project does.

This base template uses [reshape](https://github.com/reshape) plugins as an example. However, you can easily switch this in the `app.js` file by changing the variable names.

- `name`: name of your package (used for page title, blacklist, links, and plugin tag)
- `links`: links to your project's github, gitter chatroom, and plugin docs
- `blacklist`: list of plugin names to be ignored from the list

## What Does it Look Like?

<img src='http://files.jenius.im/_/Jpd4mAR.png'>

## Setup

- make sure [node.js](http://nodejs.org) is at version >= `6`
- `npm i spike -g`
- clone this repo down and `cd` into the folder
- run `npm install`
- run `spike watch` or `spike compile`

## Keeping Up To Date

This is a fully static site, meaning that it loads instantly, but does not pull fresh from the API on every user load. We recommend hosting it on [netlify](https://netlify.com) and running a short script to recompile it once a day or so. You can do this with a simple cron job that pings the netlify webhook daily.

## License

Licensed under [MIT](license.md)
