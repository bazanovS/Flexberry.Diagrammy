import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОтпускМатериалаMixin
} from '../mixins/regenerated/models/i-i-s-diagrammy-отпуск-материала';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтпускМатериалаMixin, Validations, {
});

defineProjections(Model);

export default Model;
