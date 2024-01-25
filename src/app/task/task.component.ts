import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit{
    @Input() task:{name?: string, description?: string } = {};
    @Output() deleteTask: EventEmitter<any> = new EventEmitter();

    ngOnInit(): void {
        console.log(this.task);
    }

    delete(task: any) {
        this.deleteTask.emit(task);
    }

}
