## Overview
This hackathon was hosted by the National Center for Supercomputing Applications(NCSA) at UIUC. 
The goal was to create a model to predict certain atmospheric properties given the concentrations of 100 chemicals. The main challenge was handling high dimensional temporal-spatial data. We were given time-series data where each entry was a 3D tensor (Chemical concentrations at each point in space). Since there were 100 chemicals, our data was of dimension (# of timesteps, # of chemicals, x, y, z), with structural correlation over the time and space dimensions.

Here is the presentation with full details about the project: <a href="/static_resources/hack_slides.pdf/">Link Here</a>