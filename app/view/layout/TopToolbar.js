/**
 * Global top toolbar
 *
 * @author Alessio Valentini [avalentini@tquila.com]
 *
 */

/**
 * Shortly define the default used by the btns
 */
var btnDefault = {
    ui     : 'plain',
    hidden : false
}

Ext.define('generic.view.layout.TopToolbar', {
    extend  : 'Ext.Toolbar',
    alias   : 'TopToolbar',
    xtype   : 'TopToolbar',
    
    config : {

        //////////////////////////////////
        // custom variables
        //////////////////////////////////

        /**
         * All buttons in the toolbar disabled, true - false
         */
        disableButtons : false,

        //////////////////////////////////
        // inherited variables
        //////////////////////////////////
    	itemId : 'topToolbar',     // for multiple instances within different containers
    	cls    : 'topToolbar',        
        
    	items : [
            {
                xtype : 'container',
                flex  : 2,

                defaults : btnDefault,

                items : [
                    {
                        xtype   : 'button',
                        iconCls : 'list',
                        action  : 'openMenu',
                        docked  : 'left'    
                    }
                ]
            },
            // {
            //     xtype : 'container', 
            //     cls   : 'topToolbarCenterContainer',
            //     // flex  : 1,   // remove so the btns can take the maximum space
            //     html  : '<img src="resources/images/logo.png" class="topLogo"/>'
            // },
            {
                xtype : 'container',
                flex  : 2,

                defaults : btnDefault,

                items : [
                    // {
                    //     xtype   : 'button',
                    //     iconCls : 'list toobarIcon',    // list is the picto icon
                    //     action  : 'changehome',    
                    //     docked  : 'right'   
                    // }
                    // ,
                    // {
                    //     xtype   : 'button',
                    //     iconCls : 'list toobarIcon',    // list is the picto icon
                    //     action  : 'openMenu',    
                    //     docked  : 'right'   
                    // }
                ]
            }
		]
    },

    initialize : function () {
        this.callParent();
        this.registerListeners();
    },

    registerListeners : function(){
        this.on( 'Module1Panel', function( config ){
            console.log( 'Module1Panel', config );
            this.setUIElements( config );
        });

        this.on( 'Module2Panel', function( config ){
            console.log( 'Module2Panel', config );
            this.setUIElements( config );
        });

        // growing ...
    },

    setUIElements : function( config ){
        this.setToolbarTitle(config);
        this.setButtonsStatus(config);
    },

    setToolbarTitle : function( config ){
        console.log( 'setToolbarTitle', config );
    },

    setButtonsStatus : function( config ){
        console.log( 'setButtonsStatus', config );
    }
});