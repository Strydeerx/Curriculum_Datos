import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.scss'],
})
export class ImagenComponent  implements OnInit {
  perfilForm: FormGroup;
  fileName: string = '';
  imageUrl: SafeUrl | null = null;

  constructor(private sanitizer: DomSanitizer, private fb: FormBuilder) {
this.perfilForm=fb.group({

  name:['',[Validators.required,Validators.pattern('[A-Za-z]+')]],
  ApellidP:['',[Validators.required,Validators.pattern('[A-Za-z]+')]],
  ApellidM:['',[Validators.required,Validators.pattern('[A-Za-z]+')]],
  Email:['', [Validators.required,Validators.email, Validators.pattern('[a-z0-9]+@gmail.com')]],
  Phone: ['',[Validators.required, Validators.pattern('[0-9]+')] ],
  PhoneH: ['', [Validators.required, Validators.pattern('[0-9]+')]],


});

   }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit() {
    if (this.imageUrl && this.fileName) {
      console.log('Nombre del archivo:', this.fileName);
    }
  }

  ngOnInit() {}

}
