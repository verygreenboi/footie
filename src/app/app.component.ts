import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToolbarViewModel, UserQuery } from 'src/app/auth/user.query';
import { Select, Store } from '@ngxs/store';
import { SetTitle } from 'src/app/+state/app-config/app-config.actions';
import { BASE_TITLE } from 'src/app/shared/constants';
import { BaseComponent } from 'src/app/shared/base.component';
import { AppConfigState } from 'src/app/+state/app-config/app-config.state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
    title?: string | undefined;
    @Select(UserQuery.getToolbarViewModel) user$!: Observable<ToolbarViewModel | undefined>;

    constructor(store: Store) {
        super(store);
        // this.info$ = matchService.matchInfo;
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.store.dispatch(new SetTitle(`${BASE_TITLE}`));
    }
}
