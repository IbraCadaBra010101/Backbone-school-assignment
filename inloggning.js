$(document).ready(function () {
    let formHtml= '';
    const Validation = Backbone.Model.extend({
        defaults: {userInput: '', correctPassword: 'abcd'}
    });

    let validationModelInstance = new Validation({});
    let ValidationView = Backbone.View.extend({
        initialize: function () {this.model.on('change', this.render(), this)},
        events: {'click #submit-btn-id': 'logging'},
        render: function () {
        formHtml = `<button id="submit-btn-id" type="submit" class="btn btn-primary .btn-login">Log in</button>`;
        this.$el.html(formHtml);},
        logging: function(){ $("#submit-btn-id").text(function(i, text){
        return text === "Log in" ? "Log out" : "Log in";})}});

        const view1 = new ValidationView({model:validationModelInstance});
        view1.render();
        $('#output-div-id').html(view1.el);
});

            //<button id="nyheter-id">Nyheter</button>
            //<button id="sport-id">Sport</button>
            //<button id="noje-id">Nöje</button>
            //<button id="kultur-id">Kultur</button>





