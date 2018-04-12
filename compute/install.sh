#!/bin/bash

# library(caret)
# library(R6)
# library(data.table)
# Required Libraries
# library(MASS)
# library(mclust) # mclust
# library(randomForest) #rf
# library(dplyr)
# library(EBImage)
# library(plotly)
# library(Rtsne)
# library(class)

# List R libraries
R -e 'install.packages(c("devtools"))'
R -e "install.packages(c('R6', 'dplyr', 'jsonlite')"
# R -e "install.packages(c('dplyr', 'xts', 'lubridate', 'jsonlite'), repos='http://cran.us.r-project.org')"
# R -e "install.packages('gridExtra')"
R -e "install.packages('ggplot2')"
R -e "install.packages('httr')"
R -e "install.packages('class', repos='http://cran.us.r-project.org')"

echo 'Done Install Libraries'
