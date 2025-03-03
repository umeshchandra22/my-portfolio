import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: 'Helvetica',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginRight: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 10,
    textAlign: 'center',
  },
  contact: {
    fontSize: 12,
    color: '#333333',
    marginBottom: 10,
    textAlign: 'center',
  },
  leftColumn: {
    width: '40%',
    paddingRight: 10,
  },
  rightColumn: {
    width: '60%',
    paddingLeft: 10,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 5,
    backgroundColor: '#f5f5f5',
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
  declaration: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 10,
    fontStyle: 'italic',
  },
});

// Create Document Component
const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Image src="/ProfilePic.png" style={styles.profilePic} />
        <View>
          <Text style={styles.name}>Sai Umesh Chandra Katta</Text>
          <Text style={styles.title}>PLM Implementation Consultant</Text>
          <Text style={styles.contact}>Email: ksaiumeshchandra@gmail.com</Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={{ flexDirection: 'row' }}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          {/* Technical Skills */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Technical Skills</Text>
            <Text style={styles.bullet}>• Java, HTML, C, C++, Powershell, Batch Scripting</Text>
            <Text style={styles.bullet}>• Teamcenter 12.4.X, AWC 5.X</Text>
            <Text style={styles.bullet}>• MS SQL Server, Oracle</Text>
          </View>

          {/* Achievements */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Achievements</Text>
            <Text style={styles.bullet}>• Employee of the Year Award for 2021, 2022, and 2023.</Text>
            <Text style={styles.bullet}>• Went to Germany in 2024 as Migration Consultant for Siemens Project.</Text>
          </View>

          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            <Text style={styles.bullet}>MCA, JNTU Kakinada | 2021 | CGPA: 7.37/10</Text>
            <Text style={styles.bullet}>BSc, Adikavi Nanaya University | 2019 | CGPA: 3.35/5</Text>
            <Text style={styles.bullet}>Intermediate, Sri Sidhartha Jr College | 2015 | 75.9%</Text>
            <Text style={styles.bullet}>SSC, Little Buds Public School | 2013 | CGPA: 9.0/10</Text>
          </View>
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          {/* Professional Summary */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.bullet}>• Strong hands-on experience in Development and Migration of Siemens Teamcenter.</Text>
            <Text style={styles.bullet}>• Skilled in root cause analysis, requirements gathering, and testing.</Text>
            <Text style={styles.bullet}>• Developed migration plans and timelines to ensure seamless transitions.</Text>
            <Text style={styles.bullet}>• Collaborated with stakeholders to resolve issues during migration.</Text>
          </View>

          {/* Professional Experience */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            <View style={styles.content}>
              <Text style={styles.company}>Siemens Mobility</Text>
              <Text style={styles.jobTitle}>PLM Data Migration Consultant</Text>
              <Text style={styles.date}>August 2023 - Present</Text>
              <Text style={styles.bullet}>• Developed scripts in Python for automation of data validation.</Text>
              <Text style={styles.bullet}>• Collaborated with stakeholders to define data mapping rules.</Text>
              <Text style={styles.bullet}>• Assisted in transitioning CAD data between legacy systems and Teamcenter.</Text>
              <Text style={styles.bullet}>• Supported post-go-live activities, including data validation.</Text>
              <Text style={{ marginBottom: 10 }} /> {/* Empty Text for spacing */}

              <Text style={styles.company}>Lilium GmbH</Text>
              <Text style={styles.jobTitle}>Developer</Text>
              <Text style={styles.date}>December 2021 - August 2023</Text>
              <Text style={styles.bullet}>• Developed custom handlers for Teamcenter workflows.</Text>
              <Text style={styles.bullet}>• Implemented scripts to update Teamcenter attributes.</Text>
              <Text style={styles.bullet}>• Managed SQL databases to support data migration efforts.</Text>
              <Text style={{ marginBottom: 10 }} /> {/* Empty Text for spacing */}

              <Text style={styles.company}>SBG-SMIT</Text>
              <Text style={styles.jobTitle}>Developer</Text>
              <Text style={styles.date}>August 2021 - December 2021</Text>
              <Text style={styles.bullet}>• Implemented a Teamcenter Utility that exports any Business Object Properties.</Text>
              <Text style={styles.bullet}>• Rule handler to validate Negative Mass Values for Designs.</Text>
              <Text style={styles.bullet}>• Created custom Handler to update table property dynamically.</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Declaration */}
      <Text style={styles.declaration}>I hereby declare that the above information is true and correct to the best of my knowledge.</Text>
    </Page>
  </Document>
);

export default Resume;
