import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  quiz = {
    id: 0,
    title: '',
  };
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.currentQuiz.subscribe((q) => (this.quiz = q));
  }
}
