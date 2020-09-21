import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './question/question.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'question/:quizId', component: QuestionComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'quiz', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
