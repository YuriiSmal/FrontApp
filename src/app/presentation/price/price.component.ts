import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  currentIndex: number = 0;

  // Масив з цінами та інформацією для кожного курсу
  carouselItems = [
    {
      title: 'Персональні заняття',
      description: 'Індивідуальні уроки з чеської мови',
      price: 1000,  // ціна за урок
      discountPrice: 850,  // ціна зі знижкою
      imageUrl: 'assets/1.jpg' // Зображення для курсу
    },
    {
      title: 'Групові заняття онлайн',
      description: '7 занять на місяць у форматі онлайн',
      price: 3000,  // ціна без знижки
      discountPrice: null,  // без знижки
      imageUrl: 'assets/2.jpg'  // Зображення для курсу
    },
    {
      title: 'Групові заняття офлайн',
      description: 'Заняття у класі',
      price: 3500,  // ціна за урок
      discountPrice: null,  // без знижки
      imageUrl: 'assets/3.jpg'  // Зображення для курсу
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  // Метод для переходу до попереднього слайду
  prevSlide(): void {
    this.currentIndex = (this.currentIndex === 0) ? this.carouselItems.length - 1 : this.currentIndex - 1;
  }

  // Метод для переходу до наступного слайду
  nextSlide(): void {
    this.currentIndex = (this.currentIndex === this.carouselItems.length - 1) ? 0 : this.currentIndex + 1;
  }
}
