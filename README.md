# Ontario Climate Data Portal (OCDP)
![ocdp](https://github.com/ziwangdeng/ocdp.yorku.ca/blob/master/ocdpData/pics/ocdp.PNG)
---
## What is this data portal?

A collection of frequently used data sets from yorku.ca/ocdp and many simple python codes for reading, plotting and exporting the data.

### Data for Maps section
* Basic Variables (temperature, minimum temperature, maximum temperature and precipitation)
  * [Convert data to standard csv files](https://github.com/LAMPSYORKU/OntarioClimateDataPortal/blob/master/pythonCode/Convert_data_of_Maps_BasicVariables_section_to_csvfiles.ipynb)
  * [Read and map the changes of the basic variables for 2050s and 2080s relative to reference period (1986-2005)](https://github.com/LAMPSYORKU/OntarioClimateDataPortal/blob/master/pythonCode/Extract-data_map_basicVariables.ipynb)
  
* Climate extremes indices (38 widely used indices)
  * [Convert indices data to standard csv files](https://github.com/LAMPSYORKU/OntarioClimateDataPortal/blob/master/pythonCode/Convert_data_of_Maps_Indices_section_to_csvfiles.ipynb)
  * [Read and map the changes of the indices for 2050s and 2080s relative to the reference period](https://github.com/LAMPSYORKU/OntarioClimateDataPortal/blob/master/pythonCode/Extract-data_map_indices.ipynb)
### Data for Time series section
* [Read and plot annual variation of provincial averages and decadal variations for 50 regions and 150 cities](https://github.com/LAMPSYORKU/OntarioClimateDataPortal/blob/master/pythonCode/Extract-data_timeseries.ipynb)

### Data for data download section
* Ensemble mean
  * [Provincial averages](https://github.com/LAMPSYORKU/OntarioClimateDataPortal/blob/master/pythonCode/Extract-data_data_Future_EnsembleMean_Province.ipynb)
  * [Regional averages](https://github.com/LAMPSYORKU/OntarioClimateDataPortal/blob/master/pythonCode/Extract-data_data_Future_EnsembleMean_Regions.ipynb)
  * [Municipalities](https://github.com/LAMPSYORKU/OntarioClimateDataPortal/blob/master/pythonCode/Extract-data_data_Future_EnsembleMean_Municipalities.ipynb)
  * [Grids](https://github.com/LAMPSYORKU/OntarioClimateDataPortal/blob/master/pythonCode/Extract-data_data_Future_EnsembleMean_Grids.ipynb)
  
* Individual models
  * [Municipalites](https://github.com/LAMPSYORKU/OntarioClimateDataPortal/blob/master/pythonCode/Extract-data_data_Future_Municipality_directlyfrom_OCDP.ipynb)
  * [Grids](https://github.com/LAMPSYORKU/OntarioClimateDataPortal/blob/master/pythonCode/Extract-Data_Database_Future_Grids_Daily_singlemodel.ipynb)

## Why shoud we make it?

As there are a lot of data sets provided by OCDP in different formats, some beginners don't know how to use these data sets in their researches. To facilitate the use of the data, we copied some frequently used data sets to this site and provided simply python programs to process these data sets.  

## Who made it?

The yorku.ca/ocdp developer team. (contact us:lamps@yorku.ca) 

## When we made it?

We began develop this site in October 2019 and we are continue to improve it according to feedback from our users.

## Where should  I put it?

Anything in this site is open source. Any one can fork it or clone it to his/her local machine and revise the code according to specific requirements. 

## How should I use it?

### Install Python 3.6+ and dependent packages
   Install [Anaconda](https://www.anaconda.com/distribution/). After this installation, updated python and most popular python packages are installed (e.g., *jupyter notebook, numpy, pandas, matplotlib, scipy, requests*).
   ```bash 
   conda install geopandas
   conda install h5py
   ```
   Warning: The package geopandas depends on many geographic packages, which are not easy to install with pip. Therefore, we strongly recommend users use conda to install geopandas (for generate maps).     

### Clone and unzip to your local machine
```
cd (your path)/ocdpData/pythonCode
jupyter notebook
```

### Revise (e.g., variable name, location, model name, RCP, or other settings) and run the code. 
### If users do not want to use jupyter notebook, they can copy codes to python files and run python programs in general python environment. 

## License
[MIT](https://choosealicense.com/licenses/mit/)
