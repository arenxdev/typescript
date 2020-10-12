import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Player } from '../interfaces/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private playersDb: AngularFireList<Player>;

  constructor(private db: AngularFireDatabase) {
    this.playersDb = this.db.list('/players', (ref) => ref.orderByChild('name'));
  }

  getPlayers(): Observable<Player[]> {
    return this.playersDb.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((c) => ({ $key: c.payload.key, ...c.payload.val() }));
      })
    );
  }

  addPlayer(player: Player): any {
    return this.playersDb.push(player);
  }

  deletePlayer(id: string): void {
    this.db.list('/players').remove(id);
  }

  editPlayer(newPlayerData: Player): void {
    const $key = newPlayerData.$key;
    delete newPlayerData.$key;
    this.db.list('/players').update($key, newPlayerData);
  }
}
