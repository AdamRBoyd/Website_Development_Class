# Code Review CS351 Spring 2021

**Adam Boyd**, NetId: xv3543

## Part 1: HW7 Products and Criteria

Due date: 03/22/2021   Last commit: 3/22/21

**Total**: 30 pts, ***Very nice work!***

1. Directory Structure: 5 pts C
    * top level directory `clubSSG` in your repo. Within this directory create the following directories: `src`, `build`.
    * Copy your clubProject CSS and image files into the `clubSSG/build` directory. 
    * Copy your clubProject HTML files into the `clubSSG/src` directory. 

2. Setup and Installation 5 pts C
    * Add the appropriate line to your `.gitignore` file to ignore all the HTML files in the `build` directory.
    * `package.json` should have `nunjucks`, `gray-matter` and `commonmark`

3. Program, Templates, Content
    * File: `clubSSG.js` (10 pts) C
        * uses Nunjucks, Commonmark, and gray-matter
        * runs without errors
        * processes the content files
        * style/techniques
    * Templates: `base.njk` with menu (5 pts) C
    * Content: (5 pts) C
        * All HTML boilerplate removed
        * Metadata added