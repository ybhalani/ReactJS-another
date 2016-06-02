/** @jsx React.DOM  */

    var React = require('react');
var subMessage = require()
    var MessageBox = React.createClass({
    deleteMessage: function(message){
        var newMessages = _.without(this.state.messages, message);
        this.setState({
            messages: newMessages
        });
    },

    handleAdd: function(e){
        var newMessage = this.refs.newMessage.getDOMNode().value;
        var newMessages = this.state.Messages.concat([newMessage]);
        this.setState({
            messages: newMessages
        });
    },

    getInitialState: function(){
        return{
            isInvisible: true,
            messages:[
                ' I like the world',
                'I love iceream'
            ]

        }
    },

    render: function(){

        var inlineStyles = {
            display: this.state.isVisible ? 'block': 'none'

    };

        var messages = this.state.messages.map(function(message) {

            return
            <
            subMessage
            message = {message}
            onDelete = {this.deleteMessage
        } / >;
    }.bind(this));
return(
        <h2> Hello, world </h2>
        <input ref = "newMessage" type="text" />
        <button className = "btn btn-primary" onClick ={this.handleAdd}>Add</button>
        {messages}
       </div>
        );
    }
});


module.exports =MessageBox;