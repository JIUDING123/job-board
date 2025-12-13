/**
 * Utility functions for proxy configuration
 */

// Configure global fetch with proxy if needed
export function setupProxyForFetch() {
  // This function is meant to be called on the server side
  if (typeof window === 'undefined') {
    // Set environment variables for proxy if not already set
    if (!process.env.HTTP_PROXY) {
      process.env.HTTP_PROXY = 'http://127.0.0.1:7890';
    }
    if (!process.env.HTTPS_PROXY) {
      process.env.HTTPS_PROXY = 'http://127.0.0.1:7890';
    }
    
    console.log('Proxy settings configured:', {
      HTTP_PROXY: process.env.HTTP_PROXY,
      HTTPS_PROXY: process.env.HTTPS_PROXY
    });
  }
}

// Check if proxy is configured
export function isProxyConfigured(): boolean {
  return typeof process !== 'undefined' && 
    (!!process.env.HTTP_PROXY || !!process.env.HTTPS_PROXY);
}

// Get current proxy configuration
export function getProxyConfig() {
  return {
    httpProxy: process.env.HTTP_PROXY || null,
    httpsProxy: process.env.HTTPS_PROXY || null,
    noProxy: process.env.NO_PROXY || null
  };
} 