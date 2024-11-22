import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {MenuFooterService} from "../service/menu-footer/menu-footer.service";

@Component({
    selector: 'app-presentation',
    templateUrl: './presentation.component.html',
    styleUrls: ['./presentation.component.css'],  // виправлено styleUrl на styleUrls
})
export class PresentationComponent implements OnInit, OnDestroy {
    constructor(private menuFooterService: MenuFooterService) {}

    ngOnInit(): void {
        this.menuFooterService.setMenuVisibility(false);
        this.menuFooterService.setFooterVisibility(false);
    }

    ngOnDestroy(): void {
        this.menuFooterService.setMenuVisibility(true);
        this.menuFooterService.setFooterVisibility(true);
    }

    activeSection: string = '';

    // Слухаємо подію прокручування для відслідковування поточного розділу
    @HostListener('window:scroll', [])
    onWindowScroll() {
        const sections = ['about', 'course', 'price', 'contact'];
        let currentSection = '';

        for (const section of sections) {
            const sectionElement = document.getElementById(section);
            if (sectionElement) {
                const rect = sectionElement.getBoundingClientRect();
                // Перевіряємо, чи секція знаходиться в межах видимості
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = section;
                    break;
                }
            }
        }

        // Оновлюємо активну секцію
        if (currentSection !== this.activeSection) {
            this.activeSection = currentSection;
        }
    }

    scrollToSection(sectionId: string, event: Event) {
        event.preventDefault(); // Запобігаємо стандартній поведінці браузера
        const sectionElement = document.getElementById(sectionId);

        if (sectionElement) {
            sectionElement.scrollIntoView({
                behavior: 'smooth', // Плавна прокрутка
                block: 'start', // Початок секції
            });
        }
    }
}
