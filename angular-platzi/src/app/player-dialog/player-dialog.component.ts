import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { take, map } from 'rxjs/operators';
import { Country, Player, SquadNumber } from '../interfaces/player';
import { Team } from '../interfaces/team';
import { PlayerService } from '../services/player.service';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss'],
})
export class PlayerDialogComponent implements OnInit {
  @Input() player: Player;
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter();

  private team;
  public countries = Object.keys(Country).map((key) => ({ label: key, key: Country[key] }));
  public squadNumber = Object.keys(SquadNumber)
    .slice(Object.keys(SquadNumber).length / 2)
    .map((key) => ({
      label: key,
      key: SquadNumber[key],
    }));

  constructor(private playerService: PlayerService, private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService
      .getTeams()
      .pipe(take(1))
      .subscribe((teams) => {
        if (teams.length > 0) {
          this.team = teams[0];
        }
      });
  }

  private newPlayer(playerFormValue: Player): void {
    const key = this.playerService.addPlayer(playerFormValue).key;
    const platerFormValueKey = {
      ...playerFormValue,
      key,
    };
    const formattedTeam = {
      ...this.team,
      players: [...(this.team.players ? this.team.players : []), platerFormValueKey],
    };
    this.teamService.editTeam(formattedTeam);
  }

  private editPlayer(playerForm: Player): void {
    debugger;
    const playerFormValueKey = { ...playerForm, $key: this.player.$key };
    const playerFormValueFormatted = { ...playerForm, key: this.player.$key };
    delete playerFormValueFormatted.$key;
    const modifyPlayers = this.team.players
      ? this.team.players.map((player) => (player.key === this.player.$key ? playerFormValueFormatted : player))
      : this.team.players;
    const formatedTeam = {
      ...this.team,
      players: [...(modifyPlayers ? modifyPlayers : [playerFormValueFormatted])],
    };
    this.playerService.editPlayer(playerFormValueKey);
    this.teamService.editTeam(formatedTeam);
  }

  onSubmit(playerForm: NgForm): void {
    const playerFormValue = { ...playerForm.value };
    if (playerForm.valid) {
      playerFormValue.leftFooted = playerFormValue.leftFooted === '' ? false : playerFormValue.leftFooted;
    }
    if (this.player) {
      this.editPlayer(playerFormValue);
    } else {
      this.newPlayer(playerFormValue);
    }
    window.location.replace('#');
  }

  onClose(): void {
    this.closeDialog.emit(true);
  }
}
