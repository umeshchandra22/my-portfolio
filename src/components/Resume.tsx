import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10, // Adjust font size for better fit
  },
  header: {
    backgroundColor: '#ADD8E6', // Light blue color
    padding: 20,
    textAlign: 'center',
    marginBottom: 20,
    borderRadius: 5,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50, // Circular image
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 5,
  },
  leftColumn: {
    width: '50%', // Left column width
    paddingRight: 10,
  },
  rightColumn: {
    width: '50%', // Right column width
    paddingLeft: 10,
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
    borderRadius: 5,
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
  footer: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 10,
    color: '#666666',
  },
});

// Create Document Component
const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Image src="public/ProfilePic.png" style={styles.profilePic} />
        <Text style={styles.name}>Sai Umesh Chandra Katta</Text>
        <Text style={styles.title}>PLM Implementation Consultant</Text>
      </View>

      {/* Content Section */}
      <View style={{ flexDirection: 'row' }}>
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

        {/* Right Column */}
        <View style={styles.rightColumn}>
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
      </View>

      {/* Footer (Optional) */}
      <Text style={styles.footer}>References available upon request.</Text>
    </Page>
  </Document>
);

export default Resume;
