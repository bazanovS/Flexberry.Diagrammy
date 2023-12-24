import {
  defineNamespace,
  defineProjections,
  Model as СкладскоеМестоMixin
} from '../mixins/regenerated/models/i-i-s-diagrammy-складское-место';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СкладскоеМестоMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
