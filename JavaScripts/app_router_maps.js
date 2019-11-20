var app = angular.module("app_maps", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
/*
    .when("/", {
        templateUrl : "ClimateMapsIntroduction.htm"
    })
*/	
    .when("/", {
        templateUrl : "contentOCDP/HighmapsPages/Tx14.htm"
    })	
    .when("/ClimateChangeTeam", {
        templateUrl : "ClimateChangeTeam.html"
    })
    .when("/faq", {
        templateUrl : "faq.html"
    })	
    .when("/TmAnnual", {
        templateUrl : "contentOCDP/HighmapsPages/Tm17.htm" 
    })
    .when("/TmSpring", {
        templateUrl : "contentOCDP/HighmapsPages/Tm13.htm"
    })
    .when("/TmSummer", {
        templateUrl : "contentOCDP/HighmapsPages/Tm14.htm"
    })
    .when("/TmAutumn", {
        templateUrl : "contentOCDP/HighmapsPages/Tm15.htm"
    })
    .when("/TmWinter", {
        templateUrl : "contentOCDP/HighmapsPages/Tm16.htm"
    })
    .when("/Tm01", {
        templateUrl : "contentOCDP/HighmapsPages/Tm01.htm"
    })
    .when("/Tm02", {
        templateUrl : "contentOCDP/HighmapsPages/Tm02.htm"
    })
    .when("/Tm03", {
        templateUrl : "contentOCDP/HighmapsPages/Tm03.htm"
    })
    .when("/Tm04", {
        templateUrl : "contentOCDP/HighmapsPages/Tm04.htm"
    })
    .when("/Tm05", {
        templateUrl : "contentOCDP/HighmapsPages/Tm05.htm"
    })
    .when("/Tm06", {
        templateUrl : "contentOCDP/HighmapsPages/Tm06.htm"
    })
    .when("/Tm07", {
        templateUrl : "contentOCDP/HighmapsPages/Tm07.htm"
    })
    .when("/Tm08", {
        templateUrl : "contentOCDP/HighmapsPages/Tm08.htm"
    })
    .when("/Tm09", {
        templateUrl : "contentOCDP/HighmapsPages/Tm09.htm"
    })
    .when("/Tm10", {
        templateUrl : "contentOCDP/HighmapsPages/Tm10.htm"
    })
    .when("/Tm11", {
        templateUrl : "contentOCDP/HighmapsPages/Tm11.htm"
    })
    .when("/Tm12", {
        templateUrl : "contentOCDP/HighmapsPages/Tm12.htm"
    })
    .when("/TxAnnual", {
        templateUrl : "contentOCDP/HighmapsPages/Tx17.htm" 
    })
    .when("/TxSpring", {
        templateUrl : "contentOCDP/HighmapsPages/Tx13.htm"
    })
    .when("/TxSummer", {
        templateUrl : "contentOCDP/HighmapsPages/Tx14.htm"
    })
    .when("/TxAutumn", {
        templateUrl : "contentOCDP/HighmapsPages/Tx15.htm"
    })
    .when("/TxWinter", {
        templateUrl : "contentOCDP/HighmapsPages/Tx16.htm"
    })
    .when("/Tx01", {
        templateUrl : "contentOCDP/HighmapsPages/Tx01.htm"
    })
    .when("/Tx02", {
        templateUrl : "contentOCDP/HighmapsPages/Tx02.htm"
    })
    .when("/Tx03", {
        templateUrl : "contentOCDP/HighmapsPages/Tx03.htm"
    })
    .when("/Tx04", {
        templateUrl : "contentOCDP/HighmapsPages/Tx04.htm"
    })
    .when("/Tx05", {
        templateUrl : "contentOCDP/HighmapsPages/Tx05.htm"
    })
    .when("/Tx06", {
        templateUrl : "contentOCDP/HighmapsPages/Tx06.htm"
    })
    .when("/Tx07", {
        templateUrl : "contentOCDP/HighmapsPages/Tx07.htm"
    })
    .when("/Tx08", {
        templateUrl : "contentOCDP/HighmapsPages/Tx08.htm"
    })
    .when("/Tx09", {
        templateUrl : "contentOCDP/HighmapsPages/Tx09.htm"
    })
    .when("/Tx10", {
        templateUrl : "contentOCDP/HighmapsPages/Tx10.htm"
    })
    .when("/Tx11", {
        templateUrl : "contentOCDP/HighmapsPages/Tx11.htm"
    })
    .when("/Tx12", {
        templateUrl : "contentOCDP/HighmapsPages/Tx12.htm"
    })
    .when("/TnAnnual", {
        templateUrl : "contentOCDP/HighmapsPages/Tn17.htm"  
    })
    .when("/TnSpring", {
        templateUrl : "contentOCDP/HighmapsPages/Tn13.htm"
    })
    .when("/TnSummer", {
        templateUrl : "contentOCDP/HighmapsPages/Tn14.htm"
    })
    .when("/TnAutumn", {
        templateUrl : "contentOCDP/HighmapsPages/Tn15.htm"
    })
    .when("/TnWinter", {
        templateUrl : "contentOCDP/HighmapsPages/Tn16.htm"
    })
    .when("/Tn01", {
        templateUrl : "contentOCDP/HighmapsPages/Tn01.htm"
    })
    .when("/Tn02", {
        templateUrl : "contentOCDP/HighmapsPages/Tn02.htm"
    })
    .when("/Tn03", {
        templateUrl : "contentOCDP/HighmapsPages/Tn03.htm"
    })
    .when("/Tn04", {
        templateUrl : "contentOCDP/HighmapsPages/Tn04.htm"
    })
    .when("/Tn05", {
        templateUrl : "contentOCDP/HighmapsPages/Tn05.htm"
    })
    .when("/Tn06", {
        templateUrl : "contentOCDP/HighmapsPages/Tn06.htm"
    })
    .when("/Tn07", {
        templateUrl : "contentOCDP/HighmapsPages/Tn07.htm"
    })
    .when("/Tn08", {
        templateUrl : "contentOCDP/HighmapsPages/Tn08.htm"
    })
    .when("/Tn09", {
        templateUrl : "contentOCDP/HighmapsPages/Tn09.htm"
    })
    .when("/Tn10", {
        templateUrl : "contentOCDP/HighmapsPages/Tn10.htm"
    })
    .when("/Tn11", {
        templateUrl : "contentOCDP/HighmapsPages/Tn11.htm"
    })
    .when("/Tn12", {
        templateUrl : "contentOCDP/HighmapsPages/Tn12.htm"
    })
    .when("/PrAnnual", {
        templateUrl : "contentOCDP/HighmapsPages/Pr17.htm" 
    })
    .when("/PrSpring", {
        templateUrl : "contentOCDP/HighmapsPages/Pr13.htm"
    })
    .when("/PrSummer", {
        templateUrl : "contentOCDP/HighmapsPages/Pr14.htm"
    })
    .when("/PrAutumn", {
        templateUrl : "contentOCDP/HighmapsPages/Pr15.htm"
    })
    .when("/PrWinter", {
        templateUrl : "contentOCDP/HighmapsPages/Pr16.htm"
    })
    .when("/Pr01", {
        templateUrl : "contentOCDP/HighmapsPages/Pr01.htm"
    })
    .when("/Pr02", {
        templateUrl : "contentOCDP/HighmapsPages/Pr02.htm"
    })
    .when("/Pr03", {
        templateUrl : "contentOCDP/HighmapsPages/Pr03.htm"
    })
    .when("/Pr04", {
        templateUrl : "contentOCDP/HighmapsPages/Pr04.htm"
    })
    .when("/Pr05", {
        templateUrl : "contentOCDP/HighmapsPages/Pr05.htm"
    })
    .when("/Pr06", {
        templateUrl : "contentOCDP/HighmapsPages/Pr06.htm"
    })
    .when("/Pr07", {
        templateUrl : "contentOCDP/HighmapsPages/Pr07.htm"
    })
    .when("/Pr08", {
        templateUrl : "contentOCDP/HighmapsPages/Pr08.htm"
    })
    .when("/Pr09", {
        templateUrl : "contentOCDP/HighmapsPages/Pr09.htm"
    })
    .when("/Pr10", {
        templateUrl : "contentOCDP/HighmapsPages/Pr10.htm"
    })
    .when("/Pr11", {
        templateUrl : "contentOCDP/HighmapsPages/Pr11.htm"
    })
    .when("/Pr12", {
        templateUrl : "contentOCDP/HighmapsPages/Pr12.htm"
    })
    .when("/HDD", {
        templateUrl : "contentOCDP/HighmapsPages/HDD.htm"  
    })
    .when("/CDD", {
        templateUrl : "contentOCDP/HighmapsPages/CDD.htm"  
    })	
    .when("/GSL", {
        templateUrl : "contentOCDP/HighmapsPages/GSL.htm"  
    })
    .when("/j111", {
        templateUrl : "contentOCDP/HighmapsPages/j111.htm"  
    })	
    .when("/j211", {
        templateUrl : "contentOCDP/HighmapsPages/j211.htm"  
    })		
    .when("/SDII", {
        templateUrl : "contentOCDP/HighmapsPages/SDII.htm"  
    })	
    .when("/FD", {
        templateUrl : "contentOCDP/HighmapsPages/FD.htm"  
    })	
    .when("/SU", {
        templateUrl : "contentOCDP/HighmapsPages/SU.htm"  
    })	
    .when("/ID", {
        templateUrl : "contentOCDP/HighmapsPages/ID.htm"  
    })	
    .when("/TR", {
        templateUrl : "contentOCDP/HighmapsPages/TR.htm"  
    })	
    .when("/TXx", {
        templateUrl : "contentOCDP/HighmapsPages/TXx.htm"  
    })
    .when("/HWDI_days", {
        templateUrl : "contentOCDP/HighmapsPages/HWDI_days.htm"  
    })	
    .when("/HWDI_period", {
        templateUrl : "contentOCDP/HighmapsPages/HWDI_period.htm"  
    })
    .when("/HWDI_strength", {
        templateUrl : "contentOCDP/HighmapsPages/HWDI_strength.htm"  
    })	
    .when("/TNx", {
        templateUrl : "contentOCDP/HighmapsPages/TNx.htm"  
    })	
    .when("/TXn", {
        templateUrl : "contentOCDP/HighmapsPages/TXn.htm"  
    })	
    .when("/TNn", {
        templateUrl : "contentOCDP/HighmapsPages/TNn.htm"  
    })	
    .when("/TN10p", {
        templateUrl : "contentOCDP/HighmapsPages/Cold_night.htm"  
    })	
    .when("/TX10p", {
        templateUrl : "contentOCDP/HighmapsPages/Cold_day.htm"  
    })	
    .when("/TN90p", {
        templateUrl : "contentOCDP/HighmapsPages/Hot_night.htm"  
    })	
    .when("/TX90p", {
        templateUrl : "contentOCDP/HighmapsPages/Hot_day.htm"  
    })	
    .when("/WSDI", {
        templateUrl : "contentOCDP/HighmapsPages/txWSDI.htm"  
    })	
    .when("/CSDI", {
        templateUrl : "contentOCDP/HighmapsPages/tnCSDI.htm"  
    })	
    .when("/DTR", {
        templateUrl : "contentOCDP/HighmapsPages/DTR.htm"  
    })	
    .when("/Rx1day", {
        templateUrl : "contentOCDP/HighmapsPages/RX1day.htm"  
    })
    .when("/Rx5day", {
        templateUrl : "contentOCDP/HighmapsPages/RX5day.htm"  
    })
    .when("/R1mm", {
        templateUrl : "contentOCDP/HighmapsPages/R1mm.htm"  
    })		
    .when("/R10mm", {
        templateUrl : "contentOCDP/HighmapsPages/R10mm.htm"  
    })		
    .when("/R20mm", {
        templateUrl : "contentOCDP/HighmapsPages/R20mm.htm"  
    })		
    .when("/prCDD", {
        templateUrl : "contentOCDP/HighmapsPages/prCDD.htm"  
    })		
    .when("/prCWD", {
        templateUrl : "contentOCDP/HighmapsPages/prCWD.htm"  
    })		
    .when("/R95pDays", {
        templateUrl : "contentOCDP/HighmapsPages/pr95pDays.htm"  
    })		
    .when("/R99pDays", {
        templateUrl : "contentOCDP/HighmapsPages/pr99pDays.htm"  
    })		
    .when("/R95pTOT", {
        templateUrl : "contentOCDP/HighmapsPages/pr95pTOT.htm"  
    })		
    .when("/R99pTOT", {
        templateUrl : "contentOCDP/HighmapsPages/pr99pTOT.htm"  
    })		
    .when("/PRCPTOT", {
        templateUrl : "contentOCDP/HighmapsPages/PRCPTOT.htm"  
    });		
    /*
	.when("/FFS", {
        templateUrl : "comingSoon.htm"  
    })
    .when("/CHU", {
        templateUrl : "comingSoon.htm"  
    })
    .when("/EGDD", {
        templateUrl : "comingSoon.htm"  
    })
    .when("/DEFICIT", {
        templateUrl : "comingSoon.htm"  
    });*/
});

app.controller('TreeMenuCtrl', function($scope) {
    $scope.DocumentsState = "closed";
	$scope.clickDocuments=function() {
	    $scope.DocumentsState = "open";	
	};
});
