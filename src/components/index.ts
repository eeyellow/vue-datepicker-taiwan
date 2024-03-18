import type { App } from 'vue';
import TWDatePicker from './TWDatePicker.vue';

const install: (app: import('vue').App<any>) => void = (app: App) => {
  app.component('TWDatePicker', TWDatePicker);
};
export { TWDatePicker };
export default { install };
