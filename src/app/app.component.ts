import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog"
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private matDialog: MatDialog) {}

  title = 'popup';

  openDialog(){
    if(this.matDialog.openDialogs.length==0){
      let dialogRef = this.matDialog.open(PopupDialogComponent, {
       // disableClose: true  
     });
    }
  }
}
