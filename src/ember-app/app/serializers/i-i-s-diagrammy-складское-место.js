import { Serializer as СкладскоеМестоSerializer } from
  '../mixins/regenerated/serializers/i-i-s-diagrammy-складское-место';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СкладскоеМестоSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
