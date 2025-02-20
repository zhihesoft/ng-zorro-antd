/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { BidiModule } from '@angular/cdk/bidi';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzMenuDividerDirective } from './menu-divider.directive';
import { NzMenuGroupComponent } from './menu-group.component';
import { NzMenuItemComponent } from './menu-item.component';
import { NzMenuDirective } from './menu.directive';
import { NzSubmenuInlineChildComponent } from './submenu-inline-child.component';
import { NzSubmenuNoneInlineChildComponent } from './submenu-non-inline-child.component';
import { NzSubMenuTitleComponent } from './submenu-title.component';
import { NzSubMenuComponent } from './submenu.component';

@NgModule({
  imports: [BidiModule, CommonModule, PlatformModule, OverlayModule, NzIconModule, NzNoAnimationModule, NzOutletModule],
  declarations: [
    NzMenuDirective,
    NzMenuItemComponent,
    NzSubMenuComponent,
    NzMenuDividerDirective,
    NzMenuGroupComponent,
    NzSubMenuTitleComponent,
    NzSubmenuInlineChildComponent,
    NzSubmenuNoneInlineChildComponent
  ],
  exports: [NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
})
export class NzMenuModule {}
