Ext.define('generic.controller.view.CustomListCtrl',{
    extend : 'generic.components.controller.ViewCtrl',

    config: {
        views: [
            'CustomList'
        ]
    },

    initView: function() {
        this.callParent(arguments);

        var view = this.getView();
    }
});