var app = angular.module("app_data", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
	
    .when("/ClimateChangeTeam", {
        templateUrl : "ClimateChangeTeam.html"
    })
    .when("/faq", {
        templateUrl : "faq.html"
    })	
    .when("/AJAXtasdailyRCP85", {
        templateUrl : "data/content/stations/AJAX_tas.html"
    })
    .when("/AJAXtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/AJAX_tasmax.html"
    })
    .when("/AJAXtasmindailyRCP85", {
        templateUrl : "data/content/stations/AJAX_tasmin.html"
    })
    .when("/AJAXprdailyRCP85", {
        templateUrl : "data/content/stations/AJAX_pr.html"
    })	
    .when("/ALBION_FIELD_CENTREtasdailyRCP85", {
        templateUrl : "data/content/stations/ALBION_FIELD_CENTRE_tas.html"
    })
    .when("/ALBION_FIELD_CENTREtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/ALBION_FIELD_CENTRE_tasmax.html"
    })
    .when("/ALBION_FIELD_CENTREtasmindailyRCP85", {
        templateUrl : "data/content/stations/ALBION_FIELD_CENTRE_tasmin.html"
    })
    .when("/ALBION_FIELD_CENTREprdailyRCP85", {
        templateUrl : "data/content/stations/ALBION_FIELD_CENTRE_pr.html"
    })
    .when("/ALLISTON_NELSONtasdailyRCP85", {
        templateUrl : "data/content/stations/ALLISTON_NELSON_tas.html"
    })
    .when("/ALLISTON_NELSONtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/ALLISTON_NELSON_tasmax.html"
    })
    .when("/ALLISTON_NELSONtasmindailyRCP85", {
        templateUrl : "data/content/stations/ALLISTON_NELSON_tasmin.html"
    })
    .when("/ALLISTON_NELSONprdailyRCP85", {
        templateUrl : "data/content/stations/ALLISTON_NELSON_pr.html"
    })
    .when("/AMHERSTBURGtasdailyRCP85", {
        templateUrl : "data/content/stations/AMHERSTBURG_tas.html"
    })
    .when("/AMHERSTBURGtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/AMHERSTBURG_tasmax.html"
    })
    .when("/AMHERSTBURGtasmindailyRCP85", {
        templateUrl : "data/content/stations/AMHERSTBURG_tasmin.html"
    })
    .when("/AMHERSTBURGprdailyRCP85", {
        templateUrl : "data/content/stations/AMHERSTBURG_pr.html"
    })
    .when("/ARNPRIOR_GRANDONtasdailyRCP85", {
        templateUrl : "data/content/stations/ARNPRIOR_GRANDON_tas.html"
    })
    .when("/ARNPRIOR_GRANDONtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/ARNPRIOR_GRANDON_tasmax.html"
    })
    .when("/ARNPRIOR_GRANDONtasmindailyRCP85", {
        templateUrl : "data/content/stations/ARNPRIOR_GRANDON_tasmin.html"
    })
    .when("/ARNPRIOR_GRANDONprdailyRCP85", {
        templateUrl : "data/content/stations/ARNPRIOR_GRANDON_pr.html"
    })
    .when("/AVONMOREtasdailyRCP85", {
        templateUrl : "data/content/stations/AVONMORE_tas.html"
    })
    .when("/AVONMOREtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/AVONMORE_tasmax.html"
    })
    .when("/AVONMOREtasmindailyRCP85", {
        templateUrl : "data/content/stations/AVONMORE_tasmin.html"
    })
    .when("/AVONMOREprdailyRCP85", {
        templateUrl : "data/content/stations/AVONMORE_pr.html"
    })
    .when("/BARRIE_WPCCtasdailyRCP85", {
        templateUrl : "data/content/stations/BARRIE_WPCC_tas.html"
    })
    .when("/BARRIE_WPCCtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/BARRIE_WPCC_tasmax.html"
    })
    .when("/BARRIE_WPCCtasmindailyRCP85", {
        templateUrl : "data/content/stations/BARRIE_WPCC_tasmin.html"
    })
    .when("/BARRIE_WPCCprdailyRCP85", {
        templateUrl : "data/content/stations/BARRIE_WPCC_pr.html"
    })
    .when("/BARWICKtasdailyRCP85", {
        templateUrl : "data/content/stations/BARWICK_tas.html"
    })
    .when("/BARWICKtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/BARWICK_tasmax.html"
    })
    .when("/BARWICKtasmindailyRCP85", {
        templateUrl : "data/content/stations/BARWICK_tasmin.html"
    })
    .when("/BARWICKprdailyRCP85", {
        templateUrl : "data/content/stations/BARWICK_pr.html"
    })
    .when("/BEATRICE_2tasdailyRCP85", {
        templateUrl : "data/content/stations/BEATRICE_2_tas.html"
    })
    .when("/BEATRICE_2tasmaxdailyRCP85", {
        templateUrl : "data/content/stations/BEATRICE_2_tasmax.html"
    })
    .when("/BEATRICE_2tasmindailyRCP85", {
        templateUrl : "data/content/stations/BEATRICE_2_tasmin.html"
    })
    .when("/BEATRICE_2prdailyRCP85", {
        templateUrl : "data/content/stations/BEATRICE_2_pr.html"
    })
    .when("/BELLEVILLEtasdailyRCP85", {
        templateUrl : "data/content/stations/BELLEVILLE_tas.html"
    })
    .when("/BELLEVILLEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/BELLEVILLE_tasmax.html"
    })
    .when("/BELLEVILLEtasmindailyRCP85", {
        templateUrl : "data/content/stations/BELLEVILLE_tasmin.html"
    })
    .when("/BELLEVILLEprdailyRCP85", {
        templateUrl : "data/content/stations/BELLEVILLE_pr.html"
    })
    .when("/BLYTHtasdailyRCP85", {
        templateUrl : "data/content/stations/BLYTH_tas.html"
    })
    .when("/BLYTHtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/BLYTH_tasmax.html"
    })
    .when("/BLYTHtasmindailyRCP85", {
        templateUrl : "data/content/stations/BLYTH_tasmin.html"
    })
    .when("/BLYTHprdailyRCP85", {
        templateUrl : "data/content/stations/BLYTH_pr.html"
    })
    .when("/BOWMANVILLE_MOSTERTtasdailyRCP85", {
        templateUrl : "data/content/stations/BOWMANVILLE_MOSTERT_tas.html"
    })
    .when("/BOWMANVILLE_MOSTERTtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/BOWMANVILLE_MOSTERT_tasmax.html"
    })
    .when("/BOWMANVILLE_MOSTERTtasmindailyRCP85", {
        templateUrl : "data/content/stations/BOWMANVILLE_MOSTERT_tasmin.html"
    })
    .when("/BOWMANVILLE_MOSTERTprdailyRCP85", {
        templateUrl : "data/content/stations/BOWMANVILLE_MOSTERT_pr.html"
    })
    .when("/BRADFORD_MUCK_RESEARCHtasdailyRCP85", {
        templateUrl : "data/content/stations/BRADFORD_MUCK_RESEARCH_tas.html"
    })
    .when("/BRADFORD_MUCK_RESEARCHtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/BRADFORD_MUCK_RESEARCH_tasmax.html"
    })
    .when("/BRADFORD_MUCK_RESEARCHtasmindailyRCP85", {
        templateUrl : "data/content/stations/BRADFORD_MUCK_RESEARCH_tasmin.html"
    })
    .when("/BRADFORD_MUCK_RESEARCHprdailyRCP85", {
        templateUrl : "data/content/stations/BRADFORD_MUCK_RESEARCH_pr.html"
    })
    .when("/BRANTFORD_MOEtasdailyRCP85", {
        templateUrl : "data/content/stations/BRANTFORD_MOE_tas.html"
    })
    .when("/BRANTFORD_MOEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/BRANTFORD_MOE_tasmax.html"
    })
    .when("/BRANTFORD_MOEtasmindailyRCP85", {
        templateUrl : "data/content/stations/BRANTFORD_MOE_tasmin.html"
    })
    .when("/BRANTFORD_MOEprdailyRCP85", {
        templateUrl : "data/content/stations/BRANTFORD_MOE_pr.html"
    })
    .when("/BROCKVILLE_PCCtasdailyRCP85", {
        templateUrl : "data/content/stations/BROCKVILLE_PCC_tas.html"
    })
    .when("/BROCKVILLE_PCCtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/BROCKVILLE_PCC_tasmax.html"
    })
    .when("/BROCKVILLE_PCCtasmindailyRCP85", {
        templateUrl : "data/content/stations/BROCKVILLE_PCC_tasmin.html"
    })
    .when("/BROCKVILLE_PCCprdailyRCP85", {
        templateUrl : "data/content/stations/BROCKVILLE_PCC_pr.html"
    })
    .when("/BURKETON_MCLAUGHLINtasdailyRCP85", {
        templateUrl : "data/content/stations/BURKETON_MCLAUGHLIN_tas.html"
    })
    .when("/BURKETON_MCLAUGHLINtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/BURKETON_MCLAUGHLIN_tasmax.html"
    })
    .when("/BURKETON_MCLAUGHLINtasmindailyRCP85", {
        templateUrl : "data/content/stations/BURKETON_MCLAUGHLIN_tasmin.html"
    })
    .when("/BURKETON_MCLAUGHLINprdailyRCP85", {
        templateUrl : "data/content/stations/BURKETON_MCLAUGHLIN_pr.html"
    })
    .when("/BURLINGTON_TStasdailyRCP85", {
        templateUrl : "data/content/stations/BURLINGTON_TS_tas.html"
    })
    .when("/BURLINGTON_TStasmaxdailyRCP85", {
        templateUrl : "data/content/stations/BURLINGTON_TS_tasmax.html"
    })
    .when("/BURLINGTON_TStasmindailyRCP85", {
        templateUrl : "data/content/stations/BURLINGTON_TS_tasmin.html"
    })
    .when("/BURLINGTON_TSprdailyRCP85", {
        templateUrl : "data/content/stations/BURLINGTON_TS_pr.html"
    })
    .when("/CAMERON_FALLStasdailyRCP85", {
        templateUrl : "data/content/stations/CAMERON_FALLS_tas.html"
    })
    .when("/CAMERON_FALLStasmaxdailyRCP85", {
        templateUrl : "data/content/stations/CAMERON_FALLS_tasmax.html"
    })
    .when("/CAMERON_FALLStasmindailyRCP85", {
        templateUrl : "data/content/stations/CAMERON_FALLS_tasmin.html"
    })
    .when("/CAMERON_FALLSprdailyRCP85", {
        templateUrl : "data/content/stations/CAMERON_FALLS_pr.html"
    })
    .when("/CENTREVILLEtasdailyRCP85", {
        templateUrl : "data/content/stations/CENTREVILLE_tas.html"
    })
    .when("/CENTREVILLEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/CENTREVILLE_tasmax.html"
    })
    .when("/CENTREVILLEtasmindailyRCP85", {
        templateUrl : "data/content/stations/CENTREVILLE_tasmin.html"
    })
    .when("/CENTREVILLEprdailyRCP85", {
        templateUrl : "data/content/stations/CENTREVILLE_pr.html"
    })
    .when("/CHALK_RIVER_AECLtasdailyRCP85", {
        templateUrl : "data/content/stations/CHALK_RIVER_AECL_tas.html"
    })
    .when("/CHALK_RIVER_AECLtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/CHALK_RIVER_AECL_tasmax.html"
    })
    .when("/CHALK_RIVER_AECLtasmindailyRCP85", {
        templateUrl : "data/content/stations/CHALK_RIVER_AECL_tasmin.html"
    })
    .when("/CHALK_RIVER_AECLprdailyRCP85", {
        templateUrl : "data/content/stations/CHALK_RIVER_AECL_pr.html"
    })
    .when("/CHAPLEAU_AtasdailyRCP85", {
        templateUrl : "data/content/stations/CHAPLEAU_A_tas.html"
    })
    .when("/CHAPLEAU_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/CHAPLEAU_A_tasmax.html"
    })
    .when("/CHAPLEAU_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/CHAPLEAU_A_tasmin.html"
    })
    .when("/CHAPLEAU_AprdailyRCP85", {
        templateUrl : "data/content/stations/CHAPLEAU_A_pr.html"
    })
    .when("/CHATHAM_WPCPtasdailyRCP85", {
        templateUrl : "data/content/stations/CHATHAM_WPCP_tas.html"
    })
    .when("/CHATHAM_WPCPtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/CHATHAM_WPCP_tasmax.html"
    })
    .when("/CHATHAM_WPCPtasmindailyRCP85", {
        templateUrl : "data/content/stations/CHATHAM_WPCP_tasmin.html"
    })
    .when("/CHATHAM_WPCPprdailyRCP85", {
        templateUrl : "data/content/stations/CHATHAM_WPCP_pr.html"
    })
    .when("/CHATSWORTHtasdailyRCP85", {
        templateUrl : "data/content/stations/CHATSWORTH_tas.html"
    })
    .when("/CHATSWORTHtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/CHATSWORTH_tasmax.html"
    })
    .when("/CHATSWORTHtasmindailyRCP85", {
        templateUrl : "data/content/stations/CHATSWORTH_tasmin.html"
    })
    .when("/CHATSWORTHprdailyRCP85", {
        templateUrl : "data/content/stations/CHATSWORTH_pr.html"
    })
    .when("/COBOURG_STPtasdailyRCP85", {
        templateUrl : "data/content/stations/COBOURG_STP_tas.html"
    })
    .when("/COBOURG_STPtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/COBOURG_STP_tasmax.html"
    })
    .when("/COBOURG_STPtasmindailyRCP85", {
        templateUrl : "data/content/stations/COBOURG_STP_tasmin.html"
    })
    .when("/COBOURG_STPprdailyRCP85", {
        templateUrl : "data/content/stations/COBOURG_STP_pr.html"
    })
    .when("/COMBERMEREtasdailyRCP85", {
        templateUrl : "data/content/stations/COMBERMERE_tas.html"
    })
    .when("/COMBERMEREtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/COMBERMERE_tasmax.html"
    })
    .when("/COMBERMEREtasmindailyRCP85", {
        templateUrl : "data/content/stations/COMBERMERE_tasmin.html"
    })
    .when("/COMBERMEREprdailyRCP85", {
        templateUrl : "data/content/stations/COMBERMERE_pr.html"
    })
    .when("/CONISTON_STPtasdailyRCP85", {
        templateUrl : "data/content/stations/CONISTON_STP_tas.html"
    })
    .when("/CONISTON_STPtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/CONISTON_STP_tasmax.html"
    })
    .when("/CONISTON_STPtasmindailyRCP85", {
        templateUrl : "data/content/stations/CONISTON_STP_tasmin.html"
    })
    .when("/CONISTON_STPprdailyRCP85", {
        templateUrl : "data/content/stations/CONISTON_STP_pr.html"
    })
    .when("/COOKSTOWNtasdailyRCP85", {
        templateUrl : "data/content/stations/COOKSTOWN_tas.html"
    })
    .when("/COOKSTOWNtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/COOKSTOWN_tasmax.html"
    })
    .when("/COOKSTOWNtasmindailyRCP85", {
        templateUrl : "data/content/stations/COOKSTOWN_tasmin.html"
    })
    .when("/COOKSTOWNprdailyRCP85", {
        templateUrl : "data/content/stations/COOKSTOWN_pr.html"
    })
    .when("/CORNWALLtasdailyRCP85", {
        templateUrl : "data/content/stations/CORNWALL_tas.html"
    })
    .when("/CORNWALLtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/CORNWALL_tasmax.html"
    })
    .when("/CORNWALLtasmindailyRCP85", {
        templateUrl : "data/content/stations/CORNWALL_tasmin.html"
    })
    .when("/CORNWALLprdailyRCP85", {
        templateUrl : "data/content/stations/CORNWALL_pr.html"
    })
    .when("/COURTRIGHTtasdailyRCP85", {
        templateUrl : "data/content/stations/COURTRIGHT_tas.html"
    })
    .when("/COURTRIGHTtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/COURTRIGHT_tasmax.html"
    })
    .when("/COURTRIGHTtasmindailyRCP85", {
        templateUrl : "data/content/stations/COURTRIGHT_tasmin.html"
    })
    .when("/COURTRIGHTprdailyRCP85", {
        templateUrl : "data/content/stations/COURTRIGHT_pr.html"
    })
    .when("/CRESSYtasdailyRCP85", {
        templateUrl : "data/content/stations/CRESSY_tas.html"
    })
    .when("/CRESSYtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/CRESSY_tasmax.html"
    })
    .when("/CRESSYtasmindailyRCP85", {
        templateUrl : "data/content/stations/CRESSY_tasmin.html"
    })
    .when("/CRESSYprdailyRCP85", {
        templateUrl : "data/content/stations/CRESSY_pr.html"
    })
    .when("/CULLODEN_EASEYtasdailyRCP85", {
        templateUrl : "data/content/stations/CULLODEN_EASEY_tas.html"
    })
    .when("/CULLODEN_EASEYtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/CULLODEN_EASEY_tasmax.html"
    })
    .when("/CULLODEN_EASEYtasmindailyRCP85", {
        templateUrl : "data/content/stations/CULLODEN_EASEY_tasmin.html"
    })
    .when("/CULLODEN_EASEYprdailyRCP85", {
        templateUrl : "data/content/stations/CULLODEN_EASEY_pr.html"
    })
    .when("/DALHOUSIE_MILLStasdailyRCP85", {
        templateUrl : "data/content/stations/DALHOUSIE_MILLS_tas.html"
    })
    .when("/DALHOUSIE_MILLStasmaxdailyRCP85", {
        templateUrl : "data/content/stations/DALHOUSIE_MILLS_tasmax.html"
    })
    .when("/DALHOUSIE_MILLStasmindailyRCP85", {
        templateUrl : "data/content/stations/DALHOUSIE_MILLS_tasmin.html"
    })
    .when("/DALHOUSIE_MILLSprdailyRCP85", {
        templateUrl : "data/content/stations/DALHOUSIE_MILLS_pr.html"
    })
    .when("/DASHWOODtasdailyRCP85", {
        templateUrl : "data/content/stations/DASHWOOD_tas.html"
    })
    .when("/DASHWOODtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/DASHWOOD_tasmax.html"
    })
    .when("/DASHWOODtasmindailyRCP85", {
        templateUrl : "data/content/stations/DASHWOOD_tasmin.html"
    })
    .when("/DASHWOODprdailyRCP85", {
        templateUrl : "data/content/stations/DASHWOOD_pr.html"
    })
    .when("/DELHI_CDAtasdailyRCP85", {
        templateUrl : "data/content/stations/DELHI_CDA_tas.html"
    })
    .when("/DELHI_CDAtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/DELHI_CDA_tasmax.html"
    })
    .when("/DELHI_CDAtasmindailyRCP85", {
        templateUrl : "data/content/stations/DELHI_CDA_tasmin.html"
    })
    .when("/DELHI_CDAprdailyRCP85", {
        templateUrl : "data/content/stations/DELHI_CDA_pr.html"
    })
    .when("/DORSET_MOEtasdailyRCP85", {
        templateUrl : "data/content/stations/DORSET_MOE_tas.html"
    })
    .when("/DORSET_MOEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/DORSET_MOE_tasmax.html"
    })
    .when("/DORSET_MOEtasmindailyRCP85", {
        templateUrl : "data/content/stations/DORSET_MOE_tasmin.html"
    })
    .when("/DORSET_MOEprdailyRCP85", {
        templateUrl : "data/content/stations/DORSET_MOE_pr.html"
    })
    .when("/DRESDENtasdailyRCP85", {
        templateUrl : "data/content/stations/DRESDEN_tas.html"
    })
    .when("/DRESDENtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/DRESDEN_tasmax.html"
    })
    .when("/DRESDENtasmindailyRCP85", {
        templateUrl : "data/content/stations/DRESDEN_tasmin.html"
    })
    .when("/DRESDENprdailyRCP85", {
        templateUrl : "data/content/stations/DRESDEN_pr.html"
    })
    .when("/DRUMMOND_CENTREtasdailyRCP85", {
        templateUrl : "data/content/stations/DRUMMOND_CENTRE_tas.html"
    })
    .when("/DRUMMOND_CENTREtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/DRUMMOND_CENTRE_tasmax.html"
    })
    .when("/DRUMMOND_CENTREtasmindailyRCP85", {
        templateUrl : "data/content/stations/DRUMMOND_CENTRE_tasmin.html"
    })
    .when("/DRUMMOND_CENTREprdailyRCP85", {
        templateUrl : "data/content/stations/DRUMMOND_CENTRE_pr.html"
    })
    .when("/DRYDENtasdailyRCP85", {
        templateUrl : "data/content/stations/DRYDEN_tas.html"
    })
    .when("/DRYDENtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/DRYDEN_tasmax.html"
    })
    .when("/DRYDENtasmindailyRCP85", {
        templateUrl : "data/content/stations/DRYDEN_tasmin.html"
    })
    .when("/DRYDENprdailyRCP85", {
        templateUrl : "data/content/stations/DRYDEN_pr.html"
    })
    .when("/DRYDEN_AtasdailyRCP85", {
        templateUrl : "data/content/stations/DRYDEN_A_tas.html"
    })
    .when("/DRYDEN_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/DRYDEN_A_tasmax.html"
    })
    .when("/DRYDEN_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/DRYDEN_A_tasmin.html"
    })
    .when("/DRYDEN_AprdailyRCP85", {
        templateUrl : "data/content/stations/DRYDEN_A_pr.html"
    })
    .when("/DUNCHURCHtasdailyRCP85", {
        templateUrl : "data/content/stations/DUNCHURCH_tas.html"
    })
    .when("/DUNCHURCHtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/DUNCHURCH_tasmax.html"
    })
    .when("/DUNCHURCHtasmindailyRCP85", {
        templateUrl : "data/content/stations/DUNCHURCH_tasmin.html"
    })
    .when("/DUNCHURCHprdailyRCP85", {
        templateUrl : "data/content/stations/DUNCHURCH_pr.html"
    })
    .when("/DURHAMtasdailyRCP85", {
        templateUrl : "data/content/stations/DURHAM_tas.html"
    })
    .when("/DURHAMtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/DURHAM_tasmax.html"
    })
    .when("/DURHAMtasmindailyRCP85", {
        templateUrl : "data/content/stations/DURHAM_tasmin.html"
    })
    .when("/DURHAMprdailyRCP85", {
        templateUrl : "data/content/stations/DURHAM_pr.html"
    })
    .when("/DWIGHTtasdailyRCP85", {
        templateUrl : "data/content/stations/DWIGHT_tas.html"
    })
    .when("/DWIGHTtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/DWIGHT_tasmax.html"
    })
    .when("/DWIGHTtasmindailyRCP85", {
        templateUrl : "data/content/stations/DWIGHT_tasmin.html"
    })
    .when("/DWIGHTprdailyRCP85", {
        templateUrl : "data/content/stations/DWIGHT_pr.html"
    })
    .when("/EARLTON_AtasdailyRCP85", {
        templateUrl : "data/content/stations/EARLTON_A_tas.html"
    })
    .when("/EARLTON_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/EARLTON_A_tasmax.html"
    })
    .when("/EARLTON_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/EARLTON_A_tasmin.html"
    })
    .when("/EARLTON_AprdailyRCP85", {
        templateUrl : "data/content/stations/EARLTON_A_pr.html"
    })
    .when("/EGBERT_CAREtasdailyRCP85", {
        templateUrl : "data/content/stations/EGBERT_CARE_tas.html"
    })
    .when("/EGBERT_CAREtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/EGBERT_CARE_tasmax.html"
    })
    .when("/EGBERT_CAREtasmindailyRCP85", {
        templateUrl : "data/content/stations/EGBERT_CARE_tasmin.html"
    })
    .when("/EGBERT_CAREprdailyRCP85", {
        templateUrl : "data/content/stations/EGBERT_CARE_pr.html"
    })
    .when("/EMO_RADBOURNEtasdailyRCP85", {
        templateUrl : "data/content/stations/EMO_RADBOURNE_tas.html"
    })
    .when("/EMO_RADBOURNEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/EMO_RADBOURNE_tasmax.html"
    })
    .when("/EMO_RADBOURNEtasmindailyRCP85", {
        templateUrl : "data/content/stations/EMO_RADBOURNE_tasmin.html"
    })
    .when("/EMO_RADBOURNEprdailyRCP85", {
        templateUrl : "data/content/stations/EMO_RADBOURNE_pr.html"
    })
    .when("/ESSA_ONT_HYDROtasdailyRCP85", {
        templateUrl : "data/content/stations/ESSA_ONT_HYDRO_tas.html"
    })
    .when("/ESSA_ONT_HYDROtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/ESSA_ONT_HYDRO_tasmax.html"
    })
    .when("/ESSA_ONT_HYDROtasmindailyRCP85", {
        templateUrl : "data/content/stations/ESSA_ONT_HYDRO_tasmin.html"
    })
    .when("/ESSA_ONT_HYDROprdailyRCP85", {
        templateUrl : "data/content/stations/ESSA_ONT_HYDRO_pr.html"
    })
    .when("/EXETERtasdailyRCP85", {
        templateUrl : "data/content/stations/EXETER_tas.html"
    })
    .when("/EXETERtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/EXETER_tasmax.html"
    })
    .when("/EXETERtasmindailyRCP85", {
        templateUrl : "data/content/stations/EXETER_tasmin.html"
    })
    .when("/EXETERprdailyRCP85", {
        templateUrl : "data/content/stations/EXETER_pr.html"
    })
    .when("/FERGUS_SHAND_DAMtasdailyRCP85", {
        templateUrl : "data/content/stations/FERGUS_SHAND_DAM_tas.html"
    })
    .when("/FERGUS_SHAND_DAMtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/FERGUS_SHAND_DAM_tasmax.html"
    })
    .when("/FERGUS_SHAND_DAMtasmindailyRCP85", {
        templateUrl : "data/content/stations/FERGUS_SHAND_DAM_tasmin.html"
    })
    .when("/FERGUS_SHAND_DAMprdailyRCP85", {
        templateUrl : "data/content/stations/FERGUS_SHAND_DAM_pr.html"
    })
    .when("/FLINTtasdailyRCP85", {
        templateUrl : "data/content/stations/FLINT_tas.html"
    })
    .when("/FLINTtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/FLINT_tasmax.html"
    })
    .when("/FLINTtasmindailyRCP85", {
        templateUrl : "data/content/stations/FLINT_tasmin.html"
    })
    .when("/FLINTprdailyRCP85", {
        templateUrl : "data/content/stations/FLINT_pr.html"
    })
    .when("/FOLDENStasdailyRCP85", {
        templateUrl : "data/content/stations/FOLDENS_tas.html"
    })
    .when("/FOLDENStasmaxdailyRCP85", {
        templateUrl : "data/content/stations/FOLDENS_tasmax.html"
    })
    .when("/FOLDENStasmindailyRCP85", {
        templateUrl : "data/content/stations/FOLDENS_tasmin.html"
    })
    .when("/FOLDENSprdailyRCP85", {
        templateUrl : "data/content/stations/FOLDENS_pr.html"
    })
    .when("/FORT_ERIEtasdailyRCP85", {
        templateUrl : "data/content/stations/FORT_ERIE_tas.html"
    })
    .when("/FORT_ERIEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/FORT_ERIE_tasmax.html"
    })
    .when("/FORT_ERIEtasmindailyRCP85", {
        templateUrl : "data/content/stations/FORT_ERIE_tasmin.html"
    })
    .when("/FORT_ERIEprdailyRCP85", {
        templateUrl : "data/content/stations/FORT_ERIE_pr.html"
    })
    .when("/FORT_FRANCES_AtasdailyRCP85", {
        templateUrl : "data/content/stations/FORT_FRANCES_A_tas.html"
    })
    .when("/FORT_FRANCES_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/FORT_FRANCES_A_tasmax.html"
    })
    .when("/FORT_FRANCES_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/FORT_FRANCES_A_tasmin.html"
    })
    .when("/FORT_FRANCES_AprdailyRCP85", {
        templateUrl : "data/content/stations/FORT_FRANCES_A_pr.html"
    })
    .when("/GEORGETOWN_WWTPtasdailyRCP85", {
        templateUrl : "data/content/stations/GEORGETOWN_WWTP_tas.html"
    })
    .when("/GEORGETOWN_WWTPtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/GEORGETOWN_WWTP_tasmax.html"
    })
    .when("/GEORGETOWN_WWTPtasmindailyRCP85", {
        templateUrl : "data/content/stations/GEORGETOWN_WWTP_tasmin.html"
    })
    .when("/GEORGETOWN_WWTPprdailyRCP85", {
        templateUrl : "data/content/stations/GEORGETOWN_WWTP_pr.html"
    })
    .when("/GERALDTON_AtasdailyRCP85", {
        templateUrl : "data/content/stations/GERALDTON_A_tas.html"
    })
    .when("/GERALDTON_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/GERALDTON_A_tasmax.html"
    })
    .when("/GERALDTON_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/GERALDTON_A_tasmin.html"
    })
    .when("/GERALDTON_AprdailyRCP85", {
        templateUrl : "data/content/stations/GERALDTON_A_pr.html"
    })
    .when("/GLEN_ALLANtasdailyRCP85", {
        templateUrl : "data/content/stations/GLEN_ALLAN_tas.html"
    })
    .when("/GLEN_ALLANtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/GLEN_ALLAN_tasmax.html"
    })
    .when("/GLEN_ALLANtasmindailyRCP85", {
        templateUrl : "data/content/stations/GLEN_ALLAN_tasmin.html"
    })
    .when("/GLEN_ALLANprdailyRCP85", {
        templateUrl : "data/content/stations/GLEN_ALLAN_pr.html"
    })
    .when("/GLEN_GORDONtasdailyRCP85", {
        templateUrl : "data/content/stations/GLEN_GORDON_tas.html"
    })
    .when("/GLEN_GORDONtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/GLEN_GORDON_tasmax.html"
    })
    .when("/GLEN_GORDONtasmindailyRCP85", {
        templateUrl : "data/content/stations/GLEN_GORDON_tasmin.html"
    })
    .when("/GLEN_GORDONprdailyRCP85", {
        templateUrl : "data/content/stations/GLEN_GORDON_pr.html"
    })
    .when("/GLENBURNIEtasdailyRCP85", {
        templateUrl : "data/content/stations/GLENBURNIE_tas.html"
    })
    .when("/GLENBURNIEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/GLENBURNIE_tasmax.html"
    })
    .when("/GLENBURNIEtasmindailyRCP85", {
        templateUrl : "data/content/stations/GLENBURNIE_tasmin.html"
    })
    .when("/GLENBURNIEprdailyRCP85", {
        templateUrl : "data/content/stations/GLENBURNIE_pr.html"
    })
    .when("/GODFREYtasdailyRCP85", {
        templateUrl : "data/content/stations/GODFREY_tas.html"
    })
    .when("/GODFREYtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/GODFREY_tasmax.html"
    })
    .when("/GODFREYtasmindailyRCP85", {
        templateUrl : "data/content/stations/GODFREY_tasmin.html"
    })
    .when("/GODFREYprdailyRCP85", {
        templateUrl : "data/content/stations/GODFREY_pr.html"
    })
    .when("/HAGERSVILLEtasdailyRCP85", {
        templateUrl : "data/content/stations/HAGERSVILLE_tas.html"
    })
    .when("/HAGERSVILLEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/HAGERSVILLE_tasmax.html"
    })
    .when("/HAGERSVILLEtasmindailyRCP85", {
        templateUrl : "data/content/stations/HAGERSVILLE_tasmin.html"
    })
    .when("/HAGERSVILLEprdailyRCP85", {
        templateUrl : "data/content/stations/HAGERSVILLE_pr.html"
    })
    .when("/HALIBURTON_3tasdailyRCP85", {
        templateUrl : "data/content/stations/HALIBURTON_3_tas.html"
    })
    .when("/HALIBURTON_3tasmaxdailyRCP85", {
        templateUrl : "data/content/stations/HALIBURTON_3_tasmax.html"
    })
    .when("/HALIBURTON_3tasmindailyRCP85", {
        templateUrl : "data/content/stations/HALIBURTON_3_tasmin.html"
    })
    .when("/HALIBURTON_3prdailyRCP85", {
        templateUrl : "data/content/stations/HALIBURTON_3_pr.html"
    })
    .when("/HAMILTON_AtasdailyRCP85", {
        templateUrl : "data/content/stations/HAMILTON_A_tas.html"
    })
    .when("/HAMILTON_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/HAMILTON_A_tasmax.html"
    })
    .when("/HAMILTON_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/HAMILTON_A_tasmin.html"
    })
    .when("/HAMILTON_AprdailyRCP85", {
        templateUrl : "data/content/stations/HAMILTON_A_pr.html"
    })
    .when("/HAMILTON_RBGtasdailyRCP85", {
        templateUrl : "data/content/stations/HAMILTON_RBG_tas.html"
    })
    .when("/HAMILTON_RBGtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/HAMILTON_RBG_tasmax.html"
    })
    .when("/HAMILTON_RBGtasmindailyRCP85", {
        templateUrl : "data/content/stations/HAMILTON_RBG_tasmin.html"
    })
    .when("/HAMILTON_RBGprdailyRCP85", {
        templateUrl : "data/content/stations/HAMILTON_RBG_pr.html"
    })
    .when("/HANOVERtasdailyRCP85", {
        templateUrl : "data/content/stations/HANOVER_tas.html"
    })
    .when("/HANOVERtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/HANOVER_tasmax.html"
    })
    .when("/HANOVERtasmindailyRCP85", {
        templateUrl : "data/content/stations/HANOVER_tasmin.html"
    })
    .when("/HANOVERprdailyRCP85", {
        templateUrl : "data/content/stations/HANOVER_pr.html"
    })
    .when("/HARTINGTON_IHDtasdailyRCP85", {
        templateUrl : "data/content/stations/HARTINGTON_IHD_tas.html"
    })
    .when("/HARTINGTON_IHDtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/HARTINGTON_IHD_tasmax.html"
    })
    .when("/HARTINGTON_IHDtasmindailyRCP85", {
        templateUrl : "data/content/stations/HARTINGTON_IHD_tasmin.html"
    })
    .when("/HARTINGTON_IHDprdailyRCP85", {
        templateUrl : "data/content/stations/HARTINGTON_IHD_pr.html"
    })
    .when("/HUNTSVILLE_WPCPtasdailyRCP85", {
        templateUrl : "data/content/stations/HUNTSVILLE_WPCP_tas.html"
    })
    .when("/HUNTSVILLE_WPCPtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/HUNTSVILLE_WPCP_tasmax.html"
    })
    .when("/HUNTSVILLE_WPCPtasmindailyRCP85", {
        templateUrl : "data/content/stations/HUNTSVILLE_WPCP_tasmin.html"
    })
    .when("/HUNTSVILLE_WPCPprdailyRCP85", {
        templateUrl : "data/content/stations/HUNTSVILLE_WPCP_pr.html"
    })
    .when("/ILDERTON_BEAR_CREEKtasdailyRCP85", {
        templateUrl : "data/content/stations/ILDERTON_BEAR_CREEK_tas.html"
    })
    .when("/ILDERTON_BEAR_CREEKtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/ILDERTON_BEAR_CREEK_tasmax.html"
    })
    .when("/ILDERTON_BEAR_CREEKtasmindailyRCP85", {
        templateUrl : "data/content/stations/ILDERTON_BEAR_CREEK_tasmin.html"
    })
    .when("/ILDERTON_BEAR_CREEKprdailyRCP85", {
        templateUrl : "data/content/stations/ILDERTON_BEAR_CREEK_pr.html"
    })
    .when("/ISLAND_FALLStasdailyRCP85", {
        templateUrl : "data/content/stations/ISLAND_FALLS_tas.html"
    })
    .when("/ISLAND_FALLStasmaxdailyRCP85", {
        templateUrl : "data/content/stations/ISLAND_FALLS_tasmax.html"
    })
    .when("/ISLAND_FALLStasmindailyRCP85", {
        templateUrl : "data/content/stations/ISLAND_FALLS_tasmin.html"
    })
    .when("/ISLAND_FALLSprdailyRCP85", {
        templateUrl : "data/content/stations/ISLAND_FALLS_pr.html"
    })
    .when("/JANETVILLEtasdailyRCP85", {
        templateUrl : "data/content/stations/JANETVILLE_tas.html"
    })
    .when("/JANETVILLEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/JANETVILLE_tasmax.html"
    })
    .when("/JANETVILLEtasmindailyRCP85", {
        templateUrl : "data/content/stations/JANETVILLE_tasmin.html"
    })
    .when("/JANETVILLEprdailyRCP85", {
        templateUrl : "data/content/stations/JANETVILLE_pr.html"
    })
    .when("/KAPUSKASING_AtasdailyRCP85", {
        templateUrl : "data/content/stations/KAPUSKASING_A_tas.html"
    })
    .when("/KAPUSKASING_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/KAPUSKASING_A_tasmax.html"
    })
    .when("/KAPUSKASING_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/KAPUSKASING_A_tasmin.html"
    })
    .when("/KAPUSKASING_AprdailyRCP85", {
        templateUrl : "data/content/stations/KAPUSKASING_A_pr.html"
    })
    .when("/KAPUSKASING_CDAtasdailyRCP85", {
        templateUrl : "data/content/stations/KAPUSKASING_CDA_tas.html"
    })
    .when("/KAPUSKASING_CDAtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/KAPUSKASING_CDA_tasmax.html"
    })
    .when("/KAPUSKASING_CDAtasmindailyRCP85", {
        templateUrl : "data/content/stations/KAPUSKASING_CDA_tasmin.html"
    })
    .when("/KAPUSKASING_CDAprdailyRCP85", {
        templateUrl : "data/content/stations/KAPUSKASING_CDA_pr.html"
    })
    .when("/KEMPTVILLEtasdailyRCP85", {
        templateUrl : "data/content/stations/KEMPTVILLE_tas.html"
    })
    .when("/KEMPTVILLEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/KEMPTVILLE_tasmax.html"
    })
    .when("/KEMPTVILLEtasmindailyRCP85", {
        templateUrl : "data/content/stations/KEMPTVILLE_tasmin.html"
    })
    .when("/KEMPTVILLEprdailyRCP85", {
        templateUrl : "data/content/stations/KEMPTVILLE_pr.html"
    })
    .when("/KENORA_AtasdailyRCP85", {
        templateUrl : "data/content/stations/KENORA_A_tas.html"
    })
    .when("/KENORA_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/KENORA_A_tasmax.html"
    })
    .when("/KENORA_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/KENORA_A_tasmin.html"
    })
    .when("/KENORA_AprdailyRCP85", {
        templateUrl : "data/content/stations/KENORA_A_pr.html"
    })
    .when("/KING_SMOKE_TREEtasdailyRCP85", {
        templateUrl : "data/content/stations/KING_SMOKE_TREE_tas.html"
    })
    .when("/KING_SMOKE_TREEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/KING_SMOKE_TREE_tasmax.html"
    })
    .when("/KING_SMOKE_TREEtasmindailyRCP85", {
        templateUrl : "data/content/stations/KING_SMOKE_TREE_tasmin.html"
    })
    .when("/KING_SMOKE_TREEprdailyRCP85", {
        templateUrl : "data/content/stations/KING_SMOKE_TREE_pr.html"
    })
    .when("/KINGSTON_PUMPING_STATIONtasdailyRCP85", {
        templateUrl : "data/content/stations/KINGSTON_PUMPING_STATION_tas.html"
    })
    .when("/KINGSTON_PUMPING_STATIONtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/KINGSTON_PUMPING_STATION_tasmax.html"
    })
    .when("/KINGSTON_PUMPING_STATIONtasmindailyRCP85", {
        templateUrl : "data/content/stations/KINGSTON_PUMPING_STATION_tasmin.html"
    })
    .when("/KINGSTON_PUMPING_STATIONprdailyRCP85", {
        templateUrl : "data/content/stations/KINGSTON_PUMPING_STATION_pr.html"
    })
    .when("/KINGSVILLE_MOEtasdailyRCP85", {
        templateUrl : "data/content/stations/KINGSVILLE_MOE_tas.html"
    })
    .when("/KINGSVILLE_MOEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/KINGSVILLE_MOE_tasmax.html"
    })
    .when("/KINGSVILLE_MOEtasmindailyRCP85", {
        templateUrl : "data/content/stations/KINGSVILLE_MOE_tasmin.html"
    })
    .when("/KINGSVILLE_MOEprdailyRCP85", {
        templateUrl : "data/content/stations/KINGSVILLE_MOE_pr.html"
    })
    .when("/LINDSAY_FROSTtasdailyRCP85", {
        templateUrl : "data/content/stations/LINDSAY_FROST_tas.html"
    })
    .when("/LINDSAY_FROSTtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/LINDSAY_FROST_tasmax.html"
    })
    .when("/LINDSAY_FROSTtasmindailyRCP85", {
        templateUrl : "data/content/stations/LINDSAY_FROST_tasmin.html"
    })
    .when("/LINDSAY_FROSTprdailyRCP85", {
        templateUrl : "data/content/stations/LINDSAY_FROST_pr.html"
    })
    .when("/LONDON_AIRPORTtasdailyRCP85", {
        templateUrl : "data/content/stations/LONDON_AIRPORT_tas.html"
    })
    .when("/LONDON_AIRPORTtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/LONDON_AIRPORT_tasmax.html"
    })
    .when("/LONDON_AIRPORTtasmindailyRCP85", {
        templateUrl : "data/content/stations/LONDON_AIRPORT_tasmin.html"
    })
    .when("/LONDON_AIRPORTprdailyRCP85", {
        templateUrl : "data/content/stations/LONDON_AIRPORT_pr.html"
    })
    .when("/LYNDHURST_SHAWMEREtasdailyRCP85", {
        templateUrl : "data/content/stations/LYNDHURST_SHAWMERE_tas.html"
    })
    .when("/LYNDHURST_SHAWMEREtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/LYNDHURST_SHAWMERE_tasmax.html"
    })
    .when("/LYNDHURST_SHAWMEREtasmindailyRCP85", {
        templateUrl : "data/content/stations/LYNDHURST_SHAWMERE_tasmin.html"
    })
    .when("/LYNDHURST_SHAWMEREprdailyRCP85", {
        templateUrl : "data/content/stations/LYNDHURST_SHAWMERE_pr.html"
    })
    .when("/MADAWASKAtasdailyRCP85", {
        templateUrl : "data/content/stations/MADAWASKA_tas.html"
    })
    .when("/MADAWASKAtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/MADAWASKA_tasmax.html"
    })
    .when("/MADAWASKAtasmindailyRCP85", {
        templateUrl : "data/content/stations/MADAWASKA_tasmin.html"
    })
    .when("/MADAWASKAprdailyRCP85", {
        templateUrl : "data/content/stations/MADAWASKA_pr.html"
    })
    .when("/MASSEYtasdailyRCP85", {
        templateUrl : "data/content/stations/MASSEY_tas.html"
    })
    .when("/MASSEYtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/MASSEY_tasmax.html"
    })
    .when("/MASSEYtasmindailyRCP85", {
        templateUrl : "data/content/stations/MASSEY_tasmin.html"
    })
    .when("/MASSEYprdailyRCP85", {
        templateUrl : "data/content/stations/MASSEY_pr.html"
    })
    .when("/MIDDLEPORT_TStasdailyRCP85", {
        templateUrl : "data/content/stations/MIDDLEPORT_TS_tas.html"
    })
    .when("/MIDDLEPORT_TStasmaxdailyRCP85", {
        templateUrl : "data/content/stations/MIDDLEPORT_TS_tasmax.html"
    })
    .when("/MIDDLEPORT_TStasmindailyRCP85", {
        templateUrl : "data/content/stations/MIDDLEPORT_TS_tasmin.html"
    })
    .when("/MIDDLEPORT_TSprdailyRCP85", {
        templateUrl : "data/content/stations/MIDDLEPORT_TS_pr.html"
    })
    .when("/MIDLAND_WATERtasdailyRCP85", {
        templateUrl : "data/content/stations/MIDLAND_WATER_tas.html"
    })
    .when("/MIDLAND_WATERtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/MIDLAND_WATER_tasmax.html"
    })
    .when("/MIDLAND_WATERtasmindailyRCP85", {
        templateUrl : "data/content/stations/MIDLAND_WATER_tasmin.html"
    })
    .when("/MIDLAND_WATERprdailyRCP85", {
        templateUrl : "data/content/stations/MIDLAND_WATER_pr.html"
    })
    .when("/MILLGROVEtasdailyRCP85", {
        templateUrl : "data/content/stations/MILLGROVE_tas.html"
    })
    .when("/MILLGROVEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/MILLGROVE_tasmax.html"
    })
    .when("/MILLGROVEtasmindailyRCP85", {
        templateUrl : "data/content/stations/MILLGROVE_tasmin.html"
    })
    .when("/MILLGROVEprdailyRCP85", {
        templateUrl : "data/content/stations/MILLGROVE_pr.html"
    })
    .when("/MINDENtasdailyRCP85", {
        templateUrl : "data/content/stations/MINDEN_tas.html"
    })
    .when("/MINDENtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/MINDEN_tasmax.html"
    })
    .when("/MINDENtasmindailyRCP85", {
        templateUrl : "data/content/stations/MINDEN_tasmin.html"
    })
    .when("/MINDENprdailyRCP85", {
        templateUrl : "data/content/stations/MINDEN_pr.html"
    })
    .when("/MINE_CENTREtasdailyRCP85", {
        templateUrl : "data/content/stations/MINE_CENTRE_tas.html"
    })
    .when("/MINE_CENTREtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/MINE_CENTRE_tasmax.html"
    })
    .when("/MINE_CENTREtasmindailyRCP85", {
        templateUrl : "data/content/stations/MINE_CENTRE_tasmin.html"
    })
    .when("/MINE_CENTREprdailyRCP85", {
        templateUrl : "data/content/stations/MINE_CENTRE_pr.html"
    })
    .when("/MONETVILLEtasdailyRCP85", {
        templateUrl : "data/content/stations/MONETVILLE_tas.html"
    })
    .when("/MONETVILLEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/MONETVILLE_tasmax.html"
    })
    .when("/MONETVILLEtasmindailyRCP85", {
        templateUrl : "data/content/stations/MONETVILLE_tasmin.html"
    })
    .when("/MONETVILLEprdailyRCP85", {
        templateUrl : "data/content/stations/MONETVILLE_pr.html"
    })
    .when("/MOOSONEE_UAtasdailyRCP85", {
        templateUrl : "data/content/stations/MOOSONEE_UA_tas.html"
    })
    .when("/MOOSONEE_UAtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/MOOSONEE_UA_tasmax.html"
    })
    .when("/MOOSONEE_UAtasmindailyRCP85", {
        templateUrl : "data/content/stations/MOOSONEE_UA_tasmin.html"
    })
    .when("/MOOSONEE_UAprdailyRCP85", {
        templateUrl : "data/content/stations/MOOSONEE_UA_pr.html"
    })
    .when("/MORRISBURGtasdailyRCP85", {
        templateUrl : "data/content/stations/MORRISBURG_tas.html"
    })
    .when("/MORRISBURGtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/MORRISBURG_tasmax.html"
    })
    .when("/MORRISBURGtasmindailyRCP85", {
        templateUrl : "data/content/stations/MORRISBURG_tasmin.html"
    })
    .when("/MORRISBURGprdailyRCP85", {
        templateUrl : "data/content/stations/MORRISBURG_pr.html"
    })
    .when("/MOUNTAINVIEWtasdailyRCP85", {
        templateUrl : "data/content/stations/MOUNTAINVIEW_tas.html"
    })
    .when("/MOUNTAINVIEWtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/MOUNTAINVIEW_tasmax.html"
    })
    .when("/MOUNTAINVIEWtasmindailyRCP85", {
        templateUrl : "data/content/stations/MOUNTAINVIEW_tasmin.html"
    })
    .when("/MOUNTAINVIEWprdailyRCP85", {
        templateUrl : "data/content/stations/MOUNTAINVIEW_pr.html"
    })
    .when("/MUSKOKA_AtasdailyRCP85", {
        templateUrl : "data/content/stations/MUSKOKA_A_tas.html"
    })
    .when("/MUSKOKA_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/MUSKOKA_A_tasmax.html"
    })
    .when("/MUSKOKA_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/MUSKOKA_A_tasmin.html"
    })
    .when("/MUSKOKA_AprdailyRCP85", {
        templateUrl : "data/content/stations/MUSKOKA_A_pr.html"
    })
    .when("/NEW_GLASGOWtasdailyRCP85", {
        templateUrl : "data/content/stations/NEW_GLASGOW_tas.html"
    })
    .when("/NEW_GLASGOWtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/NEW_GLASGOW_tasmax.html"
    })
    .when("/NEW_GLASGOWtasmindailyRCP85", {
        templateUrl : "data/content/stations/NEW_GLASGOW_tasmin.html"
    })
    .when("/NEW_GLASGOWprdailyRCP85", {
        templateUrl : "data/content/stations/NEW_GLASGOW_pr.html"
    })
    .when("/NIAGARA_FALLS_NPCSHtasdailyRCP85", {
        templateUrl : "data/content/stations/NIAGARA_FALLS_NPCSH_tas.html"
    })
    .when("/NIAGARA_FALLS_NPCSHtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/NIAGARA_FALLS_NPCSH_tasmax.html"
    })
    .when("/NIAGARA_FALLS_NPCSHtasmindailyRCP85", {
        templateUrl : "data/content/stations/NIAGARA_FALLS_NPCSH_tasmin.html"
    })
    .when("/NIAGARA_FALLS_NPCSHprdailyRCP85", {
        templateUrl : "data/content/stations/NIAGARA_FALLS_NPCSH_pr.html"
    })
    .when("/NORTH_BAY_AtasdailyRCP85", {
        templateUrl : "data/content/stations/NORTH_BAY_A_tas.html"
    })
    .when("/NORTH_BAY_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/NORTH_BAY_A_tasmax.html"
    })
    .when("/NORTH_BAY_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/NORTH_BAY_A_tasmin.html"
    })
    .when("/NORTH_BAY_AprdailyRCP85", {
        templateUrl : "data/content/stations/NORTH_BAY_A_pr.html"
    })
    .when("/OAKVILLE_SOUTHEAST_WPCPtasdailyRCP85", {
        templateUrl : "data/content/stations/OAKVILLE_SOUTHEAST_WPCP_tas.html"
    })
    .when("/OAKVILLE_SOUTHEAST_WPCPtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/OAKVILLE_SOUTHEAST_WPCP_tasmax.html"
    })
    .when("/OAKVILLE_SOUTHEAST_WPCPtasmindailyRCP85", {
        templateUrl : "data/content/stations/OAKVILLE_SOUTHEAST_WPCP_tasmin.html"
    })
    .when("/OAKVILLE_SOUTHEAST_WPCPprdailyRCP85", {
        templateUrl : "data/content/stations/OAKVILLE_SOUTHEAST_WPCP_pr.html"
    })
    .when("/ORANGEVILLE_MOEtasdailyRCP85", {
        templateUrl : "data/content/stations/ORANGEVILLE_MOE_tas.html"
    })
    .when("/ORANGEVILLE_MOEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/ORANGEVILLE_MOE_tasmax.html"
    })
    .when("/ORANGEVILLE_MOEtasmindailyRCP85", {
        templateUrl : "data/content/stations/ORANGEVILLE_MOE_tasmin.html"
    })
    .when("/ORANGEVILLE_MOEprdailyRCP85", {
        templateUrl : "data/content/stations/ORANGEVILLE_MOE_pr.html"
    })
    .when("/OSHAWA_WPCPtasdailyRCP85", {
        templateUrl : "data/content/stations/OSHAWA_WPCP_tas.html"
    })
    .when("/OSHAWA_WPCPtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/OSHAWA_WPCP_tasmax.html"
    })
    .when("/OSHAWA_WPCPtasmindailyRCP85", {
        templateUrl : "data/content/stations/OSHAWA_WPCP_tasmin.html"
    })
    .when("/OSHAWA_WPCPprdailyRCP85", {
        templateUrl : "data/content/stations/OSHAWA_WPCP_pr.html"
    })
    .when("/OTTAWA_CDAtasdailyRCP85", {
        templateUrl : "data/content/stations/OTTAWA_CDA_tas.html"
    })
    .when("/OTTAWA_CDAtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/OTTAWA_CDA_tasmax.html"
    })
    .when("/OTTAWA_CDAtasmindailyRCP85", {
        templateUrl : "data/content/stations/OTTAWA_CDA_tasmin.html"
    })
    .when("/OTTAWA_CDAprdailyRCP85", {
        templateUrl : "data/content/stations/OTTAWA_CDA_pr.html"
    })
    .when("/OTTAWA_MACDONALDtasdailyRCP85", {
        templateUrl : "data/content/stations/OTTAWA_MACDONALD_tas.html"
    })
    .when("/OTTAWA_MACDONALDtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/OTTAWA_MACDONALD_tasmax.html"
    })
    .when("/OTTAWA_MACDONALDtasmindailyRCP85", {
        templateUrl : "data/content/stations/OTTAWA_MACDONALD_tasmin.html"
    })
    .when("/OTTAWA_MACDONALDprdailyRCP85", {
        templateUrl : "data/content/stations/OTTAWA_MACDONALD_pr.html"
    })
    .when("/OWEN_SOUND_MOEtasdailyRCP85", {
        templateUrl : "data/content/stations/OWEN_SOUND_MOE_tas.html"
    })
    .when("/OWEN_SOUND_MOEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/OWEN_SOUND_MOE_tasmax.html"
    })
    .when("/OWEN_SOUND_MOEtasmindailyRCP85", {
        templateUrl : "data/content/stations/OWEN_SOUND_MOE_tasmin.html"
    })
    .when("/OWEN_SOUND_MOEprdailyRCP85", {
        templateUrl : "data/content/stations/OWEN_SOUND_MOE_pr.html"
    })
    .when("/PETERBOROUGH_AtasdailyRCP85", {
        templateUrl : "data/content/stations/PETERBOROUGH_A_tas.html"
    })
    .when("/PETERBOROUGH_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/PETERBOROUGH_A_tasmax.html"
    })
    .when("/PETERBOROUGH_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/PETERBOROUGH_A_tasmin.html"
    })
    .when("/PETERBOROUGH_AprdailyRCP85", {
        templateUrl : "data/content/stations/PETERBOROUGH_A_pr.html"
    })
    .when("/PETERBOROUGH_TRENT_UtasdailyRCP85", {
        templateUrl : "data/content/stations/PETERBOROUGH_TRENT_U_tas.html"
    })
    .when("/PETERBOROUGH_TRENT_UtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/PETERBOROUGH_TRENT_U_tasmax.html"
    })
    .when("/PETERBOROUGH_TRENT_UtasmindailyRCP85", {
        templateUrl : "data/content/stations/PETERBOROUGH_TRENT_U_tasmin.html"
    })
    .when("/PETERBOROUGH_TRENT_UprdailyRCP85", {
        templateUrl : "data/content/stations/PETERBOROUGH_TRENT_U_pr.html"
    })
    .when("/PETROLIA_TOWNtasdailyRCP85", {
        templateUrl : "data/content/stations/PETROLIA_TOWN_tas.html"
    })
    .when("/PETROLIA_TOWNtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/PETROLIA_TOWN_tasmax.html"
    })
    .when("/PETROLIA_TOWNtasmindailyRCP85", {
        templateUrl : "data/content/stations/PETROLIA_TOWN_tasmin.html"
    })
    .when("/PETROLIA_TOWNprdailyRCP85", {
        templateUrl : "data/content/stations/PETROLIA_TOWN_pr.html"
    })
    .when("/PICKLE_LAKE_AtasdailyRCP85", {
        templateUrl : "data/content/stations/PICKLE_LAKE_A_tas.html"
    })
    .when("/PICKLE_LAKE_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/PICKLE_LAKE_A_tasmax.html"
    })
    .when("/PICKLE_LAKE_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/PICKLE_LAKE_A_tasmin.html"
    })
    .when("/PICKLE_LAKE_AprdailyRCP85", {
        templateUrl : "data/content/stations/PICKLE_LAKE_A_pr.html"
    })
    .when("/PORCUPINE_ONT_HYDROtasdailyRCP85", {
        templateUrl : "data/content/stations/PORCUPINE_ONT_HYDRO_tas.html"
    })
    .when("/PORCUPINE_ONT_HYDROtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/PORCUPINE_ONT_HYDRO_tasmax.html"
    })
    .when("/PORCUPINE_ONT_HYDROtasmindailyRCP85", {
        templateUrl : "data/content/stations/PORCUPINE_ONT_HYDRO_tasmin.html"
    })
    .when("/PORCUPINE_ONT_HYDROprdailyRCP85", {
        templateUrl : "data/content/stations/PORCUPINE_ONT_HYDRO_pr.html"
    })
    .when("/PORT_COLBORNEtasdailyRCP85", {
        templateUrl : "data/content/stations/PORT_COLBORNE_tas.html"
    })
    .when("/PORT_COLBORNEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/PORT_COLBORNE_tasmax.html"
    })
    .when("/PORT_COLBORNEtasmindailyRCP85", {
        templateUrl : "data/content/stations/PORT_COLBORNE_tasmin.html"
    })
    .when("/PORT_COLBORNEprdailyRCP85", {
        templateUrl : "data/content/stations/PORT_COLBORNE_pr.html"
    })
    .when("/PORT_DALHOUSIEtasdailyRCP85", {
        templateUrl : "data/content/stations/PORT_DALHOUSIE_tas.html"
    })
    .when("/PORT_DALHOUSIEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/PORT_DALHOUSIE_tasmax.html"
    })
    .when("/PORT_DALHOUSIEtasmindailyRCP85", {
        templateUrl : "data/content/stations/PORT_DALHOUSIE_tasmin.html"
    })
    .when("/PORT_DALHOUSIEprdailyRCP85", {
        templateUrl : "data/content/stations/PORT_DALHOUSIE_pr.html"
    })
    .when("/POWASSANtasdailyRCP85", {
        templateUrl : "data/content/stations/POWASSAN_tas.html"
    })
    .when("/POWASSANtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/POWASSAN_tasmax.html"
    })
    .when("/POWASSANtasmindailyRCP85", {
        templateUrl : "data/content/stations/POWASSAN_tasmin.html"
    })
    .when("/POWASSANprdailyRCP85", {
        templateUrl : "data/content/stations/POWASSAN_pr.html"
    })
    .when("/PRESTONtasdailyRCP85", {
        templateUrl : "data/content/stations/PRESTON_tas.html"
    })
    .when("/PRESTONtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/PRESTON_tasmax.html"
    })
    .when("/PRESTONtasmindailyRCP85", {
        templateUrl : "data/content/stations/PRESTON_tasmin.html"
    })
    .when("/PRESTONprdailyRCP85", {
        templateUrl : "data/content/stations/PRESTON_pr.html"
    })
    .when("/PROTON_STATIONtasdailyRCP85", {
        templateUrl : "data/content/stations/PROTON_STATION_tas.html"
    })
    .when("/PROTON_STATIONtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/PROTON_STATION_tasmax.html"
    })
    .when("/PROTON_STATIONtasmindailyRCP85", {
        templateUrl : "data/content/stations/PROTON_STATION_tasmin.html"
    })
    .when("/PROTON_STATIONprdailyRCP85", {
        templateUrl : "data/content/stations/PROTON_STATION_pr.html"
    })
    .when("/RAWSON_LAKEtasdailyRCP85", {
        templateUrl : "data/content/stations/RAWSON_LAKE_tas.html"
    })
    .when("/RAWSON_LAKEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/RAWSON_LAKE_tasmax.html"
    })
    .when("/RAWSON_LAKEtasmindailyRCP85", {
        templateUrl : "data/content/stations/RAWSON_LAKE_tasmin.html"
    })
    .when("/RAWSON_LAKEprdailyRCP85", {
        templateUrl : "data/content/stations/RAWSON_LAKE_pr.html"
    })
    .when("/RED_LAKE_AtasdailyRCP85", {
        templateUrl : "data/content/stations/RED_LAKE_A_tas.html"
    })
    .when("/RED_LAKE_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/RED_LAKE_A_tasmax.html"
    })
    .when("/RED_LAKE_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/RED_LAKE_A_tasmin.html"
    })
    .when("/RED_LAKE_AprdailyRCP85", {
        templateUrl : "data/content/stations/RED_LAKE_A_pr.html"
    })
    .when("/RENFREWtasdailyRCP85", {
        templateUrl : "data/content/stations/RENFREW_tas.html"
    })
    .when("/RENFREWtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/RENFREW_tasmax.html"
    })
    .when("/RENFREWtasmindailyRCP85", {
        templateUrl : "data/content/stations/RENFREW_tasmin.html"
    })
    .when("/RENFREWprdailyRCP85", {
        templateUrl : "data/content/stations/RENFREW_pr.html"
    })
    .when("/RICHMOND_HILLtasdailyRCP85", {
        templateUrl : "data/content/stations/RICHMOND_HILL_tas.html"
    })
    .when("/RICHMOND_HILLtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/RICHMOND_HILL_tasmax.html"
    })
    .when("/RICHMOND_HILLtasmindailyRCP85", {
        templateUrl : "data/content/stations/RICHMOND_HILL_tasmin.html"
    })
    .when("/RICHMOND_HILLprdailyRCP85", {
        templateUrl : "data/content/stations/RICHMOND_HILL_pr.html"
    })
    .when("/RIDGEVILLEtasdailyRCP85", {
        templateUrl : "data/content/stations/RIDGEVILLE_tas.html"
    })
    .when("/RIDGEVILLEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/RIDGEVILLE_tasmax.html"
    })
    .when("/RIDGEVILLEtasmindailyRCP85", {
        templateUrl : "data/content/stations/RIDGEVILLE_tasmin.html"
    })
    .when("/RIDGEVILLEprdailyRCP85", {
        templateUrl : "data/content/stations/RIDGEVILLE_pr.html"
    })
    .when("/ROSEVILLEtasdailyRCP85", {
        templateUrl : "data/content/stations/ROSEVILLE_tas.html"
    })
    .when("/ROSEVILLEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/ROSEVILLE_tasmax.html"
    })
    .when("/ROSEVILLEtasmindailyRCP85", {
        templateUrl : "data/content/stations/ROSEVILLE_tasmin.html"
    })
    .when("/ROSEVILLEprdailyRCP85", {
        templateUrl : "data/content/stations/ROSEVILLE_pr.html"
    })
    .when("/RUSKVIEWtasdailyRCP85", {
        templateUrl : "data/content/stations/RUSKVIEW_tas.html"
    })
    .when("/RUSKVIEWtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/RUSKVIEW_tasmax.html"
    })
    .when("/RUSKVIEWtasmindailyRCP85", {
        templateUrl : "data/content/stations/RUSKVIEW_tasmin.html"
    })
    .when("/RUSKVIEWprdailyRCP85", {
        templateUrl : "data/content/stations/RUSKVIEW_pr.html"
    })
    .when("/RUSSELLtasdailyRCP85", {
        templateUrl : "data/content/stations/RUSSELL_tas.html"
    })
    .when("/RUSSELLtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/RUSSELL_tasmax.html"
    })
    .when("/RUSSELLtasmindailyRCP85", {
        templateUrl : "data/content/stations/RUSSELL_tasmin.html"
    })
    .when("/RUSSELLprdailyRCP85", {
        templateUrl : "data/content/stations/RUSSELL_pr.html"
    })
    .when("/SARNIA_AIRPORTtasdailyRCP85", {
        templateUrl : "data/content/stations/SARNIA_AIRPORT_tas.html"
    })
    .when("/SARNIA_AIRPORTtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/SARNIA_AIRPORT_tasmax.html"
    })
    .when("/SARNIA_AIRPORTtasmindailyRCP85", {
        templateUrl : "data/content/stations/SARNIA_AIRPORT_tasmin.html"
    })
    .when("/SARNIA_AIRPORTprdailyRCP85", {
        templateUrl : "data/content/stations/SARNIA_AIRPORT_pr.html"
    })
    .when("/SAULT_STE_MARIE_2tasdailyRCP85", {
        templateUrl : "data/content/stations/SAULT_STE_MARIE_2_tas.html"
    })
    .when("/SAULT_STE_MARIE_2tasmaxdailyRCP85", {
        templateUrl : "data/content/stations/SAULT_STE_MARIE_2_tasmax.html"
    })
    .when("/SAULT_STE_MARIE_2tasmindailyRCP85", {
        templateUrl : "data/content/stations/SAULT_STE_MARIE_2_tasmin.html"
    })
    .when("/SAULT_STE_MARIE_2prdailyRCP85", {
        templateUrl : "data/content/stations/SAULT_STE_MARIE_2_pr.html"
    })
    .when("/SAULT_STE_MARIE_AtasdailyRCP85", {
        templateUrl : "data/content/stations/SAULT_STE_MARIE_A_tas.html"
    })
    .when("/SAULT_STE_MARIE_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/SAULT_STE_MARIE_A_tasmax.html"
    })
    .when("/SAULT_STE_MARIE_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/SAULT_STE_MARIE_A_tasmin.html"
    })
    .when("/SAULT_STE_MARIE_AprdailyRCP85", {
        templateUrl : "data/content/stations/SAULT_STE_MARIE_A_pr.html"
    })
    .when("/SHANTY_BAYtasdailyRCP85", {
        templateUrl : "data/content/stations/SHANTY_BAY_tas.html"
    })
    .when("/SHANTY_BAYtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/SHANTY_BAY_tasmax.html"
    })
    .when("/SHANTY_BAYtasmindailyRCP85", {
        templateUrl : "data/content/stations/SHANTY_BAY_tasmin.html"
    })
    .when("/SHANTY_BAYprdailyRCP85", {
        templateUrl : "data/content/stations/SHANTY_BAY_pr.html"
    })
    .when("/SIOUX_LOOKOUT_AtasdailyRCP85", {
        templateUrl : "data/content/stations/SIOUX_LOOKOUT_A_tas.html"
    })
    .when("/SIOUX_LOOKOUT_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/SIOUX_LOOKOUT_A_tasmax.html"
    })
    .when("/SIOUX_LOOKOUT_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/SIOUX_LOOKOUT_A_tasmin.html"
    })
    .when("/SIOUX_LOOKOUT_AprdailyRCP85", {
        templateUrl : "data/content/stations/SIOUX_LOOKOUT_A_pr.html"
    })
    .when("/SMOKY_FALLStasdailyRCP85", {
        templateUrl : "data/content/stations/SMOKY_FALLS_tas.html"
    })
    .when("/SMOKY_FALLStasmaxdailyRCP85", {
        templateUrl : "data/content/stations/SMOKY_FALLS_tasmax.html"
    })
    .when("/SMOKY_FALLStasmindailyRCP85", {
        templateUrl : "data/content/stations/SMOKY_FALLS_tasmin.html"
    })
    .when("/SMOKY_FALLSprdailyRCP85", {
        templateUrl : "data/content/stations/SMOKY_FALLS_pr.html"
    })
    .when("/SOUTH_MOUNTAINtasdailyRCP85", {
        templateUrl : "data/content/stations/SOUTH_MOUNTAIN_tas.html"
    })
    .when("/SOUTH_MOUNTAINtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/SOUTH_MOUNTAIN_tasmax.html"
    })
    .when("/SOUTH_MOUNTAINtasmindailyRCP85", {
        templateUrl : "data/content/stations/SOUTH_MOUNTAIN_tasmin.html"
    })
    .when("/SOUTH_MOUNTAINprdailyRCP85", {
        templateUrl : "data/content/stations/SOUTH_MOUNTAIN_pr.html"
    })
    .when("/ST_CATHARINES_AtasdailyRCP85", {
        templateUrl : "data/content/stations/ST_CATHARINES_A_tas.html"
    })
    .when("/ST_CATHARINES_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/ST_CATHARINES_A_tasmax.html"
    })
    .when("/ST_CATHARINES_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/ST_CATHARINES_A_tasmin.html"
    })
    .when("/ST_CATHARINES_AprdailyRCP85", {
        templateUrl : "data/content/stations/ST_CATHARINES_A_pr.html"
    })
    .when("/ST_CATHARINES_POWER_GLENtasdailyRCP85", {
        templateUrl : "data/content/stations/ST_CATHARINES_POWER_GLEN_tas.html"
    })
    .when("/ST_CATHARINES_POWER_GLENtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/ST_CATHARINES_POWER_GLEN_tasmax.html"
    })
    .when("/ST_CATHARINES_POWER_GLENtasmindailyRCP85", {
        templateUrl : "data/content/stations/ST_CATHARINES_POWER_GLEN_tasmin.html"
    })
    .when("/ST_CATHARINES_POWER_GLENprdailyRCP85", {
        templateUrl : "data/content/stations/ST_CATHARINES_POWER_GLEN_pr.html"
    })
    .when("/ST_THOMAS_WPCPtasdailyRCP85", {
        templateUrl : "data/content/stations/ST_THOMAS_WPCP_tas.html"
    })
    .when("/ST_THOMAS_WPCPtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/ST_THOMAS_WPCP_tasmax.html"
    })
    .when("/ST_THOMAS_WPCPtasmindailyRCP85", {
        templateUrl : "data/content/stations/ST_THOMAS_WPCP_tasmin.html"
    })
    .when("/ST_THOMAS_WPCPprdailyRCP85", {
        templateUrl : "data/content/stations/ST_THOMAS_WPCP_pr.html"
    })
    .when("/ST_ALBERTtasdailyRCP85", {
        templateUrl : "data/content/stations/ST_ALBERT_tas.html"
    })
    .when("/ST_ALBERTtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/ST_ALBERT_tasmax.html"
    })
    .when("/ST_ALBERTtasmindailyRCP85", {
        templateUrl : "data/content/stations/ST_ALBERT_tasmin.html"
    })
    .when("/ST_ALBERTprdailyRCP85", {
        templateUrl : "data/content/stations/ST_ALBERT_pr.html"
    })
    .when("/STRATFORD_WWTPtasdailyRCP85", {
        templateUrl : "data/content/stations/STRATFORD_WWTP_tas.html"
    })
    .when("/STRATFORD_WWTPtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/STRATFORD_WWTP_tasmax.html"
    })
    .when("/STRATFORD_WWTPtasmindailyRCP85", {
        templateUrl : "data/content/stations/STRATFORD_WWTP_tasmin.html"
    })
    .when("/STRATFORD_WWTPprdailyRCP85", {
        templateUrl : "data/content/stations/STRATFORD_WWTP_pr.html"
    })
    .when("/STRATHROYtasdailyRCP85", {
        templateUrl : "data/content/stations/STRATHROY_tas.html"
    })
    .when("/STRATHROYtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/STRATHROY_tasmax.html"
    })
    .when("/STRATHROYtasmindailyRCP85", {
        templateUrl : "data/content/stations/STRATHROY_tasmin.html"
    })
    .when("/STRATHROYprdailyRCP85", {
        templateUrl : "data/content/stations/STRATHROY_pr.html"
    })
    .when("/SUDBURY_AtasdailyRCP85", {
        templateUrl : "data/content/stations/SUDBURY_A_tas.html"
    })
    .when("/SUDBURY_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/SUDBURY_A_tasmax.html"
    })
    .when("/SUDBURY_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/SUDBURY_A_tasmin.html"
    })
    .when("/SUDBURY_AprdailyRCP85", {
        templateUrl : "data/content/stations/SUDBURY_A_pr.html"
    })
    .when("/TARAtasdailyRCP85", {
        templateUrl : "data/content/stations/TARA_tas.html"
    })
    .when("/TARAtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/TARA_tasmax.html"
    })
    .when("/TARAtasmindailyRCP85", {
        templateUrl : "data/content/stations/TARA_tasmin.html"
    })
    .when("/TARAprdailyRCP85", {
        templateUrl : "data/content/stations/TARA_pr.html"
    })
    .when("/THEDFORDtasdailyRCP85", {
        templateUrl : "data/content/stations/THEDFORD_tas.html"
    })
    .when("/THEDFORDtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/THEDFORD_tasmax.html"
    })
    .when("/THEDFORDtasmindailyRCP85", {
        templateUrl : "data/content/stations/THEDFORD_tasmin.html"
    })
    .when("/THEDFORDprdailyRCP85", {
        templateUrl : "data/content/stations/THEDFORD_pr.html"
    })
    .when("/THORNBURY_SLAMAtasdailyRCP85", {
        templateUrl : "data/content/stations/THORNBURY_SLAMA_tas.html"
    })
    .when("/THORNBURY_SLAMAtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/THORNBURY_SLAMA_tasmax.html"
    })
    .when("/THORNBURY_SLAMAtasmindailyRCP85", {
        templateUrl : "data/content/stations/THORNBURY_SLAMA_tasmin.html"
    })
    .when("/THORNBURY_SLAMAprdailyRCP85", {
        templateUrl : "data/content/stations/THORNBURY_SLAMA_pr.html"
    })
    .when("/TIMMINS_VICTOR_POWER_AtasdailyRCP85", {
        templateUrl : "data/content/stations/TIMMINS_VICTOR_POWER_A_tas.html"
    })
    .when("/TIMMINS_VICTOR_POWER_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/TIMMINS_VICTOR_POWER_A_tasmax.html"
    })
    .when("/TIMMINS_VICTOR_POWER_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/TIMMINS_VICTOR_POWER_A_tasmin.html"
    })
    .when("/TIMMINS_VICTOR_POWER_AprdailyRCP85", {
        templateUrl : "data/content/stations/TIMMINS_VICTOR_POWER_A_pr.html"
    })
    .when("/TORONTOtasdailyRCP85", {
        templateUrl : "data/content/stations/TORONTO_tas.html"
    })
    .when("/TORONTOtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/TORONTO_tasmax.html"
    })
    .when("/TORONTOtasmindailyRCP85", {
        templateUrl : "data/content/stations/TORONTO_tasmin.html"
    })
    .when("/TORONTOprdailyRCP85", {
        templateUrl : "data/content/stations/TORONTO_pr.html"
    })
    .when("/TORONTO_BUTTONVILLE_AtasdailyRCP85", {
        templateUrl : "data/content/stations/TORONTO_BUTTONVILLE_A_tas.html"
    })
    .when("/TORONTO_BUTTONVILLE_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/TORONTO_BUTTONVILLE_A_tasmax.html"
    })
    .when("/TORONTO_BUTTONVILLE_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/TORONTO_BUTTONVILLE_A_tasmin.html"
    })
    .when("/TORONTO_BUTTONVILLE_AprdailyRCP85", {
        templateUrl : "data/content/stations/TORONTO_BUTTONVILLE_A_pr.html"
    })
    .when("/TORONTO_LESTER_BtasdailyRCP85", {
        templateUrl : "data/content/stations/TORONTO_LESTER_B_tas.html"
    })
    .when("/TORONTO_LESTER_BtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/TORONTO_LESTER_B_tasmax.html"
    })
    .when("/TORONTO_LESTER_BtasmindailyRCP85", {
        templateUrl : "data/content/stations/TORONTO_LESTER_B_tasmin.html"
    })
    .when("/TORONTO_LESTER_BprdailyRCP85", {
        templateUrl : "data/content/stations/TORONTO_LESTER_B_pr.html"
    })
    .when("/TRANQUILLO_RIDGEtasdailyRCP85", {
        templateUrl : "data/content/stations/TRANQUILLO_RIDGE_tas.html"
    })
    .when("/TRANQUILLO_RIDGEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/TRANQUILLO_RIDGE_tasmax.html"
    })
    .when("/TRANQUILLO_RIDGEtasmindailyRCP85", {
        templateUrl : "data/content/stations/TRANQUILLO_RIDGE_tasmin.html"
    })
    .when("/TRANQUILLO_RIDGEprdailyRCP85", {
        templateUrl : "data/content/stations/TRANQUILLO_RIDGE_pr.html"
    })
    .when("/TRENTON_AtasdailyRCP85", {
        templateUrl : "data/content/stations/TRENTON_A_tas.html"
    })
    .when("/TRENTON_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/TRENTON_A_tasmax.html"
    })
    .when("/TRENTON_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/TRENTON_A_tasmin.html"
    })
    .when("/TRENTON_AprdailyRCP85", {
        templateUrl : "data/content/stations/TRENTON_A_pr.html"
    })
    .when("/TYRONEtasdailyRCP85", {
        templateUrl : "data/content/stations/TYRONE_tas.html"
    })
    .when("/TYRONEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/TYRONE_tasmax.html"
    })
    .when("/TYRONEtasmindailyRCP85", {
        templateUrl : "data/content/stations/TYRONE_tasmin.html"
    })
    .when("/TYRONEprdailyRCP85", {
        templateUrl : "data/content/stations/TYRONE_pr.html"
    })
    .when("/UDORAtasdailyRCP85", {
        templateUrl : "data/content/stations/UDORA_tas.html"
    })
    .when("/UDORAtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/UDORA_tasmax.html"
    })
    .when("/UDORAtasmindailyRCP85", {
        templateUrl : "data/content/stations/UDORA_tasmin.html"
    })
    .when("/UDORAprdailyRCP85", {
        templateUrl : "data/content/stations/UDORA_pr.html"
    })
    .when("/VINELAND_RITTENHOUSEtasdailyRCP85", {
        templateUrl : "data/content/stations/VINELAND_RITTENHOUSE_tas.html"
    })
    .when("/VINELAND_RITTENHOUSEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/VINELAND_RITTENHOUSE_tasmax.html"
    })
    .when("/VINELAND_RITTENHOUSEtasmindailyRCP85", {
        templateUrl : "data/content/stations/VINELAND_RITTENHOUSE_tasmin.html"
    })
    .when("/VINELAND_RITTENHOUSEprdailyRCP85", {
        templateUrl : "data/content/stations/VINELAND_RITTENHOUSE_pr.html"
    })
    .when("/WAWA_AtasdailyRCP85", {
        templateUrl : "data/content/stations/WAWA_A_tas.html"
    })
    .when("/WAWA_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/WAWA_A_tasmax.html"
    })
    .when("/WAWA_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/WAWA_A_tasmin.html"
    })
    .when("/WAWA_AprdailyRCP85", {
        templateUrl : "data/content/stations/WAWA_A_pr.html"
    })
    .when("/WELLANDtasdailyRCP85", {
        templateUrl : "data/content/stations/WELLAND_tas.html"
    })
    .when("/WELLANDtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/WELLAND_tasmax.html"
    })
    .when("/WELLANDtasmindailyRCP85", {
        templateUrl : "data/content/stations/WELLAND_tasmin.html"
    })
    .when("/WELLANDprdailyRCP85", {
        templateUrl : "data/content/stations/WELLAND_pr.html"
    })
    .when("/WHITEFISH_LAKEtasdailyRCP85", {
        templateUrl : "data/content/stations/WHITEFISH_LAKE_tas.html"
    })
    .when("/WHITEFISH_LAKEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/WHITEFISH_LAKE_tasmax.html"
    })
    .when("/WHITEFISH_LAKEtasmindailyRCP85", {
        templateUrl : "data/content/stations/WHITEFISH_LAKE_tasmin.html"
    })
    .when("/WHITEFISH_LAKEprdailyRCP85", {
        templateUrl : "data/content/stations/WHITEFISH_LAKE_pr.html"
    })
    .when("/WIARTON_AtasdailyRCP85", {
        templateUrl : "data/content/stations/WIARTON_A_tas.html"
    })
    .when("/WIARTON_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/WIARTON_A_tasmax.html"
    })
    .when("/WIARTON_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/WIARTON_A_tasmin.html"
    })
    .when("/WIARTON_AprdailyRCP85", {
        templateUrl : "data/content/stations/WIARTON_A_pr.html"
    })
    .when("/WINDSOR_AtasdailyRCP85", {
        templateUrl : "data/content/stations/WINDSOR_A_tas.html"
    })
    .when("/WINDSOR_AtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/WINDSOR_A_tasmax.html"
    })
    .when("/WINDSOR_AtasmindailyRCP85", {
        templateUrl : "data/content/stations/WINDSOR_A_tasmin.html"
    })
    .when("/WINDSOR_AprdailyRCP85", {
        templateUrl : "data/content/stations/WINDSOR_A_pr.html"
    })
    .when("/WOODBRIDGEtasdailyRCP85", {
        templateUrl : "data/content/stations/WOODBRIDGE_tas.html"
    })
    .when("/WOODBRIDGEtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/WOODBRIDGE_tasmax.html"
    })
    .when("/WOODBRIDGEtasmindailyRCP85", {
        templateUrl : "data/content/stations/WOODBRIDGE_tasmin.html"
    })
    .when("/WOODBRIDGEprdailyRCP85", {
        templateUrl : "data/content/stations/WOODBRIDGE_pr.html"
    })
    .when("/WOODSTOCKtasdailyRCP85", {
        templateUrl : "data/content/stations/WOODSTOCK_tas.html"
    })
    .when("/WOODSTOCKtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/WOODSTOCK_tasmax.html"
    })
    .when("/WOODSTOCKtasmindailyRCP85", {
        templateUrl : "data/content/stations/WOODSTOCK_tasmin.html"
    })
    .when("/WOODSTOCKprdailyRCP85", {
        templateUrl : "data/content/stations/WOODSTOCK_pr.html"
    })
    .when("/WOOLERtasdailyRCP85", {
        templateUrl : "data/content/stations/WOOLER_tas.html"
    })
    .when("/WOOLERtasmaxdailyRCP85", {
        templateUrl : "data/content/stations/WOOLER_tasmax.html"
    })
    .when("/WOOLERtasmindailyRCP85", {
        templateUrl : "data/content/stations/WOOLER_tasmin.html"
    })
    .when("/WOOLERprdailyRCP85", {
        templateUrl : "data/content/stations/WOOLER_pr.html"
    })
	//common parts
	//daily grid data
	.when("/DailyTmDataOnGrid", {
		templateUrl : "data/content/grids/DailyTmDataOnGrid.html"
	})	
	.when("/DailyTxDataOnGrid", {
		templateUrl : "data/content/grids/DailyTxDataOnGrid.html"
	})
	.when("/DailyTnDataOnGrid", {
		templateUrl : "data/content/grids/DailyTnDataOnGrid.html"
	})
	.when("/DailyPrDataOnGrid", {
		templateUrl : "data/content/grids/DailyPrDataOnGrid.html"
	})
	.when("/historicaldata", {
		templateUrl : "data/content/grids/HistoricalECMWF_8964X365X38.html"
	})
	//average grid data
	.when("/AverageTmDataOnGrid", {
		templateUrl : "data/content/grids/AveragesTmDataOnGrid.html"
	})	
	.when("/AverageTxDataOnGrid", {
		templateUrl : "data/content/grids/AveragesTxDataOnGrid.html"
	})
	.when("/AverageTnDataOnGrid", {
		templateUrl : "data/content/grids/AveragesTnDataOnGrid.html"
	})
	.when("/AveragePrDataOnGrid", {
		templateUrl : "data/content/grids/AveragesPrDataOnGrid.html"
	})
	.when("/ProvinceAverageEnsembleMean", {
		templateUrl : "data/content/province/ProvinceAverageEnsembleMean.html"
	})
	.when("/RegionEnsembleMeanData", {
		templateUrl : "data/content/regions/RegionEnsembleMeanData.html"
	})
	.when("/StationsEnsembleMeanData", {
		templateUrl : "data/content/stations/StationsEnsembleMeanData.html"
	})	
	// other contents
    .when("/", {
        templateUrl : "data/content/grids/indexesEnsembleMeanGrids.html"
    })
    .when("/indexesEnsembleMeanGrids", {
        templateUrl : "data/content/grids/indexesEnsembleMeanGrids.html"
    })
	.when("/theLogInPage", {
        templateUrl : "LogInPage.html"
    })
    .when("/indexDefinationTable", {
        templateUrl : "contentOCDP/Documents/indexDefinationTable.htm"
    })	
	.when("/ClimateChangeTeam", {
		templateUrl : "ClimateChangeTeam.html"
	});
});

app.controller('TreeMenuCtrl', function($scope) {
    $scope.DocumentsState = "closed";
	$scope.clickDocuments=function() {
	    $scope.DocumentsState = "open";	
	};
});
