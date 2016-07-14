var inflector = require("@nathanfaucett/inflections")("es");


inflector.clear();

inflector.plural(/$/, "s");
inflector.plural(/([^aeéiou])$/i, "$1es");
inflector.plural(/([aeiou]s)$/i, "$1");
inflector.plural(/z$/i, "ces");
inflector.plural(/á([sn])$/i, "a$1es");
inflector.plural(/é([sn])$/i, "e$1es");
inflector.plural(/í([sn])$/i, "i$1es");
inflector.plural(/ó([sn])$/i, "o$1es");
inflector.plural(/ú([sn])$/i, "u$1es");

inflector.singular(/s$/, "");
inflector.singular(/es$/, "");

inflector.irregular("el", "los");
