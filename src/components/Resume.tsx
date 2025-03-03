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
            <Text style={styles.bullet}>• Awarded Employee of the Year for three consecutive years (2021, 2022, 2023) in recognition of excellence in PLM implementation, problem-solving, and technical leadership.</Text>
            <Text style={styles.bullet}>• In 2024, traveled to Germany as a **Migration Consultant** for a Siemens project, contributing to critical data migration and system integration.</Text>
          </View>

          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            <View style={styles.content}>
              <Text style={styles.company}>MCA, JNTU Kakinada</Text>
              <Text style={styles.bullet}>Passed Out Year: 2021</Text>
              <Text style={styles.bullet}>CGPA: 7.37/10</Text>

              <Text style={styles.company}>BSc, Adikavi Nanaya University</Text>
              <Text style={styles.bullet}>Passed Out Year: 2019</Text>
              <Text style={styles.bullet}>CGPA: 3.35/5</Text>

              <Text style={styles.company}>Intermediate, Sri Sidhartha Jr College</Text>
              <Text style={styles.bullet}>Passed Out Year: 2015</Text>
              <Text style={styles.bullet}>Percentage: 75.9%</Text>

              <Text style={styles.company}>SSC, Little Buds Public School</Text>
              <Text style={styles.bullet}>Passed Out Year: 2013</Text>
              <Text style={styles.bullet}>CGPA: 9.0/10</Text>
            </View>
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

              <Text style={styles.company}>Lilium GmbH</Text>
              <Text style={styles.jobTitle}>Developer</Text>
              <Text style={styles.date}>December 2021 - August 2023</Text>
              <Text style={styles.bullet}>• Developed custom handlers for Teamcenter workflows.</Text>
              <Text style={styles.bullet}>• Implemented scripts to update Teamcenter attributes.</Text>
              <Text style={styles.bullet}>• Managed SQL databases to support data migration efforts.</Text>

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
