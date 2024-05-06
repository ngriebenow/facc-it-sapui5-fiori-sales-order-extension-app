sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'faccdemop1',
            componentId: 'MasterDataObjectPage',
            contextPath: '/MasterData'
        },
        CustomPageDefinitions
    );
});