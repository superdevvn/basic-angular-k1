
import { Component,Input,EventEmitter,Output} from '@angular/core';
@Component({
    selector:'input-control',
    templateUrl :'./input.control.html'
})
export class InputControlComponent{
    @Input() label:string;
    @Input() model:string;
    @Input() type:string;
    @Output() modelchange =  new EventEmitter<string>();
    ngOnInit(){
        this.type = this.type || "text";
    }
    change(){
        this.modelchange.emit(this.model);
    }
}
