import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuFooterService} from "../service/menu-footer/menu-footer.service";


@Component({
    selector: 'app-presentation',
    templateUrl: './presentation.component.html',
    styleUrl: './presentation.component.css',

})
export class PresentationComponent implements OnInit, OnDestroy {
    constructor(private menuFooterService: MenuFooterService) {
    }

    ngOnInit(): void {
        this.menuFooterService.setMenuVisibility(false);
        this.menuFooterService.setFooterVisibility(false);
    }

    ngOnDestroy(): void {
        this.menuFooterService.setMenuVisibility(true);
        this.menuFooterService.setFooterVisibility(true);
    }
}
