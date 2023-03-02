import { Extension } from '@tiptap/core';
import { Node as ProseMirrorNode } from '@tiptap/pm/model';
export interface CharacterCountOptions {
    /**
     * The maximum number of characters that should be allowed. Defaults to `0`.
     */
    limit: number | null | undefined;
    /**
     * The mode by which the size is calculated. Defaults to 'textSize'.
     */
    mode: 'textSize' | 'nodeSize';
}
export interface CharacterCountStorage {
    /**
     * Get the number of characters for the current document.
     */
    characters: (options?: {
        node?: ProseMirrorNode;
        mode?: 'textSize' | 'nodeSize';
    }) => number;
    /**
     * Get the number of words for the current document.
     */
    words: (options?: {
        node?: ProseMirrorNode;
    }) => number;
}
export declare const CharacterCount: Extension<CharacterCountOptions, CharacterCountStorage>;
