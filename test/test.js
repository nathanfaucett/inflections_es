var assert = require("assert"),
    inflections = require("inflections");


require("../src/index");


describe("inflections_es", function() {
    it("should pluralize/singularize words", function() {
        var inflector = inflections("es");


        assert.equal(inflector.singularize("libros", "es"), "libro");
        assert.equal(inflector.singularize("radios", "es"), "radio");
        assert.equal(inflector.singularize("señores", "es"), "señor");
        assert.equal(inflector.singularize("leyes", "es"), "ley");

        assert.equal(inflector.pluralize("libro", "es"), "libros");
        assert.equal(inflector.pluralize("radio", "es"), "radios");
        assert.equal(inflector.pluralize("señor", "es"), "señores");
        assert.equal(inflector.pluralize("ley", "es"), "leyes");
    });
});
