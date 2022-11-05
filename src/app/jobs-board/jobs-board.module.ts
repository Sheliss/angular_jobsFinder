import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { BoardComponent } from './board/board.component';
import { BoardCardComponent } from './board-card/board-card.component';



@NgModule({
  declarations: [
    BoardComponent,
    BoardCardComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    BoardComponent
  ]
})
export class JobsBoardModule { }
