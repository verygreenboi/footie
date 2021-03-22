import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetTitle } from 'src/app/+state/app-config/app-config.actions';
import { BASE_TITLE } from 'src/app/shared/constants';
import { Subject } from 'rxjs';

@Component({
    template: ''
})
export abstract class BaseComponent implements OnInit, OnDestroy {
    abstract title?: string;
    destroy$ = new Subject<void>();
    protected constructor(protected store: Store) {
    }

    ngOnInit(): void {
        const pageTitle = this.title ? `${BASE_TITLE} | ${this.title}` : BASE_TITLE;
        this.store.dispatch(new SetTitle(pageTitle));
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
