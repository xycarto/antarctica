## Repository for Antarctica Base Map Website

### Citations and Supporting Information

#### Antarctica Ross Sea Region Geodetic Datum Projection Base Map

Antarctica RSRGD (EPSG:5482).  This model is not intended for navigation and is for visual purposes only.  The Antarctica RSRGD map consists of a combination of derived and imported data. River and lake layers may be accessed via the LINZ Data Service (LDS): https://data.linz.govt.nz/. Coastline,contour, and hillshade layers are derived from the National Science Foundations' Reference Elevation Model of Antarctica (REMA) 8m DEM (see below for citation). Additional elevation and hillshade models include Antarctic 1 km Digital Elevation Model (DEM) from Combined ERS-1 Radar and ICESat Laser Satellite Altimetry, Version 1 (krigged), ETOPO1 (2km / 1 arc-minute), and RAMP2 (200m). 

Users will notice areas of ‘nodata’ throughout the map. These are native to the REMA 8m.  Every effort is made to hide these regions by using an underlying dataset to fill the gap.  Nodata gaps are not filled using any type of calculation; instead they are filled visually by stacking one dataset on top of another .

Derived contours are our best interpretation from calculations performed on the REMA 8m DEM using gdal_contour.  Intervals are at 20m, with thicker lines representing 100m intervals. Please note, contours are cut off at 'noodata' locations matching those 'nodata' locations of the REMA 8m data set. 

The derived coastline is based on work done from the polygonization of the REMA 8m DEM dataset. In this process, we used combinations of gdal_calc, gdal_polygonize, ogr2ogr, st_simplify and st_subdivide to develop a functioning vector dataset. Every effort was made to keep the derived vector coastline in line with the REMA DEM. Due to the complexity of the process and calculations, errors will happen.  Please note, the coastline is cut off at 'noodata' locations matching those 'nodata' locations of the REMA 8m data set. 

The sea mask derived for this map is a subtraction of the derived coastline from a full extent of the region.  This process involves a combination of GRASS GIS v.overlay and st_subdivide.

Please pass along comments for visual corrections to xycarto.com. I cannot improve the map without your feedback.

Acknowledgemets for REMA DEM

- Geospatial support for this work provided by the Polar Geospatial Center under NSF-OPP awards 1043681 and 1559691.

- DEMs provided by the Polar Geospatial Center under NSF-OPP awards 1043681, 1559691, and 1542736.

- DEMs provided by the Byrd Polar and Climate Research Center and the Polar Geospatial Center under NSF-OPP awards 1543501, 1810976, 1542736, 1559691, 1043681, 1541332, 0753663, 1548562, 1238993 and NASA award NNX10AN61G. Computer time provided through a Blue Waters Innovation Initiative. DEMs produced using data from DigitalGlobe, Inc.

Citations

Contains data sourced from the LINZ Data Service licensed for reuse under CC BY 4.0

REMA 8m DEM: (Howat, I. M., Porter, C., Smith, B. E., Noh, M.-J., and Morin, P.: The Reference Elevation Model of Antarctica, The Cryosphere, 13, 665-674, https://doi.org/10.5194/tc-13-665-2019, 2019.)

ETOPO1: Amante, C. and B.W. Eakins, 2009. ETOPO1 1 Arc-Minute Global Relief Model: Procedures, Data Sources and Analysis. NOAA Technical Memorandum NESDIS NGDC-24. National Geophysical Data Center, NOAA. doi:10.7289/V5C8276M [01-05-2019]

RAMP2: Liu, H., K. C. Jezek, B. Li, and Z. Zhao. 2015. Radarsat Antarctic Mapping Project Digital Elevation Model, Version 2. [Indicate subset used]. Boulder, Colorado USA. NASA National Snow and Ice Data Center Distributed Active Archive Center. doi: http://dx.doi.org/10.5067/8JKNEW6BFRVD. [01-05-2019]
