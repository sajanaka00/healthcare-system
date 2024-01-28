import React from 'react';
import { Card, Typography } from '@mui/material';
import '../styles/patientCard.css';

const PatientCard = ({ patients }) => {
  return (
    <div className="patient-container">
      {patients.map((patient, index) => (
        <div className="patient-card" key={index}>
          <Card className="card h-100">
            <Typography variant="h6" className="patient-header cursor-pointer p-2">
              {patient.name}
            </Typography>
            <div className="card-body mb-0 pb-3 table-responsive patient-details-table-container">
              <table className="table" width="100%">
                <tbody>
                  <tr>
                    <td className="patient-label">Age</td>
                    <td className="separator">:</td>
                    <td>{patient.age}</td>
                  </tr>
                  <tr>
                    <td className="patient-label">Gender</td>
                    <td className="separator">:</td>
                    <td>{patient.gender}</td>
                  </tr>
                  <tr>
                    <td className="patient-label">Treatment Plan</td>
                    <td className="separator">:</td>
                    <td>{patient.treatmentPlan}</td>
                  </tr>
                  <tr>
                    <td className="patient-label">Medical History</td>
                    <td className="separator">:</td>
                    <td>{patient.medicalHistory}</td>
                  </tr>
                  <tr>
                    <td className="patient-label">Conditions</td>
                    <td className="separator">:</td>
                    <td>{patient.conditions.join(', ')}</td>
                  </tr>
                  <tr>
                    <td className="patient-label">Medications</td>
                    <td className="separator">:</td>
                    <td>{patient.medications.join(', ')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default PatientCard;
