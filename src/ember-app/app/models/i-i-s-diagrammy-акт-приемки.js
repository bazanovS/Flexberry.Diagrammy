import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as АктПриемкиMixin
} from '../mixins/regenerated/models/i-i-s-diagrammy-акт-приемки';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АктПриемкиMixin, Validations, {
});

defineProjections(Model);

export default Model;
