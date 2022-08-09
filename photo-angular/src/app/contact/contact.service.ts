import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Contact } from "./contact.model";

@Injectable({providedIn: 'root'})
export class ContactsService {
    private contacts: Contact[] = [];
    private postsUpdated = new Subject<Contact[]>();

    getMessages() {
        return [...this.contacts];
    }
}