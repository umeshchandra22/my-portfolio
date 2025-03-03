import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: 'Helvetica',
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#0056b3',
    borderRadius: 8,
    marginBottom: 20,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    fontSize: 12,
    color: 'white',
  },
  contact: {
    fontSize: 10,
    color: 'white',
  },
  sectionTitle: {
    fontSize: 12,
    marginBottom: 5,
    backgroundColor: '#0056b3',
    color: 'white',
    padding: 6,
    fontWeight: 'bold',
    borderRadius: 4,
    textAlign: 'center',
  },
  leftColumn: {
    width: '30%',
    paddingRight: 10,
  },
  rightColumn: {
    width: '70%',
    paddingLeft: 10,
  },
  content: {
    fontSize: 9,
    lineHeight: 1.4,
  },
  bullet: {
    marginBottom: 4,
    marginLeft: 10,
    textIndent: -10,
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#333333',
  },
  company: {
    fontSize: 9,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#007BFF',
  },
  date: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#333333',
  },
  declaration: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 9,
    fontStyle: 'italic',
  },
  section: {
    marginBottom: 10,
  },
});

const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image src="/ProfilePic.png" style={styles.profilePic} />
        <View>
          <Text style={styles.name}>Sai Umesh Chandra Katta</Text>
          <Text style={styles.title}>PLM Implementation Consultant</Text>
          <Text style={styles.contact}>Email: ksaiumeshchandra@gmail.com</Text>
          <Text style={styles.contact}>Phone: +91 6301112919</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={styles.leftColumn}>
          {/* Technical Skills */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Technical Skills</Text>
            <View style={styles.content}>
              <Text style={styles.company}>Programming Languages:</Text>
              <Text style={styles.bullet}>Java</Text>
              <Text style={styles.bullet}>HTML</Text>
              <Text style={styles.bullet}>C</Text>
              <Text style={styles.bullet}>C++</Text>
              <Text style={styles.bullet}>Powershell</Text>
              <Text style={styles.bullet}>Batch Scripting</Text>

              <Text style={styles.company}>PLM Tools:</Text>
              <Text style={styles.bullet}>Teamcenter 12.4.X</Text>
              <Text style={styles.bullet}>AWC 5.X</Text>

              <Text style={styles.company}>Database Management:</Text>
              <Text style={styles.bullet}>MS SQL Server</Text>
              <Text style={styles.bullet}>Oracle</Text>
            </View>
          </View>

          {/* Achievements */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Achievements</Text>
		     <View style={styles.content}>
            <Text style={styles.bullet}>• Employee of the Year (2021-2023) for excellence in PLM implementation.</Text>
            <Text style={styles.bullet}>• Migration Consultant for Siemens project in Germany (2024).</Text>
          </View>
		   </View>

          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            <View style={styles.content}>
              <Text style={styles.company}>MCA, JNTU Kakinada</Text>
              <Text style={styles.bullet}>Year: 2021, CGPA: 7.37/10</Text>

              <Text style={styles.company}>BSc, Adikavi Nanaya University</Text>
              <Text style={styles.bullet}>Year: 2019, CGPA: 3.35/5</Text>

              <Text style={styles.company}>Intermediate, Sri Sidhartha Jr College</Text>
              <Text style={styles.bullet}>Year: 2015, Percentage: 75.9%</Text>

              <Text style={styles.company}>SSC, Little Buds Public School</Text>
              <Text style={styles.bullet}>Year: 2013, CGPA: 9.0/10</Text>
            </View>
          </View>
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
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
              <Text style={styles.company}>Siemens Mobility</Text>
              <Text style={styles.jobTitle}>PLM Data Migration Consultant</Text>
              <Text style={styles.date}>August 2023 - Present</Text>
          <Text style={styles.bullet}>• Developed scripts in Python for automation of repetitive tasks such as data validation and reporting.</Text>
          <Text style={styles.bullet}>• Collaborated with business stakeholders and end-users to define data mapping rules and validate migrated data.</Text>
          <Text style={styles.bullet}>• Implemented BOM migration and assisted in transitioning CAD data between legacy systems and Teamcenter data.</Text>
          <Text style={styles.bullet}>• Utilized SQL Procedures for data extraction from the legacy system performing transformation.</Text>
          <Text style={styles.bullet}>• Supported post-go-live activities, including data validation, user support, and issue resolution.</Text>
          <Text style={styles.bullet}>• Usage of UG Clone for Extraction Utility within Teamcenter enhancing data management related to NX Assemblies.</Text>
          <Text style={styles.bullet}>• Automated Report Generation for consolidating migration data.</Text>
		  <Text style={styles.bullet}>• Using IPS Utility to create non-CAD data.</Text>
          <Text style={styles.bullet}>• Utilization of IPS Utility to create Items and Item revisions with datasets from the extracted data.</Text>
          <Text style={styles.bullet}>• Automated Extraction of volume files during the import.</Text>

          <Text style={styles.company}>Lilium GmbH</Text>
          <Text style={styles.jobTitle}>Developer</Text>
          <Text style={styles.date}>December 2021 - August 2023</Text>
          <Text style={styles.bullet}>• Custom Translator in Dispatcher to attach a Generated Excel to Change Objects which includes utility for processing excel.</Text>
          <Text style={styles.bullet}>• Custom Handler to update the Signature and Completion date of a Review Task for User KPI on ECN Object.</Text>
          <Text style={styles.bullet}>• Implemented a script to update existing Teamcenter attributes to new attributes sourced from Teamcenter SQL database table.</Text>
          <Text style={styles.bullet}>• Developed a Teamcenter Utility that operates as a Cronjob, monitoring the state of the Dispatcher Requests and completing Workflow tasks.</Text>
          <Text style={styles.bullet}>• Implementation Of Change Management and Document Management Implementation.</Text>
          <Text style={styles.bullet}>• ITK Utilities Development for Validating and Importing Migration Data.</Text>
          <Text style={styles.bullet}>• Resolving Critical Support Tickets related to Workflows, Dispatchers, Change Management, Document Management, Export Control.</Text>

          <Text style={styles.company}>SBG-SMIT</Text>
          <Text style={styles.jobTitle}>Developer</Text>
          <Text style={styles.date}>August 2021 - December 2021</Text>
          <Text style={styles.bullet}>• Implemented a Teamcenter Utility that exports any Business Object Properties that are configured in a Batch Script.</Text>
          <Text style={styles.bullet}>• Rule handler to validate Negative Mass Values for Designs which are attached with Different Relations based on the Workflow.</Text>
          <Text style={styles.bullet}>• Created custom Handler to update table property which is used to fill custom object values dynamically.</Text>
          <Text style={styles.bullet}>• Created new Custom Workflows for different Business Objects as per Business Requirement.</Text>
          <Text style={styles.bullet}>• Managing BMIDE configurations, including GRM Rules, Deep Copy Rules, Display Rules, Custom Conditions, Propagation Rules, Overlay Icon, and other configurations. Created custom Business objects, Relations, LOV’s (classic, batch, dynamic), properties on Business objects.</Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.declaration}>I hereby declare that the above information is true and correct.</Text>
    </Page>
  </Document>
);

export default Resume;
