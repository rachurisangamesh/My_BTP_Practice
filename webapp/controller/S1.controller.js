// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,MessageBox) {
        "use strict";

        return Controller.extend("com.teche.sd.project1.controller.S1", {
            onInit: function () {
            //     var ProteinTypes = [
            //        {
            //         "ProductName":"ISO CMS",
            //         "ProCode":"F6U",
            //         "proLot" : "240151437",
            //         "Price": 35,
            //         "Quantity":400
            //        },
            //        {
            //         "ProductName":"ISO V",
            //         "ProCode":"N5E",
            //         "proLot" : "240151439",
            //         "Price": 40,
            //         "Quantity":400
            //        },
            //        {
            //         "ProductName":"CON CMS",
            //         "ProCode":"USE",
            //         "proLot" : "240151440",
            //         "Price": 35,
            //         "Quantity":700
            //        },
            //        {
            //         "ProductName":"CON V",
            //         "ProCode":"9X6",
            //         "proLot" : "240151473",
            //         "Price": 40,
            //         "Quantity":200
            //        },
            //     ]

            //     var ProType=[
            //         {
            //         "proname":"Isolate"
            //     },
            //     {
            //         "proname":"Concentrate"
            //     },
            //     {
            //         "proname":"Greens"
            //     },
            //     {
            //         "proname":"White Powderrs"
            //     },
            //     {
            //         "proname":"Mass Gainers"
            //     },
            //     {
            //         "proname":"Economy"
            //     },
            //     {
            //         "proname":"CPre"
            //     },
            //     {
            //         "proname":"BCAA"
            //     },
            //     {
            //         "proname":"CIntra"
            //     },
            //     {
            //         "proname":"Sups"
            //     },
            //     {
            //         "proname":"limited"
            //     },
            //     {
            //         "proname":"Micellar Casein"
            //     },
            // ]  

            //     var jsonmodel = new JSONModel();  
            //     jsonmodel.setData({"loadData":ProteinTypes});  

            //     var objView = this.getView();
            //     objView.setModel(jsonmodel,"x");  //this is first model
                
            //     var promodel = new JSONModel();   // this is second model
            //     promodel.setData({"loadproData":ProType});
                
            //     objView.setModel(promodel,"y");  //every time we call this using y "y is the reffereng name of the model"
            },     //we can pass both the models at onece with the same context name but this is just an example because we used the same data name in the model
            onAfterRendering: function(){
                MessageBox.success("Thankyou!!");
            },
            handlechange: function(){
                var routerObj=this.getOwnerComponent().getRouter()
                routerObj.navTo("RouteS2")
            },
        
            handlsubmit: function(){


                var routerObj= this.getOwnerComponent().getRouter()
                //  {empId:"201120",empName:"Sangamesh"}
                routerObj.navTo("RouteS2")
            }
        });
    });
