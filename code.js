var materias = [
    { "id": 1, "nombreCorto": "AMI", "nombre": "Análisis Matemático 1", "integradora": false, "cargaHoraria": 5, "nivel": 1, "area": "Ciencias Básicas", "correlativas": [] },
    { "id": 2, "nombreCorto": "AGA", "nombre": "Álgebra y Geometría Analítica", "integradora": false, "cargaHoraria": 5, "nivel": 1, "area": "Ciencias Básicas", "correlativas": [] },
    { "id": 3, "nombreCorto": "MAD", "nombre": "Matemática Discreta", "integradora": false, "cargaHoraria": 3, "nivel": 1, "area": "Modelos", "correlativas": [] },
    { "id": 4, "nombreCorto": "SOR", "nombre": "Sistemas y Organizaciones", "integradora": true, "cargaHoraria": 3, "nivel": 1, "area": "Sistemas de Información", "correlativas": [] },
    { "id": 5, "nombreCorto": "AED", "nombre": "Algoritmos y Estructuras de Datos", "integradora": false, "cargaHoraria": 5, "nivel": 1, "area": "Programación", "correlativas": [] },
    { "id": 6, "nombreCorto": "ACO", "nombre": "Arquitectura de Computadoras", "integradora": false, "cargaHoraria": 4, "nivel": 1, "area": "Computación", "correlativas": [] },
    { "id": 7, "nombreCorto": "ISO", "nombre": "Ingeniería y Sociedad", "integradora": false, "cargaHoraria": 2, "nivel": 1, "area": "Ciencias Básicas", "correlativas": [] },
    { "id": 8, "nombreCorto": "FIS", "nombre": "Física 1", "integradora": false, "cargaHoraria": 5, "nivel": 1, "area": "Ciencias Básicas", "correlativas": [] },
    { "id": 9, "nombreCorto": "IG1", "nombre": "Inglés 1", "integradora": false, "cargaHoraria": 2, "nivel": 1, "area": "Ciencias Básicas", "correlativas": [] },
    { "id": 10, "nombreCorto": "QUI", "nombre": "Química", "integradora": false, "cargaHoraria": 3, "nivel": 2, "area": "Ciencias Básicas", "correlativas": [] },
    { "id": 11, "nombreCorto": "AMII", "nombre": "Análisis Matemático 2", "integradora": false, "cargaHoraria": 5, "nivel": 2, "area": "Ciencias Básicas", "correlativas": [1, 2] },
    { "id": 12, "nombreCorto": "FII", "nombre": "Física 2", "integradora": false, "cargaHoraria": 5, "nivel": 2, "area": "Ciencias Básicas", "correlativas": [1, 8] },
    { "id": 13, "nombreCorto": "ASI", "nombre": "Análisis de Sistemas", "integradora": true, "cargaHoraria": 6, "nivel": 2, "area": "Sistemas de Información", "correlativas": [4, 5] },
    { "id": 14, "nombreCorto": "SSL", "nombre": "Sintaxis y Semántica de los Lenguajes", "integradora": false, "cargaHoraria": 4, "nivel": 2, "area": "Modelos", "correlativas": [3, 5] },
    { "id": 15, "nombreCorto": "PPR", "nombre": "Paradigmas de Programación", "integradora": false, "cargaHoraria": 4, "nivel": 2, "area": "Programación", "correlativas": [3, 5] },
    { "id": 16, "nombreCorto": "SOP", "nombre": "Sistemas Operativos", "integradora": false, "cargaHoraria": 4, "nivel": 2, "area": "Computación", "correlativas": [3, 5, 6] },
    { "id": 17, "nombreCorto": "PYE", "nombre": "Probabilidad y Estadística", "integradora": false, "cargaHoraria": 3, "nivel": 2, "area": "Modelos", "correlativas": [1, 2] },
    { "id": 18, "nombreCorto": "DSI", "nombre": "Diseño de Sistemas", "integradora": true, "cargaHoraria": 6, "nivel": 3, "area": "Sistemas de Información", "correlativas": [13, 15] },
    { "id": 19, "nombreCorto": "COM", "nombre": "Comunicaciones", "integradora": false, "cargaHoraria": 4, "nivel": 3, "area": "Computación", "correlativas": [6, 11, 12] },
    { "id": 20, "nombreCorto": "MAS", "nombre": "Matemática Superior", "integradora": false, "cargaHoraria": 4, "nivel": 3, "area": "Modelos", "correlativas": [11] },
    { "id": 21, "nombreCorto": "GDA", "nombre": "Gestión de Datos", "integradora": false, "cargaHoraria": 4, "nivel": 3, "area": "Programación", "correlativas": [13, 14, 15] },
    { "id": 22, "nombreCorto": "ECO", "nombre": "Economía", "integradora": false, "cargaHoraria": 3, "nivel": 3, "area": "Ciencias Básicas", "correlativas": [13] },
    { "id": 23, "nombreCorto": "IG2", "nombre": "Inglés 2", "integradora": false, "cargaHoraria": 2, "nivel": 3, "area": "Ciencias Básicas", "correlativas": [9] },
    { "id": 24, "nombreCorto": "SDR", "nombre": "Sistemas de Representación", "integradora": false, "cargaHoraria": 3, "nivel": 3, "area": "Ciencias Básicas", "correlativas": [] },
    { "id": 25, "nombreCorto": "RIN", "nombre": "Redes de Información", "integradora": false, "cargaHoraria": 4, "nivel": 4, "area": "Computación", "correlativas": [16, 19] },
    { "id": 26, "nombreCorto": "ARE", "nombre": "Administración de Recursos", "integradora": true, "cargaHoraria": 6, "nivel": 4, "area": "Sistemas de Información", "correlativas": [16, 18, 22] },
    { "id": 27, "nombreCorto": "IOP", "nombre": "Investigación Operativa", "integradora": false, "cargaHoraria": 5, "nivel": 4, "area": "Modelos", "correlativas": [17, 20] },
    { "id": 28, "nombreCorto": "SIM", "nombre": "Simulación", "integradora": false, "cargaHoraria": 4, "nivel": 4, "area": "Modelos", "correlativas": [17, 20] },
    { "id": 29, "nombreCorto": "ISW", "nombre": "Ingeniería del Software", "integradora": false, "cargaHoraria": 3, "nivel": 4, "area": "Sistemas de Información", "correlativas": [17, 18, 21] },
    { "id": 30, "nombreCorto": "TCL", "nombre": "Teoría de Control", "integradora": false, "cargaHoraria": 3, "nivel": 4, "area": "Modelos", "correlativas": [10, 20] },
    { "id": 31, "nombreCorto": "LEG", "nombre": "Legislación", "integradora": false, "cargaHoraria": 2, "nivel": 4, "area": "Ciencias Básicas", "correlativas": [7, 13] },
    { "id": 32, "nombreCorto": "PRO", "nombre": "Proyecto Final", "integradora": true, "cargaHoraria": 6, "nivel": 5, "area": "Sistemas de Información", "correlativas": [25, 26, 29, 31] },
    { "id": 33, "nombreCorto": "IA", "nombre": "Inteligencia Artificial", "integradora": false, "cargaHoraria": 3, "nivel": 5, "area": "Modelos", "correlativas": [27, 28] },
    { "id": 34, "nombreCorto": "ADM", "nombre": "Administración de Recursos", "integradora": false, "cargaHoraria": 3, "nivel": 5, "area": "Gestión Ingenieril", "correlativas": [26, 27] },
    { "id": 35, "nombreCorto": "SGO", "nombre": "Sistemas de Gestión", "integradora": false, "cargaHoraria": 4, "nivel": 5, "area": "Gestión Ingenieril", "correlativas": [26, 27, 28] },
];
console.log(materias);
var cy = cytoscape({
    container: document.getElementById('cy'),
    style: [
        {
            selector: 'node',
            style: {
                'background-color': 'lightblue',
                'label': 'data(materia.nombreCorto)',
                'text-valign': 'center',
                'text-halign': 'center',
                'text-margin-y': 60,
                'font-size': 30,
                'height': 'mapData(materia.cargaHoraria, 1, 10, 220, 310)',
                'width': 'mapData(materia.cargaHoraria, 1, 10, 220, 310)',
                'background-width': '50%',
                'background-height': '50%',
                'background-offset-y': '-20%',
                'background-image': 'https://image.flaticon.com/icons/png/512/3556/3556210.png'
            }
        },
        {
            selector: 'edge',
            style: {
                'width': 8,
                'line-color': '#ccc',
                'label': 'data(label)',
                'font-size': '50',
                'text-rotation': 'autorotate',
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'triangle',
                'curve-style': 'bezier',
                'color': 'white',
                'text-outline-color': 'black',
                'text-outline-width': 3
            }
        },
        {
            selector: '.tapped',
            style: {
                'border-color': 'green',
                'border-width': '20',
                'border-opacity': '0.8',
                'source-arrow-color': 'black',
                'target-arrow-color': 'black',
                'line-color': 'black'
            }
        },
        {
            selector: '.hidden',
            style: {
                'visibility': 'hidden'
            }
        },
        {
            selector: '.integradora',
            style: {
                'shape': 'hexagon'
            }
        },
        {
            selector: '.sistemasInformacion',
            style: {
                'background-image': 'https://image.flaticon.com/icons/png/512/2274/2274794.png'
            }
        },
        {
            selector: '.computacion',
            style: {
                'background-image': 'https://image.flaticon.com/icons/png/512/3067/3067260.png'
            }
        },
        {
            selector: '.programacion',
            style: {
                'background-image': 'https://image.flaticon.com/icons/png/512/852/852515.png'
            }
        },
        {
            selector: '.modelos',
            style: {
                'background-image': 'https://image.flaticon.com/icons/png/512/1739/1739422.png'
            }
        },
        {
            selector: '.cienciasBasicas',
            style: {
                'background-image': 'https://image.flaticon.com/icons/png/512/917/917316.png'
            }
        },
        {
            selector: '.gestionIngenieril',
            style: {
                'background-image': 'https://image.flaticon.com/icons/png/512/826/826052.png'
            }
        },
        {
            selector: '.habilitada',
            style: {
                'background-color': 'lightgreen',
                'border-color': 'lightblue'
            }
        }
    ],
    layout: {
        name: 'grid',
        rows: 1
    },
    zoom: 0.22,
    zoomingEnabled: true,
    boxSelectionEnabled: false
});
materias.forEach(function (materia) {
    var node = {
        group: 'nodes',
        data: { id: materia.id.toString(), materia: materia },
        position: getPosition(materia)
    };
    node.classes = getAreaFormateada(materia);
    if (materia.correlativas.length !== 0) {
        node.classes = node.classes + ' hidden';
    }
    else {
        node.classes = node.classes + ' habilitada';
    }
    if (materia.integradora) {
        node.classes = node.classes + ' integradora';
    }
    console.log(node);
    cy.add(node);
});
materias.forEach(function (materia) {
    materia["correlativas"].forEach(function (correlativaId) {
        cy.add({ group: 'edges', data: { id: "e" + correlativaId + "-" + materia.id, source: correlativaId, target: materia.id, label: materia.cargaHoraria } });
        var newEdge = cy.edges().$id("e" + correlativaId + "-" + materia.id);
        console.log(newEdge);
        if (newEdge.target().hasClass('hidden'))
            newEdge.addClass('hidden');
    });
});

