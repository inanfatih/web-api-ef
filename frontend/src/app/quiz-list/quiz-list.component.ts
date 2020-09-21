import { IQuiz } from './../interfaces/IQuiz';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css'],
})
export class QuizListComponent implements OnInit {
  quizzes: IQuiz[];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getQuizzes().subscribe((res) => (this.quizzes = res));
  }

  setQuiz(quiz): void {
    this.api.setQuizToUpdate(quiz);
  }
}
