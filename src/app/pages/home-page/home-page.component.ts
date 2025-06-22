import { afterRender, afterRenderEffect, Component, effect, OnInit, signal } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

const log = (...messages: string[]) => {
  console.log(`${messages[0]} %c${messages.slice(1).join(', ')}`, 'color: red');
}

@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {

  traditionalProperty = 'Marcelo';
  signalProperty = signal('Marcelo');

  constructor() {
    log('constructor llamado');

    // setTimeout(() => {
    //   this.signalProperty.set('Jonatan Fuentes');
    //   this.traditionalProperty = 'Pedro';
    // }, 2000);
  }

  changeTraditional(){
    this.traditionalProperty = 'Marcelo Fuentes';
  }

  changeSignal() {
    this.signalProperty.set('Marcelo Fuentes');
  }

  basicEffect = effect((onCleanup) => {
    log('effect', 'Disparar efectos secundarios');

    onCleanup(() => {
      log('onCleanup', 'Se ejecuta cuando el efecto se va a destruir');
    })
  });

  ngOnInit() {
    log(`ngOnInit`, `Runs once after Angular has initialized all the component's inputs.`);
  }

  ngOnChanges() {
    // se dispara cada vez que los inputs (señal de entrada) de un componente cambian
    log(`ngOnChanges`, `Runs every time the component's inputs have changed.`);
  }

  ngDoCheck() {
    log(`ngDoCheck`, `Runs every time this component is checked for changes.`);
  }

  ngAfterContentInit() {
    log(`ngAfterContentInit`, `Runs once after the component's content has been initialized.`);
  }

  ngAfterContentChecked() {
    log(`ngAfterContentChecked`, `Runs every time this component content has been checked for changes.`);
  }

  ngAfterViewInit() {
    log(`ngAfterViewInit`, `Runs once after the component's view has been initialized.`);
  }

  ngAfterViewChecked() {
    log(`ngAfterViewChecked`, `Runs every time the component's view has been checked for changes.`);
  }

  ngOnDestroy() {
    log('ngOnDestroy', 'Runs once before the component is destroyed.');
  }

  afterNextRenderEffect = afterRenderEffect(() => {
    log('afterNextRenderEffect', 'Runs once the next time that all components have been rendered to the DOM.');
  });

  afterEveryRenderEffect = afterRender(() => {
    log('afterEveryRenderEffect', 'Runs every time all components have been rendered to the DOM.');
  });



}
