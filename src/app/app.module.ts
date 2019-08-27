import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { CustomSerializer } from './shared/utils';
import { RouterState } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      router: routerReducer
    }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router'}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide: RouterState, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
