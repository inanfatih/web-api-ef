import { IQuestionType } from './../interfaces/IQuestionType';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  question = {
    id: 0,
    text: '',
    correctAnswer: '',
    answer1: '',
    answer2: '',
    answer3: '',
    quizId: 0,
  };
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.question.quizId = +this.route.snapshot.paramMap.get('quizId');
    this.api.currentQuestion.subscribe((quest: IQuestionType) => {
      this.question = quest;
    });
  }

  post(question): void {
    this.api.postQuestion(question);
  }
}
