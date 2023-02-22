import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  // f = new FormGroup({
  //   name: new FormControl(''),
  //   last_name: new FormControl(''),
  //   email: new FormControl(''),
  //   tel: new FormControl(null),
  //   date: new FormGroup({
  //     day: new FormControl(null),
  //     time: new FormControl(null)
  //   }),
  //   extras: new FormArray([
  //     new FormGroup({
  //       name: new FormControl(''),
  //       email: new FormControl('')
  //     })
  //   ])
  // })

  times = [
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
  ]


  f = this.fb.group({
    name: ['', Validators.required],
    last_name: ['', Validators.required],
    email:  ['', Validators.required],
    tel:  ['', Validators.required],
    fulldate: this.fb.group({
      day: [(new Date().getDate()), Validators.required],
      month: [(new Date().getMonth()), Validators.required],
      time:  [(new Date()).getTime(), Validators.required]
    }),
    extras: this.fb.array([], Validators.required)
  })
  

  loading = false;

  constructor(private fb:FormBuilder, private bs:BookingService) {}
  
  ngOnInit(){}

  getFormControl(name:string) {
    return this.f.get(name) as FormControl
  }

  get extras() {
    return this.f.get("extras") as FormArray
  }


  addExtra() {
    const g = new FormGroup({
      eName: new FormControl("", Validators.required),
      eEmail: new FormControl("", Validators.required),
      eTel: new FormControl("", Validators.required)
    })
    this.extras.push(g)
    console.log(this.extras.controls);
    
  }

  submit() {
    console.log(this.f.value);
    this.loading = true;
    this.bs.addPrenotazione(this.f.value).subscribe(res=>{

    })
  }

}
