import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = new FormGroup ({
    name: new FormControl(''),
    email: new FormControl(''),
    title: new FormControl(''),
    message: new FormControl('')
  });

  successMessage: string = '';
  errorMessage: string = '';

  sendEmail(event: Event) {
    event.preventDefault();

    this.successMessage = '';
    this.errorMessage = '';

    emailjs.sendForm('service_dihnj7j', 'template_rszz53z', event.target as HTMLFormElement, 'xbnQBpC_nXubH7Wyu')
      .then(() => {
          emailjs.send('service_dihnj7j', 'RESPONSE_TEMPLATE_ID', {
          name: this.contactForm.value.name,
          email: this.contactForm.value.email
        }, 'xbnQBpC_nXubH7Wyu');
        this.successMessage = 'Email enviado correctamente';
        this.contactForm.reset();
      }, (error) => {
        this.errorMessage = 'Hubo un error: ' + error.text;
      });
  }
}
