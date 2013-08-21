Ext.define('generic.controller.view.OneLevelCtrl',{
    extend : 'generic.components.controller.ViewCtrl',

    requires: [
        'Ext.Panel'
    ],

    config: {
        views: [
            'OneLevel'
        ]
    },

    initView: function() {
        this.callParent(arguments);
    },

    viewActivated: function() {
        this.callParent(arguments);

        Ext.define('User', {
            extend: 'Ext.data.Model',

            config: {
                fields: [
                    {name: 'name',  type: 'string'},
                    {name: 'age',   type: 'int'},
                    {name: 'phone', type: 'string'}
                ]
            }
        });
        
        var view = this.getView();
        var user = Ext.create('User', {
            name : 'John',
            age  : 24,
            phone: '666-666-666'
        });

        view.setRecord(user);
    }
});