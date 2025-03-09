# dataanalysis-

# README FILE:
# Dataset Analysis

Today, pollution from the transport sector accounts for 60.6% of total pollution in europe. That's why so many people are wondering whether they should buy a car to reduce pollution. In this dataset, we'll look at the different parameters that increase vehicle pollution, and how to choose the least polluting car possible.
## The Data
- **What are the data?**  
  This dataset contains information about Cars, like their CO2 emissions, but also their horsepower, if they are hybrid or not, etc...

- **Where do they come from?**  
  https://www.data.gouv.fr/fr/datasets/emissions-de-co2-et-de-polluants-des-vehicules-commercialises-en-france/

- **Data provenance:**  
  The provenance of the data is https://www.data.gouv.fr/fr/datasets/emissions-de-co2-et-de-polluants-des-vehicules-commercialises-en-france/ wich is the web site of the French government. It provides lots information about France.

- **Census or sample:**  
  it's a sample by Cars.

- **Raw or processed:**  
  processed because we removed lot's of column like lib-mob-doss which was representing the name of the model in the administrative file or the date because all the datas are from march 2014.


- **Describe the units, size of the sample/population:**  
  - **Units:** Each row represents one different Cars.  
  - **Population/Sample size:**  5504 Cars.

- **Number of variables:**  
  11 columns (variables).

## Variables Description


1. **`lib_mrc`**  
   This variable represents the brand name of the Car. It is a categorical variable.

2. **`lib_mod	`**  
   It represents the model name of the Car. It is a categorical variable.

3. **`cnit`** 
    The CNIT, or Code National d'Identification du Type (National Type Identification Code), is a code created by the manufacturer and then approved by the French government to identify the vehicle model defined by its technical characteristics (engine, version, etc.).
    It is shown in box D.2 of the vehicle registration certificate. It is a categorical variable.
4. **`cod_cbr`** 
    This variable reprensents the fuel code, that's the fuel name used to power the car. In the data set, here are some examples 'ES' for petrol or 'GO' for diesel, 'EE' for ethanol, 'GP' for LPG etc... It is a categorical variable.
5. **`hybride`** 
    This variable shows if a car is hybride or not. the two output are 'yes' or 'no'. It is a categorical variable.
6. **`Puissadmin`** 
    This variable represents the administrative horsepower (or fiscal horsepower) is a value expressed in fiscal horsepower (HP), used in France to calculate the cost of vehicle registration (carte grise), and in some cases for insurance purposes. It is a discrete variable that goes from 1 to 81hp.
7. **`puiss_max`** 
    It represents the maximum power of the car. It is a discrete variable that goes from 10 to 560 hp
8. **`typ_boite_nb_rapp`** 
    It represents the type of gearbox of the car. It's a categorical variable. There is a letter followed by a number. the letter is the type of Gearbox, like 'M' for Manual, and the number is the number of gear ratios.
9. **`conso_mixte`** 
   This varaible represents the average consumption of the car in L/100 Km. It's a continuous variable that goes from 0.6 to 24.5 L/100 Km.
10. **`C02`**
   This varaible represents the C02 emissions of the Car in g/km. it's a continuous variable that goes from 13 to 572 g/Km.
11. **`masse_ordma_max`**
   This variable shows the weight of the car with full tank, the oil, all the options,... the maximum weight of the car. It's a continuous variable that goes from 825 to 3094 Kg.


