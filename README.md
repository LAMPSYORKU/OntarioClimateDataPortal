# Ontario Climate Data Portal (OCDP)
![ocdp](https://github.com/ziwangdeng/ocdp.yorku.ca/blob/master/ocdpData/pics/ocdp.PNG)
---
## What is this data portal?

A collection of frequently used data sets from yorku.ca/ocdp and many simple python codes for reading, plotting and exporting the data.

### Data for Maps section
* Basic Variables (temperature, minimum temperature, maximum temperature and precipitation)
  --[Convert data to standard csv files](https://github.com/LAMPSYORKU/OntarioClimateDataPortal/blob/master/pythonCode/Convert_data_of_Maps_BasicVariables_section_to_csvfiles.ipynb)
  --[Read and map the changes of the basic variables for 2050s and 2080s relative to reference period (1986-2005)](https://github.com/LAMPSYORKU/OntarioClimateDataPortal/blob/master/pythonCode/Extract-data_map_basicVariables.ipynb)
  
* Climate extremes indices (38 widely used indices)
### Data for Time series section

### Data for data download section

## Why shoud we make it?

As there are a lot of data sets provided by OCDP in different formats, some beginer don't know how to use this data sets in their researches. To facilitate the use of the data, we copied some frequently used data sets to this site and provided simply python programs to process these data sets.  

## Who made it?

The yorku.ca/ocdp developer team. (contact us:lamps@yorku.ca) 

## When we made it?

It was developed in October 2019 and we are continue to improve it according to feedback from our users.

## Where should  I put it?

It is an open source. Any one can fork it or clone it to his/her local machine and revise the code according to specific requirements. 

## How should I use it?

### Install Python 3.6+ and dependent packages
   Install [Anaconda](https://www.anaconda.com/distribution/). After this installation, updated python and most popular python packages are installed (e.g., *jupyter notebook, numpy, pandas, matplotlib, scipy, requests*).
   ```bash 
   conda install geopandas
   conda install h5py
   ```

### Clone and unzip to your local machine
```
cd (your path)/ocdpData/pythonCode
jupyter notebook
```

### Revise and run the code. 

