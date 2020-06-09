# NHL Goals Web Map

![screenshot](img/web_screenshot.png)

The project can be accessed at https://gordydelap.github.io/nhl-goals-mapped/

## Description
An interactive heatmap of every goal scored during the 2018-2019 NHL season. Goals are mapped relative to [Null Island](https://en.wikipedia.org/wiki/Null_Island) using leaflet, and visualized using leaflet-heat.

## Project Goal
To explore the potential of using GIS as a tool for [Hockey Analytics](https://en.wikipedia.org/wiki/Analytics_(ice_hockey)#:~:text=In%20ice%20hockey%2C%20analytics%20is,the%20effects%20of%20their%20performance.&text=In%20modern%20usage%2C%20analytics%20have,hockey%20bloggers%20and%20amateur%20statisticians.) by creating an interactive web map.

## Data Sources
| Name                         | Type         | Description                                                                                                                                                                                                                         |
|------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `NHLGoals2018Season.geojson` | Point Vector | Contains point locations of all NHL goals from the 2018-2019 NHL Season. Retrieved from an ArcGIS feature layer created from the NHL API by [gisdummy](https://www.arcgis.com/home/item.html?id=7c382cb39e424a8ca9b4e3d717ad17f7).  |
| `nhl_rink.png`               | Raster Image | image of a standard size NHL rink from [WAR on Ice](http://blog.war-on-ice.com/make-your-own-nhl-rink-plot-in-r/index.html). Georeferenced using the QGIS georeferencer. Map tiles generated using the QTiles plugin.               |

## Applied Libraries
* [Leaflet.js](https://leafletjs.com/): "An open-source JavaScript library for mobile-friendly interactive maps"
* [Leaflet.heat](https://github.com/Leaflet/Leaflet.heat): "A tiny, simple and fast [Leaflet](http://leafletjs.com) heatmap plugin. Uses [simpleheat](https://github.com/mourner/simpleheat) under the hood, additionally clustering points into a grid for performance."

## Web Service
The website is hosted on [GitHub Pages](https://pages.github.com/).

## Future Work
* Filter goals by player, team, position, and shot type.
* Include additional stats such as shooting percentage and goals against average.
* Improve the user interface.

## Acknowledgement
Inspired by [gisdummy's 2016 ArcGIS Online map](https://arcg.is/1jXaTX).
