var wms_layers = [];


        var lyr_ImagenSatelital_0 = new ol.layer.Tile({
            'title': 'Imagen Satelital',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Recorridoencuadraciclo_1 = new ol.format.GeoJSON();
var features_Recorridoencuadraciclo_1 = format_Recorridoencuadraciclo_1.readFeatures(json_Recorridoencuadraciclo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recorridoencuadraciclo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recorridoencuadraciclo_1.addFeatures(features_Recorridoencuadraciclo_1);
var lyr_Recorridoencuadraciclo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Recorridoencuadraciclo_1, 
                style: style_Recorridoencuadraciclo_1,
                interactive: true,
                title: '<img src="styles/legend/Recorridoencuadraciclo_1.png" /> Recorrido en cuadraciclo'
            });
var format_Paradas_2 = new ol.format.GeoJSON();
var features_Paradas_2 = format_Paradas_2.readFeatures(json_Paradas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paradas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paradas_2.addFeatures(features_Paradas_2);
var lyr_Paradas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Paradas_2, 
                style: style_Paradas_2,
                interactive: true,
                title: '<img src="styles/legend/Paradas_2.png" /> Paradas'
            });

lyr_ImagenSatelital_0.setVisible(true);lyr_Recorridoencuadraciclo_1.setVisible(true);lyr_Paradas_2.setVisible(true);
var layersList = [lyr_ImagenSatelital_0,lyr_Recorridoencuadraciclo_1,lyr_Paradas_2];
lyr_Recorridoencuadraciclo_1.set('fieldAliases', {'id': 'id', });
lyr_Paradas_2.set('fieldAliases', {'id': 'id', 'Tipo': 'Tipo', });
lyr_Recorridoencuadraciclo_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Paradas_2.set('fieldImages', {'id': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Recorridoencuadraciclo_1.set('fieldLabels', {'id': 'no label', });
lyr_Paradas_2.set('fieldLabels', {'id': 'no label', 'Tipo': 'no label', });
lyr_Paradas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});