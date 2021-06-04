---
bokSectionId: 6-3
created_at: 2021-03-05T20:18:04.776Z
updated_at: 2021-05-07T12:30:13.362Z
description: Operational maturity areas represent organizational functions that impact the implementation of AI capabilities. While each area is treated as a discrete capability for maturity evaluation, they generally depend on one another. 
id: 18
slug: module6-3
title: Operational maturity areas
---
Operational maturity areas represent organizational functions that impact the implementation of AI capabilities. 
{: .intro }

While each area is treated as a discrete capability for maturity evaluation, they generally depend on one another. The operational maturity areas (from the bottom of the graphic to the top) are:

- **PeopleOps:** Recruit, develop, retain, and organize an AI-ready workforce.
- **CloudOps:** Provide and allocate storage, compute, and other resources in the cloud.
- **SecOps:** Ensure secure deployment of code, access to systems and data, and identity  resolution across storage, compute, and data assets.
- **DevOps:** Deploy and manage software throughout development, test, and production environments.
- **DataOps:** Maximize data discovery, access, and use throughout its lifecycle.
- **MLOps:** Test, experiment, and deploy AI or ML models.
- **AIOps:**  Identify and resource AI initiatives within the organization.

Each operational maturity area below is supported by related key activities and key questions to focus the conversation on the current organizational state. 

<table>
<thead>
  <tr>
    <th  colspan="2" rowspan="3"></th>
    <th colspan="5">Organizational Maturity</th>
  </tr>
  <tr>
    <td>Level 1</td>
    <td>Level 2</td>
    <td>Level 3</td>
    <td>Level 4</td>
    <td>Level 5</td>
  </tr>
  <tr>
    <td >Initial / Ad Hoc Individual Project</td>
    <td>Repeatable Team Project</td>
    <td >Defined Program</td>
    <td >Managed Portfolio</td>
    <td >Optimized Enterprise</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="7">Operational Maturity</td>
    <td>AIOps</td>
    <td >Reactionary and ad hoc AI capability identification</td>
    <td>Established process to capture AI product requirements and user workflows</td>
    <td >Formal AI Product Management team, Strategy, and roadmap, including test and evaluation plan</td>
    <td>AI Product Management goals are linked to organizational performance objectives. T&amp;E synthesis and evaluation included for each AI product.</td>
    <td >AI Capability dependencies are mapped across org boundaries and linked to an enterprise strategy with measurable objectives; retrospective analysis of past efforts to continuously modify business objectives related to AI investment. Dedicated T&amp;E efforts to optimize AI capability.</td>
  </tr>
  <tr>
    <td >MLOps</td>
    <td>Models and methods are selected ad hoc and not documented</td>
    <td >Implement methods for documenting experiments and model selection, utilization of GPUs initiated</td>
    <td >Model and methods catalog exists; model to use case matching leverages previous historical knowledge, measures model accuracy and speed prediction</td>
    <td >Increased use of infrastructure/Server based GPU acceleration for model development, Automated selection, testing, and evaluating ML models using AutoML</td>
    <td >Use of Hyper-scale GPU acceleration, Feedback from ML tools captured and models are continuously updated and improved</td>
  </tr>
  <tr>
    <td>DataOps</td>
    <td >"Shoeboxes" of data; stored locally, not discoverable, and copied from one machine to another</td>
    <td >Routine data sources available and well documented but new data discovery is ad hoc, exploratory data analysis (EDA) initiated</td>
    <td >Engineering support for data management activities is explicit; data pipeline exists</td>
    <td >Self-service for adding new data sources, preparing datasets, and curating data for ML projects</td>
    <td >Intelligent, secure data discovery, access, and use across all organizations with metrics on business usage and compliance</td>
  </tr>
  <tr>
    <td >SecOps</td>
    <td>Code security/validation is manually accomplished in the Test environment, Container security is default to orchestration</td>
    <td >Code security/validation is manually accomplished within the pipeline' Container security is baselined at orchestration</td>
    <td>Code/Container security and validation is automated within the pipeline and manually approved</td>
    <td>Code/Container security and validation software is automated and automatically approved; software rollouts are "trusted"</td>
    <td >Pipeline security software feeds central Security Data Lake; Automation embedded at the Pipeline Orchestration layers; Automated code rollbacks; Ongoing Authorization</td>
  </tr>
  <tr>
    <td >DevOps</td>
    <td >Development on local workstation</td>
    <td>Process exists for moving locally developed tools into production, but some parts are manual, Test Driven Development (TDD)</td>
    <td >Established secure process for containerizing tools and moving into production environment</td>
    <td>Increasingly automated process for deploying secure software with emphasis on reducing iteration and delivery timelines</td>
    <td >Fully-managed secure software container orchestration; CI/CD/CATO</td>
  </tr>
  <tr>
    <td >CloudOps</td>
    <td >Minimal Cloud Resources or Individual User Account</td>
    <td >Innovation Sandbox in the cloud</td>
    <td >Dev, Test, and Prod environments available, but manual resources allocation</td>
    <td >Self-service or templated cloud resource allocation</td>
    <td>Balanced cloud resource sharing across the organization with robust cost/benefit/usage metrics</td>
  </tr>
  <tr>
    <td >PeopleOps</td>
    <td >Self-directed identification and acquisition of AI related skillsets</td>
    <td>Identify types of AI talent for Lifecycle; Employee journey created, KSA's identified, active talent acquisition for AI related skills begin</td>
    <td >PeopleOps Program established, conduct talent gaps analysis, Needs documented, Talent map created, Training id'd</td>
    <td >PeopleOps program linked to measurable performance objectives and active efforts to create a culture around AI is a central organizational theme</td>
    <td>Uses engagement tools for employee growth, integrates an ownership culture throughout organization</td>
  </tr>
