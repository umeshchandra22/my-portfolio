import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    backgroundColor: '#f9f9f9', // Light background for contrast
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
    borderBottom: '2px solid #007BFF', // Blue underline for header
    paddingBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 18,
    color: '#007BFF', // Blue color for title
    marginBottom: 5,
  },
  contact: {
    fontSize: 12,
    color: '#555',
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 5,
    backgroundColor: '#007BFF', // Blue background for section titles
    color: '#fff', // White text for contrast
    padding: 5,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 12,
    lineHeight: 1.5,
  },
  bullet: {
    marginBottom: 5,
    marginLeft: 10,
    textIndent: -10,
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#333',
  },
  company: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#007BFF', // Blue color for company names
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
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
          <Text style={styles.bullet}>• Experienced in Siemens Teamcenter development and migration.</Text>
          <Text style={styles.bullet}>• Proficient in root cause analysis and requirements gathering.</Text>
          <Text style={styles.bullet}>• Skilled in crafting migration plans and collaborating with stakeholders.</Text>
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
          <Text style={styles.bullet}>• Assisted in BOM migration and CAD data transition.</Text>

          <Text style={styles.company}>Lilium GmbH</Text>
          <Text style={styles.jobTitle}>Developer</Text>
          <Text style={styles.date}>December 2021 - August 2022</Text>
          <Text style={styles.bullet}>• Developed custom handlers for Teamcenter workflows.</Text>
          <Text style={styles.bullet}>• Implemented change management solutions.</Text>

          <Text style={styles.company}>SBG-SMIT</Text>
          <Text style={styles.jobTitle}>Developer</Text>
          <Text style={styles.date}>August 2021 - December 2021</Text>
          <Text style={styles.bullet}>• Created utilities for exporting business object properties.</Text>
          <Text style={styles.bullet}>• Managed BMIDE configurations and custom workflows.</Text>
        </View>
      </View>

      {/* Technical Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.content}>
          <Text style={styles.bullet}>• Languages: Java, HTML, C, C++, Powershell</Text>
          <Text style={styles.bullet}>• PLM: Teamcenter 12.4.X, AWC 5.X</Text>
          <Text style={styles.bullet}>• Database: MS SQL Server, Oracle</Text>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.content}>
          <Text style={styles.company}>Master of Computer Applications (MCA)</Text>
          <Text style={styles.jobTitle}>JNTU Kakinada | 2021 | CGPA: 7.37</Text>
          <Text style={styles.company}>Bachelor of Computer Science (BSc)</Text>
          <Text style={styles.jobTitle}>Adikavi Nanaya University | 2019 | CGPA: 3.35</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Resume;
