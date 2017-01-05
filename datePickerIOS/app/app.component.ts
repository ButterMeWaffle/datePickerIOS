import { Component } from "@angular/core";
import { DatePicker } from "ui/date-picker";
import datePickerModule = require("ui/date-picker");

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;
    public date: string;
    
    
    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }
    public alertValue = () => {
        
        alert("the value shound be right here -> " + this.date)
    }
}
