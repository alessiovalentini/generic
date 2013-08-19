/**
 * Short description
 *
 * Long description
 *
 * @author Alessio Valentini [avalentini@tquila.com]
 *
 */
Ext.define('generic.components.controller.moduleCtrl',{
	extend : 'Ext.app.Controller',

	config : {

		//////////////////////////////////////////////
		//	Custom attributes > getters and setters generate automatically
		//////////////////////////////////////////////
		module : 
		main   : 


		//////////////////////////////////////////////
		// Views within the container
		//////////////////////////////////////////////
		views: [

		],		

		//////////////////////////////////////////////
		//	References to the view
		//////////////////////////////////////////////
		refs: {

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
		console.log('> <ControllerName> init');		
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
	 * @param       param1 ...
	 * @param       animation can be false => no animation; true => use the newXtype defined showAnimation; animation => use a custom one
	 * @return      param1 ...
	 */
	setUI : function ( newXtype, animation, extraConfig, destroy ) {
		// save status

		newXtypeConfig = Ext.apply(extraConfig, {
			state: {}
		});

		// instaciate new view
		if( android2 )
			newView = Ext.create( 'newXtype', { animation : false, customCfg: newXtypeConfig } );
		else 
			newView = Ext.create( 'newXtype', { animation : animation, customCfg: newXtypeConfig } );

		// animate to new view
		this.getMain().setActiveItem( newView );


	},

	//////////////////////////////////////////////
	//	Service Methods
	//////////////////////////////////////////////

})