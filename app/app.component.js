(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            templateUrl: 'app/hero-component.html'
        })
            .Class({
                constructor: function() {
                    this.title = 'Tour of Heroes';
                    this.powers = [
                        'smart',
                        'flexible',
                        'super hot',
                        'weather changer'

                    ];
                    this.hero = {name: 'windstorm',
                        color:'red',
                        power: this.powers[0]
                    };
                },
                onColorGreenChange: function(){
                    this.hero.color = 'green';
                },
                colorChange: function(){
                    this.hero.color = 'white';
                }

            });
})(window.app || (window.app = {}));
