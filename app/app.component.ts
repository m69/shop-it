import {Component} from 'angular2/core';
import {ShopFooter} from './shop-footer';

@Component({
    selector: 'shop-it',
    directives: [ShopFooter],
    template: ` <h1>Shop It!</h1>
                <div>
                    <input type="text" #item/>
                    <button (click)="addItem(item)">Add Item</button>
                </div>
                <div>
                <ul>
                    <li *ngFor="#row of items">
                        {{row}}
                    </li>
                </ul></div>
                <shop-footer></shop-footer>`
})
export class AppComponent { 
    items: Array<string>;
    constructor() {
        this.items = [];
    }

    addItem(item: HTMLInputElement) {
        this.items.push(item.value);
        item.value = '';
    }
}
