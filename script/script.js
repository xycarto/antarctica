//set projection, resolution, and origi
var crs = new L.Proj.CRS(
    'EPSG:5482',
    '+proj=stere +lat_0=-90 +lat_ts=-90 +lon_0=180 +k=0.994 +x_0=5000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
    {
      origin: [-918457.73, 6918457.73],
      resolutions: [114688, 57344, 26672, 14336, 7168, 3584, 1792, 896, 448, 224, 112, 56, 28, 14]
    }
  );
  
  //set basemap url  
  var antarctica_urlTemplate = 'https://xycarto-base-maps.s3-ap-southeast-2.amazonaws.com/antarctica-rsrgd/tile-cache/20200303/antarctica-rsrgd/{z}/{x}/{y}.png'
  
  //set additonal perimeters
  var settings = {
      tms: true,
      maxZoom: 10,
      continuousWorld: true,
      attribution: '<a href="https://github.com/xycarto/antarctica">See Full Citations Here</a>', //Simple attribution for linz
  };
  
  //set map and projection
  var map = new L.Map('map', {
      crs: crs,
      continuousWorld: true,
      worldCopyJump: false,
          zoomControl: false,
  });
  
  //set 
  var antarctica = new L.TileLayer(antarctica_urlTemplate, settings);
  
  //build map 
  map.addLayer(antarctica);
  
  //set opening vie
  map.setView([-90, 0], 4);