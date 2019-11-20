var app = angular.module("app_timeseries", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
/*
    .when("/", {
        templateUrl : "ClimateTimeSeriesIntroduction.htm"
    })
*/
    .when("/", {
        templateUrl : "contentOCDP/Sparklines50Regions/StationTmTime.htm"
    })	
    .when("/ClimateChangeTeam", {
        templateUrl : "ClimateChangeTeam.html"
    })
    .when("/faq", {
        templateUrl : "faq.html"
    })
    .when("/RegionLocationMap", {
        templateUrl : "assets/Locations/locationMap.html"
    })	
    .when("/indexDefinationTable", {
        templateUrl : "contentOCDP/Documents/indexDefinationTable.htm"
    })	
	.when("/TmAnnualTime", {
        templateUrl : "content/ClimateTimeseries/Province/TmTime.htm" 
    })
	.when("/TxAnnualTime", {
        templateUrl : "content/ClimateTimeseries/Province/TxTime.htm" 
    })
	.when("/TnAnnualTime", {
        templateUrl : "content/ClimateTimeseries/Province/TnTime.htm" 
    })
	.when("/PrAnnualTime", {
        templateUrl : "content/ClimateTimeseries/Province/PrTime.htm" 
    })
    .when("/HDDTime", {
        templateUrl : "content/ClimateTimeseries/Province/HDDTime.htm" 
    })
    .when("/CDDTime", {
        templateUrl : "content/ClimateTimeseries/Province/CDDTime.htm" 
    })	
    .when("/GSLTime", {
        templateUrl : "content/ClimateTimeseries/Province/GSLTime.htm" 
    })
    .when("/j111Time", {
        templateUrl : "content/ClimateTimeseries/Province/j111Time.htm" 
    })
    .when("/j211Time", {
        templateUrl : "content/ClimateTimeseries/Province/j211Time.htm" 
    })	
    .when("/SDIITime", {
        templateUrl : "content/ClimateTimeseries/Province/SDIITime.htm"
    })	
    .when("/FDTime", {
        templateUrl : "content/ClimateTimeseries/Province/FDTime.htm"
    })	
    .when("/SUTime", {
        templateUrl : "content/ClimateTimeseries/Province/SUTime.htm"
    })	
    .when("/IDTime", {
        templateUrl : "content/ClimateTimeseries/Province/IDTime.htm"
    })	
    .when("/TRTime", {
        templateUrl : "content/ClimateTimeseries/Province/TRTime.htm"
    })	
    .when("/TXxTime", {
        templateUrl : "content/ClimateTimeseries/Province/TXxTime.htm"
    })	
    .when("/TNxTime", {
        templateUrl : "content/ClimateTimeseries/Province/TNxTime.htm"
    })	
    .when("/TXnTime", {
        templateUrl : "content/ClimateTimeseries/Province/TXnTime.htm"
    })	
    .when("/TNnTime", {
        templateUrl : "content/ClimateTimeseries/Province/TNnTime.htm"
    })	
    .when("/TN10pTime", {
        templateUrl : "content/ClimateTimeseries/Province/Cold_nightTime.htm" 
    })	
    .when("/TX10pTime", {
        templateUrl : "content/ClimateTimeseries/Province/Cold_dayTime.htm"
    })	
    .when("/TN90pTime", {
        templateUrl : "content/ClimateTimeseries/Province/Hot_nightTime.htm"
    })	
    .when("/TX90pTime", {
        templateUrl : "content/ClimateTimeseries/Province/Hot_dayTime.htm"
    })	
    .when("/WSDITime", {
        templateUrl : "content/ClimateTimeseries/Province/txWSDITime.htm"
    })
    .when("/HWDI_daysTime", {
        templateUrl : "content/ClimateTimeseries/Province/HWDI_daysTime.htm"
    })
    .when("/HWDI_periodTime", {
        templateUrl : "content/ClimateTimeseries/Province/HWDI_periodTime.htm"
    })
    .when("/HWDI_strengthTime", {
        templateUrl : "content/ClimateTimeseries/Province/HWDI_strengthTime.htm"
    })	
    .when("/CSDITime", {
        templateUrl : "content/ClimateTimeseries/Province/tnCSDITime.htm"
    })	
    .when("/DTRTime", {
        templateUrl : "content/ClimateTimeseries/Province/DTRTime.htm" 
    })	
    .when("/Rx1dayTime", {
        templateUrl : "content/ClimateTimeseries/Province/RX1dayTime.htm" 
    })
    .when("/Rx5dayTime", {
        templateUrl : "content/ClimateTimeseries/Province/RX5dayTime.htm"
    })		
    .when("/R10mmTime", {
        templateUrl : "content/ClimateTimeseries/Province/R10mmTime.htm"
    })		
    .when("/R20mmTime", {
        templateUrl : "content/ClimateTimeseries/Province/R20mmTime.htm" 
    })
    .when("/R1mmTime", {
        templateUrl : "content/ClimateTimeseries/Province/R1mmTime.htm" 
    })
    .when("/R25mmTime", {
        templateUrl : "content/ClimateTimeseries/Province/R25mmTime.htm" 
    })	
    .when("/PrCDDTime", {
        templateUrl : "content/ClimateTimeseries/Province/prCDDTime.htm"
    })		
    .when("/PrCWDTime", {
        templateUrl : "content/ClimateTimeseries/Province/prCWDTime.htm"
    })		
    .when("/R95pDaysTime", {
        templateUrl : "content/ClimateTimeseries/Province/pr95pDaysTime.htm" 
    })		
    .when("/R99pDaysTime", {
        templateUrl : "content/ClimateTimeseries/Province/pr99pDaysTime.htm"
    })		
    .when("/R95pTOTTime", {
        templateUrl : "content/ClimateTimeseries/Province/pr95pTOTTime.htm"
    })		
    .when("/R99pTOTTime", {
        templateUrl : "content/ClimateTimeseries/Province/pr99pTOTTime.htm" 
    })		
    .when("/PRCPTOTTime", {
        templateUrl : "content/ClimateTimeseries/Province/PRCPTOTTime.htm" 
    })		
    .when("/FFSTime", {
        templateUrl : "content/ClimateTimeseries/Province/FFSTime.htm" 
    }) //end of province
	.when("/SubregionTmAnnualTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/TmTime.htm" 
    })
	.when("/SubregionTxAnnualTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/TxTime.htm" 
    })
	.when("/SubregionTnAnnualTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/TnTime.htm" 
    })
	.when("/SubregionPrAnnualTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/PrTime.htm" 
    })
    .when("/SubregionHDDTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/HDDTime.htm" 
    })
    .when("/SubregionCDDTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/CDDTime.htm" 
    })	
    .when("/SubregionGSLTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/GSLTime.htm" 
    })
    .when("/Subregionj111Time", {
        templateUrl : "contentOCDP/Sparklines50Regions/j111Time.htm" 
    })
    .when("/Subregionj211Time", {
        templateUrl : "contentOCDP/Sparklines50Regions/j211Time.htm" 
    })	
    .when("/SubregionSDIITime", {
        templateUrl : "contentOCDP/Sparklines50Regions/SDIITime.htm"
    })	
    .when("/SubregionFDTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/FDTime.htm"
    })	
    .when("/SubregionSUTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/SUTime.htm"
    })	
    .when("/SubregionIDTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/IDTime.htm"
    })	
    .when("/SubregionTRTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/TRTime.htm"
    })	
    .when("/SubregionTXxTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/TXxTime.htm"
    })	
    .when("/SubregionTNxTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/TNxTime.htm"
    })	
    .when("/SubregionTXnTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/TXnTime.htm"
    })	
    .when("/SubregionTNnTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/TNnTime.htm"
    })	
    .when("/SubregionTN10pTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/Cold_nightTime.htm" 
    })	
    .when("/SubregionTX10pTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/Cold_dayTime.htm"
    })	
    .when("/SubregionTN90pTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/Hot_nightTime.htm"
    })	
    .when("/SubregionTX90pTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/Hot_dayTime.htm"
    })	
    .when("/SubregionWSDITime", {
        templateUrl : "contentOCDP/Sparklines50Regions/txWSDITime.htm"
    })
    .when("/SubregionHWDI_daysTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/HWDI_daysTime.htm"
    })
    .when("/SubregionHWDI_periodTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/HWDI_periodTime.htm"
    })
    .when("/SubregionHWDI_strengthTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/HWDI_strengthTime.htm"
    })	
    .when("/SubregionCSDITime", {
        templateUrl : "contentOCDP/Sparklines50Regions/tnCSDITime.htm"
    })	
    .when("/SubregionDTRTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/DTRTime.htm" 
    })	
    .when("/SubregionRx1dayTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/RX1dayTime.htm" 
    })
    .when("/SubregionRx5dayTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/RX5dayTime.htm"
    })		
    .when("/SubregionR10mmTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/R10mmTime.htm"
    })		
    .when("/SubregionR20mmTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/R20mmTime.htm" 
    })
    .when("/SubregionR1mmTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/R1mmTime.htm" 
    })
    .when("/SubregionR25mmTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/R25mmTime.htm" 
    })	
    .when("/SubregionPrCDDTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/prCDDTime.htm"
    })		
    .when("/SubregionPrCWDTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/prCWDTime.htm"
    })		
    .when("/SubregionR95pDaysTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/pr95pDaysTime.htm" 
    })		
    .when("/SubregionR99pDaysTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/pr99pDaysTime.htm"
    })		
    .when("/SubregionR95pTOTTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/pr95pTOTTime.htm"
    })		
    .when("/SubregionR99pTOTTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/pr99pTOTTime.htm" 
    })		
    .when("/SubregionPRCPTOTTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/PRCPTOTTime.htm" 
    })		
    .when("/SubregionFFSTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/FFSTime.htm" 
    })//end subregion
	.when("/MunicipalTmAnnualTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/StationTmTime.htm" 
    })
	.when("/MunicipalTxAnnualTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/StationTxTime.htm" 
    })
	.when("/MunicipalTnAnnualTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/StationTnTime.htm" 
    })
	.when("/MunicipalPrAnnualTime", {
        templateUrl : "contentOCDP/Sparklines50Regions/StationPrTime.htm" 
    });
});

app.controller('TreeMenuCtrl', function($scope) {
    $scope.DocumentsState = "closed";
	$scope.clickDocuments=function() {
	    $scope.DocumentsState = "open";	
	};
});
