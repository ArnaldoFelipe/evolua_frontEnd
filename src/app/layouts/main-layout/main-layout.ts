import { Component } from '@angular/core';
import { ArnoldChat } from "../../shared/components/arnold/arnold-chat/arnold-chat";
import { RouterOutlet } from "@angular/router";
import { Sidebar } from "../../shared/components/sidebar/sidebar/sidebar";

@Component({
  selector: 'app-main-layout',
  imports: [ArnoldChat, RouterOutlet, Sidebar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
