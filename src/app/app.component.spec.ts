import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let el: HTMLElement;

  const buttons = () => Array.from(el.querySelectorAll('button')) as HTMLButtonElement[];
  const click = (b: HTMLButtonElement) => {
    b.click();
    fixture.detectChanges();
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    el = fixture.nativeElement as HTMLElement;
  });

  it('should create the app', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it(`should have the 'persiana' title`, () => {
    expect(fixture.componentInstance.title).toEqual('persiana');
  });

  it('should render title', () => {
    expect(el.querySelector('h1')?.textContent).toContain('CONTROL DE VIVIENDA');
  });

  it('should start with everything off and the blind closed', () => {
    expect(el.textContent).toContain('DESCONECTADA');
    expect(el.textContent).toContain('PERSIANA CERRADA');
    expect(buttons()[2].disabled).toBeTrue();
  });

  it('should keep the blind disabled with only one power on', () => {
    click(buttons()[0]);
    expect(buttons()[2].disabled).toBeTrue();
    click(buttons()[0]);
    click(buttons()[1]);
    expect(buttons()[2].disabled).toBeTrue();
  });

  it('should enable the blind with both powers on and report its state', () => {
    click(buttons()[0]);
    click(buttons()[1]);
    expect(buttons()[2].disabled).toBeFalse();

    click(buttons()[2]);
    expect(el.textContent).toContain('PERSIANA ABIERTA');

    click(buttons()[2]);
    expect(el.textContent).toContain('PERSIANA CERRADA');
  });
});
