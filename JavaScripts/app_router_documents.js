var app = angular.module("app_documents", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider

    .when("/", {
        templateUrl : "contentOCDP/Documents/indexProvincialAverages.htm"
    })
    .when("/ClimateChangeTeam", {
        templateUrl : "ClimateChangeTeam.html"
    })
    .when("/faq", {
        templateUrl : "faq.html"
    })	
    .when("/FactSheetAverages", {
        templateUrl : "contentOCDP/Documents/indexProvincialAverages.htm"
    })
    .when("/summaryofKENORA", {
        templateUrl : "contentOCDP/Documents/indexKENORAAverages.htm"
    })
    .when("/summaryofCOCHRANE", {
        templateUrl : "contentOCDP/Documents/indexCOCHRANEAverages.htm"
    })
    .when("/summaryofRAINY-RIVER", {
        templateUrl : "contentOCDP/Documents/indexRAINY-RIVERAverages.htm"
    })
    .when("/summaryofTHUNDER-BAY", {
        templateUrl : "contentOCDP/Documents/indexTHUNDER-BAYAverages.htm"
    })
    .when("/summaryofTIMISKAMING", {
        templateUrl : "contentOCDP/Documents/indexTIMISKAMINGAverages.htm"
    })
    .when("/summaryofNIPISSING", {
        templateUrl : "contentOCDP/Documents/indexNIPISSINGAverages.htm"
    })
    .when("/summaryofALGOMA", {
        templateUrl : "contentOCDP/Documents/indexALGOMAAverages.htm"
    })
    .when("/summaryofSUDBURY-REGION", {
        templateUrl : "contentOCDP/Documents/indexSUDBURY-REGIONAverages.htm"
    })
    .when("/summaryofSUDBURY", {
        templateUrl : "contentOCDP/Documents/indexSUDBURYAverages.htm"
    })
    .when("/summaryofMANITOULIN", {
        templateUrl : "contentOCDP/Documents/indexMANITOULINAverages.htm"
    })
    .when("/summaryofPARRY-SOUND", {
        templateUrl : "contentOCDP/Documents/indexPARRY-SOUNDAverages.htm"
    })
    .when("/summaryofPRESCOTTandRUSSELL", {
        templateUrl : "contentOCDP/Documents/indexPRESCOTTandRUSSELLAverages.htm"
    })
    .when("/summaryofRENFREW", {
        templateUrl : "contentOCDP/Documents/indexRENFREWAverages.htm"
    })
    .when("/summaryofHASTINGS", {
        templateUrl : "contentOCDP/Documents/indexHASTINGSAverages.htm"
    })
    .when("/summaryofOTTAWA-CARLTON", {
        templateUrl : "contentOCDP/Documents/indexOTTAWA-CARLTONAverages.htm"
    })
    .when("/summaryofLANARK", {
        templateUrl : "contentOCDP/Documents/indexLANARKAverages.htm"
    })
    .when("/summaryofSTORMONT-DUNDASandGL", {
        templateUrl : "contentOCDP/Documents/indexSTORMONT-DUNDASandGLAverages.htm"
    })
    .when("/summaryofHALIBURTON", {
        templateUrl : "contentOCDP/Documents/indexHALIBURTONAverages.htm"
    })
    .when("/summaryofMUSKOKA", {
        templateUrl : "contentOCDP/Documents/indexMUSKOKAAverages.htm"
    })
    .when("/summaryofFRONTENAC", {
        templateUrl : "contentOCDP/Documents/indexFRONTENACAverages.htm"
    })
    .when("/summaryofBRUCE", {
        templateUrl : "contentOCDP/Documents/indexBRUCEAverages.htm"
    })
    .when("/summaryofLEEDSandGRENVILLE", {
        templateUrl : "contentOCDP/Documents/indexLEEDSandGRENVILLEAverages.htm"
    })
    .when("/summaryofVICTORIA", {
        templateUrl : "contentOCDP/Documents/indexVICTORIAAverages.htm"
    })
    .when("/summaryofNORTHUMBERLAND", {
        templateUrl : "contentOCDP/Documents/indexNORTHUMBERLANDAverages.htm"
    })
    .when("/summaryofIsland-county-stat", {
        templateUrl : "contentOCDP/Documents/indexIsland-county-statAverages.htm"
    })
    .when("/summaryofSIMCOE", {
        templateUrl : "contentOCDP/Documents/indexSIMCOEAverages.htm"
    })
    .when("/summaryofLENNOXandADDINGTON", {
        templateUrl : "contentOCDP/Documents/indexLENNOXandADDINGTONAverages.htm"
    })
    .when("/summaryofGREY", {
        templateUrl : "contentOCDP/Documents/indexGREYAverages.htm"
    })
    .when("/summaryofPETERBOROUGH", {
        templateUrl : "contentOCDP/Documents/indexPETERBOROUGHAverages.htm"
    })
    .when("/summaryofDURHAM", {
        templateUrl : "contentOCDP/Documents/indexDURHAMAverages.htm"
    })
    .when("/summaryofPRINCE-EDWARD", {
        templateUrl : "contentOCDP/Documents/indexPRINCE-EDWARDAverages.htm"
    })
    .when("/summaryofDUFFERIN", {
        templateUrl : "contentOCDP/Documents/indexDUFFERINAverages.htm"
    })
    .when("/summaryofYORK", {
        templateUrl : "contentOCDP/Documents/indexYORKAverages.htm"
    })
    .when("/summaryofMETROPOLITAN-TORONTO", {
        templateUrl : "contentOCDP/Documents/indexMETROPOLITAN-TORONTOAverages.htm"
    })
    .when("/summaryofPEEL", {
        templateUrl : "contentOCDP/Documents/indexPEELAverages.htm"
    })
    .when("/summaryofWELLINGTON", {
        templateUrl : "contentOCDP/Documents/indexWELLINGTONAverages.htm"
    })
    .when("/summaryofWATERLOO", {
        templateUrl : "contentOCDP/Documents/indexWATERLOOAverages.htm"
    })
    .when("/summaryofHURON", {
        templateUrl : "contentOCDP/Documents/indexHURONAverages.htm"
    })
    .when("/summaryofHALTON", {
        templateUrl : "contentOCDP/Documents/indexHALTONAverages.htm"
    })
    .when("/summaryofPERTH", {
        templateUrl : "contentOCDP/Documents/indexPERTHAverages.htm"
    })
    .when("/summaryofOXFORD", {
        templateUrl : "contentOCDP/Documents/indexOXFORDAverages.htm"
    })
    .when("/summaryofHAMILTON-WENTWORTH", {
        templateUrl : "contentOCDP/Documents/indexHAMILTON-WENTWORTHAverages.htm"
    })
    .when("/summaryofBRANT", {
        templateUrl : "contentOCDP/Documents/indexBRANTAverages.htm"
    })
    .when("/summaryofMIDDLESEX", {
        templateUrl : "contentOCDP/Documents/indexMIDDLESEXAverages.htm"
    })
    .when("/summaryofNIAGARA", {
        templateUrl : "contentOCDP/Documents/indexNIAGARAAverages.htm"
    })
    .when("/summaryofHALDIMAND-NORFOLK", {
        templateUrl : "contentOCDP/Documents/indexHALDIMAND-NORFOLKAverages.htm"
    })
    .when("/summaryofELGIN", {
        templateUrl : "contentOCDP/Documents/indexELGINAverages.htm"
    })
    .when("/summaryofKENT", {
        templateUrl : "contentOCDP/Documents/indexKENTAverages.htm"
    })
    .when("/summaryofLAMBTON", {
        templateUrl : "contentOCDP/Documents/indexLAMBTONAverages.htm"
    })
    .when("/summaryofESSEX", {
        templateUrl : "contentOCDP/Documents/indexESSEXAverages.htm"
    })
	//gallery
    .when("/galleryTimeseris", {
        templateUrl : "world_canada_Ontario.htm"
    })
    .when("/galleryMaps", {
        templateUrl : "contentOCDP/Documents/galleryMaps.htm"
    })
	/*
    .when("/", {
        templateUrl : " "
    })
	*/
    .when("/summaryofstationAJAX", {
        templateUrl : "contentOCDP/Documents/indexofstationAJAXAverages.htm"
    })	
    .when("/summaryofstationALBION_FIELD_CENTRE", {
        templateUrl : "contentOCDP/Documents/indexofstationALBION_FIELD_CENTREAverages.htm"
    })
    .when("/summaryofstationALLISTON_NELSON", {
        templateUrl : "contentOCDP/Documents/indexofstationALLISTON_NELSONAverages.htm"
    })
    .when("/summaryofstationAMHERSTBURG", {
        templateUrl : "contentOCDP/Documents/indexofstationAMHERSTBURGAverages.htm"
    })
    .when("/summaryofstationARNPRIOR_GRANDON", {
        templateUrl : "contentOCDP/Documents/indexofstationARNPRIOR_GRANDONAverages.htm"
    })
    .when("/summaryofstationAVONMORE", {
        templateUrl : "contentOCDP/Documents/indexofstationAVONMOREAverages.htm"
    })
    .when("/summaryofstationBARRIE_WPCC", {
        templateUrl : "contentOCDP/Documents/indexofstationBARRIE_WPCCAverages.htm"
    })
    .when("/summaryofstationBARWICK", {
        templateUrl : "contentOCDP/Documents/indexofstationBARWICKAverages.htm"
    })
    .when("/summaryofstationBEATRICE_2", {
        templateUrl : "contentOCDP/Documents/indexofstationBEATRICE_2Averages.htm"
    })
    .when("/summaryofstationBELLEVILLE", {
        templateUrl : "contentOCDP/Documents/indexofstationBELLEVILLEAverages.htm"
    })
    .when("/summaryofstationBLYTH", {
        templateUrl : "contentOCDP/Documents/indexofstationBLYTHAverages.htm"
    })
    .when("/summaryofstationBOWMANVILLE_MOSTERT", {
        templateUrl : "contentOCDP/Documents/indexofstationBOWMANVILLE_MOSTERTAverages.htm"
    })
    .when("/summaryofstationBRADFORD_MUCK_RESEARCH", {
        templateUrl : "contentOCDP/Documents/indexofstationBRADFORD_MUCK_RESEARCHAverages.htm"
    })
    .when("/summaryofstationBRANTFORD_MOE", {
        templateUrl : "contentOCDP/Documents/indexofstationBRANTFORD_MOEAverages.htm"
    })
    .when("/summaryofstationBROCKVILLE_PCC", {
        templateUrl : "contentOCDP/Documents/indexofstationBROCKVILLE_PCCAverages.htm"
    })
    .when("/summaryofstationBURKETON_MCLAUGHLIN", {
        templateUrl : "contentOCDP/Documents/indexofstationBURKETON_MCLAUGHLINAverages.htm"
    })
    .when("/summaryofstationBURLINGTON_TS", {
        templateUrl : "contentOCDP/Documents/indexofstationBURLINGTON_TSAverages.htm"
    })
    .when("/summaryofstationCAMERON_FALLS", {
        templateUrl : "contentOCDP/Documents/indexofstationCAMERON_FALLSAverages.htm"
    })
    .when("/summaryofstationCENTREVILLE", {
        templateUrl : "contentOCDP/Documents/indexofstationCENTREVILLEAverages.htm"
    })
    .when("/summaryofstationCHALK_RIVER_AECL", {
        templateUrl : "contentOCDP/Documents/indexofstationCHALK_RIVER_AECLAverages.htm"
    })
    .when("/summaryofstationCHAPLEAU_A", {
        templateUrl : "contentOCDP/Documents/indexofstationCHAPLEAU_AAverages.htm"
    })
    .when("/summaryofstationCHATHAM_WPCP", {
        templateUrl : "contentOCDP/Documents/indexofstationCHATHAM_WPCPAverages.htm"
    })
    .when("/summaryofstationCHATSWORTH", {
        templateUrl : "contentOCDP/Documents/indexofstationCHATSWORTHAverages.htm"
    })
    .when("/summaryofstationCOBOURG_STP", {
        templateUrl : "contentOCDP/Documents/indexofstationCOBOURG_STPAverages.htm"
    })
    .when("/summaryofstationCOMBERMERE", {
        templateUrl : "contentOCDP/Documents/indexofstationCOMBERMEREAverages.htm"
    })
    .when("/summaryofstationCONISTON_STP", {
        templateUrl : "contentOCDP/Documents/indexofstationCONISTON_STPAverages.htm"
    })
    .when("/summaryofstationCOOKSTOWN", {
        templateUrl : "contentOCDP/Documents/indexofstationCOOKSTOWNAverages.htm"
    })
    .when("/summaryofstationCORNWALL", {
        templateUrl : "contentOCDP/Documents/indexofstationCORNWALLAverages.htm"
    })
    .when("/summaryofstationCOURTRIGHT", {
        templateUrl : "contentOCDP/Documents/indexofstationCOURTRIGHTAverages.htm"
    })
    .when("/summaryofstationCRESSY", {
        templateUrl : "contentOCDP/Documents/indexofstationCRESSYAverages.htm"
    })
    .when("/summaryofstationCULLODEN_EASEY", {
        templateUrl : "contentOCDP/Documents/indexofstationCULLODEN_EASEYAverages.htm"
    })
    .when("/summaryofstationDALHOUSIE_MILLS", {
        templateUrl : "contentOCDP/Documents/indexofstationDALHOUSIE_MILLSAverages.htm"
    })
    .when("/summaryofstationDASHWOOD", {
        templateUrl : "contentOCDP/Documents/indexofstationDASHWOODAverages.htm"
    })
    .when("/summaryofstationDELHI_CDA", {
        templateUrl : "contentOCDP/Documents/indexofstationDELHI_CDAAverages.htm"
    })
    .when("/summaryofstationDORSET_MOE", {
        templateUrl : "contentOCDP/Documents/indexofstationDORSET_MOEAverages.htm"
    })
    .when("/summaryofstationDRESDEN", {
        templateUrl : "contentOCDP/Documents/indexofstationDRESDENAverages.htm"
    })
    .when("/summaryofstationDRUMMOND_CENTRE", {
        templateUrl : "contentOCDP/Documents/indexofstationDRUMMOND_CENTREAverages.htm"
    })
    .when("/summaryofstationDRYDEN", {
        templateUrl : "contentOCDP/Documents/indexofstationDRYDENAverages.htm"
    })
    .when("/summaryofstationDRYDEN_A", {
        templateUrl : "contentOCDP/Documents/indexofstationDRYDEN_AAverages.htm"
    })
    .when("/summaryofstationDUNCHURCH", {
        templateUrl : "contentOCDP/Documents/indexofstationDUNCHURCHAverages.htm"
    })
    .when("/summaryofstationDURHAM", {
        templateUrl : "contentOCDP/Documents/indexofstationDURHAMAverages.htm"
    })
    .when("/summaryofstationDWIGHT", {
        templateUrl : "contentOCDP/Documents/indexofstationDWIGHTAverages.htm"
    })
    .when("/summaryofstationEARLTON_A", {
        templateUrl : "contentOCDP/Documents/indexofstationEARLTON_AAverages.htm"
    })
    .when("/summaryofstationEGBERT_CARE", {
        templateUrl : "contentOCDP/Documents/indexofstationEGBERT_CAREAverages.htm"
    })
    .when("/summaryofstationEMO_RADBOURNE", {
        templateUrl : "contentOCDP/Documents/indexofstationEMO_RADBOURNEAverages.htm"
    })
    .when("/summaryofstationESSA_ONT_HYDRO", {
        templateUrl : "contentOCDP/Documents/indexofstationESSA_ONT_HYDROAverages.htm"
    })
    .when("/summaryofstationEXETER", {
        templateUrl : "contentOCDP/Documents/indexofstationEXETERAverages.htm"
    })
    .when("/summaryofstationFERGUS_SHAND_DAM", {
        templateUrl : "contentOCDP/Documents/indexofstationFERGUS_SHAND_DAMAverages.htm"
    })
    .when("/summaryofstationFLINT", {
        templateUrl : "contentOCDP/Documents/indexofstationFLINTAverages.htm"
    })
    .when("/summaryofstationFOLDENS", {
        templateUrl : "contentOCDP/Documents/indexofstationFOLDENSAverages.htm"
    })
    .when("/summaryofstationFORT_ERIE", {
        templateUrl : "contentOCDP/Documents/indexofstationFORT_ERIEAverages.htm"
    })
    .when("/summaryofstationFORT_FRANCES_A", {
        templateUrl : "contentOCDP/Documents/indexofstationFORT_FRANCES_AAverages.htm"
    })
    .when("/summaryofstationGEORGETOWN_WWTP", {
        templateUrl : "contentOCDP/Documents/indexofstationGEORGETOWN_WWTPAverages.htm"
    })
    .when("/summaryofstationGERALDTON_A", {
        templateUrl : "contentOCDP/Documents/indexofstationGERALDTON_AAverages.htm"
    })
    .when("/summaryofstationGLEN_ALLAN", {
        templateUrl : "contentOCDP/Documents/indexofstationGLEN_ALLANAverages.htm"
    })
    .when("/summaryofstationGLEN_GORDON", {
        templateUrl : "contentOCDP/Documents/indexofstationGLEN_GORDONAverages.htm"
    })
    .when("/summaryofstationGLENBURNIE", {
        templateUrl : "contentOCDP/Documents/indexofstationGLENBURNIEAverages.htm"
    })
    .when("/summaryofstationGODFREY", {
        templateUrl : "contentOCDP/Documents/indexofstationGODFREYAverages.htm"
    })
    .when("/summaryofstationHAGERSVILLE", {
        templateUrl : "contentOCDP/Documents/indexofstationHAGERSVILLEAverages.htm"
    })
    .when("/summaryofstationHALIBURTON_3", {
        templateUrl : "contentOCDP/Documents/indexofstationHALIBURTON_3Averages.htm"
    })
    .when("/summaryofstationHAMILTON_A", {
        templateUrl : "contentOCDP/Documents/indexofstationHAMILTON_AAverages.htm"
    })
    .when("/summaryofstationHAMILTON_RBG", {
        templateUrl : "contentOCDP/Documents/indexofstationHAMILTON_RBGAverages.htm"
    })
    .when("/summaryofstationHANOVER", {
        templateUrl : "contentOCDP/Documents/indexofstationHANOVERAverages.htm"
    })
    .when("/summaryofstationHARTINGTON_IHD", {
        templateUrl : "contentOCDP/Documents/indexofstationHARTINGTON_IHDAverages.htm"
    })
    .when("/summaryofstationHUNTSVILLE_WPCP", {
        templateUrl : "contentOCDP/Documents/indexofstationHUNTSVILLE_WPCPAverages.htm"
    })
    .when("/summaryofstationILDERTON_BEAR_CREEK", {
        templateUrl : "contentOCDP/Documents/indexofstationILDERTON_BEAR_CREEKAverages.htm"
    })
    .when("/summaryofstationISLAND_FALLS", {
        templateUrl : "contentOCDP/Documents/indexofstationISLAND_FALLSAverages.htm"
    })
    .when("/summaryofstationJANETVILLE", {
        templateUrl : "contentOCDP/Documents/indexofstationJANETVILLEAverages.htm"
    })
    .when("/summaryofstationKAPUSKASING_A", {
        templateUrl : "contentOCDP/Documents/indexofstationKAPUSKASING_AAverages.htm"
    })
    .when("/summaryofstationKAPUSKASING_CDA", {
        templateUrl : "contentOCDP/Documents/indexofstationKAPUSKASING_CDAAverages.htm"
    })
    .when("/summaryofstationKEMPTVILLE", {
        templateUrl : "contentOCDP/Documents/indexofstationKEMPTVILLEAverages.htm"
    })
    .when("/summaryofstationKENORA_A", {
        templateUrl : "contentOCDP/Documents/indexofstationKENORA_AAverages.htm"
    })
    .when("/summaryofstationKING_SMOKE_TREE", {
        templateUrl : "contentOCDP/Documents/indexofstationKING_SMOKE_TREEAverages.htm"
    })
    .when("/summaryofstationKINGSTON_PUMPING_STATION", {
        templateUrl : "contentOCDP/Documents/indexofstationKINGSTON_PUMPING_STATIONAverages.htm"
    })
    .when("/summaryofstationKINGSVILLE_MOE", {
        templateUrl : "contentOCDP/Documents/indexofstationKINGSVILLE_MOEAverages.htm"
    })
    .when("/summaryofstationLINDSAY_FROST", {
        templateUrl : "contentOCDP/Documents/indexofstationLINDSAY_FROSTAverages.htm"
    })
    .when("/summaryofstationLONDON_AIRPORT", {
        templateUrl : "contentOCDP/Documents/indexofstationLONDON_AIRPORTAverages.htm"
    })
    .when("/summaryofstationLYNDHURST_SHAWMERE", {
        templateUrl : "contentOCDP/Documents/indexofstationLYNDHURST_SHAWMEREAverages.htm"
    })
    .when("/summaryofstationMADAWASKA", {
        templateUrl : "contentOCDP/Documents/indexofstationMADAWASKAAverages.htm"
    })
    .when("/summaryofstationMASSEY", {
        templateUrl : "contentOCDP/Documents/indexofstationMASSEYAverages.htm"
    })
    .when("/summaryofstationMIDDLEPORT_TS", {
        templateUrl : "contentOCDP/Documents/indexofstationMIDDLEPORT_TSAverages.htm"
    })
    .when("/summaryofstationMIDLAND_WATER", {
        templateUrl : "contentOCDP/Documents/indexofstationMIDLAND_WATERAverages.htm"
    })
    .when("/summaryofstationMILLGROVE", {
        templateUrl : "contentOCDP/Documents/indexofstationMILLGROVEAverages.htm"
    })
    .when("/summaryofstationMINDEN", {
        templateUrl : "contentOCDP/Documents/indexofstationMINDENAverages.htm"
    })
    .when("/summaryofstationMINE_CENTRE", {
        templateUrl : "contentOCDP/Documents/indexofstationMINE_CENTREAverages.htm"
    })
    .when("/summaryofstationMONETVILLE", {
        templateUrl : "contentOCDP/Documents/indexofstationMONETVILLEAverages.htm"
    })
    .when("/summaryofstationMOOSONEE_UA", {
        templateUrl : "contentOCDP/Documents/indexofstationMOOSONEE_UAAverages.htm"
    })
    .when("/summaryofstationMORRISBURG", {
        templateUrl : "contentOCDP/Documents/indexofstationMORRISBURGAverages.htm"
    })
    .when("/summaryofstationMOUNTAINVIEW", {
        templateUrl : "contentOCDP/Documents/indexofstationMOUNTAINVIEWAverages.htm"
    })
    .when("/summaryofstationMUSKOKA_A", {
        templateUrl : "contentOCDP/Documents/indexofstationMUSKOKA_AAverages.htm"
    })
    .when("/summaryofstationNEW_GLASGOW", {
        templateUrl : "contentOCDP/Documents/indexofstationNEW_GLASGOWAverages.htm"
    })
    .when("/summaryofstationNIAGARA_FALLS_NPCSH", {
        templateUrl : "contentOCDP/Documents/indexofstationNIAGARA_FALLS_NPCSHAverages.htm"
    })
    .when("/summaryofstationNORTH_BAY_A", {
        templateUrl : "contentOCDP/Documents/indexofstationNORTH_BAY_AAverages.htm"
    })
    .when("/summaryofstationOAKVILLE_SOUTHEAST_WPCP", {
        templateUrl : "contentOCDP/Documents/indexofstationOAKVILLE_SOUTHEAST_WPCPAverages.htm"
    })
    .when("/summaryofstationORANGEVILLE_MOE", {
        templateUrl : "contentOCDP/Documents/indexofstationORANGEVILLE_MOEAverages.htm"
    })
    .when("/summaryofstationOSHAWA_WPCP", {
        templateUrl : "contentOCDP/Documents/indexofstationOSHAWA_WPCPAverages.htm"
    })
    .when("/summaryofstationOTTAWA_CDA", {
        templateUrl : "contentOCDP/Documents/indexofstationOTTAWA_CDAAverages.htm"
    })
    .when("/summaryofstationOTTAWA_MACDONALD", {
        templateUrl : "contentOCDP/Documents/indexofstationOTTAWA_MACDONALDAverages.htm"
    })
    .when("/summaryofstationOWEN_SOUND_MOE", {
        templateUrl : "contentOCDP/Documents/indexofstationOWEN_SOUND_MOEAverages.htm"
    })
    .when("/summaryofstationPETERBOROUGH_A", {
        templateUrl : "contentOCDP/Documents/indexofstationPETERBOROUGH_AAverages.htm"
    })
    .when("/summaryofstationPETERBOROUGH_TRENT_U", {
        templateUrl : "contentOCDP/Documents/indexofstationPETERBOROUGH_TRENT_UAverages.htm"
    })
    .when("/summaryofstationPETROLIA_TOWN", {
        templateUrl : "contentOCDP/Documents/indexofstationPETROLIA_TOWNAverages.htm"
    })
    .when("/summaryofstationPICKLE_LAKE_A", {
        templateUrl : "contentOCDP/Documents/indexofstationPICKLE_LAKE_AAverages.htm"
    })
    .when("/summaryofstationPORCUPINE_ONT_HYDRO", {
        templateUrl : "contentOCDP/Documents/indexofstationPORCUPINE_ONT_HYDROAverages.htm"
    })
    .when("/summaryofstationPORT_COLBORNE", {
        templateUrl : "contentOCDP/Documents/indexofstationPORT_COLBORNEAverages.htm"
    })
    .when("/summaryofstationPORT_DALHOUSIE", {
        templateUrl : "contentOCDP/Documents/indexofstationPORT_DALHOUSIEAverages.htm"
    })
    .when("/summaryofstationPOWASSAN", {
        templateUrl : "contentOCDP/Documents/indexofstationPOWASSANAverages.htm"
    })
    .when("/summaryofstationPRESTON", {
        templateUrl : "contentOCDP/Documents/indexofstationPRESTONAverages.htm"
    })
    .when("/summaryofstationPROTON_STATION", {
        templateUrl : "contentOCDP/Documents/indexofstationPROTON_STATIONAverages.htm"
    })
    .when("/summaryofstationRAWSON_LAKE", {
        templateUrl : "contentOCDP/Documents/indexofstationRAWSON_LAKEAverages.htm"
    })
    .when("/summaryofstationRED_LAKE_A", {
        templateUrl : "contentOCDP/Documents/indexofstationRED_LAKE_AAverages.htm"
    })
    .when("/summaryofstationRENFREW", {
        templateUrl : "contentOCDP/Documents/indexofstationRENFREWAverages.htm"
    })
    .when("/summaryofstationRICHMOND_HILL", {
        templateUrl : "contentOCDP/Documents/indexofstationRICHMOND_HILLAverages.htm"
    })
    .when("/summaryofstationRIDGEVILLE", {
        templateUrl : "contentOCDP/Documents/indexofstationRIDGEVILLEAverages.htm"
    })
    .when("/summaryofstationROSEVILLE", {
        templateUrl : "contentOCDP/Documents/indexofstationROSEVILLEAverages.htm"
    })
    .when("/summaryofstationRUSKVIEW", {
        templateUrl : "contentOCDP/Documents/indexofstationRUSKVIEWAverages.htm"
    })
    .when("/summaryofstationRUSSELL", {
        templateUrl : "contentOCDP/Documents/indexofstationRUSSELLAverages.htm"
    })
    .when("/summaryofstationSARNIA_AIRPORT", {
        templateUrl : "contentOCDP/Documents/indexofstationSARNIA_AIRPORTAverages.htm"
    })
    .when("/summaryofstationSAULT_STE_MARIE_2", {
        templateUrl : "contentOCDP/Documents/indexofstationSAULT_STE_MARIE_2Averages.htm"
    })
    .when("/summaryofstationSAULT_STE_MARIE_A", {
        templateUrl : "contentOCDP/Documents/indexofstationSAULT_STE_MARIE_AAverages.htm"
    })
    .when("/summaryofstationSHANTY_BAY", {
        templateUrl : "contentOCDP/Documents/indexofstationSHANTY_BAYAverages.htm"
    })
    .when("/summaryofstationSIOUX_LOOKOUT_A", {
        templateUrl : "contentOCDP/Documents/indexofstationSIOUX_LOOKOUT_AAverages.htm"
    })
    .when("/summaryofstationSMOKY_FALLS", {
        templateUrl : "contentOCDP/Documents/indexofstationSMOKY_FALLSAverages.htm"
    })
    .when("/summaryofstationSOUTH_MOUNTAIN", {
        templateUrl : "contentOCDP/Documents/indexofstationSOUTH_MOUNTAINAverages.htm"
    })
    .when("/summaryofstationST_CATHARINES_A", {
        templateUrl : "contentOCDP/Documents/indexofstationST_CATHARINES_AAverages.htm"
    })
    .when("/summaryofstationST_CATHARINES_POWER_GLEN", {
        templateUrl : "contentOCDP/Documents/indexofstationST_CATHARINES_POWER_GLENAverages.htm"
    })
    .when("/summaryofstationST_THOMAS_WPCP", {
        templateUrl : "contentOCDP/Documents/indexofstationST_THOMAS_WPCPAverages.htm"
    })
    .when("/summaryofstationST_ALBERT", {
        templateUrl : "contentOCDP/Documents/indexofstationST_ALBERTAverages.htm"
    })
    .when("/summaryofstationSTRATFORD_WWTP", {
        templateUrl : "contentOCDP/Documents/indexofstationSTRATFORD_WWTPAverages.htm"
    })
    .when("/summaryofstationSTRATHROY", {
        templateUrl : "contentOCDP/Documents/indexofstationSTRATHROYAverages.htm"
    })
    .when("/summaryofstationSUDBURY_A", {
        templateUrl : "contentOCDP/Documents/indexofstationSUDBURY_AAverages.htm"
    })
    .when("/summaryofstationTARA", {
        templateUrl : "contentOCDP/Documents/indexofstationTARAAverages.htm"
    })
    .when("/summaryofstationTHEDFORD", {
        templateUrl : "contentOCDP/Documents/indexofstationTHEDFORDAverages.htm"
    })
    .when("/summaryofstationTHORNBURY_SLAMA", {
        templateUrl : "contentOCDP/Documents/indexofstationTHORNBURY_SLAMAAverages.htm"
    })
    .when("/summaryofstationTIMMINS_VICTOR_POWER_A", {
        templateUrl : "contentOCDP/Documents/indexofstationTIMMINS_VICTOR_POWER_AAverages.htm"
    })
    .when("/summaryofstationTORONTO", {
        templateUrl : "contentOCDP/Documents/indexofstationTORONTOAverages.htm"
    })
    .when("/summaryofstationTORONTO_BUTTONVILLE_A", {
        templateUrl : "contentOCDP/Documents/indexofstationTORONTO_BUTTONVILLE_AAverages.htm"
    })
    .when("/summaryofstationTORONTO_LESTER_B", {
        templateUrl : "contentOCDP/Documents/indexofstationTORONTO_LESTER_BAverages.htm"
    })
    .when("/summaryofstationTRANQUILLO_RIDGE", {
        templateUrl : "contentOCDP/Documents/indexofstationTRANQUILLO_RIDGEAverages.htm"
    })
    .when("/summaryofstationTRENTON_A", {
        templateUrl : "contentOCDP/Documents/indexofstationTRENTON_AAverages.htm"
    })
    .when("/summaryofstationTYRONE", {
        templateUrl : "contentOCDP/Documents/indexofstationTYRONEAverages.htm"
    })
    .when("/summaryofstationUDORA", {
        templateUrl : "contentOCDP/Documents/indexofstationUDORAAverages.htm"
    })
    .when("/summaryofstationVINELAND_RITTENHOUSE", {
        templateUrl : "contentOCDP/Documents/indexofstationVINELAND_RITTENHOUSEAverages.htm"
    })
    .when("/summaryofstationWAWA_A", {
        templateUrl : "contentOCDP/Documents/indexofstationWAWA_AAverages.htm"
    })
    .when("/summaryofstationWELLAND", {
        templateUrl : "contentOCDP/Documents/indexofstationWELLANDAverages.htm"
    })
    .when("/summaryofstationWHITEFISH_LAKE", {
        templateUrl : "contentOCDP/Documents/indexofstationWHITEFISH_LAKEAverages.htm"
    })
    .when("/summaryofstationWIARTON_A", {
        templateUrl : "contentOCDP/Documents/indexofstationWIARTON_AAverages.htm"
    })
    .when("/summaryofstationWINDSOR_A", {
        templateUrl : "contentOCDP/Documents/indexofstationWINDSOR_AAverages.htm"
    })
    .when("/summaryofstationWOODBRIDGE", {
        templateUrl : "contentOCDP/Documents/indexofstationWOODBRIDGEAverages.htm"
    })
    .when("/summaryofstationWOODSTOCK", {
        templateUrl : "contentOCDP/Documents/indexofstationWOODSTOCKAverages.htm"
    })
    .when("/summaryofstationWOOLER", {
        templateUrl : "contentOCDP/Documents/indexofstationWOOLERAverages.htm"
    })	
	.when("/Downscaling", {
		templateUrl : "content/Documents/Downscaling.html"
	})
	.when("/BiasCorrection", {
		templateUrl : "content/Documents/BiasCorrection.html"
	})
	.when("/IndicesCalculation", {
		templateUrl : "content/Documents/IndicesCalculation.html"
	})
	.when("/ProbProjection", {
		templateUrl : "content/Documents/ProbProjection.html"
	})
    .when("/indexDefinationTable", {
        templateUrl : "contentOCDP/Documents/indexDefinationTable.htm"
    })
    .when("/indexDefinationTablebk", {
        templateUrl : "http://lamps.math.yorku.ca/OntarioClimate/assets/pdf/DescriptionClimateExtremeIndexes9282018.pdf"
    });	
});

app.controller('TreeMenuCtrl', function($scope) {
    $scope.DocumentsState = "closed";
	$scope.clickDocuments=function() {
	    $scope.DocumentsState = "open";	
	};
});
