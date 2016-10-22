
import { Routes, RouterModule } from '@angular/router';

import { SampleComponent } from './sample.component';
import { IRouting } from '../shared/interfaces';

const routes: Routes = [
  { path: 'samples', component: SampleComponent}
];

export const sampleRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components: [ SampleComponent]
};