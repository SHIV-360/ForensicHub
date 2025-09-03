// frontend/src/data/mockData.ts

const API_BASE_URL = 'http://localhost:8080/api';

// FIX: Added string types to parameters
export async function loginUser(username: string, password: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ username, password }),
    });
    return response.ok;
  } catch (error) {
    console.error('Login request failed:', error);
    return false;
  }
}

async function fetchData(endpoint: string) {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            credentials: 'include',
        });

        if (response.status === 401) {
            window.location.href = '/login';
            throw new Error('Unauthorized');
        }

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Could not fetch data from ${endpoint}:`, error);
        return [];
    }
}

// --- DATA FETCHING FUNCTIONS
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