cy.pan({
    x: 520,
    y: 450
});
cy.on('tap', 'node', function () {
    cargarDatosMateria(this.data('materia'));
    if (this.hasClass('tapped')) {
        unmarkTappedNode(this);
        hideCorrelativas(this);
        return;
    }
    markTappedNode(this);
    showCorrelativas(this);
});
function markTappedNode(node) {
    node.addClass('tapped');
    node.outgoers(function (outgoer) {
        if (outgoer.isEdge()) {
            outgoer.addClass("tapped");
        }
    });
    node.outgoers().filter(function (outgoer) { return outgoer.isNode(); }).forEach(function (outNode) {
        var incomingEdgesCounter = outNode.incomers().filter(function (inc) { return inc.isEdge(); }).length;
        var tappedEdgesCounter = outNode.incomers().filter(function (inc) { return inc.isEdge() && inc.hasClass("tapped"); }).length;
        if (tappedEdgesCounter == incomingEdgesCounter) {
            outNode.addClass("habilitada");
        }
    });
}
function unmarkTappedNode(node) {
    node.removeClass("tapped");
    node.successors(function (outgoer) {
        outgoer.removeClass("tapped");
        outgoer.removeClass("habilitada");
    });
}
function showCorrelativas(node) {
    var edges = node.connectedEdges("[source='" + node.data('id') + "']");
    edges.forEach(function (edge) {
        var target = edge.target();
        target.removeClass('hidden');
        target.predecessors(function (incomer) { return incomer.removeClass('hidden'); });
    });
}
function hideCorrelativas(node) {
    cy.nodes().forEach(function (node) { return hideNode(node); });
}
function hideNode(node) {
    if (node.hasClass("habilitada"))
        return;
    var incomingEdges = node.incomers().filter(function (inc) { return inc.isEdge(); });
    var incomingTappedEdges = incomingEdges.filter(function (inc) { return inc.hasClass('tapped'); });
    var outgoerEdges = node.outgoers().filter(function (out) { return out.isEdge(); });
    var outgoertappedEdges = outgoerEdges.filter(function (out) { return out.hasClass('tapped'); });
    var outgoerShownEdges = outgoerEdges.filter(function (out) { return !out.hasClass('hidden'); });
    if (outgoerShownEdges.length != 0)
        return;
    if (incomingTappedEdges.length == 0 && outgoertappedEdges.length == 0) {
        unmarkTappedNode(node);
        node.addClass('hidden');
        incomingEdges.forEach(function (edge) { return edge.addClass('hidden'); });
    }
}
function getColor(materia) {
    return materia.integradora ? 'green' : 'lightblue';
}
function getAreaFormateada(materia) {
    switch (materia.area) {
        case "Computación":
            return "computacion";
        case "Programación":
            return "programacion";
        case "Sistemas de Información":
            return "sistemasInformacion";
        case "Modelos":
            return "modelos";
        case "Ciencias Básicas":
            return "cienciasBasicas";
        case "Gestión Ingenieril":
            return "gestionIngenieril";
        default:
            return "";
    }
}
function getPosition(materia) {
    var xPos = 100 * (14 - cantidadMateriasNivel(materia.nivel)) - 30 * (20 - cantidadMateriasNivel(materia.nivel)) * (materia.id % cantidadMateriasNivel(materia.nivel));
    var yPos = 800 - 400 * materia.nivel;
    console.log(xPos);
    return {
        x: xPos,
        y: yPos
    };
}
function cantidadMateriasNivel(nivel) {
    var cantidad = 0;
    materias.forEach(function (materia) { return materia.nivel === nivel ? cantidad++ : null; });
    return cantidad;
}
function cargarDatosMateria(materia) {
    document.getElementById("tituloMateria").textContent = getNombreMateria(materia);
    document.getElementById("correlativasMateria").textContent = "Correlativas: " + correlativasToString(materia.correlativas);
    document.getElementById("cargaHoraria").textContent = "Carga Horaria Semanal: " + materia.cargaHoraria;
    document.getElementById("nivel").textContent = "Nivel: " + materia.nivel;
    document.getElementById("area").textContent = "Area de Especialidad: " + materia.area;
}
function getNombreMateria(materia) {
    var nombreMateria = materia.nombre;
    if (materia.integradora) {
        nombreMateria += " (Integradora)";
    }
    return nombreMateria;
}
function correlativasToString(correlativas) {
    var nombreMaterias = "";
    if (correlativas.length == 0)
        return "Sin Correlativas";
    correlativas.forEach(function (correlativaId) {
        nombreMaterias += materias.find(function (materia) { return materia.id == correlativaId; }).nombre + " - ";
    });
    nombreMaterias = nombreMaterias.slice(0, nombreMaterias.length - 3);
    return nombreMaterias;
}
