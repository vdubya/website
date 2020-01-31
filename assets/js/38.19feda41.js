(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{293:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://elifesciences.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("eLife"),a("OutboundLink")],1),e._v(" is a non-profit organisation with a mission  to help scientists accelerate discovery by operating a platform for research communication that encourages and recognises the most responsible behaviours in science. eLife publishes important research in all areas of life and biomedical sciences. The research is selected and evaluated by working scientists and is made freely available to all readers.")]),e._v(" "),a("h3",{attrs:{id:"problem-we-were-trying-to-solve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem-we-were-trying-to-solve"}},[e._v("#")]),e._v(" Problem We Were Trying To Solve")]),e._v(" "),a("p",[e._v("Having met at csv,conf,v3 in Portland in May 2017, eLife’s "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=YYWNSWNq-do&list=PLg5zZXwt2ZW5UIz13oI56vfZjF6mvpIXN&index=27",target:"_blank",rel:"noopener noreferrer"}},[e._v("Naomi Penfold"),a("OutboundLink")],1),e._v(" and Open Knowledge International’s "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=Gk2F4hncAgY&index=35&list=PLg5zZXwt2ZW5UIz13oI56vfZjF6mvpIXN",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adrià Mercader"),a("OutboundLink")],1),e._v(" determined that eLife would be a good candidate for a Frictionless Data pilot. eLife has a strong emphasis on research data, and stood to benefit from the data validation service offered by Frictionless Data’s goodtables.")]),e._v(" "),a("h2",{attrs:{id:"the-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-work"}},[e._v("#")]),e._v(" The Work")]),e._v(" "),a("p",[e._v("In order to assess the potential for a goodtables integration at eLife, we first needed to measure the quality of source data shared directly through eLife.")]),e._v(" "),a("h3",{attrs:{id:"software"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software"}},[e._v("#")]),e._v(" Software")]),e._v(" "),a("p",[e._v("To explore the data published in the eLife platform we used the goodtables library"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])]),e._v(". Both the goodtables python library and web service"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn2",id:"fnref2"}},[e._v("[2]")])]),e._v(" were developed by Open Knowledge International to support the validation of tabular datasets both in terms of structure and also with respect to a published schema. You can read more about them "),a("a",{attrs:{href:"http://okfnlabs.org/blog/2015/02/20/introducing-goodtables.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("in this introductory blog post"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"what-did-we-do"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-did-we-do"}},[e._v("#")]),e._v(" What Did We Do")]),e._v(" "),a("p",[e._v("The first stage was to perform validation on all files made available through the eLife API in order to generate a report on data quality - this would allow us to understand the current state of eLife-published data and present the possibility of doing more exciting things with the data such as more comprehensive tests or visualisations.")]),e._v(" "),a("p",[e._v("The process:")]),e._v(" "),a("ul",[a("li",[e._v("We downloaded a big subset of the articles metadata made available via the eLife public API"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn3",id:"fnref3"}},[e._v("[3]")])]),e._v(".")]),e._v(" "),a("li",[e._v("We parsed all metadata files in order to extract the data files linked to each article, regardless of whether it was an additional file or a figure source. This gave us a direct link to each data file linked to the parent article.")]),e._v(" "),a("li",[e._v("We then ran the validation process on each file, storing the resulting report for future analysis.")])]),e._v(" "),a("p",[e._v("All scripts used in the process as well as the outputs can be found in "),a("a",{attrs:{href:"https://github.com/frictionlessdata/pilot-elife",target:"_blank",rel:"noopener noreferrer"}},[e._v("our pilot repository"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Here are some high-level statistics for the process:")]),e._v(" "),a("p",[e._v("We analyzed 3910 articles, 1085 of which had data files. The most common format was Microsoft Excel Open XML Format Spreadsheet (xlsx), with 89% of all 4318 files being published on this format. Older versions of Excel and CSV files made up the rest.")]),e._v(" "),a("p",[a("img",{attrs:{src:"elife1.png",alt:"datasets analysed by eLife image"}}),e._v(" "),a("em",[e._v("A summary of the eLife research articles analysed as part of the Frictionless Data pilot work")])]),e._v(" "),a("p",[e._v("In terms of  validation, more than 75% of the articles analyzed contained at least one invalid file. Of course valid data is an arbitrary term based on the tests that are set within goodtables and results need to be reviewed to adjust  the checks performed. For instance errors raised by blank rows are really common on Excel files as people add a title on the first row, leaving an empty row before the data, or empty rows are detected at the end of the sheet.")]),e._v(" "),a("p",[e._v("Other errors raised that might actually point to genuine errors included duplicated headers, extra headers, missing values,  incorrect format values (e.g. date format instead of gene name) to give just some examples. Here’s a summary of the raw number of errors encountered. For a more complete description of each error, see the Data Quality Spec"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn4",id:"fnref4"}},[e._v("[4]")])]),e._v(":")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Error Type")]),e._v(" "),a("th",[e._v("Count")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Blank rows")]),e._v(" "),a("td",[e._v("45748")])]),e._v(" "),a("tr",[a("td",[e._v("Duplicate rows")]),e._v(" "),a("td",[e._v("9384")])]),e._v(" "),a("tr",[a("td",[e._v("Duplicate headers")]),e._v(" "),a("td",[e._v("6672")])]),e._v(" "),a("tr",[a("td",[e._v("Blank headers")]),e._v(" "),a("td",[e._v("2479")])]),e._v(" "),a("tr",[a("td",[e._v("Missing values")]),e._v(" "),a("td",[e._v("1032")])]),e._v(" "),a("tr",[a("td",[e._v("Extra values")]),e._v(" "),a("td",[e._v("39")])]),e._v(" "),a("tr",[a("td",[e._v("Source errors")]),e._v(" "),a("td",[e._v("11")])]),e._v(" "),a("tr",[a("td",[e._v("Format errors")]),e._v(" "),a("td",[e._v("4")])])])]),e._v(" "),a("h2",{attrs:{id:"review"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#review"}},[e._v("#")]),e._v(" Review")]),e._v(" "),a("h3",{attrs:{id:"how-effective-was-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-effective-was-it"}},[e._v("#")]),e._v(" How Effective Was It")]),e._v(" "),a("p",[e._v("Following analysis of a sample of the results, the vast majority of the errors appear to be due to the data being presented in nice-looking tables, using formatting to make particular elements more visually clear, as opposed to a machine-readable format:")]),e._v(" "),a("p",[a("img",{attrs:{src:"elife3.png",alt:"example tables image shared by Naomi"}}),e._v(" "),a("em",[e._v("Data from Maddox et al. was shared in a machine-readable format (top), and adapted here to demonstrate how such data are often shared in a format that looks nice to the human reader (bottom)."),a("br"),e._v("\nSource: Source data"),a("br"),e._v("\nThe data file is presented as is and adapted from Maddox et al. eLife 2015;4:e04995 under the Creative Commons Attribution License (CC BY 4.0).")])]),e._v(" "),a("p",[e._v("This is not limited to the academic field of course, and the tendency to present data in spreadsheets so it is visually appealing is perhaps more prevalent in other areas. Perhaps because consumers of the data are even less likely to have the data processed by machines or because the data is collated by people with no experience of having to use it in their work.")]),e._v(" "),a("p",[e._v("In general the eLife datasets had better quality than for instance those created by government organisations, where structural issues like missing headers, extra cells, etc are much more common. So although the results here have been good, the community could derive substantial benefit from researchers going that extra mile to make files more machine-friendly and embrace more robust data description techniques like Data Packages.")]),e._v(" "),a("p",[e._v("Because these types of ‘errors’ are so common we have introduced default "),a("code",[e._v("ignore blank rows")]),e._v(" and "),a("code",[e._v("ignore duplicate rows")]),e._v(" options in "),a("a",{attrs:{href:"https://try.goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("our standalone validator"),a("OutboundLink")],1),e._v(" since this helps bring more complex errors to the surface and focusses attention on the errors which may be less trivial to resolve. Excluding duplicate and blank rows as well as duplicate headers (the most common but also relatively simple errors), 6.4% (277/4318) of data files had errors remaining, affecting 10% of research articles (112/1085).")]),e._v(" "),a("p",[e._v("Having said this, the relevance of these errors should not be underplayed as "),a("code",[e._v("blank rows")]),e._v(", "),a("code",[e._v("duplicate rows")]),e._v(" and other human-centered formatting preferences can still result in errors that prevent machine readability. Although the errors were often minor and easy to fix in our case, these seemingly simple errors can be obstructive to anyone trying to reuse data in a more computational workflow. Any computational analysis software, such as R"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn5",id:"fnref5"}},[e._v("[5]")])]),e._v(", requires that all column headers are variables and rows are individual observations i.e. we need variables in columns and observations in rows for any R analysis.")]),e._v(" "),a("p",[e._v("Much less frequent errors were related to difficulties retrieving and opening data files. It was certainly helpful to flag articles with files that were not actually possible to open (source-error), and the eLife production team are resolving these issues. While only representing a small number of datasets, this is one use key case for goodtables: enabling publishers to regularly check continued data availability after publication.")]),e._v(" "),a("p",[e._v("The use case for authors is clear — to identify how a dataset could be reshaped to make it reusable. However, this demands extra work if reshaping is a job added at the point of sharing work. In fact, it is important that any issues are resolved before final publication, to avoid adding updated versions of publications/datasets. Tools that reduce this burden by making it easy to quickly edit a datafile to resolve the errors are of interest moving forward. In the meantime, it may be helpful to consider some key best practises as datasets are collected.")]),e._v(" "),a("p",[e._v("Overall, the findings from this pilot demonstrate that there are different ways of producing data for sharing: datasets are predominantly presented in an Excel file with human aesthetics in mind, rather than structured for use by a statistical program. We found few issues with the data itself beyond presentation preferences. This is encouraging and is a great starting point for venturing forward with helping researchers to make greater use of open data.")]),e._v(" "),a("h2",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),a("h3",{attrs:{id:"areas-for-further-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#areas-for-further-work"}},[e._v("#")]),e._v(" Areas for further work")]),e._v(" "),a("p",[e._v("Libraries such as goodtables help to flag the gap between the current situation and the ideal situation, which is machine-readability. Most of the issues identified by goodtables in the datasets shared with eLife relate to structuring the data for human visual consumption: adding space around the table, merging header cells, etc. We encourage researchers to make data as easy to consume as possible, and recognise that datasets built primarily to look good to humans may only be sufficient for low-level reuse.")]),e._v(" "),a("p",[e._v("Moving forward, we are interested in tools and workflows that help to improve data quality earlier in the research lifecycle or make it easy to reshape at the point of sharing or reuse.")]),e._v(" "),a("h2",{attrs:{id:"find-out-more"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find-out-more"}},[e._v("#")]),e._v(" Find Out More")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/frictionlessdata/pilot-elife",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/frictionlessdata/pilot-elife"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Parts of this post are "),a("a",{attrs:{href:"https://elifesciences.org/labs/b6de9fb0/data-reusability-a-pilot-with-goodtables",target:"_blank",rel:"noopener noreferrer"}},[e._v("cross-posted"),a("OutboundLink")],1),e._v(" on eLife Labs"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn6",id:"fnref6"}},[e._v("[6]")])]),e._v(".")]),e._v(" "),a("hr",{staticClass:"footnotes-sep"}),e._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[e._v("goodtables Python library: "),a("a",{attrs:{href:"http://github.com/frictionlessdata/goodtables-py",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://github.com/frictionlessdata/goodtables-py"),a("OutboundLink")],1),e._v(" "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[a("p",[e._v("goodtables web service: "),a("a",{attrs:{href:"http://goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://goodtables.io"),a("OutboundLink")],1),e._v(" "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[a("p",[e._v("eLife Public API: "),a("a",{attrs:{href:"https://api.elifesciences.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://api.elifesciences.org/"),a("OutboundLink")],1),e._v(" "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[a("p",[e._v("Data Quality Spec: "),a("a",{attrs:{href:"https://github.com/frictionlessdata/data-quality-spec/blob/master/spec.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/frictionlessdata/data-quality-spec/blob/master/spec.json"),a("OutboundLink")],1),e._v(" "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn5"}},[a("p",[e._v("R Programming Language: Popular open-source programming language and platform for data analysis: "),a("a",{attrs:{href:"https://www.r-project.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.r-project.org"),a("OutboundLink")],1),e._v(" "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref5"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn6"}},[a("p",[e._v("eLife Labs: "),a("a",{attrs:{href:"https://elifesciences.org/labs",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://elifesciences.org/labs"),a("OutboundLink")],1),e._v(" "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref6"}},[e._v("↩︎")])])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);