import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieStoreService {

  private readonly _filter = new BehaviorSubject([]);
  readonly filter$ = this._filter.asObservable();

  private get filter() {
    return this._filter.getValue();
  }

  private set filter(val){
    this._filter.next(val);
  }

  addFilter(votos){
    this.filter = [
      votos
    ];
  }
}
