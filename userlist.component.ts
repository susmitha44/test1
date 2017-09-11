import {Component} from '@angular/core';
@Component({
  selector: `list-user`,
  templateUrl: `app/user/userlist.component.html`,
  styleUrls: [`app/user/userlist.component.css`]
})
export class UserlistComponent {
  users: any[];

  constructor() {
    this.users = [
      {
        "userName": 'abc',
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }

    ];
  }

  /*getTotalusercount(): number {
    return this.users.length;
  }

  getTotaloneusercount(): number {
    return this.users.filter(u=> u.userId === 1).length;
  }*/

}
