import { GetTodos} from './get-todos';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myClick = false;
  editPostID: string | undefined;
  title = 'Todo App';
  todos = [
  {
    Name: "Mark ",
    Task: "bring milk ",
    Status: "created",
    Deadline: "Monday, 12:00pm"
  },
  {
    Name: "Lizi ",
    Task: "clean the room ",
    Status: "in progress",
    Deadline: "Tuesday, 11:00am"
  },
  {
    Name: "Sandro ",
    Task: "Study for an exam ",
    Status: "done",
    Deadline: "Wednesday, 9:00am"
  }];
  editPost: GetTodos = {
    Name: '',
    Task: '',
    Status: '',
    Deadline: '',
  };

  createPostData: GetTodos = {
    Name: '',
    Task: '',
    Status: '',
    Deadline: '',
  };
  constructor(private productService: ProductService){}
  posts: GetTodos[] | undefined;

  ngOnInit(): void {
  }

  addTodoTask(newName: string, newTask: string, newStatus :string, newDeadline: string){
    var newTodo = {
      Name: newName,
      Task: newTask,
      Status: newStatus,     
      Deadline: newDeadline,

    };
    this.todos.push(newTodo);

  }
  selectedStatus: string ='';
  saveSelected(event: any){
    this.selectedStatus = event?.target.value;
  }
  
 //editPostID: number | undefined;
 
  deleteTodo(todo :GetTodos){
    this.todos = this.todos.filter(t=>t.Name !== todo.Name && t.Task !== todo.Task);
  }

  editTodo(todo: GetTodos) {
    // let name = this.todos[todo].Name;
    // let task = this.todos[todo].Task;
    // let status = this.todos[todo].Status;
    // let deadline = this.todos[todo].Deadline;
    //this.addTodoTask = post;
    this.editPost = todo;

  }
  
}
