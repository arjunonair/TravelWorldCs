import BaseRecord from '../../adapters/record/base-record';
import { ActionContext } from '../../actions';
/**
 * @load ./populator.doc.md
 * @param {Array<BaseRecord>} records
 * @param context
 * @new In version 3.3
 */
export declare function populator(records: Array<BaseRecord>, context?: ActionContext): Promise<Array<BaseRecord>>;
export default populator;
