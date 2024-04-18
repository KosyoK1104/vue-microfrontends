# Vue microfrontends
This is a simple example of how to create a microfrontend architecture using Vue.js.

## Applications
- **root-config**: The main application that will load the other applications. It uses the `single-spa` library to load the other applications. It exposes a `eventDispatcher` object that can be used to communicate between the applications.
- **navbar**: A simple navbar that will be loaded by the root-config.
- **notifications**: A simple notifications application that will be loaded by the root-config. It exposes a `useNotifications` composable that can be used to show notifications in the root-config, which dispatches the event to the notifications' application.
- **app-one**: A simple application that will be loaded by the root-config.
- **app-two**: A simple application that will be loaded by the root-config.

## Running the applications
1. Install all the dependencies in each application by running `npm install` in the root of each application.
2. Run `./start-all.sh` to start all the applications.

## Accessing the applications
To access the applications, open your browser and go to http://localhost:9000. This will load the root-config application, which will load the other applications.

## Communication between applications
The applications communicate with each other using the `eventDispatcher` object exposed by the root-config application. The `eventDispatcher` object is rxjs based and can be used to send and receive events between the applications.

## Concerns
- The applications should not have hmr and liveReloaded enabled at the same time. This can cause issues with the applications not being able to not load properly.
- The applications should not have the same port. This can cause issues with the applications not being able to load properly.
- The applications should not have the same name. This can cause issues with the applications not being able to load properly.