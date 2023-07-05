import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import { DataService } from 'src/app/services/data.service';
import { AppState } from 'src/app/state/app.state';
import { selectUser } from 'src/app/state/selectors/fields.selectors';
import { selectImages } from 'src/app/state/selectors/images.selectors';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('button') button: string = '';
  images$: Observable<any> = new Observable<any>();
  fields$: Observable<any> = new Observable<any>();
  public images: number[] = [];
  public user: User = {
    name: '',
    businessName: '',
    phone: '',
  };

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private dataService: DataService
  ) {
    this.images$ = this.store.select(selectImages);
    this.fields$ = this.store.select(selectUser);
  }

  ngOnInit(): void {
    this.images$.subscribe((data) => (this.images = data));
    this.fields$.subscribe((data) => {
      this.user = data;
    });
  }

  next() {
    if (this.button === 'siguiente') {
      if (this.images.length === 0) return;
      this.router.navigate(['/form']);
    }
    if (this.button === 'enviar') {
      this.sendData();
      this.router.navigate(['/thanks']);
    }
  }

  sendData() {
    const data = {
      user: this.user,
      images: this.images,
    };
    this.dataService.send(data).subscribe((res) => console.log(res));
  }
}
