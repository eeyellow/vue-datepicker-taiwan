/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */

import TWDatePicker from './TWDatePicker.vue';

const Components = [TWDatePicker];

const install = function (Vue, opts = {}) {
  Components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

// export { LcGrid, LcGridPageArea, LcGridSearchArea };

// const install: (app: import('vue').App<any>) => void = (app: App) => {
//   app.component('TWDatePicker', TWDatePicker);
// };
export { TWDatePicker };
