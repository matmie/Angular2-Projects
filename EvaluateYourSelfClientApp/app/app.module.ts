import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LearningComponent } from './learning/learning.component';
import { DropdownComponent } from './learning/ng2-bootstrap/dropdown/dropdown.component'
import { ButtonComponent } from './learning/ng2-bootstrap/button/button.component'

@NgModule({
    imports :      [
                        BrowserModule,
                        FormsModule
                   ],
    declarations : [
                        AppComponent,
                        ButtonComponent,
                        DropdownComponent,
                        FooterComponent,
                        HeaderComponent,
                        LearningComponent
                   ],
    bootstrap :    [
                        AppComponent
                   ],
    providers :    [
                    
                   ]
})
export class AppModule {}