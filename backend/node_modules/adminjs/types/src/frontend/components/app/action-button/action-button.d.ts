import React from 'react';
import { ActionResponse } from '../../../../backend/actions/action.interface';
import { ActionJSON } from '../../../interfaces';
/**
 * @alias ActionButtonProps
 * @memberof ActionButton
 */
export declare type ActionButtonProps = {
    /** Action to which button should redirect */
    action: ActionJSON;
    /** Id of a resource of an action */
    resourceId: string;
    /** Optional recordId for _record_ action */
    recordId?: string;
    /** Optional recordIds for _bulk_ action */
    recordIds?: Array<string>;
    /** optional callback function which will be triggered when action is performed */
    actionPerformed?: (action: ActionResponse) => any;
    children?: React.ReactNode;
};
declare const OverridableActionButton: React.ComponentType<ActionButtonProps & {
    OriginalComponent?: React.ComponentType<ActionButtonProps> | undefined;
}>;
export { OverridableActionButton as default, OverridableActionButton as ActionButton, };
