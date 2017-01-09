import { beforeEachProviders, describe, expect, it, inject } from '@angular/core/testing';
import { TodoAngular2AppComponent } from '../app/todo-angular2.component';

beforeEachProviders(() => [TodoAngular2AppComponent]);

describe('App: TodoAngular2', () => {
    it('should create the app',
        inject([TodoAngular2AppComponent], (app: TodoAngular2AppComponent) => {
            expect(app).toBeTruthy();
        }));

});
