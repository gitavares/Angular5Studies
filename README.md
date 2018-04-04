
# Angular5Studies
-> single page applications (SPA)

/*
Depending on the CLI version you're using, you might also need to add the FormsModule  to the imports[]  array in your app.module.ts  file (add it if you don't see it there). You might not fully understand what that all means but we're going to cover that in this course, no worries.

If you don't have FormsModule  in imports[]  in AppModule , please do add it and also add an import at the top of that file: import { FormsModule } from '@angular/forms'; 
*/

/*
If you want to dive deeper into the CLI and learn more about its usage, have a look at its official documentation: https://github.com/angular/angular-cli/wiki

You encountered issues during the installation of the CLI or setup of a new Angular project?

A lot of problems are solved by making sure you're using the latest version of NodeJS, npm and the CLI itself.

Updating NodeJS:

Go to nodejs.org and download the latest version - uninstall (all) installed versions on your machine first.

Updating npm:

Run [sudo] 
> npm install -g npm
(sudo  is only required on Mac/ Linux)

Updating the CLI

[sudo] 
> npm uninstall -g angular-cli @angular/cli 

> npm cache clean 

[sudo] 
> npm install -g @angular/cli 

Here are some common issues & solutions:

Creation of a new project takes forever (longer than 3 minutes)
That happens on Windows from time to time => Try running the command line as administrator
You get an EADDR error (Address already in use)
You might already have another ng serve process running - make sure to quit that or use ng serve --port ANOTHERPORT  to serve your project on a new port
My changes are not reflected in the browser (App is not compiling)
Check if the window running ng serve  displays an error. If that's not the case, make sure you're using the latest CLI version and try restarting your CLI
*/

https://github.com/angular/angular-cli/wiki

/* installing Angular CLI */
> npm install -g @angular/cli

/* Generating and serving an Angular project via a development server Create and run a new project: */
> ng new my-project
> cd my-project
> ng serve

/* Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files. */ 

/* Bundling

All builds make use of bundling, and using the --prod flag in ng build --prod or ng serve --prod will also make use of uglifying and tree-shaking functionality. 
*/

/* Running unit tests */
> ng test

/* installing boostrap v 3 */
> npm install --save boostrap@3
OBS: for installing the late version, just run:
> npm install --save bootstrap
/* but the sintaxe is different for this course */

/* to generate a new component automatically */
> ng generate component COMPONENT_NAME
or
> ng g c COMPONENT_NAME

/* to NOT generate the tests modules when create a component */
> ng g c COMPONENT-NAME --spec false

/* to create a component in a determined folder */
> ng g c FOLDERPATH/COMPONENT-NAME <OPTIONS>

/* Angular debugger -> add a chrome extension called Augury 
*/

/* to generate a new directive automatically */
> ng generate directive DIRECTIVE_NAME
or
> ng g d DIRECTIVE_NAME

/* to install firebase on the application */
> npm install --save firebase

/* to build the app */
> ng build --prod --aot

/* to set a base href to the app by default. In this example, the base-href will be /my-app/ */
> ng build --prod --base-href /my-app/
ATTENTION!!!
--> it would create a folder called 'dist'. The content of this folder is that one that should be on the app hosting.

/* to build the app server, set 1 on index, because the angular-cli has the server info on index 1, right after index 0 corresponding to the app client */
> ng build --prod --app 1

/* On package.json I can configurate a run using any of the "scripts" config. Example bellow */
> npm run build:ssr
/* build:ssr is setting up on package.json on 01-ng-universal... project with this: "build:ssr": "ng build --prod && ng build --prod --app 1 --output-hashing=none" */

/* imports redux to the application */
> npm install --save @ngrx/store

/* to install the Effects package */
> npm install --save @ngrx/effects

/* to install the Router Store package */
> npm install --save @ngrx/router-store

/* to install the Store Dev Tools package */
> npm install --save @ngrx/store-devtools
---> this need a Chrome extension: Redux DevTools



-------------------

With the release of Angular 4, the general syntax of Angular Animations didn't change. 

However, the animation functions were moved into their own package and you now also need to add a special module to your imports[]  array in the AppModule.

Specifically, the following adjustments are required:

You probably need to install the new animations package (running the command never hurts): npm install --save @angular/animations 
Add the BrowserAnimationsModule  to your imports[]  array in AppModule
This Module needs to be imported from @angular/platform-browser/animations'  => import { BrowserAnimationsModule } from '@angular/platform-browser/animations'  (in the AppModule!)
You then import trigger , state , style  etc from @angular/animations  instead of @angular/core 
That's all!

----------------------

Official Github Repo with Documentation: https://github.com/ngrx/platform

Angular & NgRx Tutorial: https://blog.nrwl.io/using-ngrx-4-to-manage-state-in-angular-applications-64e7a1f84b7b

NgRx Patterns & Techniques: https://blog.nrwl.io/ngrx-patterns-and-techniques-f46126e2b1e5


