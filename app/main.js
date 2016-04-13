/**
 * Created by Serhii on 06.04.2016.
 */
(function(app) {
    document.addEventListener('DOMContentLoaded', () => {
        ng.platform.browser.bootstrap(app.AppComponent);
    });
})(window.app || (window.app = {}));
