sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'faccdemop1/test/integration/FirstJourney',
		'faccdemop1/test/integration/pages/MasterDataList',
		'faccdemop1/test/integration/pages/MasterDataObjectPage'
    ],
    function(JourneyRunner, opaJourney, MasterDataList, MasterDataObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('faccdemop1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMasterDataList: MasterDataList,
					onTheMasterDataObjectPage: MasterDataObjectPage
                }
            },
            opaJourney.run
        );
    }
);