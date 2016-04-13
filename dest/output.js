"use strict";

(function (app) {
    app.AppComponent = ng.core.Component({
        selector: 'my-app',
        templateUrl: "app/hero-component.html"
    }).Class({
        constructor: function constructor() {
            this.title = "Tour of Heroes";
            this.powers = ["smart", "flexible", "super hot", "weather changer"];
            this.hero = { name: "windstorm",
                color: 'red',
                power: this.powers[0]
            };
        },
        onColorGreenChange: function onColorGreenChange() {
            this.hero.color = "green";
        },
        colorChange: function colorChange() {
            this.hero.color = "white";
        }

    });
})(window.app || (window.app = {}));
/**
 * Created by Serhii on 06.04.2016.
 */
(function (app) {
    document.addEventListener('DOMContentLoaded', function () {
        ng.platform.browser.bootstrap(app.AppComponent);
    });
})(window.app || (window.app = {}));
