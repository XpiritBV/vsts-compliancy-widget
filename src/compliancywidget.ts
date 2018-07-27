import Q = require("q");
import TFS_Core_Contracts = require("TFS/Core/Contracts");
import Work_Contracts = require("TFS/Work/Contracts");
import Work_Client = require("TFS/Work/RestClient");
import Promise = require("ts-promise");
import System_Contracts = require("VSS/Common/Contracts/System");
import Service = require("VSS/Service");
import WebApi_Constants = require("VSS/WebApi/Constants");

export class CompliancyWidget {
	private renderValues: any = {};

	constructor(
		public WidgetHelpers : any) { }

	public load() {
		return this.showCompliancy();
	}

	public reload() {
		return this.showCompliancy();
	}

	private showCompliancy() {
		try {
            alert("geert says hello");
            this.renderWidget();
			return this.WidgetHelpers.WidgetStatusHelper.Success();
		} catch (e) {
			// Satisfy the linter
		}
	}


	private renderWidget() {
		const $title = $("#title");

		$title.text("test van xpirit!!!");
	}
}