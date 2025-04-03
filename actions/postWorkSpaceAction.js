import { AddWorkSpaceService } from "../Service/AddWorkSpace";

export const PostWorkSpaceAction = async (formData) => {
    const workspaceName = formData.get('workspaceName');
    
    const res = await AddWorkSpaceService(workspaceName);
    console.log("Response from PostWorkSpaceAction", res);
}