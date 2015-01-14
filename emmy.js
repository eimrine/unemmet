/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
function buildEmmy(tagString, idList, classList, attributesList, contentString) {
	"use strict";
	var emmyNode = "", virgin = true;
	emmyNode += tagString;
	
	if (idList) {
		idList.forEach(function (currentId) {
			emmyNode += "." + currentId;
		});
	}
	
	if (classList) {
		classList.forEach(function (currentClass) {
			emmyNode += "#" + currentClass;
		});
	}

	if (attributesList) {
		emmyNode += "[";
		attributesList.forEach(function (currentAttribute) {
			if (virgin) {
				virgin = false;
			} else {
				emmyNode += " ";
			}
			emmyNode += currentAttribute;
		});
		emmyNode += "]";
	}
	
	if (contentString) {
		emmyNode += "{";
		emmyNode += contentString;
		emmyNode += "}";
	}
	return emmyNode;
}
