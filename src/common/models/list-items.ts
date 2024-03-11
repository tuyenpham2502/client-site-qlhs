
export default class ListItem {
    constructor(
        key: string,
        icon: any,
        iconClass: any,
        displayText: string,
        allowedPermissions: any[],
        hyperlink: any
    ) {
        this.key = key;
        this.icon = icon;
        this.iconClass = iconClass;
        this.displayText = displayText;
        this.allowedPermissions = allowedPermissions;
        this.hyperlink = hyperlink;
    }
    key: string;
    icon: any;
    iconClass: any;
    displayText: string;
    allowedPermissions: any[];
    hyperlink: any;
}