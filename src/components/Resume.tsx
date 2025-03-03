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
    backgroundColor: '#007BFF',
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
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Technical Skills</Text>
            <Text style={styles.bullet}>• Java, Python, C++, scripting languages</Text>
            <Text style={styles.bullet}>• Teamcenter 14.X, AWC 6.X</Text>
            <Text style={styles.bullet}>• MS SQL Server, Oracle</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            <Text style={styles.bullet}>• MCA, JNTU Kakinada (2021) - CGPA: 7.37/10</Text>
            <Text style={styles.bullet}>• BSc, Adikavi Nanaya University (2019) - CGPA: 3.35/5</Text>
          </View>
        </View>

        <View style={styles.rightColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.bullet}>• Experienced in Teamcenter development and migration.</Text>
            <Text style={styles.bullet}>• Skilled in automation and workflow customization.</Text>
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

      <Text style={styles.declaration}>I hereby declare that the above information is true and correct.</Text>
    </Page>
  </Document>
);

export default Resume;
