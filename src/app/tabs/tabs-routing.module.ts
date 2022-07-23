import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../remoteshell-page/remoteshell-page.module').then( m => m.RemoteshellPagePageModule)
      },
      {
        path: 'kd-xhorsepage',
        loadChildren: () => import('../kd-xhorsepage/kd-xhorsepage.module').then( m => m.KdXhorsepagePageModule)
      },
      {
        path: 'more',
        loadChildren: () => import('../more/more.module').then( m => m.MorePageModule)
      },
      // {
      //   path: 'tab1/year/:selectedBrand/:selectedModel/:startyear/:endyear',
      //   loadChildren: () => import('../year/year.module').then( m => m.YearPageModule)
      // },
      {
        path: 'tab1/result/:selectedBrand/:selectedModel/:selectedYear/:startyear/:endyear',
        loadChildren: () => import('../result/result.module').then( m => m.ResultPageModule)
      },
      {
        path: 'low-stock-tab',
        loadChildren: () => import('../low-stock-tab/low-stock-tab.module').then( m => m.LowStockTabPageModule)
      },
      {
        path: 'lowstockitems',
        loadChildren: () => import('../low-stock-items/low-stock-items.module').then( m => m.LowStockItemsPageModule)
      },
      {
        path: 'all-garage-remotes',
        loadChildren: () => import('../garage-remotes/all-garage-remotes/all-garage-remotes.module').then( m => m.AllGarageRemotesPageModule)
      },
      {
        path: 'car-brand-page',
        loadChildren: () => import('../car-tab/car-brands-page/car-brand-page/car-brand-page.module').then( m => m.CarBrandPagePageModule)
      },
      {
        path: 'car-brand-page/car-model-page/:brandId',
        loadChildren: () => import('../car-tab/car-model-page/car-model-page/car-model-page.module').then( m => m.CarModelPagePageModule)
      },
      {
        path: 'car-brand-page/car-model-page/car-sub-model-page/:selectedBrand/:selectedModel/:startyear/:endyear',
        loadChildren: () => import('../car-tab/car-sub-model-page/sub-car-model-page/sub-car-model-page.module').then( m => m.SubCarModelPagePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/car-brand-page',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/car-brand-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
