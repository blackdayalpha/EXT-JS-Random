Ext.define('Popup', {
    title: 'Add Book',
    extend: 'Ext.window.Window',
    width: 300,
    height: 250,
    model: true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        bodyPadding: 10,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Book Name',
            name: 'bookName',
            allowBlank: false,
            minLength: 3,
            maxLength: 50,
            enforceMaxLength: true,
            listeners: {
                blur: function (field) {
                    if (!field.isValid()) {
                        field.markInvalid('Please enter a valid book name (3-50 characters).');
                    }
                }
            }
        }, {
            xtype: 'textfield',
            fieldLabel: 'Author Name',
            name: 'authName',
            allowBlank: false,
            minLength: 3,
            maxLength: 50,
            enforceMaxLength: true,
            listeners: {
                blur: function (field) {
                    if (!field.isValid()) {
                        field.markInvalid('Please enter a valid book name (3-50 characters).');
                    }
                }
            }
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Price',
            name: 'priceLbl',
            allowBlank: false,
            minValue: 0, // Set minimum value
            maxValue: 10000,
            enforceMaxLength: true,
            listeners: {
                blur: function (field) {
                    if (!field.isValid()) {
                        field.markInvalid('Please enter a valid price (0-10000).');
                    }
                }
            }
        }],
        buttons: [{
            text: 'Add File',
            handler: function () {
                var form = this.up('form').getForm();
                if (form.isValid()) { // Check if the form is valid
                    var selectedNode = Ext.getCmp('testGrid').getSelectionModel().getSelection()[0];
                    var bookName = form.getFieldValues().bookName;
                    var authName = form.getFieldValues().authName;
                    var priceLbl = form.getFieldValues().priceLbl;

                    let newNode = Ext.create('Ext.data.TreeModel', {
                        subject: bookName,
                        author: authName,
                        price: priceLbl,
                        leaf: true
                    });
                    selectedNode.appendChild(newNode);
                    this.up('window').close();
                }
            }
        }]
    }]
});




