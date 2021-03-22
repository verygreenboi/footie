// tslint:disable:variable-name
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ToolbarViewModel } from 'src/app/auth/user.query';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {

    constructor() {
    }

    private _vm: ToolbarViewModel | null | undefined;

    @Input()
    get vm(): ToolbarViewModel | null | undefined {
        return this._vm;
    }

    set vm(newUser) {
        this._vm = newUser;
    }

    get title(): string | undefined {
        return this.vm?.title;
    }

    ngOnInit(): void {
    }

}
