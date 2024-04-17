// imagen.component.ts

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
    // Aquí puedes implementar la lógica para enviar la foto al servidor
    if (this.imageUrl && this.fileName) {
      console.log('Nombre del archivo:', this.fileName);
      // Aquí puedes obtener el archivo de imagen como blob
      // const imageBlob = this.dataURItoBlob(this.imageUrl.changingThisBreaksApplicationSecurity);
      // Luego puedes enviar el archivo de imagen y el nombre al servidor
    }
  }

  // Función para convertir una URL de datos en un Blob (si es necesario)
  // dataURItoBlob(dataURI: string): Blob {
  //   const byteString = atob(dataURI.split(',')[1]);
  //   const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  //   const ab = new ArrayBuffer(byteString.length);
  //   const ia = new Uint8Array(ab);
  //   for (let i = 0; i < byteString.length; i++) {
  //     ia[i] = byteString.charCodeAt(i);
  //   }
  //   return new Blob([ab], { type: mimeString });
  // }
}
