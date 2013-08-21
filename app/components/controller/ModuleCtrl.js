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
	setUI : function ( cfg ) {
		// newXtype, initActions, animation, extraConfig, destroy
		/**  Sample config
			{
				xtype: 'CustomList',
				animation: {},
				initActions: {},
				state: {},
				config: {}
			}
		*/
		
		var container = this.getRightContainer();
		var cmpConfig = Ext.apply(cfg.config ? cfg.config : {}, {state: cfg.state});
		if (cfg.animation === false) {
			cmpConfig.showAnimation = false;
		}

		// instaciate new view
		newView = Ext.create(cfg.xtype, cmpConfig);

		// fire event
		this.fireEvent(cfg.xtype, cfg);	// for example if we have to set some titlebar

		if (Ext.device && Ext.device.Device.platform == 'android' && Ext.device.Device.platform.version < 4) {
			// container.setActiveItem(newView, false);
			container.getLayout().setAnimation(false);
		} else {
			container.getLayout().setAnimation(cfg.animation);
		}

		container.setActiveItem(newView);

		var ctrl = this.getApplication().getController( 'view.' + cfg.xtype + 'Ctrl');
		// new view controller init actions
		if (ctrl && ctrl.initView) {

			ctrl.initView(newView);
			// this.getApplication().getController( cfg.xtype + 'Ctrl').initView(); // naming convention on view controller
		}

		return newView;
	}

})