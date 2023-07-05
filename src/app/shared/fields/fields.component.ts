import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import {
  addBusinessName,
  addName,
  addPhone,
} from 'src/app/state/actions/fields.actions';
import { AppState } from 'src/app/state/app.state';
import { selectUser } from 'src/app/state/selectors/fields.selectors';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  setName(value: string) {
    this.store.dispatch(addName({ name: value }));
  }

  setBusinessName(value: string) {
    this.store.dispatch(addBusinessName({ businessName: value }));
  }

  setPhone(value: string) {
    this.store.dispatch(addPhone({ phone: value }));
  }
}
