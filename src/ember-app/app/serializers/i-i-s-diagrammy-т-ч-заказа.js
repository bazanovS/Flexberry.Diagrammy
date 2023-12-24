import { Serializer as ТЧЗаказаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-diagrammy-т-ч-заказа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧЗаказаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