</tbody>
</table>

[Download Operational Maturity table](/upload-auth/public_AI_CMM_053c22162e.png)

## PeopleOps

People are at the core of every organization. PeopleOps covers not only the defining skills required to build and deploy AI capabilities, but also creating a culture that promotes the behavior necessary to successfully create intelligent systems.
{: .intro }

Organizations must be able to explicitly identify skill sets and traits that make a strong AI team. We focus Intentionally on continuously developing skill sets, technical acumen, and dynamic team management. We also identify talent gaps and provide training. PeopleOps practices include the structure and program support to organize high-functioning teams and manage them throughout the entire talent lifecycle.


### Key Activities
- Understand the AI talent requirements for the organization (needs, skills, and training assessments, use case identification)
- Develop the AI talent lifecycle talent pipeline, staffing plans (FTE + contractors), learning paths, project team composition
- Enhance the AI talent lifecycle (automate the talent pipeline, develop internal best practices, expand employee engagement throughout the organization) 


### Key Questions
- Can you identify the barriers that prevent your agency from building AI talent, or the precursors necessary to do so? 
- Are you able to identify AI talent within your organization?
- How do you align culture with mission objectives to create an engaging, creative workplace?
- Do you understand staff’s training and resource needs?
- How can you identify ideal AI practitioner candidates?
- How can you ensure that AI practitioners within your organization are able to succeed?


## CloudOps

Modern infrastructure and platform management best practices have consolidated in the cloud, so the CoE assumes that mature AI organizations will be cloud-capable. 
{: .intro }

CloudOps functionally manages development teams’ virtual onboarding, and provides compute and storage resources, as well as services and tools to enable development teams. Organizations must have a repeatable process to safely and securely stand up and scale development environments for a wide range of AI activities.


### Key Activities

- Assess existing cloud capabilities in the organization (accounts, environments, service providers, etc.)
- Provide environments for development, test, and production-level activities, ensuring secure access controls within and between environments.
- Enhance the provided environments’ use through secured and automated pipelines.
- Continually monitor and optimize cloud resources to manage usage rates and compliance.

### Key Questions

- Which cloud resources or platforms are available in your environment?
- Is there a systematic, enterprise-wide process by which to allocate cloud resources?
- How do AI practitioners get access to cloud resources?
- Are you able to track resource utilization across the enterprise?

## DevOps

A mature AI organization must be able to securely move software into a production environment and provide continuous integration and delivery of software updates. 
{: .intro }

DevSecOps best practices enable organizations to shrink the time to deliver new software while maintaining the security of highly reliable and available AI-enabled capabilities. DevSecOps allow organizations to produce microservices in hardened containers; move them throughout development, test, and production environments; and scale services based on user demand.

