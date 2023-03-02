import { PropertyType } from '../../utils';
declare const useDatePicker: ({ value, propertyType, disabled, onChange }: {
    onChange: (date: Date) => void;
    value?: string | Date | undefined;
    propertyType?: string | undefined;
    disabled?: boolean | undefined;
}) => {
    dateString?: string | undefined;
    date?: Date | undefined;
    isCalendarVisible: boolean;
    setCalendarVisible: (isVisible: boolean) => void;
    onDateChange: (newDate: Date) => void;
};
export default useDatePicker;
