import { IndexedProject } from "../project/ProjectModel";

const getProjectByIndex = async (index: number): Promise<IndexedProject> => {
    const response = await fetch(`/api/portfolio/${index}`);
    return response.json();
};

export { getProjectByIndex };
