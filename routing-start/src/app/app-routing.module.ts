import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },  //localhost:4200/users
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ] },
    { path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ] },
    // { path: 'not-founf', component: PageNotFoundComponent },
    { path: 'not-founf', component: ErrorPageComponent, data: {message: 'Page not found'} },
    { path: '**', redirectTo: '/not-found' } //must be the last rout of this list, bcz it will redirect to not found route instead
  ];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true}) //put a # before the url route folder. this can solve problems about path when we have different urls
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}