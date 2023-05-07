import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private loadingService: FakeLoadingService){}

  email = new FormControl('');
  password = new FormControl('');
  // 8.videó
  async login(){
    //Promise
    this.loadingService.loadingWithPromise(this.email.value as any, this.password.value as any).then((_: boolean) => {
      this.router.navigateByUrl('/main');
    }).catch(error => {
      console.error(error, 'Incorrect email or password');
    }).finally(() => {
      console.log('this is executed finally.');
    });

    //szinkron: async-await
    try{
      const _ = await this.loadingService.loadingWithPromise(this.email.value as any, this.password.value as any);
      this.router.navigateByUrl('/main');
    } catch (error) {
      console.error(error, 'Incorrect email or password');
    }
    console.log('this is executed finally.');

    
  }

}
