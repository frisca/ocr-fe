/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormElementsService } from './form-elements.service';

describe('Service: FormElements', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormElementsService]
    });
  });

  it('should ...', inject([FormElementsService], (service: FormElementsService) => {
    expect(service).toBeTruthy();
  }));
});