/*
Ext.define('Books', {
    extend: 'Ext.data.Model',
    alias: 'book',
    fields: [{
        name: 'subject',
        type: 'string'
    }, {
        name: 'bname',
        type: 'string'
    }, {
        name: 'author',
        type: 'string'
    }, {
        name: 'price',
        type: 'int',
        defaultValue: null
    }]
});

var store = Ext.create('Ext.data.TreeStore', {
    model: 'Books',
    root: {
        subject: 'Books',
        expanded: true,
        children: [{
            subject: 'Philosophy',
            children: [{
                subject: 'Tao Te Ching',
                author: 'Lao Tzu ',
                price: '1250',
                leaf: true
            }, {
                subject: 'Man\'s Search for Meaning',
                author: 'Viktor E. Frankl',
                price: '920',
                leaf: true
            }, {
                subject: 'The Republic',
                author: 'Plato',
                price: '225',
                leaf: true
            }, {
                subject: 'Beyond Good and Evil',
                author: 'Friedrich Nietzsche',
                price: '1400',
                leaf: true
            }]
        }, {
            subject: 'Mathematics',
            children: [{
                subject: 'Algerbric Maths',
                author: 'R. D. Sharma',
                price: '450',
                leaf: true
            }, {
                subject: 'Mathematical Analysis',
                author: 'David S. Dummit',
                price: '750',
                leaf: true
            }, {
                subject: 'Business Calculus',
                author: 'Mike May',
                price: '1950',
                leaf: true
            }, {
                subject: 'Linear algebra',
                author: 'Serge Lang',
                price: '1400',
                leaf: true
            }]
        }]
    }
});

var tree = Ext.define('treePanel', {
    extend: 'Ext.tree.Panel',
    renderTo: document.body,
    xtype: 'tree',
    title: 'TreeGrid',
    width: 700,
    height: 450,
    fields: ['subject', 'name', 'author', 'price'],
    columns: [{
        xtype: 'treecolumn',
        header: 'Subjects',
        dataIndex: 'subject',
        sortable: true,
        flex: 1,
        editor: 'textfield'
    }, {
        header: 'Author',
        dataIndex: 'author',
        flex: 1,
        sortable: true,

        editor: 'textfield',
        renderer: function (value, metaData, record) {
            // If it's a non-leaf node, return empty string
            return record.isLeaf() ? value : '';
        }

    }, {
        header: 'Price',
        dataIndex: 'price',
        flex: 1,
        sortable: true,
        editor: 'textfield',
        renderer: function (value, metaData, record) {
            // If it's a non-leaf node, return empty string
            return record.isLeaf() ? value : '';
        }
    }],
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
        })
    ],
    store: store,
});

Ext.define('buttons', {
    extend: 'Ext.grid.Panel',
    xtype: 'btn',
    buttons: [{
        text: 'Select All'
    }, {
        text: 'Remove All',
        handler: function () {
            window.reload();
        }
    }, {
        text: 'Get  Selected Data'
    }]
})

Ext.application({
    name: 'Book Store',
    launch: function () {
        Ext.create('Ext.container.Container', {
            renderTo: Ext.getBody(),
            items: [{
                xtype: 'tree'
            }, {
                xtype: 'btn'
            }]
        })
    }
})



/***** 
 * 
 * 
 * Ext.define('BookModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    data: {
        name: 'MyApp',
    }
})
Ext.define('Books', {
    extend: 'Ext.data.Model',
    alias: 'book',
    fields: [{
        name: 'subject',
        type: 'string'
    }, {
        name: 'bname',
        type: 'string'
    }, {
        name: 'author',
        type: 'string'
    }, {
        name: 'price',
        type: 'int',
        defaultValue: null
    }]
});

var store = Ext.create('Ext.data.TreeStore', {
    model: 'Books',
    root: {
        subject: 'Books',
        expanded: true,
        children: [{
            subject: 'Philosophy',
            children: [{
                subject: 'Tao Te Ching',
                author: 'Lao Tzu ',
                price: '1250',
                leaf: true
            }, {
                subject: 'Man\'s Search for Meaning',
                author: 'Viktor E. Frankl',
                price: '920',
                leaf: true
            }, {
                subject: 'The Republic',
                author: 'Plato',
                price: '225',
                leaf: true
            }, {
                subject: 'Beyond Good and Evil',
                author: 'Friedrich Nietzsche',
                price: '1400',
                leaf: true
            }]
        }, {
            subject: 'Mathematics',
            children: [{
                subject: 'Algerbric Maths',
                author: 'R. D. Sharma',
                price: '450',
                leaf: true
            }, {
                subject: 'Mathematical Analysis',
                author: 'David S. Dummit',
                price: '750',
                leaf: true
            }, {
                subject: 'Business Calculus',
                author: 'Mike May',
                price: '1950',
                leaf: true
            }, {
                subject: 'Linear algebra',
                author: 'Serge Lang',
                price: '1400',
                leaf: true
            }]
        }]
    }
});

var tree = Ext.define('treePanel', {
    extend: 'Ext.tree.Panel',
    renderTo: document.body,
    xtype: 'tree',
    title: 'TreeGrid',
    width: 'auto',
    autoscroll: true,
    height: 300,
    padding: 10,
    
    fields: ['subject', 'name', 'author', 'price'],
    columns: [{
        xtype: 'treecolumn',
        header: 'Subjects',
        dataIndex: 'subject',
        sortable: true,
        flex: 1,
        editor: 'textfield'
    }, {
        header: 'Author',
        dataIndex: 'author',
        flex: 1,
        sortable: true,
        editor: 'textfield',
        renderer: function (value, metaData, record) {
            // If it's a non-leaf node, return empty string
            return record.isLeaf() ? value : '';
        }
    }, {
        header: 'Price',
        dataIndex: 'price',
        flex: 1,
        sortable: true,
        editor: 'textfield',
        renderer: function (value, metaData, record) {
            // If it's a non-leaf node, return empty string
            return record.isLeaf() ? value : '';
        }
    }],

    id: 'testGrid',
    selModel: {
        injectCheckBox: 'first',
        checkOnly: true,
        model: 'SIMPLE',
        type: 'checkboxmodel',

    },
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
        })
    ],
    store: store,
});


Ext.define('buttons', {
    extend: 'Ext.grid.Panel',
    xtype: 'btn',
    buttons: [{
        text: 'Add Book',
        handler: function () {
            addFileWindow.show();
        }
    }, {
        text: 'Refresh',
        handler: function () {
            window.location.reload();
        }
    }, {
        text: 'Delete',
        handler: function () {
            Ext.Msg.confirm('Confirm', 'Are you sure you want to delete this item?', function (btn) {
                if (btn === 'yes') {
                    var selected = Ext.getCmp('testGrid').getSelectionModel().getSelection();
                    for (n of selected) {
                        par = n.parentNode;
                        console.log(par);
                        par.removeChild(n);
                    }
                } else {
                    // User clicked the "No" button, do nothing
                    console.log('User canceled deletion');
                }
            });
        }
    }]
})

Ext.application({
    name: 'Book Store',
    launch: function () {
        Ext.create('Ext.container.Container', {
            renderTo: Ext.getBody(),
            items: [{
                xtype: 'tree'
            }, {
                xtype: 'btn'
            }]
        })
    }
})

*/
