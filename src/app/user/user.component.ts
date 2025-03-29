import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //start ofZone.js Change detection stratigy
  // selectedUser = DUMMY_USERS[randomIndex];

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // selecteUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  // }

  //End of Zone.js Change detection stratigy

  //Use of Signal

  selectedUser = signal(DUMMY_USERS[randomIndex]); //Signal initial value passing or Signal initialization using signal()

  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar); // Signal value reaading here using computed()

  selecteUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]); //Signal value changing here or Signal Value updating using set()
  }
}
