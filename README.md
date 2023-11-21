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
in Project, ProjectItem and Todo check find and findOne.
