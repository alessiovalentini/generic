Ext.define('generic.controller.SlideViewCtrl',{
	extend: 'Ext.app.Controller',
	config:{
		views: ['layout.RightContainer','layout.LeftContainer'],

		refs:{
			// panels
			MainContainer  : 'MainContainer',
			RightContainer : 'RightContainer',
			LeftContainer  : 'LeftContainer',

			// toolbars
			TopToolbar : 'MainContainer RightContainer TopToolbar',

			// btns
			// BackBtn     : 'MainContainer RightContainer RecordTopTitlebar button[action=back]',
			OpenMenuBtn : 'MainContainer RightContainer TopToolbar button[action=openMenu]'
		},

		control : {

			// open on menu btn
			OpenMenuBtn : {
				tap : 'toggleSlide'
			},

			// open on item tapped
			LeftContainer : {
				itemtap : 'toggleSlide'
			}
		}
	},

	/**
	 * Controller init
	 *
	 * - init listeners
	 */
	init : function() {

	},

	/**
	 * Description : Toggle the main container view sliding
	 */
	toggleSlide : function(){
		var me = this,
			mainEl;

		if( me.getRightContainer() ){
		
			mainEl = me.getRightContainer().element;

			if (mainEl.hasCls('out')) {
				this.closeSlide()
			} else {
				this.openSlide()
			}
		}
	},

	/**
	 * * Open the slide navogation view, add mask, execute actions
	 */
	openSlide : function () {
		var me = this,
			rightContainer = me.getRightContainer(),
			mainEl = me.getRightContainer().element;

		if (!mainEl.hasCls('out'))
			mainEl.removeCls('in').addCls('out')
		
		// mask on inside panel
		// rightContainer.getActiveItem().setMasked( true );
	 },

	/**
	 * Close the slide navogation view, remove mask, execute actions
	 *
	 */
	closeSlide : function () {
		var me = this,
			rightContainer = me.getRightContainer(),
			mainEl = me.getRightContainer().element

			if (!mainEl.hasCls('in'))
				mainEl.removeCls('out').addCls('in')

		// mask off inside panel
		// if( rightContainer.getActiveItem() )	// for when we logout and destroy all the inners
			// rightContainer.getActiveItem().setMasked(false)
	},

	/**
	 * Is it opened or closed?
	 * 
	 * @return true false
	 */
	isOpen : function(){
	 	var me = this,
			rightContainer = me.getRightContainer(),
			mainEl = me.getRightContainer().element;

		if( mainEl.hasCls('out') )
			return true;
		return false;
	}
})