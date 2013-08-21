Ext.define('generic.components.controller.ViewCtrl',{
    extend : 'Ext.app.Controller',

    init: function() {

    },

    initView: function(view) {
        // this.xtype = xtype;
        this._viewRef = view;

        // this._viewRef.on('activate', this.viewActivated);
        this._viewRef.on('painted', this.viewActivated, this);
    },

    getView: function() {
        // if (!this._viewRef) {            
        // }
        return this._viewRef;
    },

    viewActivated: function() {
    }
});