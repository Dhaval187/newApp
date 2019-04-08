import { NgModule } from '@angular/core';

import { NewAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [NewAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [NewAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class NewAppSharedCommonModule {}
