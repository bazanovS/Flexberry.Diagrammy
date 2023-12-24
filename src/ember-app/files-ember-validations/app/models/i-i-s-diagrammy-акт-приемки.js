import {
  defineNamespace,
  defineProjections,
  Model as АктПриемкиMixin
} from '../mixins/regenerated/models/i-i-s-diagrammy-акт-приемки';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АктПриемкиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
