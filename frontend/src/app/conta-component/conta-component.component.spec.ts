import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContaComponent } from './conta-component.component';




describe('ContaComponentComponent', () => {
  let component: ContaComponent;
  let fixture: ComponentFixture<ContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
