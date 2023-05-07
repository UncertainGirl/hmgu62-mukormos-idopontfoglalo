import { Component, OnInit } from '@angular/core';
import { Comment } from '../../shared/models/Comment';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit{

  commentObject: any = {}; //elvileg ki lehetne kommentelni
  comments: Array<any> = []; //comments: Array<Comment> = [];

  commentsForm =  this.createForm({
    username: '',
    comment: '',
    date: new Date()
  });

  constructor(private fb: FormBuilder, private router: Router){}
  
  ngOnInit(): void{}

  createForm(model: Comment){
    let FormGroup = this.fb.group(model);
    FormGroup.get('username')?.addValidators([Validators.required]);
    FormGroup.get('comment')?.addValidators([Validators.required, Validators.minLength(10)]);
    return FormGroup;
  }

  addComment(){
    if (this.commentsForm.valid){
      if(this.commentsForm.get('username') && this.commentsForm.get('comment')){
      this.commentsForm.get('date')?.setValue(new Date());

      //spread operátor
      this.comments.push({...this.commentsForm.value});
      this.router.navigateByUrl('/appointment/successful/' + this.commentsForm.get('username')?.value);
      }
    }
  }
}