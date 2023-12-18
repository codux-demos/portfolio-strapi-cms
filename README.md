# portfolio-strapi-cms

This Strapi-powered, Single Page Application (SPA) project, a professional interior design portfolio app built with the help of Codux, showcases Codux's capabilities and educates on advanced concepts through the technologies used.

Refer to the [Codux help center](https://help.codux.com/kb/en/article/kb16216) for more information.

## Initial Setup

By default, the client is pre-configured to interface with Wix Strapi's hosted server.

Following a Git repository clone, navigate to the project directory and execute:

`yarn`

`yarn start:client:dev`

This starts the development environment where you can browse the portfolio site.

Alternatively, you can open Codux for a visual workflow.

## Running a Local Strapi Server

Execute `node create-env.cjs`, optionally specifying a port (e.g., `node create-env.cjs 8080` for port 8080) to initialize a local Strapi server instance, which defaults to port 5000.

The script accomplishes the following:

- Generates a `.env` file inside the Strapi package.
- Produces `.env.development.local` within the client package (update `.env` when deploying Strapi server to the desired domain).
- Creates a random project identifier in `strapi/package.json`.

To activate the local Strapi server, run `yarn start:server:dev`, then visit the Strapi management console and proceed with the setup.

In a separate console, run `yarn start:client:dev` to launch the client web application.

### Codux Integration with Local Strapi

Amend the environment variables in `codux.config.json` to align with the contents of your `.env.local` file to direct Codux to the local Strapi server. Refer to [Setting Environment Variables for Your Project](https://help.codux.com/kb/en/article/kb37722) for more information on this configuration key.

### Populating the Local Database

To import content to your local Strapi database, use the provided script in the project root:

```
yarn workspace @portfolio/strapi run strapi transfer --from https://determined-vitality-9514a6552e.strapiapp.com/admin --from-token b87a8467b27822083506c041a3cd24c32107cea7999bd6a00c6c672268e4b7dd53fc7920d3ffeed9d30d029103230f297890d3ff5948fe13a9fdc9711e12094388f4ae901a4634f2f175c191a6cf7be7c664570afc33345f51dc0765b3e0b517860ab5efdda8737a86fa119c080ae7ed16ef73f8b432474349b90672abe8e0d7 --only content,files
```

Note that this operation requires an unchanged Strapi schema and will erase existing data. It does not migrate administrative users or tokens, although your user credentials should remain functional. Ignore warnings about missing review workflows.

## Utility Scripts

- `yarn verify`: Executes lint and TypeScript checks.
- `yarn build`: Constructs both Strapi and the client.
- `yarn test`: Initiates tests in the client package (there are no Strapi tests).
- `yarn start:client:dev`: Runs the client in development mode.
- `start:server:dev`: Initiates Strapi in development mode.

Use `yarn start:client:dev --mode production` to resort to `.env` settings instead of `.env.development.local`. For further insights, refer to Vite documentation.

The project is structured as a monorepo with Yarn Workspaces. Execute scripts in Strapi or client packages via `yarn workspace @portfolio/strapi ...` and `yarn workspace @portfolio/client ...`, respectively. Consult the Yarn Workspaces documentation to learn more.

## Technology Stack

- [strapi](https://docs.strapi.io/): Manages and delivers content to the client app.
- [vite](https://vitejs.dev/): A modern tool for client-side application development.
- [yarn](https://classic.yarnpkg.com/en/docs/workspaces): Facilitates a monorepo and dependency management.
- [eslint](https://eslint.org/): Static code analysis to identify problematic patterns.
- [scss](https://sass-lang.com/guide/) [modules](https://github.com/css-modules/css-modules): Scoped CSS authoring made simple.
- [classnames](https://github.com/JedWatson/classnames): A utility for conditionally joining CSS class names together.
- [vitest](https://vitest.dev/guide/): Framework for writing and executing unit tests.
- [faker](https://fakerjs.dev/): Generates mock data for Codux boards and unit testing.
- [SWR](https://swr.vercel.app/docs/getting-started): Client-side data fetching, caching, and state management.
  And to have a simple api between the content cache and react components.
- [react router](https://reactrouter.com/en/main): Navigational component library for creating routes in React applications.
- [radix-ui navigation menu](https://www.radix-ui.com/primitives/docs/components/navigation-menu): Creates an accessible navigation menu without predefined styling.
- [floatin-ui](https://floating-ui.com/docs/react): Tool for positioning UI elements such as tooltips and popovers.
- [framer motion](https://www.framer.com/motion/animation/): A library for creating animations.

## Development Concepts

### Rationale for Mock Data

Most of the boards in this project are wrapped in a context provider (Faker) that returns mock data instead of fetching it from Strapi. Mocking data this way affords several benefits, including quicker UI design iterations, independence from a running Strapi instance, and the ability to model diverse data scenarios for component testing.

### Typing with Strapi

Leveraging types generated from Strapi schemas benefits the client app in two key ways:

1. It removes the repetitive nature of manually crafting types.
2. It provides a safeguard against changes in the Strapi schemas where TypeScript will alert you of inconsistencies.

Although Strapi doesn't provide an official method for this integration, we used the strategy delineated in their [blog post](https://strapi.io/blog/improve-your-frontend-experience-with-strapi-types-and-type-script), with a few modifications. Here's what happened:

1. Strapi auto generated a `contentTypes.d.ts` file with all the types, but not in a way that is usable by the client app.
2. We exported it in the Strapi module (`strapi/package.json` => `"types": "types/generated/contentTypes.d.ts"`).
3. We added a `strapi-types.ts` file which imports the Strapi module types and uses them to create the correct types for our app (code copy-pasted from the blog post with some fixes).
4. We used the types exported by the `strapi-types.d.ts` across our client.

The main problem with this approach is that it is now our responsibility to maintain the code in `strapi-types.ts`. Hopefully Strapi will one day add this feature.

## Boards

Components within Codux boards require appropriate context wrappers for routing and data.

#### Routing Context

In Codux applications, the routing setup can be complex due to the application running inside an iframe. Here’s how we handle it:

#####Memory Router
When our application is running inside an iframe, we use a [`memory router`](https://reactrouter.com/en/main/routers/create-memory-router) instead of a [`browser router`](https://reactrouter.com/en/main/routers/create-browser-router) like in the 'real' app. This approach ensures that the URL is kept in sync with the UI state within the iframe.

#####Page Boards
For page boards, we use the real routes. This allows us to leverage the full power of routing, including dynamic route matching and location transition handling.

#####Component Boards
For simple component boards, it’s still necessary to provide a router context. If there’s a `Link` in the component and we don’t provide a router context, it will throw an error. To handle this, we add a fake route that points to the component we want to render in the board.

#### Data Management

We have two strategies for handling data:

1. Mimic the client app’s real API provider, which retrieves actual data from Strapi. Refer to [Setting Environment Variables for Your Project](https://help.codux.com/kb/en/article/kb37722) for more information on this configuring `codux.config.json` for this purpose.
2. Use a mock API provider like Faker to generate fabricated data without relying on external data fetching.

### Board Wrapper Components

We used three types of wrapper components to encapsulate boards:

1. [`ComponentWrapper`](packages/client/src/_codux/board-wrappers/component-wrapper.tsx): Designed for simple components with mock data and simulated routing.
2. [`PageWrapper`](packages/client/src/_codux/board-wrappers/page-wrapper.tsx): Allocated for page components, blending mock data with authentic routing.
3. [`RealDataWrapper`](packages/client/src/_codux/board-wrappers/real-data-wrapper.tsx): Utilized for the full application board, necessitating a running local Strapi server or remote server configurations in the Codux settings for accurate data and routing.

You can, of course, change/add wrappers as is convenient for you.
