import ListItem from "src/common/models/list-items";
import { MenuKeys } from "src/common/enums/menu-keys";
export default class constants {

    static MenuConfig = class {
        static MainMenu: Array<any> = [
            new ListItem(
                MenuKeys.Users,
                "icons/dot.svg",
                null,
                "Home",
                [],
                "/"
            ),
            new ListItem(
                MenuKeys.Templates,
                "icons/dot.svg",
                null,
                "Catalog",
                [],
                "/"
            ),
            new ListItem(
                MenuKeys.Questionnaire,
                "icons/dot.svg",
                null,
                "Pricing plans",
                [],
                "/"
            ),
            new ListItem(
                MenuKeys.Cases,
                "icons/dot.svg",
                null,
                "Live",
                [],
                "/"
            ),
            new ListItem(
                MenuKeys.Invoice,
                "icons/dot.svg",
                null,
                "",
                [],
                "/"
            ),


        ];
    };

    static widthBreakPoint = {
        base: "400px",
        sm: "720px",
        md: "790px",
        lg: "1140px",
        xl: "1330px",
    }

}