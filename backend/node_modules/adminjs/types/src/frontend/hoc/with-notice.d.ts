/// <reference types="react" />
/**
 * NoticeMessage which can be presented as a "Toast" message.
 * @alias NoticeMessage
 * @memberof withNotice
 */
export declare type NoticeMessage = {
    message: string;
    type?: 'success' | 'error';
};
/**
 * Additional props which are passed to your component
 * @alias AddNoticeProps
 * @memberof withNotice
 */
export declare type AddNoticeProps = {
    addNotice: (notice: NoticeMessage) => void;
};
/**
 * Higher Order Component which allows you to post notice messages from your components
 *
 * It gives you the additional prop: `addNotice(noticeMessage)` taking {@link NoticeMessage}.
 *
 * ```javascript
 * import { withNotice } from 'adminjs/core'
 *
 * const MY_MESSAGE = {
 *   message: 'I am toast message',
 *   type: 'success',
 * }
 * const MyCustomComponent = ({ addNotice }) => {
 *   return (
 *     <a onClick={() => addNotice(MY_MESSAGE)}>Click Me</a>
 *   )
 * }
 * export default withNotice(MyCustomComponent)
 * ```
 *
 * @component
 * @subcategory HOC
 */
declare const withNotice: (Component: any) => import("react-redux").ConnectedComponent<any, {
    context?: import("react").Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
export { withNotice as default, withNotice, };
