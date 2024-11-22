import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {MenuFooterService} from "../service/menu-footer/menu-footer.service";

@Component({
    selector: 'app-presentation',
    templateUrl: './presentation.component.html',
    styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent implements OnInit, OnDestroy {
    activeSection: string = '';
    isSidebarHidden: boolean = typeof window !== 'undefined' && window.innerWidth < 768; // Сховати sidebar на мобільних за замовчуванням

    constructor(private menuFooterService: MenuFooterService) {
    }

    ngOnInit(): void {
        this.menuFooterService.setMenuVisibility(false);
        this.menuFooterService.setFooterVisibility(false);
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.onResize.bind(this));
        }
    }

    ngOnDestroy(): void {
        this.menuFooterService.setMenuVisibility(true);
        this.menuFooterService.setFooterVisibility(true);
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.onResize.bind(this));
        }
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const sections = ['about', 'course', 'price', 'contact'];
        let currentSection = '';

        for (const section of sections) {
            const sectionElement = document.getElementById(section);
            if (sectionElement) {
                const rect = sectionElement.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = section;
                    break;
                }
            }
        }

        this.activeSection = currentSection;
    }

    scrollToSection(sectionId: string, event: Event) {
        event.preventDefault();
        const sectionElement = document.getElementById(sectionId);

        if (sectionElement) {
            sectionElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

        // Закривати sidebar тільки на мобільних екранах
        if (window.innerWidth < 768) {
            this.isSidebarHidden = true;
        }
    }

    toggleSidebar() {
        // Перемикати sidebar незалежно від розміру екрана
        this.isSidebarHidden = !this.isSidebarHidden;
    }

    onResize() {
        // Відкривати sidebar за замовчуванням на великих екранах
        this.isSidebarHidden = window.innerWidth < 768 ? this.isSidebarHidden : false;
    }
}
