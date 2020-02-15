import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public mainForm: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  public getYValue() {
    return this.form.controls.yValue.value;
  }

  public get form() {
    return this.mainForm;
  }

  public getRadius(): number {
    return this.form.controls.radius.value;
  }

  public submitForm(): void {
    if (this.form.invalid) {
      return;
    }
  }

  private createForm(): void {

    const validators = {
      xValueValidators: [Validators.required, Validators.min(-3), Validators.max(3)],
      radiusValidators: [Validators.required, Validators.min(0), Validators.max(3)]
    };

    this.mainForm = new FormGroup({
      xValue: new FormControl('', validators.xValueValidators),
      yValue: new FormControl(50),
      radius: new FormControl('', validators.radiusValidators)

    });
  }

}
