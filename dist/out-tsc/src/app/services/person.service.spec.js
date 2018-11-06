import { TestBed } from '@angular/core/testing';
import { PersonService } from './person.service';
describe('PersonService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PersonService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=person.service.spec.js.map