import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.scss'],
})
export class EstadoComponent  implements OnInit {

  constructor(private toastController: ToastController) { }
  guardarEstadoCivil() {

    this.mostrarToast('Estado civil guardado correctamente.');
  }

  async mostrarToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, 
      position: 'bottom' 
    });
    toast.present();
  }

ngOnInit() {}
}


