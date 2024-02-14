import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentExampleComponent } from '../dialog-content-example/dialog-content-example.component';

@Component({
  selector: 'app-material-examples',
  templateUrl: './material-examples.component.html',
  styleUrls: ['./material-examples.component.scss'],
})
export class MaterialExamplesComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
