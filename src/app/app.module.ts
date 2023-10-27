import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { PageModule } from "./pages/page.module";
import { ComponentsModule } from "./components/components.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import reducers from "./store/ActionReducerMap.reducers";
import { combinedEffects } from "./store/combined.effect";
import { HttpClientModule } from "@angular/common/http";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { NgxSpinnerModule } from "ngx-spinner";
import { storeFreeze } from 'ngrx-store-freeze';
import { localStorageSync } from 'ngrx-store-localstorage';

const localStorageSyncConfig = {
  keys: ['user'],
  rehydrate: true,
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    PageModule,
    ComponentsModule,
    BrowserAnimationsModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    StoreDevtoolsModule,
    EffectsModule,
    NgxSpinnerModule,
    StoreModule.forRoot(reducers, {
      metaReducers: [
        localStorageSync(localStorageSyncConfig),
        storeFreeze
      ]
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(combinedEffects),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
