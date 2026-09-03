import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menucomponent',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menucomponent.html',
  styleUrl: './menucomponent.css'
})
export class Menucomponent {}

