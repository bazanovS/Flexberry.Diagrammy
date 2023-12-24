import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧЗаказаMixin
} from '../mixins/regenerated/models/i-i-s-diagrammy-т-ч-заказа';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧЗаказаMixin, Validations, {
});

defineProjections(Model);

export default Model;
