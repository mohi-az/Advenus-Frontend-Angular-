import { Component, Input } from "@angular/core";

@Component({
    selector: 'component-header',
    template: `
    <div class="flex flex-col w-full text-center ">
        <div class="font-Handlee text-xl md:text-3xl lg:text-4xl font-bold capitalize">
            {{firstText}}
        </div>
        <div class="text-3xl md:text-4xl lg:text-9xl opacity-10 relative -m-4 md:-m-4 lg:-m-10">
            {{backgorundText}}
        </div>
        <div class="font-extrabold text-xl md:text-4xl lg:text-6xl capitalize">
            {{secondText}}
        </div>
    </div>`
})
export class HeaderComponent {
    @Input() backgorundText: string = '';
    @Input() firstText: string = '';
    @Input() secondText: string = '';

}