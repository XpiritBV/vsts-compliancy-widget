/// <reference types="vss-web-extension-sdk" />

import * as Q from "q";
import * as WorkItemServices from "TFS/WorkItemTracking/Services";
import { CompliancyWidget } from "./compliancywidget";

export function register() {
    VSS.require(["TFS/Dashboards/WidgetHelpers"], (WidgetHelpers : any) => {
        VSS.register("compliancyWidget", () => {
            const compliancyWidget = new CompliancyWidget(WidgetHelpers);
            return compliancyWidget;
        });
        VSS.notifyLoadSucceeded();
    });
}