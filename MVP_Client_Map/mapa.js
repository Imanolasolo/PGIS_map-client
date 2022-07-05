// PGIS Project IT4PROS

// Create map with coordinates and zoom
let map = L.map('map').setView([4.639386,-74.082412],10)

// Create Tilelayer from openstreetmap.org
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: 'IT4PROS 2022 &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Icon for marker
const BaseIcon = L.Icon.extend({
    options: {
    iconSize: [30, 30],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
    }
  });

const RedIcon = new BaseIcon({iconUrl: 'hospital (1).png'})

// Markers from position
const CLINICA_VASCULAR_NAVARRA = L.marker([4.69387, -74.05550],{icon: RedIcon}).bindPopup("<p>CLÍNICA VASCULAR NAVARRA LTDA<br />Autopista Norte No. 106 -31<br />6016026847 6016059999 Ext. 302<br />Abierto las 24 horas</p>").addTo(map);
const IMAGENES_DIAGNOSTICAS_DEL_COUNTRY = L.marker([4.66861, -74.05756],{icon: RedIcon}).bindPopup("<p>IMÁGENES DIAGNÓSTICAS DEL COUNTRY<br />Carrera 16A No 82 38<br />6016449201 Ext. 205<br />Lun - Vie 7:00  - 19:00 Sab 8:00 - 13:00 Dom Cerrado</p>").addTo(map);
const FUNDACION_HOSPITAL_SAN_CARLOS = L.marker([4.57102, -74.1072],{icon: RedIcon}).bindPopup("<p>FUNDACIÓN HOSPITAL SAN CARLOS<br />Carrera 12 D No. 32 44<br /> 6017443333<br />Abierto las 24 horas</p>").addTo(map);
const HOSPITAL_PABLO_TOBON_URIBE = L.marker([6.27723, -75.57980],{icon: RedIcon}).bindPopup("<p>HOSPITAL PABLO TOBÓN URIBE<br />Calle 78 B No. 69 240<br />6044459000<br />Abierto las 24 horas</p>").addTo(map);
const IPS_UNIVERSITARIA_CLINICA_LEON_XIII = L.marker([6.26675, -75.56442],{icon: RedIcon}).bindPopup("<p>IPS UNIVERSITARIA CLÍNICA LEÓN XIII (Bloque 2)>br />Calle 69 No. 51C 24<br />6044477085 Opc. 1 Ext. 32395 32321 32563<br />Abierto las 24 horas</p>").addTo(map);
const ESE_HOSPITAL_LA_MERCED = L.marker([5.84615, -76.00930],{icon: RedIcon}).bindPopup("<p>E.S.E. HOSPITAL LA MERCED<br />Calle 49 No. 36 298<br />6048411182<br />Abierto las 24 horas</p>").addTo(map);
const ESE_HOSPITAL_SANTA_MARGARITA = L.marker([6.34533, -75.51664],{icon: RedIcon}).bindPopup("<i>E.S.E. HOSPITAL SANTA MARGARITA<br />Carrera 64 No.48 80<br />6044000770<br />Abierto las 24 horas</i>").addTo(map);
const KAMEX_FISIOTERAPIA = L.marker([3.42708, -76.53271],{icon: RedIcon}).bindPopup("<p>KAMEX FISIOTERAPIA<br />Carrera 32 No.10 35>br />6024456969<br />Lun - Vie 7:00  - 19:00 Sab 8:00 - 13:00 Dom Cerrado</i>").addTo(map);
const CLINICA_DE_OCCIDENTE = L.marker([3.46059, -76.53013],{icon: RedIcon}).bindPopup("<p>CLÍNICA DE OCCIDENTE<br />Calle 18 Norte No. 5 34<br />6025248505<br />Abierto las 24 horas</p>").addTo(map);
const HOSPITAL_ISAIAS_DUARTE_CANCINO_ESE = L.marker([3.41163, -76.48473],{icon: RedIcon}).bindPopup("<p>HOSPITAL ISAIAS DUARTE CANCINO E.S.E<br />Calle 96 28 E3 02<br />6024140707 Ext. 133<br />Lun - Vie 7:00  - 17:30 Sab - Dom Abierto las 24 horas</p>").addTo(map);
const REHABILITACION_FISICA_INTEGRAL_IPS_EU = L.marker([3.53398, -76.29692],{icon: RedIcon}).bindPopup("<p>REHABILITACION FISICA INTEGRAL IPS EU<br />Carrera 27 No. 37 34<br />6022740470<br />Lun - Vie 7:00  - 19:00 Sab 8:00 - 13:00 Dom Cerrado</p>").addTo(map);
const CLINICA_PORTOAZUL_SA_SIGLA_CPA = L.marker([11.01668, -74.84599],{icon: RedIcon}).bindPopup("<p>CLÍNICA PORTOAZUL S.A SIGLA CPA<br />Carrera 30 Corredor Universitario No. 1  851<br />6053597533 6053672600<br />Abierto las 24 horas</p>",).addTo(map);
const IPS_UNIDAD_MEDICA_ETICA_EU = L.marker([10.98973, -74.95579],{icon: RedIcon}).bindPopup("<p>IPS UNIDAD MEDICA ETICA E.U<br />Calle 5 No. 8 39<br />6053096329<br />Abierto las 24 horas</p>").addTo(map);
const CLINICA_GIRON_ESE = L.marker([7.06974, -73.16930],{icon: RedIcon}).bindPopup("<p>CLÍNICA GIRÓN E.S.E<br />Calle 33 No. 25 36<br />6076531312<br />Lun - Vie 7:00  - 19:00 Sab - Dom Cerrado</p>").addTo(map);
const CENTRO_DE_ATENCION_Y_DIAGNOSTICO_DE_ENFERMEDADES_INFECCIOSAS_CDI_SA = L.marker([7.11386, -73.10769],{icon: RedIcon}).bindPopup("<p>CENTRO DE ATENCIÓN Y DIAGNÓSTICO DE ENFERMEDADES INFECCIOSAS CDI S.A.<br />Carrera 37 No. 51 126<br />6076431666 Ext. 101<br />Lun - Vie 7:00  - 19:00 Sab 8:00 - 13:00 Dom Cerrado</p>").addTo(map);


// Service list interactions
document.getElementById('consulta_externa').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,18);
})

document.getElementById('hospitalizacion').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,18);
})

document.getElementById('laboratorio').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,18);
})

document.getElementById('cirugia').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,18);
})

document.getElementById('consulta_externa_especializada').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,18);
})

document.getElementById('urgencias').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,18);
})

document.getElementById('vuelta_casa').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,18);
})





// Add minimap from Carto
var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});

// Add minimap plugin
var minimap = new L.Control.MiniMap(carto_light,
    {
        toggleDisplay: true,
        minimized: false,
        position: "bottomleft"
    }).addTo(map);

// Add scale
 new L.control.scale({imperial: false}).addTo(map);

//-------------------------------------------------------
