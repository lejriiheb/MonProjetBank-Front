import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailCompteComponent } from './detail-compte/detail-compte.component';

const tableRoutage = [
  {path: 'comptes', component: ContentComponent},
  {path: '', component: WelcomeComponent},
  {path: 'comptes/:id', component: DetailCompteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    WelcomeComponent,
    DetailCompteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(tableRoutage)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
