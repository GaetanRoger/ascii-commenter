import { Component } from '@angular/core';
import { HomeFigletComponent } from './components/home-figlet/home-figlet.component';
import { HomeParametersInputComponent } from './components/home-parameters-input/home-parameters-input.component';
import { ParametersInput } from './components/home-parameters-input/parameters-input';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeFigletComponent, HomeParametersInputComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  parameters?: ParametersInput;
}
