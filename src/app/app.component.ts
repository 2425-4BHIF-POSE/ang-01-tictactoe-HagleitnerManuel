import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TicTacToeComponent} from './tictactoe/tictactoe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TicTacToeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tictactoe';
}
