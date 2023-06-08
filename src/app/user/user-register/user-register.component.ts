import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup;

  /* Local Storage */
  user!: User;
  userSubmitted: boolean | undefined;
  constructor(private fb: FormBuilder,
              private userService: UserService){}

  ngOnInit() {
  this.createRegistraionForm();
  }

  /*Validation using FormBuilder */
  createRegistraionForm() {
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword :[null, Validators.required],
      mobile : [null, [Validators.required, Validators.maxLength(10)]],
    }, {Validators: this.passwordMatchingValidator});
  }

  private passwordMatchingValidator(fg: FormGroup) {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? false :
    {notmatched : true};
  }

  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }

  get password(){
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this.userSubmitted = true;
    /* Values stored in Local storage */
    if(this.registrationForm.valid){
    this.userService.addUSer(this.userData())
    this.registrationForm.reset();
    this.userSubmitted = false;
    alert("User is saved successfully");
    }
    else {
      alert("Kindly provide required field");
    }
  }

  userData(): User {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }


}
