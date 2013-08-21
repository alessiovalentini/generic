Ext.define('generic.view.CustomList', {
    extend   : 'Ext.List',

    xtype    : 'CustomList',
    alias    : 'CustomList',

    stateful: true,

    config : {
        mode: 'MULTI',
        itemTpl : '<span>{title}</span>',
        
        store : {
            data: (function() {
                var arr = [];
                for (var i = 0; i < 50; i++) {
                    arr.push({
                        title   : 'item ' + i
                    });
                }
                return arr;
            })()
        },
        listeners: {
            select: function(list, record) {
                var items = this.innerItems[0].innerItems;
                for (var i = 0; i < items.length; i++) {
                    // Things[i]
                    if (items[i].getRecord() === record) {
                        this.setState(items[i], 'selected', list.isSelected(record));
                        break;
                    }
                }
            },
            painted: function() {
                if (this.stateCfg && this.stateCfg.items) {
                    
                    for (var i = 0; i < this.stateCfg.items.length; i++) {
                        if (this.stateCfg.items[i].selected) {
                            this.select(i, true);
                        }
                    }
                }
            }
        },
        onItemDisclosure: function() {
            generic.app.getController('NavigationCtrl').pushView({
                xtype: 'OneLevel',
                destroy: true,
                config: {
                    test: 'test'
                }
            });
        }
    },

    createItem: function(config) {
        var me = this,
            item = this.callParent(arguments);

        item.applyRecord = function(record) {
            if (record && me.stateful) {
                me.setState(this, 'dataindex', me.getItemIndex(this));
            }
            return record;
        };
    }
});