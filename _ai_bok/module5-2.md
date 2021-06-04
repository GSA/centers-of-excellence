---
bokSectionId: 5-2
created_at: 2021-03-05T20:18:02.186Z
updated_at: 2021-04-06T16:14:06.923Z
description: Data governance and management are central to identifying AI use cases and developing AI applications. Data governance is the exercise of authority and control (planning, monitoring, and enforcement) over data assets. 
id: 14
slug: module5-2
title: Data governance and management
---
Data governance and management are central to identifying AI use cases and developing AI applications. Data governance is the exercise of authority and control (planning, monitoring, and enforcement) over data assets. 
{: .intro }

Though CDOs and their counterparts have many resources available to them, we are presenting some of the key takeaways for the benefit of all those interested in data governance, especially as it relates to moving towards AI. 

## Legislation and guidance

In recent years, data governance and management have been codified into statute via The Foundations for Evidence-Based Policymaking Act (Evidence Act) that requires every executive branch agency to establish a Chief Data Officer and identifies three pillars of work for which the CDO bears responsibility: data governance; the Open, Public, Electronic, and Necessary (OPEN) Government Data Act; and the Paperwork Reduction Act (PRA).  

This legal framework assigns the CDO the area of responsibility for “lifecycle data management” among others to improve agencies’ data management.  

Offering further guidance, the Federal Data Strategy, which describes a mission statement, 10 principles, and 40 practices designed to help agencies and the federal government improve their data governance practices. Find more details about implementing the Federal Data Strategy at strategy.data.gov.

## Data governance organization

M-19-23, issued by the Office of Management and Budget (OMB) and titled “Phase I Implementation for the Foundations for Evidence-Based Policymaking Act of 2018”, provides implementation guidance pertaining to the Evidence Act. It states that each agency must establish an agency data governance body chaired by the CDO by September 2019 to support implementing Evidence Act activities. The 2019 Federal Data Strategy (FDS) Year One Action Plan administers similar requirements.

In executing the Evidence Act and corresponding guidance, practical requirements have been found for resource allocation, technical leadership, and practitioner and user input.  

Many avenues address these requirements organizationally. Combining any three of these requirements may work for agencies depending on their specific factors. Agencies who would like to separate these requirements into separate organizational functions might do so with the organizational charts and description below:
- **Data Governance Steering Committee** - Chaired by the CDO (mandated in OMB 19-23).  Makes resourcing and policy decisions for enterprise and lifecycle data management.
- **Data Governance Advisory Group** - Collects user and practitioner needs from the enterprise. Generates recommended solutions. Prepares decision documents and corresponding materials regarding data policy and resourcing for the CDO and steering committee.
- **Working Groups / Communities of Practice** - Practitioners who may or may not be involved in advisory group activities. These groups bring specific data governance and management needs to the advisory group to judge.

![Data governance and management](./images/data-governance-management.png)

To make things happen, establish a multi-tier governance structure consisting of working groups, advisory boards, and decision-making bodies. An agile implementation of data governance can distribute decision-making authority across tiers so activities and decisions can be made quickly. Elevate decisions only when they cross a defined threshold like resource allocation or level of effort.

Data governance enables organizations to make decisions about data. Establishing data governance requires assigning  roles and responsibilities to perform governance functions such as:
- data strategy, policy, & standards
- oversight & compliance
- sponsoring & reporting related to data management projects
- issue elevation & resolution

Example outputs of data governance activities include (but are not limited to):
- data governance framework
- data strategy & policies
- data asset inventories
- data quality plans
- data management scorecards
- business glossary
- communications plan
- data management processes
- best practices & lessons learned
- workforce skills assessment

## Data lifecycle management through metadata tagging

Data lifecycle management is the development, execution, and supervision of plans, policies, programs, and practices that deliver, control, protect, and enhance the value of data and information assets throughout their lifecycles. Data management in the context of this Body of Knowledge focuses on the data lifecycle as it moves through an AI project. 

Many AI projects are iterative or involve significant monitoring components. Any given dataset is not itself static and can quickly change as the project uncovers new insights. Thus, we need ways to manage those updates, additions, and corrections.
{: .ai-bok-feature }

Data is an asset that has a value in business and economic terms. Information on data sources and their subsequent use can be captured, measured, and prioritized much like business decisions of physical inventory assets. 

Secondly, data management is multidisciplinary. This activity requires a broad range of perspectives and interactions across many different classes of “users” that make up the Integrated Product Team (IPT), including data scientists, engineers, mission owners, legal professionals, security experts, and more. Using existing data governance processes to engage those stakeholders is essential to effectively managing data. 

Data management activities start with identifying and selecting data sources, framed in the context of business goals, mission-defined use cases, or project objectives. As you identify data sources, have engineering teams integrate them into the overall data flow, either through data ingestion or remote access methods. Include a clear description of the data through relevant metadata with datasets as they are published.

Effective data governance will influence resourcing decisions based on the overall business value of datasets. In order to influence these resourcing decisions, get usage metrics and business intelligence across your data inventory. 

User research and use case development help governance bodies understand high-impact datasets across different members of the Integrated Product Team (IPT) or mission areas.

One example of data lifecycle management is standardizing metadata captured for new data sources by populating a data card used to describe the data. Each dataset should contain common interoperable metadata elements that include, but are not limited to, the following:
- data source origin
- originating collection authority and organization
- format and type of data (e.g. jpeg, text, wav, etc)
- size of data
- periodicity of data transfer (one-time batch, every two weeks, real-time streaming)
- requisite security controls
- pre-processing or transformations applied to the data
- points of contact for data suppliers, owners, and stewards
- data makeup and features, including obvious and non-obvious constraints such as variable names and meanings

While minimum tagging requirements vary across different organizations, the list above is provided as a general guideline. For operations that are highly specific or deal with high-impact or sensitive data, the receiving organization may need to capture more metadata fields earlier in the data lifecycle. 

One example of this is access rights and handling, need-to-know, and archiving procedures associated with classified data, which requires highly restricted and governed data handling procedures.

Other descriptive dimensions include the mission or use case context. For example, metadata can be applied to datasets that detail information on the Five Vs:- Volume, Velocity, Veracity, Variety, and Variability. 

In addition to the Five Vs, apply use case specific metadata to datasets, which further supports future data curation and discovery efforts. Some examples of use case specific metadata, as noted in the NIST Big Data Working Group Use Case publication, include:
- use case title
- description
- goals
- current solutions (hardware, software, etc.)
- additional stakeholders/contributors

Once data is accurately described, it can be cataloged, indexed, and published. Data consumers can then easily discover datasets related to their specific development effort. This metadata also sets the basis for implementing security procedures that govern data access and use.

Data should be securely accessed and monitored throughout its useful lifespan, and properly archived according to handling procedures set forth by the original data owner.







