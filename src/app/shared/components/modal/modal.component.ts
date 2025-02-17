import { CommonModule } from "@angular/common";
import { Component, ElementRef ,signal, ViewChild } from "@angular/core";

@Component({
    selector: 'component-modal',
    templateUrl: './modal.component.html',
    imports: [CommonModule]
})

export class ComponentModal {
    @ViewChild('modalRef') modalRef!: ElementRef;
    isOpen = signal(false);
    openModal() {
        this.isOpen.set(true);
    }

    closeModal() {
        this.isOpen.set(false);
    }

}