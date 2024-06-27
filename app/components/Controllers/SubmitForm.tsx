// submitFormData.tsx
import uploadToFirestore from "./Firebase";
import GetJwtToken from "./fetchJWT";
interface SubmitFormDataProps {
  formData: any; // Type of formData object
}

const submitFormData = async ({ formData }: SubmitFormDataProps) => {
  try {
    const tableName = 'SlideMapReports';
    const documentId = await uploadToFirestore({ formData, tableName });

    console.log("right before sending: ", formData);
    // alert(documentId);
    const jwtToken = GetJwtToken();
    const response = await fetch("http://127.0.0.1:5000/report", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(documentId),
    });

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      console.error("Error submitting report");
      // You can throw an error here if needed
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    // You can throw an error here if needed
    return null;
  }
};

export default submitFormData;
