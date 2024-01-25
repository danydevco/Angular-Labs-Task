import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-list-task',
    templateUrl: './list-task.component.html',
    styleUrl: './list-task.component.scss'
})
export class ListTaskComponent implements OnInit{
    @Input() tasks: any = [];
    @Output() deleteTask: EventEmitter<any> = new EventEmitter()

    ngOnInit(): void {
        console.log(this.tasks)
    }

    delete(task: any) {
        this.deleteTask.emit(task);
    }

}
