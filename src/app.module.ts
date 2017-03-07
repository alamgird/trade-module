import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TradeModule } from './app/trade.module';
import { TradeComponent } from './app/trade.component';

@NgModule({
  imports: [
    BrowserModule,
    TradeModule
  ],
  bootstrap: [TradeComponent]
})
export class AppModule { }
