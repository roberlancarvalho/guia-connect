import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
    alerts: Array<any> = [];
    constructor() {
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'Este é um alerta de sucesso',
        }, {
            id: 2,
            type: 'info',
            message: 'Este é um alerta de informações',
        }, {
            id: 3,
            type: 'warning',
            message: 'Este é um alerta de aviso',
        }, {
            id: 4,
            type: 'danger',
            message: 'Este é um alerta de perigo',
        });
    }

    ngOnInit() { }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
