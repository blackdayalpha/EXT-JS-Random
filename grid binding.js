Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'location', 'phone']
});

Ext.define('MyViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.myvm',
    stores: {
        data: {
            model: 'User',
            data: [{
                id: 1,
                name: 'Homer Simpson',
                location: 'Springfield',
                phone: '555-222-1254'
            }, {
                id: 2,
                name: 'Peter Griffin',
                location: 'Quahog',
                phone: '555-222-1254'
            }, {
                id: 3,
                name: 'Homer',
                location: 'Springfield',
                phone: '555-222-1254'
            }, {
                id: 4,
                name: 'Merge',
                location: 'Quahog',
                phone: '555-222-1254'
            }, {
                id: 5,
                name: 'Sephen',
                location: 'Springfield',
                phone: '555-222-1254'
            }, {
                id: 6,
                name: 'Mallika',
                location: 'Quahog',
                phone: '555-222-1254'
            }, {
                id: 7,
                name: 'Prithvi',
                location: 'Springfield',
                phone: '555-222-1254'
            }, {
                id: 8,
                name: 'Punya',
                location: 'Quahog',
                phone: '555-222-1254'
            }]
        }
    }
})
Ext.define('MyGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mygrid',
    title: 'Source Grid',
    reference: 'mygrid',
    selModel: 'rowmodel',
    columns: [{
        text: 'Name',
        flex: 1,
        dataIndex: 'name'
    }, {
        text: 'Location',
        flex: 1,
        dataIndex: 'location'
    }, {
        text: 'Phone Number',
        flex: 1,
        dataIndex: 'phone'
    }],
    bind: '{data}'
})
Ext.define('MyForm', {
    extend: 'Ext.form.Panel',
    xtype: 'myform',
    title: 'Bound Form',
    height: 300,
    bodyPadding: 10,
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Name',
        name: 'name',
        bind: '{mygrid.selection.name}'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Location',
        name: 'location',
        bind: '{mygrid.selection.location}'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Phone Number',
        name: 'phone-number',
        bind: '{mygrid.selection.phone}'
    }]
})
Ext.application({
    name: 'Fiddle',

    launch: function () {
        Ext.create('Ext.container.Container', {
            renderTo: document.body,
            viewModel: {
                type: 'myvm'
            },
            items: [{
                xtype: 'mygrid'
            }, {
                xtype: 'myform'
            }]
        })
    }
});
