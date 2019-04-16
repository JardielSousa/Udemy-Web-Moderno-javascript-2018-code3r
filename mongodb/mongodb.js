db.estados.find();
db.estados.findOne();
db.estados.aggregate([
    { $project: {nome: 1, "cidades.nome": 1, _id: 0}}
]);
    