Ext.define('generic.overrides.Component', {
    override: 'Ext.Component',

    constructor: function(config) {
        // debugger;
        // if (this.stateful) {
            // debugger;
            // if (config.showAnimation === undefined) {
            //     config.showAnimation = {type: 'slide', direction: 'left'};
            // }
            // if (config.hideAnimation === undefined) {
            //     config.hideAnimation = {type: 'slide', direction: 'right'};
            // }
        // }
        if (config && config.state) {
            this.stateCfg = config.state;
        }

        this.callOverridden(arguments);
        
        // if (this.superclass.xtype === 'list') {
        //     debugger;
        // }

        if (this.stateful) {
            console.log(this.superclass.$className + ' -> ' + this.$className + ' stateful constructor');

            // if (config.showAnimation === undefined) {
            //     this.setShowAnimation({type: 'slide', direction: 'left'});
            // }
            // if (config.hideAnimation === undefined) {
            //     this.setHideAnimation({type: 'slide', direction: 'right'});
            // }

            this.restoreState(config);
        }

        return this;
    },

    /**
     * Description
     *
     * @author Piotr Piesiak [p.piesiak@tquila.com]
     *
     * @param       ...
     * @return      ...
     */
    saveState: function(full) {
        var config = Ext.apply(this.stateCfg ? this.stateCfg :{}, {
            xtype: this.xtype
        });
        var scrollable = this.getScrollable();

        if (!full) {
            return config;
        }

        if (scrollable) {
            config.scrollPosition  = scrollable.getScroller().position;
        }

        if (this.superclass.xtype === 'list') {
            var inner;
            inner = this.getInnerItems();
            if (inner && inner.length > 0) {
                inner = inner[0].innerItems;
                config.items = [];
                for (var i = 0; i < inner.length; i++) {
                    var stateCfg = inner[i].stateCfg;
                    if (stateCfg && (stateCfg.dataindex !== undefined)) {
                        config.items[stateCfg.dataindex] = inner[i].stateCfg;
                    } else {
                        break;
                    }
                }
            }
        }

        return config;
    },
    
    /**
     * Description
     *
     * @author Piotr Piesiak [p.piesiak@tquila.com]
     *
     * @param       ...
     * @return      ...
     */
    restoreState: function(config, full) {

        if (this.isStatePresent(this)) {
            var scrollable = this.getScrollable();
            if (scrollable) {
                var position = this.getState(this, 'scrollPosition');
                if (position) {
                    // scrollable.getScroller().position = position;
                    scrollable.getScroller().setInitialOffset(position);
                    // scrollable.getScroller().startPosition = position;
                }
                // this.setState(this, 'scrollPosition', scrollable.position);
                
            }

            if (this.superclass.xtype === 'list') {

            }
        }
    },

    /**
     * Description
     *
     * @author Piotr Piesiak [p.piesiak@tquila.com]
     *
     * @param       cmp ...
     * @param       stateKey ...
     * @param       stateValue ...
     */
    setState: function(cmp, stateKey, stateValue) {
        if (!cmp.stateCfg) {
            cmp.stateCfg = {};
        }
        cmp.stateCfg[stateKey] = stateValue;
    },

    /**
     * Description
     *
     * @author Piotr Piesiak [p.piesiak@tquila.com]
     *
     * @param       cmp ...
     * @param       stateKey ...
     * @return      stateValue ...
     */
    getState: function(cmp, stateKey) {
        if (cmp.stateCfg) {
            return cmp.stateCfg[stateKey];
        } else {
            return null;
        }
    },

    isStatePresent: function(cmp) {
        return cmp.stateCfg ? true : false;
    }
});