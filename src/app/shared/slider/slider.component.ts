import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Image } from 'src/app/models/image.interface';
import { addImage } from 'src/app/state/actions/images.actions';
import { AppState } from 'src/app/state/app.state';
import { selectImages } from 'src/app/state/selectors/images.selectors';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  public responsiveOptions: any[];

  public designsJSON = 'assets/data/designs.json';
  public designs: Image[] = [];
  public images: number[] = [];

  images$: Observable<any> = new Observable<any>();

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.getJSON().subscribe((data) => {
      this.designs = data;
    });
    this.images$ = this.store.select(selectImages);
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.designsJSON);
  }

  ngOnInit(): void {
    this.images$.subscribe((data) => (this.images = data));
  }

  public add(image: Image) {
    this.store.dispatch(addImage({ image }));
  }
}
