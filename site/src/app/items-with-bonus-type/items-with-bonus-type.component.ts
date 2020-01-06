import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { GearDbService } from '../gear-db.service';
import { EquippedService } from '../equipped.service';
import { Item } from '../item';

@Component({
  selector: 'app-items-with-bonus-type',
  templateUrl: './items-with-bonus-type.component.html',
  styleUrls: ['./items-with-bonus-type.component.css']
})
export class ItemsWithBonusTypeComponent implements OnInit {

  @Input() affixName: string;
  @Input() bonusType: string;

  matches: Array<Item>;

  constructor(
    public gearDB: GearDbService,
    public equipped: EquippedService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit() {
    this.matches = this.gearDB.findGearWithAffixAndType(this.affixName, this.bonusType).sort((a, b) => b.ml - a.ml);
  }

  findMatchingValue(item: Item) {
    for (const affix of item.affixes) {
      if (affix.name === this.affixName && affix.type === this.bonusType) {
        return affix.value;
      }
    }
    return '';
  }

  viewItem(item: Item) {

  }

  equipItem(item: Item) {
    this.equipped.set(item);
    this.modalService.dismissAll();
  }

  close() {
    this.modalService.dismissAll();
  }

}
