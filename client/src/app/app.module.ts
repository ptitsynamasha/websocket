import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {ChatPageComponent} from './chat-page/chat-page.component';
import {AppRoutingModule} from "./app-routing.module";
import {LoaderComponent} from "./shared/components/loader/loader.component";
import {GravatarDirective} from "./shared/directive/gravatar.directive";

const config: SocketIoConfig = {url: 'ws://localhost:3000', options: {}};


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ChatPageComponent,
    LoaderComponent,
    GravatarDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
