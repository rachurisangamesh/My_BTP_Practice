sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.teche.sd.project1.controller.create", {
            onInit: function () {
                var routerObj = this.getOwnerComponent().getRouter();
                routerObj.attachRoutePatternMatched(this.handleRoutMatch, this);

            },
            
            
            // handlback
            handlback: function(){
            var routerObj= this.getOwnerComponent().getRouter()
                routerObj.navTo("RouteS2")
            }
        });
    });
