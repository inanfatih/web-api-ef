import { IQuestionType } from './../interfaces/IQuestionType';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  questions: IQuestionType[];
  question: {} = {};
  quizId;
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.quizId = +this.route.snapshot.paramMap.get('quizId');

    this.api.getQuestions(this.quizId).subscribe((res) => {
      this.questions = res;
    });
    this.api.currentQuestion.subscribe(
      (question) => (this.question = question)
    );
  }

  setQuestion(item: IQuestionType): void {
    this.api.setQuestionToUpdate(item);
  }
}
