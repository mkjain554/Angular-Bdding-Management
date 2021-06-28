//we can use only those are required 
//I have added some extra Module just to show 
//Import this file in to your module file.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';

const material_imports = [
  MatFormFieldModule,
  MatAutocompleteModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatToolbarModule,
  MatNativeDateModule,
  MatRippleModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...material_imports
  ],
  exports: [...material_imports]
})
export class MaterialModule { }
