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

Run [sudo] npm install -g npm  (sudo  is only required on Mac/ Linux)

Updating the CLI

[sudo] npm uninstall -g angular-cli @angular/cli 

npm cache clean 

[sudo] npm install -g @angular/cli 

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
