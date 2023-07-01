/// <reference types="react" />
declare type CustomFieldPluginProps = {
    itemClassName?: string;
    listStyle?: Record<string, any>;
    itemStyle?: Record<string, any>;
    record?: Record<string, any>;
};
export default function CustomFieldPlugin({ itemClassName, listStyle, itemStyle, record, }: CustomFieldPluginProps): JSX.Element;
export {};
