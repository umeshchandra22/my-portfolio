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
	 <Text style={styles.contact}>Website: www.saiumeshchandra.com</Text>	
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
      <Text style={styles.bullet}>• Over 3 years of experience in the implementation and development of Teamcenter systems.</Text>
      <Text style={styles.bullet}>• Strong hands-on experience in Development, Configuration, and Migration of Siemens Teamcenter using IPS Upload, NX Utilities, SQL queries, and UG Clone for NX Assemblies.</Text>
      <Text style={styles.bullet}>• Collaborated with IT, business stakeholders, and vendors to gather requirements, resolve issues, and ensure alignment during migration.</Text>
      <Text style={styles.bullet}>• Expertise in implementing Teamcenter utilities: process dispatcher requests, automate workflow task completion, export business object properties, and XML processing.</Text>
      <Text style={styles.bullet}>• Implemented custom Dispatcher translators, WF Action/Rule handlers, and various Teamcenter extensions.</Text>
    </View>
  </View>

  {/* Professional Experience */}
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Professional Experience</Text>
    <View style={styles.content}>
         <Text style={styles.jobTitle}>PLM Implementation Engineer</Text>
      <Text style={styles.date}>August 2021 - Present</Text>
     <Text style={styles.bullet}>Employed as an Implementation Engineer at Klog Solutions, Hyderabad, India.</Text>
     </View>
   </View>

{/* Professional Experience */}
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Projects</Text>
    <View style={styles.content}>
      <Text style={styles.company}>Siemens Mobility</Text>
      <Text style={styles.jobTitle}>PLM Data Migration Consultant</Text>
      <Text style={styles.date}>August 2023 - Present</Text>
      <Text style={styles.bullet}>• Automated data validation and reporting using Python scripts and SQL Procedures for legacy system transformation.</Text>
       <Text style={styles.bullet}>• Using IPS Utility to create non-CAD data and TCIN utility for Importing NX Assemblies.</Text>
      <Text style={styles.bullet}>• Supported post-go-live activities, including data validation, user support, and issue resolution.</Text>

      <Text style={styles.company}>Lilium GmbH</Text>
      <Text style={styles.jobTitle}>Developer</Text>
      <Text style={styles.date}>December 2021 - August 2023</Text>
      <Text style={styles.bullet}>• Developed a custom Translator in Dispatcher to attach a generated Excel to Change Objects.</Text>
      <Text style={styles.bullet}>• Created a Teamcenter Utility that runs as a Cronjob, monitoring Dispatcher Requests and automating Workflow task completion.</Text>
      <Text style={styles.bullet}>• Implemented Change Management, Document Management and Export Control solutions and resolving critical support tickets.</Text>

      <Text style={styles.company}>SBG-SMIT</Text>
      <Text style={styles.jobTitle}>Developer</Text>
      <Text style={styles.date}>August 2021 - December 2021</Text>
      <Text style={styles.bullet}>• Developed a Teamcenter Utility to export configurable Business Object Properties via Batch Scripts.</Text>
      <Text style={styles.bullet}>• Created custom Workflows and Handlers, managing BMIDE configurations such as GRM Rules, Deep Copy Rules, Display Rules, and Overlay Icons.</Text>
     </View>
   </View>
  </View>
 
</View>

      <Text style={styles.declaration}>I hereby declare that the above information is true and correct.</Text>
    </Page>
  </Document>
);

export default Resume;
