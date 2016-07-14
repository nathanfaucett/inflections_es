var tape = require("tape"),
    inflections = require("@nathanfaucett/inflections");


require("..");


tape("inflections_es", function(assert) {
    var inflector = inflections("es");

    assert.equal(inflector.singularize("libros", "es"), "libro");
    assert.equal(inflector.singularize("radios", "es"), "radio");
    assert.equal(inflector.singularize("señores", "es"), "señor");
    assert.equal(inflector.singularize("leyes", "es"), "ley");

    assert.equal(inflector.pluralize("libro", "es"), "libros");
    assert.equal(inflector.pluralize("radio", "es"), "radios");
    assert.equal(inflector.pluralize("señor", "es"), "señores");
    assert.equal(inflector.pluralize("ley", "es"), "leyes");

    assert.end();
});
