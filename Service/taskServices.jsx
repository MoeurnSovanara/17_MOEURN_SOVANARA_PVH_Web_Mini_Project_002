export async function taskService(workspaceId, pageNo, pageSize, sortBy, sortDirection) {
    const res = await fetch(
      `http://96.9.81.187:8080/api/v1/workspaces/${workspaceId}?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
      {
        headers: {
          accept: "*/*",
          Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJzdWIiOiJzb3ZhbmFyYTEyM0BnbWFpbC5jb20iLCJpYXQiOjE3NDM2ODkwNDcsImV4cCI6MTc0Mzc3NTQ0N30.pYXsqCMoDUsfWiQIiXtzf9v1M2XKkzzunJGn_cUjNWvXjoJ8NLt7eVn9qPMJFOeVR74JU6oGDu7qXPARnwVldg",
        },
      }
    );
    const data = await res.json();
  
    if (+data.status === 200) {
      return data.payload; 
    }
  
    throw new Error("Failed to fetch tasks");
  }
  