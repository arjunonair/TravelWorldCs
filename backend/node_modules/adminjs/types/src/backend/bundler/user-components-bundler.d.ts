import AdminJS from '../..';
declare const outPath: string;
declare function build(admin: AdminJS, { write, watch }?: {
    write?: boolean | undefined;
    watch?: boolean | undefined;
}): Promise<string>;
export { build as default, outPath, };
