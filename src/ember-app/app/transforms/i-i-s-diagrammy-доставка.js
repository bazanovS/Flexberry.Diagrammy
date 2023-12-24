import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ДоставкаEnum from '../enums/i-i-s-diagrammy-доставка';

export default FlexberryEnum.extend({
  enum: ДоставкаEnum,
  sourceType: 'IIS.Diagrammy.Доставка'
});
