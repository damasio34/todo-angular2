System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";this||self;return b.environment={production:!0},c.exports}),System.registerDynamic("app/todo.js",[],!0,function(a,b,c){"use strict";var d=(this||self,function(){function a(a){void 0===a&&(a={}),this.title="",this.complete=!1,Object.assign(this,a)}return a}());return b.Todo=d,c.exports}),System.registerDynamic("app/todo-data.service.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=(this||self,this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}),e=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},f=a("@angular/core"),g=function(){function a(){this.lastId=0,this.todos=[]}return a.prototype.addTodo=function(a){return a.id||(a.id=++this.lastId),this.todos.push(a),this},a.prototype.deleteTodoById=function(a){return this.todos=this.todos.filter(function(b){return b.id!==a}),this},a.prototype.updateTodoById=function(a,b){void 0===b&&(b={});var c=this.getTodoById(a);return c?(Object.assign(c,b),c):null},a.prototype.getAllTodos=function(){return this.todos},a.prototype.getTodoById=function(a){return this.todos.filter(function(b){return b.id===a}).pop()},a.prototype.toggleTodoComplete=function(a){var b=this.updateTodoById(a.id,{complete:!a.complete});return b},a=d([f.Injectable(),e("design:paramtypes",[])],a)}();return b.TodoDataService=g,c.exports}),System.registerDynamic("app/todo-angular2.component.js",["@angular/core","./todo","./todo-data.service"],!0,function(a,b,c){"use strict";var d=(this||self,this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}),e=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},f=a("@angular/core"),g=a("./todo"),h=a("./todo-data.service"),i=function(){function a(a){this.todoDataService=a,this.newTodo=new g.Todo}return a.prototype.addTodo=function(){this.todoDataService.addTodo(this.newTodo),this.newTodo=new g.Todo},a.prototype.toggleTodoComplete=function(a){this.todoDataService.toggleTodoComplete(a)},a.prototype.removeTodo=function(a){this.todoDataService.deleteTodoById(a.id)},Object.defineProperty(a.prototype,"todos",{get:function(){return this.todoDataService.getAllTodos()},enumerable:!0,configurable:!0}),a=d([f.Component({moduleId:c.id,selector:"todo-angular2-app",templateUrl:"todo-angular2.component.html",styleUrls:["todo-angular2.component.css"],providers:[h.TodoDataService]}),e("design:paramtypes",[h.TodoDataService])],a)}();return b.TodoAngular2AppComponent=i,c.exports}),System.registerDynamic("app/index.js",["./environment","./todo-angular2.component"],!0,function(a,b,c){"use strict";var d=(this||self,a("./environment"));b.environment=d.environment;var e=a("./todo-angular2.component");return b.TodoAngular2AppComponent=e.TodoAngular2AppComponent,c.exports});