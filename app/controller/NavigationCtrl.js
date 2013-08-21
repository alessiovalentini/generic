Ext.define('generic.controller.NavigationCtrl',{
    extend : 'Ext.app.Controller',

    config: {
        history  : [],

        refs: {
            RightContainer : 'MainContainer RightContainer'
        }
    },

    initialize: function() {
        var me = this;
        me.getRightContainer().onAfter('activeitemchange', 
            function(container, newActiveItem, oldActiveItem) {
                me.destroyView(oldActiveItem);
            }
        );
    },

    pushView: function(cfg) {
        var cmpState = null,
            ctrl = generic.app.getController('Module1Ctrl'),
            container = this.getRightContainer(),
            view = container.getActiveItem();

        this.destroyOldView = false;

        if (Ext.isString(cfg)) {
            cfg = { xtype: cfg };
        }

        if (!cfg.xtype) {
            console.warn('xtype is required');
            return;
        }

        if (!cfg.back) {
            if (view) {
                // destroy current view
                if( cfg.destroy ){
                    // save status
                    cmpState = view.saveState(true);
                    // destroy
                    this.destroyOldView = true;
                    // view.on('deactivate', function() {
                    //     // container.remove(this, true);
                    //     this.destroy();
                    // });
                } else {
                    // simply save xtype and current module (app ctrl keeps info about this (controls the menu list))
                    cmpState = view.saveState();
                    this.destroyOldView = false;
                }

                if (cfg.animation === undefined) {
                    cfg.animation = {type: 'slide'};
                }

                cmpState.config = cfg.config;
                this.historyPush(cmpState);
            } else {
                cfg.animation = false;
            }
        } else {
            if (cfg.animation === undefined) {
                cfg.animation = {type: 'slide', direction:'right'};
            }            
        }

        ctrl.setUI(cfg);
    },

    destroyView: function(view) {
        if (this.destroyOldView) {
            view.destroy();
        }
    },

    goBack: function() {
        var state = this.historyPop();
        if (state) {
            this.pushView({
                xtype: state.xtype,
                state: state,
                destroy: true,
                back: true
            });
        }
    },

    historyPush: function(config) {
        var history = this.getHistory();
        if (config) {
            history.push(config);
        }
    },

    historyPop: function() {
        var history = this.getHistory();
        if (history.length > 0) {
            return history.pop();
        } else {
            return null;
        }
    }
});