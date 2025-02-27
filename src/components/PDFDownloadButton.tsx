import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Resume from './Resume';
import { FileDown } from 'lucide-react';

const PDFDownloadButton = () => (
  <PDFDownloadLink
    document={<Resume />}
    fileName="Sai_Umesh_Chandra_Katta_Resume.pdf"
    className="inline-flex items-center px-6 py-3 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition-colors"
  >
    {({ loading }) => 
      loading ? (
        'Loading...'
      ) : (
        <>
          <FileDown className="w-5 h-5 mr-2" />
          Download Resume
        </>
      )
    }
  </PDFDownloadLink>
);

export default PDFDownloadButton;