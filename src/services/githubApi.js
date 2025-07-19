const GITHUB_API_BASE = 'https://api.github.com';

// GitHub API service for fetching public user data
export class GitHubAPIService {
  constructor() {
    this.cache = new Map();
    this.cacheTimeout = 5 * 60 * 1000; // 5 minutes cache
  }

  // Check if cached data is still valid
  isCacheValid(username) {
    const cached = this.cache.get(username);
    if (!cached) return false;
    return Date.now() - cached.timestamp < this.cacheTimeout;
  }

  // Fetch user data with caching
  async fetchUserData(username) {
    try {
      // Return cached data if valid
      if (this.isCacheValid(username)) {
        return this.cache.get(username).data;
      }

      // Make API request
      const response = await fetch(`${GITHUB_API_BASE}/users/${username}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        }
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const userData = await response.json();

      // Fetch repositories count separately for more accurate data
      const reposResponse = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?per_page=1`, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        }
      });

      let reposCount = userData.public_repos || 0;
      
      // Get more accurate repos count from Link header if available
      if (reposResponse.ok) {
        const linkHeader = reposResponse.headers.get('Link');
        if (linkHeader) {
          const lastPageMatch = linkHeader.match(/page=(\d+)>; rel="last"/);
          if (lastPageMatch) {
            reposCount = parseInt(lastPageMatch[1]);
          }
        }
      }

      const processedData = {
        username: userData.login,
        name: userData.name || userData.login,
        bio: userData.bio || 'No bio available',
        publicRepos: reposCount,
        followers: userData.followers || 0,
        following: userData.following || 0,
        avatarUrl: userData.avatar_url,
        htmlUrl: userData.html_url,
        createdAt: userData.created_at,
        updatedAt: userData.updated_at,
        company: userData.company,
        location: userData.location,
        blog: userData.blog,
      };

      // Cache the data
      this.cache.set(username, {
        data: processedData,
        timestamp: Date.now()
      });

      return processedData;

    } catch (error) {
      console.error('Error fetching GitHub data:', error);
      
      // Return cached data if available, even if expired
      const cached = this.cache.get(username);
      if (cached) {
        return cached.data;
      }
      
      // Return fallback data
      return {
        username: username,
        name: username,
        bio: 'GitHub data temporarily unavailable',
        publicRepos: 0,
        followers: 0,
        following: 0,
        avatarUrl: null,
        htmlUrl: `https://github.com/${username}`,
        error: true
      };
    }
  }

  // Clear cache for a specific user or all users
  clearCache(username = null) {
    if (username) {
      this.cache.delete(username);
    } else {
      this.cache.clear();
    }
  }
}

// Create and export a singleton instance
export const githubApi = new GitHubAPIService();