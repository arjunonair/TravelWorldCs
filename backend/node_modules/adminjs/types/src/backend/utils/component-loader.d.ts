export interface ComponentDetails {
    overrides: boolean;
    filePath: string;
}
export declare class ComponentLoader {
    protected components: Record<string, ComponentDetails>;
    add(name: string, filePath: string, caller?: string): string;
    override(name: string, filePath: string, caller?: string): string;
    __unsafe_addWithoutChecks(name: string, filePath: string, caller?: string): string;
    clear(): void;
    getComponents(): Record<string, string>;
    __unsafe_merge(componentLoader: ComponentLoader): void;
    static resolveFilePath(filePath: string, caller: string): string;
    protected static defaultComponents: string[];
}
