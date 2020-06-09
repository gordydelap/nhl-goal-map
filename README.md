# NHL Goals Visualization Dashboard

## Description
An interactive heatmap of every goal scored during the 2018-2019 NHL season.

## Project Goal


## Data Sources
| Name                         | Type         | Description                                                                                                                                                                                                                         |
|------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `NHLGoals2018Season.geojson` | Point Vector | contains point locations of all NHL goals from the 2018-2019 NHL Season. Retrieved from an ArcGIS feature layer created from the NHL API by [gisdummy](https://www.arcgis.com/home/item.html?id=7c382cb39e424a8ca9b4e3d717ad17f7).  |
| `nhl_rink.png`               | Raster Image | image of a standard size NHL rink from [WAR on Ice](http://blog.war-on-ice.com/make-your-own-nhl-rink-plot-in-r/index.html). Georeferenced using the QGIS georeferencer. Map tiles generated using the QTiles plugin.               |

## Applied Libraries
* [Leaflet.js](https://leafletjs.com/): "An open-source JavaScript library for mobile-friendly interactive maps"
* [Leaflet.heat](https://github.com/Leaflet/Leaflet.heat): "A tiny, simple and fast [Leaflet](http://leafletjs.com) heatmap plugin. Uses [simpleheat](https://github.com/mourner/simpleheat) under the hood, additionally clustering points into a grid for performance."


## Acknowledgement
