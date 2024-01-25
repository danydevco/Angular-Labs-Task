import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'task';

    tasks = [
        {id: 1, name: 'Tarea #1', description: 'Hacer la compra'},
        {id: 2, name: 'Tarea #2', description: 'Estudiar Angular'},
    ];

    newTask(task: any) {
        task.id = this.tasks.length + 1;
        this.tasks.push(task);
    }

    delete($event: any) {
        console.log($event);
        this.tasks = this.tasks.filter((task: any) => task.id !== $event.id);
    }
}
