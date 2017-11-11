import { HomepageComponent } from "./homepage/homepage.component";
import { BoardComponent } from './board/board.component';

export const appRoutes: any = [
    { path: "", component: HomepageComponent },
    { path: "board/:id", component: BoardComponent }
];

export const appComponents: any = [
    HomepageComponent,
    BoardComponent
];
