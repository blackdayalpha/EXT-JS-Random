let p = Ext.define('testViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.test',
    data: {
        // name: 'Steve',
        // someWidth: 200
        firstName: '',
        lastName: ''
    },

    formulas: {
        canSubmit: function (get) {
            return get('firstName') && get('lastName');
        }
    }
})

Ext.create('Ext.panel.Panel', {
    title: 'Simple Panel',
    layout: 'form',
    defaultType: 'textfield',
    viewModel: {
        type: 'test'
    },
    // bind: {
    //     html: '<p> Hello {name}</p>',
    //     width: '{someWidth}'
    // },
    items: [{
        fieldLabel: 'First Name',
        bind: '{firstName}'
    }, {
        fieldLabel: 'LAst NAme',
        bind: '{lastName}'
    }, {
        xtype: 'button',
        text: 'Submit',
        handler: function () {
            console.log(p.data);
        },
        bind: {
            hidden: '{!canSubmit}'
        }
    }],
    renderTo: Ext.getBody()

})












