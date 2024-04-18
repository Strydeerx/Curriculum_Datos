import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.scss'],
})
export class ImagenComponent {
  fileName: string = '';
  imageUrl: SafeUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

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
}
