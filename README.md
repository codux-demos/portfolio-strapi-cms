# portfolio-strapi-cms

## first run

after git clone  
in the root run:  
`npm i`  
`node create-env.cjs` or provide a port, for example `node create-env.cjs 8080` to run strapi on port 8080. It runs on 5000 by default.
`npm run start:server:dev`

in a different terminal run  
`npm run start:client:dev`

and you're good to go  
in the browser go to `http://localhost:5000/admin` and create an admin user so you can edit use your local CMS

currently, we do not add the local DB to the repo so for the client app to be able to read the data you need to set read permissions to public.  
in the Admin go to settting -> USERS & PERMISSIONS PLUGIN.Roles -> Public ->  
in Project, ProjectItem, and About check find and findOne.

## stack

- [strapi](https://docs.strapi.io/): to store our content and serve it to the client app
- [vite](https://vitejs.dev/): a front end development environment to build our client app
- [npm](https://docs.npmjs.com/cli/v10/using-npm/workspaces): to create a monorepo and manage dependencies
- [eslint](https://eslint.org/): to avoid mistakes by static analysis of the code
- [vitest](https://vitest.dev/guide/): to write and run unit tests
- [faker](https://fakerjs.dev/): to generate mock content. both for codux boards and unit tests
- [SWR](https://swr.vercel.app/docs/getting-started): to cache content in the client app, to fetch new content every once in a while (polling).  
  And to have a simple api between the content cache and react components.
- [react router](https://reactrouter.com/en/main): to create multiple routes (pages) and navigate between them
- [scss](https://sass-lang.com/guide/) [modules](https://github.com/css-modules/css-modules): to write scoped css with more ease
- [radix-ui navigation menu](https://www.radix-ui.com/primitives/docs/components/navigation-menu): to create an accessible site navigation menu. this component comes unstyled
- [floatin-ui](https://floating-ui.com/docs/react): to position floating elements, like sub-menus, tooltips, popovers, etc.
- [framer motion](https://www.framer.com/motion/animation/): to create animations 

## concepts

### why use fake data in boards

most of our codux boards are wrapped in a context provider that returns mock data (using faker) instead of fetching it from Strapi.  
we do it for a few reasons

- it allows us to test and design components without adding data in Strapi (or anywhere else).
- we don't need to have Strapi hosted somewhere or running locally to work on the client app.
- it allows us to create boards for different scenarios: very long text, very short text, different numbers of items, etc.
- we can use our boards in tests

### using Strapi types in the client app

there are two reasons to use types generated from Strapi schemas in the client app

1. to avoid writing the types by hand
2. to guard against changes in Strapi schemas (typescript will fail if Strapi schema changed)

there are a few ways to achieve this. Unfortunately, there isn't an official one yet.  
We chose the way described in this [Strapi blog post](https://strapi.io/blog/improve-your-frontend-experience-with-strapi-types-and-type-script) with some changes.  
what happens:

1. Strapi auto generates a `contentTypes.d.ts` file. which has all the types but not in a way that is usable by the client app
2. we export it in the strapi module see `strapi/package.json` => `"types": "types/generated/contentTypes.d.ts"`
3. we added a `strapi-types.ts` file which imports the strapi module types and uses them to create the correct types for our app (this is code copy-pasted from the blog post + some fixes)
4. we can use the types exported by the `strapi-types.d.ts` across our client

The main problem with this approach is that it is our responsibility to maintain the code in `strapi-types.ts`...  
Hopefully, one day Strapi will add this feature

## boards
most of our components need a context to run in.  
one context for the router and another for the data.  
for that reason we have to wrap our components in the boards with context providers

#### router
because in codux our app runs inside an iframe we have to use a [`memory router`](https://reactrouter.com/en/main/routers/create-memory-router) instead of a [`browser router`](https://reactrouter.com/en/main/routers/create-browser-router) in the real `App`  
but we can and should use the real [routes](packages/client/src/router/routes.tsx) for page boards.
for simple componenet boards we still should provide a router context, otherwise if there is a `Link` in the component it will throw an error. but we don't use real routes, we add a fake route
pointint to the component we want to render in the board.

 #### data
we have two options here:
1. to use the same API provider as the `App` that fetches the data from strapi (local server or remote depending on the env variables in the [codux config](codux.config.json) )
2. to use a fake API provider that generates fake data without actually fetching anything.

### board Wrapper components
so we have 3 types of boards wrapper components:
1. [`ComponentWrapper`](packages/client/src/_codux/board-wrappers/ComponentWrapper.tsx) used for simple components. with fake data and fake routes (links won't throw but won't work either)
2. [`PageWrapper`](packages/client/src/_codux/board-wrappers/PageWrapper) used for page components. with fake data and real routes (links will work)
3. [`RealDataWrapper`](packages/client/src/_codux/board-wrappers/RealDataWrapper) used for the App board. with real data and real routes (works only if you have the local strapi server running or the env variables in the codux config point to a remote server).

you can, ofcourse, change / add wrappers as it is convinient for you.

