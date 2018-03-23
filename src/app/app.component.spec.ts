import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { StubbedComponent, ComponentStub } from "ng-stubs";
import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  let greeterComponentStub: StubbedComponent<GreeterComponent>;

  beforeEach(async(() => {
    greeterComponentStub = ComponentStub(GreeterComponent)

    TestBed.configureTestingModule({
      declarations:
        [
          AppComponent,
          greeterComponentStub.type
        ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('binds the name to the greeter', () => {
    expect(greeterComponentStub.instance.name).toEqual(app.name);

    app.name = "Tester";
    fixture.detectChanges();

    expect(greeterComponentStub.instance.name).toEqual("Tester");
  });

  it('shows the greeter`s result', async(() => {
    greeterComponentStub.instance.greet.emit("Hi, Tester");
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css(".greeting")).nativeElement.textContent).toEqual("Hi, Tester");
  })

});
