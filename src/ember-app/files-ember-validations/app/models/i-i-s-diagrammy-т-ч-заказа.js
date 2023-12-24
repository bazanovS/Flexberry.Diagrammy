import {
  defineNamespace,
  defineProjections,
  Model as ТЧЗаказаMixin
} from '../mixins/regenerated/models/i-i-s-diagrammy-т-ч-заказа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧЗаказаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
