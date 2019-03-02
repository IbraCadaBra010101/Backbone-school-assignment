/**
 * För att gömma information som inte är aktuell för tillfället, kan man använda flikar.
 * Oftast består en flik-komponent av en "header" med klickbara element, som väljer vad som ska visas i "body".
 * Innehåll som hör till en flik som inte är markerad ska inte visas.

 Det ska finnas en modell som håller reda på vilken flik som är vald. Börja med att skapa metoder (funktioner)
 i modellen för att byta vilken flik som är vald. Hela flik-komponenten ska ha en vy. Varje flik ska dessutom ha en motsvarande vy.
 När man klickar för att välja en annan flik, ska modellen uppdateras och rätt vy renderas.
 Varje flik ska ha något unikt innehåll.

 För VG ska det finnas knappar inuti varje flik, som man kan klicka på för att gå till föregående eller nästa flik.
 (Om man klickar på nästa från sista fliken så ska man komma tillbaka till första.)
 **/

$(document).ready(function () {
    let footerText;
    let mainTextGoesHere;
    let mainTextGoesHere2;
    //<div id="text-display-id"></div>
    const Tabs = Backbone.Model.extend({
        defaults: {
            tab1: '',
            tab2: '',
            tab3: '',
            tab4: '',
        },
        tab1Show: function () {
            let tab_1 = this.get('tab1');
            tab_1.set({'tab1': mainTextGoesHere});
        }
    });

    let tabModelInstance = new Tabs();

    let View = Backbone.View.extend({
        initialize: function () {
            this.model.on('change', this.render(), this)
        },
        events: {'click #sport-id': 'showSport','click #nyheter-id': 'showNyheter','click #noje-id': 'showNoje', 'click #kultur-id':'showKultur'},
        render: function () {

             mainTextGoesHere = ` 
            <div class="buttonContainer"> 
                    <button id="nyheter-id" class="btn btn-primary" >Nyheter</button>
                    <button id="sport-id" class="btn btn-primary">Sport</button>
                    <button id="noje-id" class="btn btn-primary">Nöje</button>
                    <button id="kultur-id" class="btn btn-primary">Kultur</button>
                    <br> <br> 
                    <div id="nyheter"><div class="jumbotron">
                                  <h1 class="display-3">Toilet paper destroying Canadian forests</h1>
                                  <p class="lead">The boreal forest covers almost 60% of Canada and is home to 600 indigenous communities. Its huge size means it
                  can absorb large amounts of carbon dioxide from the atmosphere, the equivalent to the annual emissions of 24m cars each year.</p>
                                  <hr class="my-4">
                              
                                  <p class="lead">
                                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                                  </p>
                                </div></div>
                   
            </div>`;

            this.$el.html(mainTextGoesHere)
        },
        showSport:function () {

               let text = document.getElementById('nyheter');
               text.innerHTML = '<div class="jumbotron">\n' +
                   '  <h1 class="display-3">I\'m in Man Utd ad for next season</h1>\n' +
                   '  <p class="lead">Ole Gunnar Solskjaer has joked it will be "strange" if he does not get the Man Utd job after being involved in a promotional video for next season. </p>\n' +
                   '  <hr class="my-4">\n' +
                   '  <p class="lead">\n' +
                   '    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>\n' +
                   '  </p>\n' +
                   '</div>';
               mainTextGoesHere += this.$el.append(text);
        },
        showNyheter:function () {

              let text = document.getElementById('nyheter');
              text.innerHTML = '<div class="jumbotron">\n' +
                  '  <h1 class="display-3">Toilet paper destroying Canadian forests</h1>\n' +
                  '  <p class="lead">The boreal forest covers almost 60% of Canada and is home to 600 indigenous communities. Its huge size means it ' +
                  'can absorb large amounts of carbon dioxide from the atmosphere, the equivalent to the annual emissions of 24m cars each year.</p>\n' +
                  '  <hr class="my-4">\n' +
                  '  <p class="lead">\n' +
                  '    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>\n' +
                  '  </p>\n' +
                  '</div>';
              mainTextGoesHere += this.$el.append(text);
        },
        showNoje:function () {

            let text = document.getElementById('nyheter');
            text.innerHTML = '<div class="jumbotron">\n' +
                '  <h1 class="display-3">Spring is coming, and the evil squirrel is back</h1>\n' +
                '  <p class="lead">I’m sitting alone in the kitchen, drinking coffee and listening to a soft, rhythmic scraping sound that I assume is coming from somewhere outside – a door being planed two gardens over, maybe – because I know I’m alone in the house. </p>\n' +
                '  <hr class="my-4">\n' +
                '  <p class="lead">\n' +
                '    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>\n' +
                '  </p>\n' +
                '</div>';
            mainTextGoesHere += this.$el.append(text);},
        showKultur:function () {

            let text = document.getElementById('nyheter');
            text.innerHTML = '<div class="jumbotron">\n' +
                '  <h1 class="display-3">Baby Face Film review </h1>\n' +
                '  <p class="lead">In contemporary society and pop culture, there is a weird double standard around feminine youth and innocence. On the one hand, paedophilia is rightly reviled, and the sexuality of teenage girls is policed by schools and parents.  </p>\n' +
                '  <hr class="my-4">\n' +
                '  <p class="lead">\n' +
                '    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>\n' +
                '  </p>\n' +
                '</div>';
            mainTextGoesHere += this.$el.append(text);}
    });

    const view = new View({model:tabModelInstance});
    view.render();
    $('#text-display-id').html(view.el)
    //
//     const view1 = new ValidationView({model:validationModelInstance});
//     view1.render();
//     $('#output-div-id').html(view1.el);

});
// render: function () {
// /             let formHtml = `<form id="validation-form-id">
//                                  <div class="form-group">
//                                      <label for="input-password-id">Password</label>
//                                      <input type="password" class="form-control" id="input-password-id" placeholder="Password">
//                                 </div>
//                                      <button id="submit-btn-id" type="submit" class="btn btn-primary">Submit</button>
//                               </form>`;
//              //    formHtml += ` <div id="resolve-reject-id"></div>`;
//              this.$el.html(formHtml);
//
//        },
// <button id="nyheter-id">Nyheter</button>
//     <button id="sport-id">Sport</button>
//     <button id="noje-id">Nöje</button>
//     <button id="kultur-id">Kultur</button>
//     const view1 = new ValidationView({model:validationModelInstance});
//     view1.render();
//     $('#output-div-id').html(view1.el);
// });
//     const view1 = new ValidationView({model:validationModelInstance});
//     view1.render();
//     $('#output-div-id').html(view1.el);
// });
//     let validationModelInstance = new Validation({});
//
//     let ValidationView = Backbone.View.extend({
//         initialize: function () {this.model.on('change', this.render(), this)},
//         events: {'click #submit-btn-id': 'validation'},
//         render: function () {
//             let formHtml = `<form id="validation-form-id">
//                                 <div class="form-group">
//                                     <label for="input-password-id">Password</label>
//                                     <input type="password" class="form-control" id="input-password-id" placeholder="Password">
//                                 </div>
//                                     <button id="submit-btn-id" type="submit" class="btn btn-primary">Submit</button>
//                              </form>`;
//             //    formHtml += ` <div id="resolve-reject-id"></div>`;
//             this.$el.html(formHtml);
//
//         },
//         validation: function () {
//             console.log('test');
//
//             $('#validation-form-id').submit(function () {
//                 let result = document.getElementById('res');
//                 let $inputs = $('#validation-form-id :input');
//                 validationModelInstance.set({userInput: $inputs.val()});
//                 let usr = validationModelInstance.get('userInput');
//
//                 let truePassword = validationModelInstance.get('correctpassword');
//                 if (truePassword === usr) {
//                     result.innerText = 'Success!';
//                     result.style.color = 'green';
//                 } else{
//                     result.innerText ='Failure';
//                     result.style.color ='red';
//                 }
//             })
//         }
//     });
//
//
//     const view1 = new ValidationView({model:validationModelInstance});
//     view1.render();
//     $('#output-div-id').html(view1.el);
// });
// $(document).ready(function () {
//
//     const Validation = Backbone.Model.extend({
//         defaults: {userInput: '', correctpassword: 'abcd'}
//     });








