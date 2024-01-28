import React from 'react';
import { Grid, Typography } from '@mui/material';
import PatientCard from '../PatientCard';
import Navbar from '../Navbar';
import '../../styles/medicalRecords.css';

const patientInfo = [
  {
    "name": "Jane Smith",
    "age": 25,
    "gender": "Female",
    "treatmentPlan": "Dental Cleaning",
    "medicalHistory": "No major dental issues",
    "conditions": ["None"],
    "medications": ["None"]
  },
  {
    "name": "Michael Johnson",
    "age": 40,
    "gender": "Male",
    "treatmentPlan": "Tooth Extraction",
    "medicalHistory": "History of tooth decay",
    "conditions": ["Tooth decay"],
    "medications": ["Fluoride mouthwash"]
  },
  {
    "name": "Emily Brown",
    "age": 35,
    "gender": "Female",
    "treatmentPlan": "Dental Filling",
    "medicalHistory": "Sensitive gums",
    "conditions": ["Gum sensitivity"],
    "medications": ["Sensitivity toothpaste"]
  },
  {
    "name": "William Wilson",
    "age": 50,
    "gender": "Male",
    "treatmentPlan": "Dental Crown",
    "medicalHistory": "Previous dental implants",
    "conditions": ["Dental implants"],
    "medications": ["None"]
  },
  {
    "name": "Olivia Jones",
    "age": 28,
    "gender": "Female",
    "treatmentPlan": "Teeth Whitening",
    "medicalHistory": "No major dental issues",
    "conditions": ["None"],
    "medications": ["None"]
  },
  {
    "name": "Daniel Martinez",
    "age": 45,
    "gender": "Male",
    "treatmentPlan": "Dental Bridge",
    "medicalHistory": "Missing teeth",
    "conditions": ["Missing teeth"],
    "medications": ["None"]
  },
  {
    "name": "Sophia Taylor",
    "age": 32,
    "gender": "Female",
    "treatmentPlan": "Dental Implant",
    "medicalHistory": "Missing teeth",
    "conditions": ["Missing teeth"],
    "medications": ["None"]
  },
  {
    "name": "Liam Anderson",
    "age": 55,
    "gender": "Male",
    "treatmentPlan": "Dental Veneers",
    "medicalHistory": "",
    "conditions": ["Missing teeth"],
    "medications": ["None"]
  }
];

const MedicalRecords = () => {
  return (
    <div>
      <Navbar />
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} lg={8}>
          <Typography variant="h4" sx={{ marginTop: 3, marginBottom: 2 }}>
            Patients Information
          </Typography>
          <Grid container spacing={2}>
            {patientInfo.map((patient, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <PatientCard patients={[patient]} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MedicalRecords;
