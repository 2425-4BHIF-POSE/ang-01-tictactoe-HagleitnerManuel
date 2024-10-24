import {Component, signal, WritableSignal} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tictactoe.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./tictactoe.component.scss']
})
export class TicTacToeComponent {
  protected board: string[] = Array(9).fill(null);
  protected currentPlayer: string = 'X';
  public winner: WritableSignal<string> = signal("");
  protected draw: boolean = false;

  public makeMove(index: number): void {
    if (!this.board[index] && !this.winner()) {
      this.board[index] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner.set(this.currentPlayer);
      } else if (this.board.every(cell => cell)) {
        this.draw = true;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner(): boolean {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
      const [a, b, c] = pattern;
      return this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c];
    });
  }

  public resetGame(): void {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner.set("");
    this.draw = false;
  }
}