### Key Activities
- Understand where tools are currently developed within the organization.
- Create and secure development pipelines from local to cloud environments.
- Contain and isolate dependencies for tools to effectively use and scale resources.
- Reduce delivery and iteration timelines through development pipeline automation and full containerization.

### Key Questions

- What processes exist for moving new tools into production?
- When are security concerns resolved during development?
- How quickly can any new tool be deployed in a containerized environment?

## SecOps

Secure access to code repositories, infrastructure, and platform resources, and data assets depend on understanding how person and non-person entities (NPEs) operate. 
{: .intro }

SecOps unifies best practices in security for software development, system administration, data access, and protection of AI techniques from attacks. This function also supports the ability to audit and account for user activity, while defending against security threats across the system.

### Key Activities

- threat detection: mean time to detect
- threat resolution: mean time to respond
- threat impact: mean failure cost 

### Key Questions

- Are corrective actions fully integrated into overarching security framework?
- Is mean time to detection (MTTD) near real-time?
- Does automated resolution implementation occur throughout pipelines, including automatic rolling back suspect code/version control? 
- Is mean time to response (MTTR) near real-time?
- Are impact analyses to emerging threats are automated and integrated into organizational strategic decision making?
- Are threat impact: mean failure costs projected?

## DataOps

Effective AI capabilities require highly tailored data to train and develop models. To deliver data to development teams, DataOps enables data discovery, access, and use for AI development. 
{: .intro }

This includes support for batch and streaming data sources, the pre- and post-processing of data, and managing data at all lifecycle phases. Effective DataOps includes a thorough inventory asset catalog, dynamic methods of accessing data, and necessary tools to manipulate data to conduct documented AI experiments. Datasets are described and subjected to version control, creating a history of how the data was sourced and transformed throughout the development process.

### Key Activities

- Determine the locations and method of access for data sources within the organization
- Make tools and resources available to actively manage data
- Align data sources within a data lifecycle management framework
- Optimize use of data sources within the data management framework through automation and self-service data curation
- Continually monitor creation and usage of data to ensure business alignment and compliance 

### Key Questions

- How is data transferred within the organization?
- Are there enterprise-wide data governance policies in place?
- What resources are available to ensure high-quality data management?
- Who is able to access data sources?

## MLOps

MLOps is the selection, application, interpretation, deployment, and maintenance of machine learning models within an AI-enabled system. 
{: .intro }

Through these functions, AI development teams conduct data analysis and feature engineering to create a model that achieves a threshold level of performance. Over time, MLOps will enable deployed models to become more accurate as long as they are properly maintained. Another key function in MLOps is to create an audit trail of experiments to document design decisions throughout experimentation and create transparent, explainable AI-enabled capabilities.


### Key Activities

- Build resources to document machine learning model and method selection
- Use historical documentation to develop and enhance machine learning models
- Monitor tool usage and feedback to continuously enhance tools 

### Key Questions

- How are machine learning use cases identified and documented?
- Are practitioners able to access an enterprise knowledge-base of existing machine learning models?
- Are models tested, evaluated, and optimized?

## AIOps

AIOps support AI capability development as a discipline of systems engineering and product management. 
{: .intro }

Initially, organizations may identify processes to create a funnel of AI pilots and move them to operations. Over time, effective AIOps will allow organizations to put institutional structure around AI activities through project management, product development, and systems integration. 

AIOps focus squarely on integrating AI into the larger enterprise from a technical point of view as well as planning technology roadmaps for future investment. Program evaluation and support functions are also included in AIOps to show the operational impact of AI investments. AIOps include user-centered activities that organize tasks into iterative atomic units of work, manage allocating resources and personnel to work efforts, and set long-term objectives for AI-enabled capabilities.

### Key Activities

- Establish processes by which to determine AI use cases
- Develop AI capabilities through AI product teams
- Align AI products with organizational objectives and enterprise-wide dependencies
- Continuously evaluate AI products to optimize business usage, resource allocation, and compliance 

### Key Questions

- How are AI products identified within the organization?
- Who manages AI products?
- Are product dependencies mapped to both organization objectives and data dependencies?
















