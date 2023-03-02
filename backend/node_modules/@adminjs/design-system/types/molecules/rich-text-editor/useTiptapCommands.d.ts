import { Editor } from '@tiptap/react';
interface TiptapCommand {
    name: string;
    onClick: () => void;
    icon: string;
    attributes?: Record<string, any>;
}
interface useTiptapCommandsProps {
    editor: Editor | null;
}
declare const useTiptapCommands: (props: useTiptapCommandsProps) => TiptapCommand[];
export default useTiptapCommands;
