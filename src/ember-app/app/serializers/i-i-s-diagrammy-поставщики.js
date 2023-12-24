import { Serializer as ПоставщикиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-diagrammy-поставщики';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПоставщикиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
