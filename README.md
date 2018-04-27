# W241 Final Project - Do social pressures influence TV watching behavior?
## Alyssa Eisenberg, Cameron Bell, and Sarah Cha

Our goal for this study was to implement an experiment that would help us understand whether being made aware of peers' TV watching behaviors (how many hours) would influence individuals by way of less TV watching. 

Our experimental design follows a difference in difference approach. Our experiment consisted of two surveys - one pre and one post treatment. In the pre-survey,  we would measure pre-survey TV behavior for all participants along with what we thought could be key covariates of interest (age, gender, marital/employment status, etc). Then we would randomly assign individuals to treatment vs. control, where the individuals in the treatment group would be aware of how much their peers were watching. The post-survey measures TV behavior during the experiment. This allows us to compare the hours of TV watched between treatment and control group for causal estimate conditioning on pre-experiment TV watching measure as a covariate.

## Using this repository

### Setting up the experiment
**The standard pitch we gave to recruit subjects** - *pitch.png*  
**A copy of the emails we sent to participants throughout experiment** - *TV Habits Study Subjects Emails.xlsx*  
**Setting up the Netflix extension** - *netflix_extension folder*  

### The Data
**Pre-survey data** - *UCBerkeley TV Habits Study Pre-Survey_March 18, 2018_13.01_CLEAN.csv*  
**Randomization code + covariate balance check** - *Randomization.Rmd*  
**Treatment Assignments** - *ExperimentTreatmentAssignment.csv*  
**Post-survey data** - *UCBerkeleyTVHabitsStudyPost-Survey_April2018CLEAN.csv*

### Analyses
**Power analysis** - *20180318_pilot_powerAnalysis_Final.Rmd*  
**Final paper & results** - *AlyssaEisenberg_CameronBell_SarahCha_Final_241.Rmd*
