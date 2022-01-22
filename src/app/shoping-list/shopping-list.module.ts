import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShopingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShopingListComponent, ShoppingEditComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ShopingListComponent,
        children: [{ path: 'edit', component: ShoppingEditComponent }],
      },
    ]),

    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [],
})
export class ShoppingListModule {}
