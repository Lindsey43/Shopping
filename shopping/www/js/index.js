var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();


function addListItem() {
    
     var write = $('#newItem').val();
     var list = $('#itemList');
     var item = $('<li><button class="checkbox">&#x2713;</button><span class="list">' + write + '</span><button class="delete">X</button></li>');
     var newItem = $("#newItem");

     if (write.length === 0  || write.length > 33) {
        return false;
    }
    
    list.append(item);
    $(newItem).val('');
}

function deleteItem() {

    $(this).parent().remove();
}

function dimItem() {

    $(this).parent().toggleClass('dim');
}

$(function() {

    var add = $('#addItem');
    var newItem = $('#newItem');
    var list = $('#itemList');
    
    add.on('click', addListItem);
    list.on('click', '.checkbox', dimItem);
    list.on('click', '.delete', deleteItem);
    newItem.on('keypress', function (e) {
        if (e.which == 13) {
            addListItem();
        }
    });
});

