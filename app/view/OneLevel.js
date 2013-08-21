Ext.define('generic.view.OneLevel', {
    extend   : 'Ext.Container',

    xtype    : 'OneLevel',
    alias    : 'OneLevel',

    stateful: true,

    config : {
        fullscreen: true,
        layout: 'vbox',

        items : [
            {
                xtype: 'button',
                text: 'Back',
                listeners: {
                    tap: function() {
                        generic.app.getController('NavigationCtrl').goBack();
                    }
                }
            },
            {
                xtype: 'button',
                text: 'Next',
                listeners: {
                    tap: function() {
                        var newStore = {
                            store: {
                                data: (function() {
                                    var arr = [];
                                    for (var i = 0; i < 30; i++) {
                                        arr.push({
                                            title   : 'test ' + i
                                        });
                                    }
                                    return arr;
                                })()
                            }
                        };
                        generic.app.getController('NavigationCtrl').pushView(
                            {
                                xtype: 'CustomList',
                                config: newStore
                            }
                        );
                    }
                }
            },
            {
                xtype: 'panel',
                html: ''
            }
        ]
    },

    applyRecord: function(record) {
        this.down('panel').setHtml('Name: ' + record.get('name'));

        return record;
    }
});