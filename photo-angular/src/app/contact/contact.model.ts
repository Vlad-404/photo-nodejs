import { EmailValidator } from "@angular/forms";

export interface Contact {
    id: string,
    name: string;
    email: EmailValidator;
    message: string;
}