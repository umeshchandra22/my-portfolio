import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';

// Register font
Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxM.woff2' },
    { src: 'https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4.woff2', fontWeight: 700 },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    fontFamily: 'Roboto',
  },
  leftColumn: {
    width: '30%',
    backgroundColor: '#1E3A8A',
    color: 'white',
    padding: 10,
  },
  rightColumn: {
    width: '70%',
    padding: 10,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Fixed issue with border radius
    marginBottom: 10,
    alignSelf: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  contactIcon: {
    marginRight: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    color: '#4B5563',
  },
  boldText: {
    fontWeight: 'bold',
  },
  bullet: {
    marginBottom: 5,
    marginLeft: 10,
  },
  content: {
    marginTop: 5,
  },
  company: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  date: {
    fontSize: 10,
    color: '#6B7280',
    marginBottom: 5,
  },
});

const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Left Column */}
      <View style={styles.leftColumn}>
        <View style={styles.header}>
          <Image style={styles.profileImage} src="https://placehold.co/100x100" />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>YOUR NAME</Text>
          <Text style={{ fontSize: 14 }}>Software Engineer</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CONTACT</Text>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>📞</Text>
            <Text>+92345-1234567</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>📍</Text>
            <Text>House # 4, St # 2, City</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>✉️</Text>
            <Text>tahirimtiaz@gmail.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>🌐</Text>
            <Text>tahirimtiaz.com</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SKILLS</Text>
          <Text style={styles.boldText}>• Programming Languages:</Text>
          <Text style={styles.bullet}>Java</Text>
          <Text style={styles.bullet}>HTML</Text>
          <Text style={styles.bullet}>C</Text>
          <Text style={styles.bullet}>C++</Text>
          <Text style={styles.bullet}>Powershell</Text>
          <Text style={styles.bullet}>Batch Scripting</Text>

          <Text style={styles.boldText}>• PLM Tools:</Text>
          <Text style={styles.bullet}>Teamcenter 12.4.X</Text>
          <Text style={styles.bullet}>AWC 5.X</Text>

          <Text style={styles.boldText}>• Database Management:</Text>
          <Text style={styles.bullet}>MS SQL Server</Text>
          <Text style={styles.bullet}>Oracle</Text>
        </View>
      </View>

      {/* Right Column */}
      <View style={styles.rightColumn}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <View style={styles.content}>
            <Text style={styles.bullet}>• Strong hands-on experience in Development and Migration of Siemens Teamcenter.</Text>
            <Text style={styles.bullet}>• Skilled in root cause analysis, requirements gathering, and testing.</Text>
            <Text style={styles.bullet}>• Developed migration plans and timelines to ensure seamless transitions.</Text>
            <Text style={styles.bullet}>• Collaborated with stakeholders to resolve issues during migration.</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.content}>
            <Text style={styles.company}>MCA, JNTU Kakinada | 2021 | CGPA: 7.37/10</Text>
            <Text style={styles.company}>BSc, Adikavi Nanaya University | 2019 | CGPA: 3.35/5</Text>
            <Text style={styles.company}>Intermediate, Sri Sidhartha Jr College | 2015 | 75.9%</Text>
            <Text style={styles.company}>SSC, Little Buds Public School | 2013 | CGPA: 9.0/10</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          <View style={styles.content}>
            <Text style={styles.company}>Siemens Mobility</Text>
            <Text style={styles.jobTitle}>PLM Data Migration Consultant</Text>
            <Text style={styles.date}>August 2023 - Present</Text>
            <Text style={styles.bullet}>• Developed scripts in Python for automation of data validation.</Text>
            <Text style={styles.bullet}>• Collaborated with stakeholders to define data mapping rules.</Text>

            <Text style={styles.company}>Lilium GmbH</Text>
            <Text style={styles.jobTitle}>Developer</Text>
            <Text style={styles.date}>December 2021 - August 2023</Text>
            <Text style={styles.bullet}>• Developed custom handlers for Teamcenter workflows.</Text>
            <Text style={styles.bullet}>• Implemented scripts to update Teamcenter attributes.</Text>

            <Text style={styles.company}>SBG-SMIT</Text>
            <Text style={styles.jobTitle}>Developer</Text>
            <Text style={styles.date}>August 2021 - December 2021</Text>
            <Text style={styles.bullet}>• Implemented a Teamcenter Utility that exports any Business Object Properties.</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Resume;
