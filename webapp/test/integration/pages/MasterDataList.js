sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'faccdemop1',
            componentId: 'MasterDataList',
            contextPath: '/MasterData'
        },
        CustomPageDefinitions
    );
});