import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ModulePickerService, SelectedModule} from './module-picker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  moduleSelector = new FormControl(SelectedModule.M1);

  constructor(private service: ModulePickerService) {

  }

  ngOnInit(): void {
    this.moduleSelector.valueChanges.subscribe(value => {
      this.service.setModule(value);
    });
  }


}
