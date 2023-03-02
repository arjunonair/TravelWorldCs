declare global {
    interface Window {
        AdminJS?: {
            [key: string]: number;
        };
    }
}
declare const generateId: (key: string) => string;
export default generateId;
