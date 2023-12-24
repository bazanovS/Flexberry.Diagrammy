import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СкладскоеМестоMixin
} from '../mixins/regenerated/models/i-i-s-diagrammy-складское-место';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СкладскоеМестоMixin, Validations, {
});

defineProjections(Model);

export default Model;
