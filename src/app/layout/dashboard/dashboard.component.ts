import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'Hotelaria',
                text:
                    'Aqui você encontra ótimos hoteis na região onde você está.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Gastronomia',
                text: 'Conheça os restaurantes da cidade.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Turismo',
                text:
                    'Diversas trilhas, passeios e esportes radicais para você conferir.'
            },
            {
                imagePath: 'assets/images/slider4.jpg',
                label: 'Quixadá Rock',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            },
            {
                imagePath: 'assets/images/slider5.jpg',
                label: 'Feira de Empreendedorismo',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            },
            {
                imagePath: 'assets/images/slider6.jpg',
                label: 'Festival da Cerveja',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Apenas uma mensagem de teste.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
            },
            {
                id: 2,
                type: 'warning',
                message: `Mensagem de alerta. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis.`
            }
        );

        // this
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
