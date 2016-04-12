/**
 * Created by John on 4/12/16.
 */
import {Component} from "angular2/core";
@Component({
    selector: 'shop-item',
    template: `<div>
                    <input type="text" #it/>
                   <button (click)="addIt(it)">Add Item</button>
                </div>`
})

export class ShopItem {
    constructor() {
    }

    addIt(item) {
        console.log(item.value);
        item.value = '';
    }
}