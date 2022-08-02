import { Component } from '@angular/core'

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})

export class ContactComponent {
    newMessage = '';

    onCreateMessage() {
        console.log('User\'s message: ', this.newMessage)
    }
}