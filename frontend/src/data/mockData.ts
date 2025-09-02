// The base URL of your running Go API
const API_BASE_URL = 'http://localhost:8080/api';

// A generic fetch function to reduce redundancy
async function fetchData(endpoint: string) {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Could not fetch data from ${endpoint}:`, error);
        return []; // Return an empty array on error to prevent crashes
    }
}

// --- DATA FETCHING FUNCTIONS ---

export const getLawsData = () => fetchData('/laws');
export const getCaseStudiesData = () => fetchData('/casestudies');
export const getResourcesData = () => fetchData('/resources');
export const getCertificationResources = () => fetchData('/certification-resources');
export const getIndustryStandards = () => fetchData('/industry-standards');
export const getResourceCategories = () => fetchData('/resource-categories');
export const getChallengesData = () => fetchData('/challenges');
export const getLeaderboardData = () => fetchData('/leaderboard');
export const getRecentActivityData = () => fetchData('/activity');
export const getUserProfileData = () => fetchData('/profile');
export const getContactInfo = () => fetchData('/contact-info');
export const getOfficeHours = () => fetchData('/office-hours');
export const getTeamMembers = () => fetchData('/team');