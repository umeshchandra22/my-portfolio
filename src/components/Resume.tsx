import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    flexDirection: 'row', // Use row direction for two columns
    fontSize: 10, // Adjust font size for better fit
  },
  header: {
    backgroundColor: '#ADD8E6', // Light blue color
    padding: 10,
    flexDirection: 'row', // Row direction for profile pic and text
    alignItems: 'center', // Center items vertically
    marginBottom: 20,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40, // Circular image
    marginRight: 20, // Space between image and text
  },
  headerText: {
    flex: 1, // Take remaining space
    textAlign: 'center', // Center text
  },
  name: {
    fontSize: 22,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 5,
  },
  contact: {
    fontSize: 10,
    color: '#333333',
    marginBottom: 5,
  },
  leftColumn: {
    width: '30%', // Left column width
    paddingRight: 10,
  },
  mainColumn: {
    width: '70%', // Main column width
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 5,
    backgroundColor: '#ADD8E6', // Light blue highlight
    padding: 5,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 10,
    lineHeight: 1.4,
  },
  bullet: {
    marginBottom: 5,
    marginLeft: 10,
    textIndent: -10,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#333333',
  },
  company: {
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#007BFF',
  },
  date: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#333333',
  },
});

// Create Document Component
const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Image src="public/ProfilePic.png" style={styles.profilePic} />
        <View style={styles.headerText}>
          <Text style={styles.name}>Sai Umesh Chandra Katta</Text>
          <Text style={styles.title}>PLM Implementation Consultant</Text>
          <Text style={styles.contact}>Email: ksaiumeshchandra@gmail.com</Text>
        </View>
      </View>

      {/* Left Column */}
      <View style={styles.leftColumn}>
        {/* Technical Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.content}>
            <Text style={styles.jobTitle}>• Languages: Java, HTML, C, C++, Powershell, Batch Scripting</Text>
            <Text style={styles.jobTitle}>• PLM: Teamcenter 12.4.X, AWC 5.X</Text>
            <Text style={styles.jobTitle}>• Database: MS SQL Server, Oracle</Text>
          </View>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.content}>
            <Text style={styles.company}>MCA, JNTU Kakinada | 2021 | CGPA: 7.37/10</Text>
            <Text style={styles.company}>BSc, Adikavi Nanaya University | 2019 | CGPA: 3.35/5</Text>
            <Text style={styles.company}>Intermediate, Sri Sidhartha Jr College | 2015 | 75.9%</Text>
            <Text style={styles.company}>SSC, Little Buds Public School | 2013 | CGPA: 9.0/10</Text>
          </View>
        </View>
      </View>

      {/* Main Column */}
      <View style={styles.mainColumn}>
        {/* Professional Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <View style={styles.content}>
            <Text style={styles.bullet}>• Strong experience in Development and Migration of Siemens Teamcenter.</Text>
            <Text style={styles.bullet}>• Skilled in root cause analysis, requirements gathering, and testing.</Text>
            <Text style={styles.bullet}>• Developed migration plans and timelines to ensure seamless transitions.</Text>
            <Text style={styles.bullet}>• Collaborated with stakeholders to resolve issues during migration.</Text>
          </View>
        </View>

        {/* Professional Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          <View style={styles.content}>
            <Text style={styles.company}>Siemens Mobility</Text>
            <Text style={styles.jobTitle}>PLM Data Migration Consultant</Text>
            <Text style={styles.date}>August 2022 - Present</Text>
            <Text style={styles.bullet}>• Developed Python scripts for automation of data validation.</Text>
            <Text style={styles.bullet}>• Collaborated with stakeholders to define data mapping rules.</Text>
            <Text style={styles.bullet}>• Assisted in transitioning CAD data between legacy systems and Teamcenter.</Text>
            <Text style={styles.bullet}>• Supported post-go-live activities, including data validation.</Text>
            <Text style={{ marginBottom: 5 }} /> {/* Empty Text for spacing */}
            <Text style={styles.company}>Lilium GmbH</Text>
            <Text style={styles.jobTitle}>Developer</Text>
            <Text style={styles.date}>December 2021 - August 2022</Text>
            <Text style={styles.bullet}>• Developed custom handlers for Teamcenter workflows.</Text>
            <Text style={styles.bullet}>• Implemented scripts to update Teamcenter attributes.</Text>
            <Text style={styles.bullet}>• Managed SQL databases to support data migration efforts.</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Resume;
