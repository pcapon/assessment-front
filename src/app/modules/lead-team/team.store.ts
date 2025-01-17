import { Injectable } from '@angular/core';
import { Store } from 'src/app/core/utils/store/store';
import { TeamDtoApi } from 'src/app/sdk';

@Injectable({ providedIn: 'root' })
export class TeamStore {
  teams: Store<TeamDtoApi[]> = new Store<TeamDtoApi[]>([]);
}
