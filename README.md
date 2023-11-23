# portfolio-strapi-cms

## first run

after git clone  
in the root run:  
`npm i`  
`node packages/strapi/create-env.js`  
`npm run start:server:dev`

in a different terminal run  
`npm run start:client:dev`

and you're good to go  
in the browser go to `http://localhost:5000/admin` and create an admin user so you can edit use your local CMS

currently we do not add the local DB to the repo so for the client app to be able to read the data you need to set read permissions to public.  
in the Admin go to settting -> USERS & PERMISSIONS PLUGIN.Roles -> Public ->  
in Project, ProjectItem and About check find and findOne.

## stack
- strapi: to store our content and serve it to the client app
- vite: a front end development environment to build our client app
- npm: to create a monorepo and manage dependencies
- eslint: to avoid bugs by static analysis of the code
- vitest: to write and run unit tests
- faker: to generate mock content. both for codux boards and unit tests
- SWR: to cache content in the client app, to fetch new content every once in a while (polling).  
  And to have a simple api between the content cache and react components.  
- react router: to create multiple routes (pages) and navigate between them
