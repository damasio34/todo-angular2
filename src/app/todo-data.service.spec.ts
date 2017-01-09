import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { TodoDataService } from './todo-data.service';

describe('TodoData Service', () => {
  beforeEachProviders(() => [TodoDataService]);

  it('should ...',
      inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));
});
