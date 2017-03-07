import { Component } from '@angular/core';

@Component({
  selector: 'app-trade',
  template: `
    <div>
      <h1>{{ title }}</h1>
    </div>
  `,
  styles: [`
    h1 {
      text-align: 'center';
    }
  `]
})
export class TradeComponent {
  title = 'trade app works!';
}
