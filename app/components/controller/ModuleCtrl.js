/**
 * Short description
 *
 * Long description
 *
 * @author Alessio Valentini [avalentini@tquila.com]
 *
 */
Ext.define('generic.components.controller.ModuleCtrl',{
	extend : 'Ext.app.Controller',

	config : {

		//////////////////////////////////////////////
		//	Custom attributes > getters and setters generate automatically
		//////////////////////////////////////////////
		module   : null,
		mainView : null,

		//////////////////////////////////////////////
		// Views within the container
		//////////////////////////////////////////////
		views: [

		],		

		//////////////////////////////////////////////
		//	References to the view
		//////////////////////////////////////////////
		refs: {
			RightContainer : 'MainContainer RightContainer'
		},

		//////////////////////////////////////////////
		//	Event Controls
		//////////////////////////////////////////////
		control: {
		
		}		
	},

	//////////////////////////////////////////////
	//	Init actions
	//////////////////////////////////////////////
	
	init : function(){
		console.log('> module ctrl init');		
	},

	//////////////////////////////////////////////
	//	Methods
	//////////////////////////////////////////////

	/**
	 * Short description
	 *
	 * Long description
	 *
	 * @author Alessio Valentini [avalentini@tquila.com]
	 *
	 * @param       newXtype the name of the new xtype we want to instanciate
	 * @param       animation can be false => no animation; true => use the newXtype defined showAnimation; animation => use a custom one
	 * @param 		newXtypeConfig
	 * @param       destroy wheter we want to destroy the current item (if false we don't save the status)
	 * @return      newView instanciated
	 * @fires       newXtype name with newXtypeConfig as parameter
	 */
	setUI : function ( newXtype, initActions, animation, extraConfig, destroy ) {
		
		// destroy current view
		if( destroy ){
			// save status
			this.getRightContainer().getActiveItem().saveFullStatus();
			// destroy
			this.getRightContainer().getActiveItem().destroy();			
		} else {
			// simply save xtype and current module (app ctrl keeps info about this (controls the menu list))
			this.getRightContainer().getActiveItem().saveStatus(); 
		}

		// prepare new view
		newXtypeConfig = Ext.apply(extraConfig, {
			state: {}
		});

		// instaciate new view
		if( Ext.device.Device.platform == 'android' && Ext.device.Device.platform.version < 4 )
			newView = Ext.create( newXtype, { animation : false, customCfg: newXtypeConfig } );
		else 
			newView = Ext.create( newXtype, { animation : animation, customCfg: newXtypeConfig } );

		// fire event
		this.fireEvent( newXtype, extraConfig );	// for example if we have to set some titlebar

		// new view controller init actions
		if( initActions )
			this.getApplication().getController( newXtype + 'Ctrl').initActions(); // naming convention on view controller

		// animate to new view
		this.getRightContainer().setActiveItem( newView );

		return newView;
	},

	//////////////////////////////////////////////
	//	Service Methods
	//////////////////////////////////////////////

})