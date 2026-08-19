// api.js
// TEMPORARY mock — replace uploadSyllabus with a real fetch() call once Group 1's endpoint is live

export async function uploadSyllabus(formData) {
  console.log('Mock API called with:', formData);

  // simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // simulate a successful response
  return {
    success: true,
    message: 'Syllabus received (mock)',
    receivedData: formData,
  };
}