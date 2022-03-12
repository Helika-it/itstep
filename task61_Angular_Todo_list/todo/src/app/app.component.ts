import { Component } from '@angular/core';
import { Item } from './item';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title:string = ""; // особо не нужно (это для тестов)

    tasks:Item[] = [ // или tasks: Array<Item> = [ 
                    {title:"Сварить яйца", done: false},
                    {title:"Прочитать книгу по Javascript", done: false},
                    {title:"Сходить на работу", done: true}
                ];

    addTask(title:string):void{
        if(title != "")
            this.tasks.push({
                title: title,
                done: false
            })
    }

    //! счетчик задач выполненных и не выполненных
    countTasks(status: boolean): number{
      return this.tasks.filter(function(item:Item){
        return item.done == status;
      }).length;
    }

    //! метод для фильтрации по переданному параметру
    filterTasks(status: boolean):Item[]{
      return this.tasks.filter(function(item:Item){
          return item.done == status;
      })
  }

    //! смена статуса выполенная/не выполненная
    changeStatus(task:Item):void{
      task.done = !task.done;
    }
    
    //! удаление задачи
/*
    
    deleteTask(task:Item):void{
      let index:number = this.tasks.findIndex(function(item:Item) {
        item == task;
      });
      if(index !== -1){
          this.tasks.splice(index, 1);
        }
      }
*/    
       
       deleteTask(i:number):void{
        this.tasks.findIndex(function(item:Item) {
          //! Как дописать сортировку? Невыполненные удаляет. 
          
        });
        if(i !== -1){
        this.tasks.splice(i,1);
        }
      }
      

    //! редактирование задачи

}