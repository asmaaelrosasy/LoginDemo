import { Component, OnInit } from '@angular/core';
import { Item } from '../core/models/item';
import { ItemsService } from '../core/constants/items.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  items: Item [];
  selectedItem: Item;
  userRole: string;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.getAllItems();
    this.checkUserRole();
  }

  checkUserRole(): void {
    this.userRole = JSON.parse(localStorage.currentUser).role;
  }

  getAllItems(): void {
    this.itemsService.getAllItems().subscribe(data => this.items = data);
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  onDelete(id): void {
    document.getElementById(id).remove();
  }
}
