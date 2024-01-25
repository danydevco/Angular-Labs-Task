import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-new-task',
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
    @Output() newTask: EventEmitter<any> = new EventEmitter();

    task: { id: number, name: string, description: string } = {
        id: 3,
        name: 'nueva tarea',
        description: 'descripcion de la nueva tarea'
    };

    create() {
        this.newTask.emit(this.task);
    }



}
