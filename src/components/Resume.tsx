// Create styles
const styles = StyleSheet.create({
  // ... other styles remain unchanged
  company: {
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: 5,
    color: '#007BFF', // Changed color to a blue shade for emphasis
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2, // Reduced margin for better spacing
    color: '#333333', // Darker color for better visibility
  },
  bullet: {
    marginBottom: 8, // Increased margin for better spacing
    marginLeft: 10,
    textIndent: -10,
  },
});

// Create Document Component
const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Sai Umesh Chandra Katta</Text>
        <Text style={styles.title}>PLM Implementation Consultant</Text>
        <Text style={styles.contact}>Email: ksaiumeshchandra@gmail.com</Text>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <View style={styles.content}>
           <Text style={styles.bullet}>• Strong hands-on experience in Development and Configuration and Migration of Siemens Teamcenter using IPS Upload and NX Utilities.</Text>
          <Text style={styles.bullet}>• Skilled in performing root cause analysis, gathering requirements, conducting impact analysis, executing testing, and coordinating production releases.</Text>
          <Text style={styles.bullet}>• Crafted detailed migration plans, timelines, and risk assessments to ensure seamless data transitions while minimizing system downtime and disruption.</Text>
          <Text style={styles.bullet}>• Worked closely with IT, business stakeholders, and third-party vendors to gather requirements, resolve issues, and ensure alignment during migration.</Text>
          <Text style={styles.bullet}>• Hands-on experience in implementing various Teamcenter utilities: process dispatcher requests and automate the workflow task completion, export business object properties, reading of XML’s and to create the objects update properties.</Text>
          <Text style={styles.bullet}>• Implemented/enabled custom Dispatcher translator, WF Action/Rule handlers, extensions for Teamcenter.</Text>
          <Text style={styles.bullet}>• Usage of SQL queries for migration activities in Database.</Text>
        </View>
      </View>

           {/* Professional Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        
        <View style={styles.content}>
          <Text style={styles.jobTitle}>PLM Data Migration Consultant</Text>
          <Text style={styles.company}>Siemens Mobility</Text>
          <Text style={styles.date}>August 2022 - Present</Text>
          <Text style={styles.bullet}>• Developed scripts in Python for automation of repetitive tasks such as data validation and reporting.</Text>
          <Text style={styles.bullet}>• ITK Utilities Validating data Integrity and Correction.</Text>
          <Text style={styles.bullet}>• Collaborated with business stakeholders and end-users to define data mapping rules and validate migrated data.</Text>
          <Text style={styles.bullet}>• Implemented BOM migration and assisted in transitioning CAD data between legacy systems and Teamcenter data.</Text>
          <Text style={styles.bullet}>• Wrote shell scripts and SQL queries for data extraction, cleaning, and migration.</Text>
          <Text style={styles.bullet}>• Utilized SQL Procedures for data extraction from the legacy system performing transformation.</Text>
          <Text style={styles.bullet}>• Supported post-go-live activities, including data validation, user support, and issue resolution.</Text>
          <Text style={styles.bullet}>• Assisted in configuring and deploying Teamcenter modules such as change management, document management, and BOM management.</Text>
          <Text style={styles.bullet}>• Monitored IPS upload utility and configured for errors and performed root cause analysis for mismatches and relationship inconsistencies.</Text>
          <Text style={styles.bullet}>• Usage of UG Clone for Extraction Utility within Teamcenter enhancing data management related to NX Assemblies.</Text>
          <Text style={styles.bullet}>• Cleaning Generated Clone files to import in target System.</Text>
          <Text style={styles.bullet}>• Extracted Assembly Information from source in a bottom to top approach.</Text>
          <Text style={styles.bullet}>• Utilized TCIN utility for Importing NX Assemblies to streamline product data integration and facilitate seamless collaboration between engineering and manufacturing teams.</Text>
          <Text style={styles.bullet}>• Automated Report Generation for consolidating migration data.</Text>

{/* Add a gap between job entries */}
    <Text style={{ marginBottom: 10 }} /> {/* Empty Text for spacing */}

          <Text style={styles.jobTitle}>Developer</Text>
          <Text style={styles.company}>Lilium GmbH</Text>
          <Text style={styles.date}>December 2021 - August 2022</Text>
          <Text style={styles.bullet}>• Custom Translator in Dispatcher to attach a Generated Excel to Change Objects which includes utility for processing excel.</Text>
          <Text style={styles.bullet}>• Custom Handler to update the Signature and Completion date of a Review Task for User KPI on ECN Object.</Text>
          <Text style={styles.bullet}>• Custom Handler to capture the signoff’s information in a table property on Change Objects.</Text>
          <Text style={styles.bullet}>• Implemented a script to update existing Teamcenter attributes to new attributes sourced from Teamcenter SQL database table.</Text>
          <Text style={styles.bullet}>• Object/Property extensions to meet the needs of business requirements.</Text>
          <Text style={styles.bullet}>• Developed a Teamcenter Utility that operates as a Cronjob, monitoring the state of the Dispatcher Requests and completing Workflow tasks.</Text>
          <Text style={styles.bullet}>• Change Management and Document Management Implementation.</Text>
          <Text style={styles.bullet}>• PR, ECR, and ECN Custom Workflows for Change Management using most of the OOTB handlers and custom handlers wherever required.</Text>
          <Text style={styles.bullet}>• Usage of Dynamic Participants for Change Management Workflows.</Text>
          <Text style={styles.bullet}>• Create Rule/Action Handlers.</Text>
          <Text style={styles.bullet}>• Export Control Configuration using Projects.</Text>
          <Text style={styles.bullet}>• Create Custom Queries in Query Builders.</Text>
          <Text style={styles.bullet}>• Managed and optimized SQL databases to support data migration efforts, improving query performance and data retrieval efficiency.</Text>
          <Text style={styles.bullet}>• Developed custom SQL scripts and procedures to automate data migration processes and cleanse source data, reducing manual effort and enhancing efficiency during the migration.</Text>
          <Text style={styles.bullet}>• Migrated As Built Structures and Simulation Objects from the source system to the target system.</Text>
          <Text style={styles.bullet}>• ITK Utilities Development for Validating Migrated Data.</Text>
          <Text style={styles.bullet}>• Developed Scripts to automate the process of Import.</Text>
          <Text style={styles.bullet}>• Using IPS Utility to create non-CAD data.</Text>
          <Text style={styles.bullet}>• Utilization of IPS Utility to create Items and Item revisions with datasets from the extracted data.</Text>
          <Text style={styles.bullet}>• Developed Utility to update Projects on all items.</Text>
          <Text style={styles.bullet}>• Automated Extraction of volume files during the import.</Text>
          <Text style={styles.bullet}>• Developed ITK Utility to Update attributes, status on the Item revisions and datasets for the post-migration activity.</Text>
          <Text style={styles.bullet}>• Resolving Critical Support Tickets related to Workflows, Dispatchers, Change Management, Document Management, Export Control.</Text>

