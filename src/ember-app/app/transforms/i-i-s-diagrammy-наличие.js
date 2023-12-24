import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import НаличиеEnum from '../enums/i-i-s-diagrammy-наличие';

export default FlexberryEnum.extend({
  enum: НаличиеEnum,
  sourceType: 'IIS.Diagrammy.Наличие'
});
