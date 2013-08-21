/**
 * Description : left navigation menu
 */

var menuStore = Ext.create('Ext.data.Store',{

    data : [

        // modules
        {
            title   : 'module1',
            module  : 'module1'
        },{
            title   : 'module2',
            module  : 'module2'
        }
    ]
});

Ext.define('generic.view.layout.LeftContainer', {
	extend: 'Ext.List',
	xtype : 'LeftContainer',

	config: {

		/////////////////////////////////////
        //  List itself
        /////////////////////////////////////
        id        : 'leftContainer',
        cls   	  : 'nav-list',
        width     : 250,		// not working without
        scrollable: null,       // avoid warning
        disableSelection : true,

        itemTpl   : new Ext.XTemplate('<span>{title}</span>'),
        
        store : menuStore,
        listeners: {
            itemtap: function() {
                
            }
        }
	}
});