{/* Add a gap between job entries */}
    <Text style={{ marginBottom: 10 }} /> {/* Empty Text for spacing */}

          <Text style={styles.jobTitle}>Developer</Text>
          <Text style={styles.company}>SBG-SMIT</Text>
          <Text style={styles.date}>August 2021 - December 2021</Text>
          <Text style={styles.bullet}>• Implemented a Teamcenter Utility that exports any Business Object Properties that are configured in a Batch Script.</Text>
          <Text style={styles.bullet}>• Rule handler to validate Negative Mass Values for Designs which are attached with Different Relations based on the Workflow.</Text>
          <Text style={styles.bullet}>• Stylesheets configuration includes tables, labels, and visible when usage.</Text>
          <Text style={styles.bullet}>• Debugging the pool or any issues in the server and taking relevant actions.</Text>
          <Text style={styles.bullet}>• Created custom Handler to update table property which is used to fill custom object values dynamically.</Text>
          <Text style={styles.bullet}>• Developed Custom Extensions to meet Business Requirements.</Text>
          <Text style={styles.bullet}>• Custom Standalone Utility for Teamcenter, utilizing XML file to automate the creation of objects with Property Update.</Text>
          <Text style={styles.bullet}>• Customized a utility to Update Excel with all Problem and Impacted Items analyzing BOM with the Property Values of Configured custom.</Text>
          <Text style={styles.bullet}>• Created new Custom Workflows for different Business Objects as per Business Requirement.</Text>
          <Text style={styles.bullet}>• Managing BMIDE configurations, including GRM Rules, Deep Copy Rules, Display Rules, Custom Conditions, Propagation Rules, Overlay Icon, and other configurations. Created custom Business objects, Relations, LOV’s (classic, batch, dynamic), properties on Business objects.</Text>
        </View>
      </View>

      {/* Technical Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.content}>
          <Text style={styles.bullet}>• Languages: Java, HTML, C, C++, Powershell, Batch Scripting</Text>
          <Text style={styles.bullet}>• PLM: Teamcenter 12.4.X, AWC 5.X</Text>
          <Text style={styles.bullet}>• Database: MS SQL Server, Oracle</Text>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.content}>
          <Text style={styles.bullet}>Master of Computer Applications (MCA)</Text>
          <Text style={styles.bullet}>JNTU Kakinada | 2021 | CGPA: 7.37</Text>
          <Text style={styles.bullet}>Bachelor of Computer Science (BSc)</Text>
          <Text style={styles.bullet}>Adikavi Nanaya University | 2019 | CGPA: 3.35</Text>
          <Text style={styles.bullet}>Intermediate</Text>
          <Text style={styles.bullet}>Sri Sidhartha Jr College | 2015 | Percentage: 75.9%</Text>
          <Text style={styles.bullet}>Secondary School Certificate (SSC)</Text>
          <Text style={styles.bullet}>Little Buds Public School | 2013 | CGPA: 9.0</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Resume;
