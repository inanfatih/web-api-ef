import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  private questionToUpdate = new Subject<any>();
  currentQuestion = this.questionToUpdate.asObservable();

  private quizToUpdate = new Subject<any>();
  currentQuiz = this.quizToUpdate.asObservable();

  postQuestion(question: any): void {
    this.http
      .post('https://localhost:44346/api/questions', question)
      .subscribe((res) => {
        console.log('res', res);
      });
  }

  putQuestion(question: any): void {
    this.http
      .put(`https://localhost:44346/api/questions/${question.id}`, question)
      .subscribe((res) => {
        console.log('res', res);
      });
  }

  getQuestions(quizId): any {
    return this.http.get(`https://localhost:44346/api/questions/${quizId}`);
  }

  postQuiz(quiz: any): void {
    this.http
      .post('https://localhost:44346/api/quizzes', quiz)
      .subscribe((res) => {
        console.log('res', res);
      });
  }

  getQuizzes(): any {
    return this.http.get('https://localhost:44346/api/quizzes');
  }

  putQuiz(quiz: any): void {
    this.http
      .put(`https://localhost:44346/api/quizzes/${quiz.id}`, quiz)
      .subscribe((res) => {
        console.log('res', res);
      });
  }

  setQuestionToUpdate(question): void {
    this.questionToUpdate.next(question);
  }

  setQuizToUpdate(quiz): void {
    this.quizToUpdate.next(quiz);
  }
}
