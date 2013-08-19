Ext.define('generic.view.layout.MainContainer', {
	extend   : 'Ext.Container',
	alias    : 'MainContainer',
	xtype    : 'MainContainer',
	
	requires : ['generic.view.layout.RightContainer',
				'generic.view.layout.LeftContainer'],

	config: {

		id : 'mainContainer',

		fullscreen: true,
		layout: 'hbox',

		items : [
			{
				xtype : 'RightContainer'
			},
			{
				xtype : 'LeftContainer'
			}
		]
	}
});
