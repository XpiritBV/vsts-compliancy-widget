import TFS_Core_Contracts = require("TFS/Core/Contracts");
import Core_Client = require("TFS/Core/RestClient");
import System_Contracts = require("VSS/Common/Contracts/System");
import Service = require("VSS/Service");
import WebApi_Constants = require("VSS/WebApi/Constants");
import VstsRestApi = require("VSS/WebApi/RestClient"); 

import * as BuildServices from "TFS/Build/RestClient";
import * as ReleaseServices from "ReleaseManagement/Core/RestClient";
import * as GitServices from "TFS/VersionControl/GitRestClient";

import { callApi} from "./RestCall";


import { Artifact } from "ReleaseManagement/Core/Contracts";

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
		
		private async showCompliancy() {
			try {
				
				var webcontext = VSS.getWebContext();
				var project = {
					name : webcontext.project.name,
					teamId: webcontext.team.id,
					id: webcontext.project.id,
					uri: webcontext.host.uri
				};
				
				//this.renderWidget();
				
				var releaseClient = ReleaseServices.getClient();
				var deployment = await releaseClient.getDeployments("CompliancyWidget",undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,1,undefined,undefined);
				
				const $title = $("#title");
				if(deployment != null && deployment.length > 0)
				{
					var artifact = deployment[0].release.artifacts.find(a => a.type === "Git");
					$title.text((artifact as Artifact).definitionReference["branches"].name);
				}
				
				await callApi(project.uri+ "/_apis/projects","GET",undefined,undefined,(result: any) => {
					alert("success " +result.count);
				},(error:any)=> {
					alert("error"+error);
				});
				
				
				return this.WidgetHelpers.WidgetStatusHelper.Success();
			} catch (e) {
			}
		}
		
		
		private renderWidget() {
			const $title = $("#title");
			
			$title.text("test van xpirit!!!!");
		}
	}