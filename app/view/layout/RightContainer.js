/**
 * Description : card layout container:
 * - card1 = list of records
 * - card2 = record detail (show/edit mode)
 * - cardn = something clicked on the left list (user infos - chatter)
 */
Ext.define('generic.view.layout.RightContainer', {
    extend   : 'Ext.Container',
    xtype    : 'RightContainer',
    requires : [
        'generic.view.layout.TopToolbar'
    ],

    config : {

        id     : 'rightContainer',  // use with Ext.getCmp('rightContainer') in ex

    	layout : 'card',	        // alternate views in this container
    	cls	   : 'slide',
    	width  : '100%',	        // fit whole content

    	items : [

            ////////////////////////////////////////
            // Independent from cards

            // #note initially hidden, appears on noconnection event
            // {   
            //     xtype : 'OnlineOfflineToolbar',
            //     docked: 'top'
            // },
            // part of the template
            {
                xtype : 'TopToolbar',
                docked: 'top'
            }
            // {
            //     xtype: 'OneLevel'
            // },
            // {
            //     xtype: 'CustomList'
            // }
            ///////////////////////////////////////

            ///////////////////////////////////////
            // Modules
            ///////////////////////////////////////

    	],

        listeners: {
            painted: function() {
                generic.app.getController('NavigationCtrl').pushView('CustomList');
            }
        }
    }
});