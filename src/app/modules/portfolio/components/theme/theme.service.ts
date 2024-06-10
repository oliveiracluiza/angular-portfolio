import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly DARK_THEME = 'dark-theme';
  private readonly LIGHT_THEME = 'light-theme';
  private currentTheme: string = '';

  constructor() {
    this.loadTheme();
  }

  private loadTheme() {
    this.currentTheme = localStorage.getItem('theme') || this.LIGHT_THEME;
    document.body.classList.add(this.currentTheme);
  }

  toggleTheme() {
    if (this.currentTheme === this.LIGHT_THEME) {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
  }

  private setDarkTheme() {
    document.body.classList.replace(this.LIGHT_THEME, this.DARK_THEME);
    this.currentTheme = this.DARK_THEME;
    localStorage.setItem('theme', this.currentTheme);
  }

  private setLightTheme() {
    document.body.classList.replace(this.DARK_THEME, this.LIGHT_THEME);
    this.currentTheme = this.LIGHT_THEME;
    localStorage.setItem('theme', this.currentTheme);
  }

  isDarkTheme() {
    return this.currentTheme === this.DARK_THEME;
  }
}
