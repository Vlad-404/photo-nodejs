import { Component } from '@angular/core'

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})

export class ContactComponent {
    onCreateMessage() {
        alert('Thank you for your message. I will be in contact with you shortly.')
    }
}