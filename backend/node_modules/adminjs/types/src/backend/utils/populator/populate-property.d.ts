import { BaseRecord } from '../../adapters';
import PropertyDecorator from '../../decorators/property/property-decorator';
import { ActionContext } from '../../actions';
/**
 * It populates one property in given records
 *
 * @param {Array<BaseRecord>} records   array of records to populate
 * @param {PropertyDecorator} property  Decorator for the reference property to populate
 * @param context
 * @private
 * @hide
 */
export declare function populateProperty(records: Array<BaseRecord> | null, property: PropertyDecorator, context?: ActionContext): Promise<Array<BaseRecord> | null>;
