import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

import {
  LazyElementModuleOptions,
  LazyElementsModule
} from '../../../../../../elements/src/lib/lazy-elements/lazy-elements.module';

import { SharedModule } from '../../../shared/shared.module';

import { AdvancedRoutingModule } from './advanced-routing.module';
import { AdvancedComponent } from './advanced.component';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';
import { ErrorComponent } from '../../../shared/error/error.component';

export function beforeLoadHook(tag: string): Promise<void> {
  alert(
    `Starting download of ${tag} web component! The download will be artificially postponed for 5 seconds.`
  );
  return new Promise(res => setTimeout(res, 5000));
}

const options: LazyElementModuleOptions = {
  elementConfigs: [
    {
      tag: 'wired-button',
      url:
        'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js',
      loadingComponent: SpinnerComponent,
      errorComponent: ErrorComponent,
      preload: true
    },
    {
      tag: 'mwc-switch',
      url: 'https://unpkg.com/@material/mwc-switch@0.6.0/mwc-switch.js?module',
      isModule: true
    },
    {
      tag: 'mwc-checkbox',
      url:
        'https://unpkg.com/@material/mwc-checkbox@0.6.0/mwc-checkbox.js?module',
      isModule: true
    },
    {
      tag: 'mwc-fab',
      url: 'https://unpkg.com/@material/mwc-fab@0.6.0/mwc-fab.js?module',
      isModule: true,
      loadingComponent: SpinnerComponent
    },
    {
      tag: 'mwc-slider',
      url: 'https://unpkg.com/@material/mwc-slider@0.14.1/mwc-slider.js?module',
      isModule: true,
      hooks: {
        beforeLoad: beforeLoadHook
      }
    }
  ]
};

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AdvancedComponent],
  imports: [
    HighlightModule,
    LazyElementsModule.forFeature(options),
    LazyElementsModule.forFeature(options),
    SharedModule,
    AdvancedRoutingModule
  ]
})
export class AdvancedModule {}
